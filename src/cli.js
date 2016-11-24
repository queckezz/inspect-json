#! /usr/bin/env node
const { readFileSync } = require('fs')
const getStdin = require('get-stdin')
const minimist = require('minimist')
const { join } = require('path')
const execa = require('execa')

const help = () => `
  Usage:
    inspect-json [file|url]
  
  Examples:
    https://github.com/queckezz/inspect-json#examples
`

const mainProcess = join(__dirname, 'index.js')

const args = minimist(process.argv.slice(2), {
  alias: { h: 'help', v: 'version' }
})

if (args.help) return console.log(help())

if (args.version) {
  const contents = readFileSync(join(__dirname, '../package.json'), 'utf-8')
  return console.log(JSON.parse(contents).version)
}

const source = args._[0]

if (!source) {
  getStdin().then((str) => {
    if (str.length == 0) {
      return console.log(help())
    }
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
