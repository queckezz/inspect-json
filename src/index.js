
const { BrowserWindow, app } = require('electron')
const concat = require('concat-stream')
const { ipcMain } = require('electron')
const { readFileSync } = require('fs')
const { watch } = require('chokidar')
const minimist = require('minimist')
const { resolve } = require('path')

const argv = minimist(process.argv.slice(2))
const filePath = resolve(process.cwd(), argv._[0])
let win = null

const watcher = watch(filePath)

const getJson = (filePath) => {
  try {
    const json = JSON.parse(readFileSync(filePath))
    return [null, json]
  } catch (e) {
    return [e.toString(), null]
  }
}

app.on('ready', () => {
  win = new BrowserWindow({
    useContentSize: true,
    width: 0,
    height: 0,
    x: 0,
    y: 0
  })

  const renderer = win.webContents

  win.loadURL(`file://${__dirname}/index.html`)

  win.on('closed', () => {
    win = null
  })

  renderer.on('did-finish-load', () => {
    watcher.on('change', () => {
      renderer.send('reload', { filePath, data: getJson(filePath) })
    })

    renderer.send('init', { filePath, data: getJson(filePath) })
  })


  renderer.once('devtools-opened', (t) => {
    win.hide()
  })

  renderer.once('devtools-closed', (t) => {
    setImmediate(app.exit)
  })

  renderer.openDevTools({ mode: 'undocked' })
})