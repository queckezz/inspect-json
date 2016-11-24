
const getStdin = require('get-stdin')
const minimist = require('minimist')
const { join } = require('path')
const execa = require('execa')

const mainProcess = join(__dirname, 'index.js')

const argv = minimist(process.argv.slice(2))
const source = argv._[0]

if (!source) {
  getStdin().then((str) => {
    try {
      const json = JSON.parse(str)
      execa('electron', [mainProcess, JSON.stringify(json)])
    } catch (e) {
      console.error(e)
    }
  })
} else {
  execa('electron', [mainProcess, source])
}
