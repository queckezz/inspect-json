
const { ipcRenderer } = require('electron')

const pad = (str = '') => '  ' + str

const render = (source, json, error) => {
  if (window.json || error) {
    console.clear()
  }

  console.log('%c✔ Reloads on changes', 'color: #94d82d;')

  console.log(
    `%cInspecting %c ${source}`,
    'font-weight: normal; background: #f1f3f5; color: #91a7ff',
    'font-weight: bold; background: #f1f3f5; color: #91a7ff'
  )

  console.log(pad('Also accessible through %c window.json'), 'font-weight: bold;')

  if (error) {
    console.error(error)
  } else {
    console.log(pad(), json)
  }
}

ipcRenderer.on('json', (event, data) => {
  render(data.source, data.json)
  window.json = data.json
})

ipcRenderer.on('error', (event, data) => {
  render(data.source, null, data.error)
})
