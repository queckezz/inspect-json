
const { BrowserWindow, app } = require('electron')
const concat = require('concat-stream')
const { ipcMain } = require('electron')
const { readFile } = require('mz/fs')
const { watch } = require('chokidar')
const minimist = require('minimist')
const { resolve } = require('path')
const isUrl = require('is-url')
const got = require('got')

const argv = minimist(process.argv.slice(2))
let win = null

const emitFromFile = (source, renderer) => {
  return readFile(source)
    .then(JSON.parse)
    .then((json) => {
      renderer.send('json', { source, json })
    })
    .catch((error) => {
      renderer.send('error', { source, error })
    })
}

const emitFromHttp = (source, renderer) => {
  return got(source, { json: true })
    .then((res) => res.body)
    .then((json) => {
      renderer.send('json', { source, json })
    })
    .catch((error) => {
      renderer.send('error', { source, error })
    })
}

app.on('ready', () => {
  const source = argv._[0]

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
    if (isUrl(source)) {
      emitFromHttp(source, renderer)
    } else {
      const fileSource = resolve(process.cwd(), source)
      const watcher = watch(fileSource)

      watcher.on('change', () => {
        emitFromFile(fileSource, renderer)
      })

      emitFromFile(fileSource, renderer)
    }
  })

  renderer.once('devtools-opened', (t) => {
    win.hide()
  })

  renderer.once('devtools-closed', (t) => {
    setImmediate(app.exit)
  })

  renderer.openDevTools({ mode: 'undocked' })
})