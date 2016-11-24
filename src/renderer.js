
const { ipcRenderer } = require('electron')

const pad = (str = '') => '  ' + str

const render = ({ file, source, json, error }) => {
  if (window.json || error) {
    console.clear()
  }

  if (file) {
    console.log('%c✔ Reloads on changes', 'color: #94d82d;')
  }

  console.log(
    `%cInspecting %c${source}`,
    'font-weight: normal; background: #f1f3f5; color: #91a7ff',
    'font-weight: bold; background: #f1f3f5; color: #91a7ff'
  )

  console.log(
    pad('%c(Also accessible through %cwindow.json)'),
    'color: #adb5bd;',
    'color: #adb5bd; font-weight: bold;'
  )

  if (error) {
    console.error(error)
  } else {
    console.log(pad(), json)
  }
}

ipcRenderer.on('json', (event, data) => {
  render(data)
  window.json = data.json
})

ipcRenderer.on('error', (event, data) => {
  render(data)
})
