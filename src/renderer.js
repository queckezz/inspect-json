
const { ipcRenderer } = require('electron')

const pad = (str = '') => '  ' + str

const render = (filePath, [error, json]) => {

  console.log('%c✔ Reloads on changes', 'color: #94d82d;')

  console.log(
    `%cInspecting %c ${filePath}`,
    'font-weight: normal; background: #f1f3f5; color: #91a7ff',
    'font-weight: bold; background: #f1f3f5; color: #91a7ff'
  )

  console.log(pad('Also accessible through %c window.json'), 'font-weight: bold;')

  if (error) {
    console.error(error)
  } else {
    window.json = json
    console.log(pad(), json)
  }
}

ipcRenderer.on('init', (event, { filePath, data }) => {
  render(filePath, data)
})

ipcRenderer.on('reload', (event, { filePath, data }) => {
  if (window.json) {
    console.clear()
  }

  render(filePath, data)
})