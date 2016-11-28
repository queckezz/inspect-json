
![./banner](art/banner.png)

**Robust manipulation and inspection of JSON data using the already familiar Chromium Devtools** - It allows for *quick* inspection of arbitrary JSON strucures. Allows JSON to be passed in from **URLs**, **Files** and **`process.stdin`**. The JSON can be manipulated while inspecting by accessing `window.json` through the console.



[![npm version][version-image]][version-url]
[![dependency status][david-image]][david-url]
[![license][license-image]][license-url]
[![js standard style][standard-image]][standard-url]
[![downloads per month][downloads-image]][downloads-url]

## Installation

```
> npm install -g inspect-json
```

## Examples

Inspect JSON from the following types.

**File:**

```
> inspect-json example.json
```

**REST Endpoint:**

```
> inspect-json https://api.github.com/users/mbostock
```

**Standard Input (CLI):**

```
> echo { "test": true } | inspect-json
```

**Inspecting webpack output stats:**

Let's say you have a webpack stats object that you want to analyse. How would you go about doing that? Just pipe it into `inspect-json`

```
> webpack --stats | inspect-json
```



## License

[MIT][license-url]

[version-image]: https://img.shields.io/npm/v/inspect-json.svg?style=flat-square
[version-url]: https://npmjs.org/package/inspect-json

[downloads-image]: https://img.shields.io/npm/dm/inspect-json.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/inspect-json

[david-image]: http://img.shields.io/david/queckezz/inspect-json.svg?style=flat-square
[david-url]: https://david-dm.org/queckezz/inspect-json

[standard-image]: https://img.shields.io/badge/code-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard

[license-image]: http://img.shields.io/npm/l/inspect-json.svg?style=flat-square
[license-url]: ./license