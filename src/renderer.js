
const { ipcRenderer } = require('electron')

const pad = (str = '') => '  ' + str

ipcRenderer.on('init', (event, { filePath, json }) => {
  window.json = json

  console.log(
    `%cInspecting %c ${filePath}`,
    'font-weight: normal; background: #f1f3f5; color: #91a7ff',
    'font-weight: bold; background: #f1f3f5; color: #91a7ff'
  )

  console.log(pad('Also accessible through %c window.json'), 'font-weight: bold;')

  console.log(pad(), json)
})