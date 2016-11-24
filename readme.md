
![./banner](art/banner.png)

**Robust manipulation and inspection of JSON data using the already familiar Chromium Devtools**

* Allows JSON to be passed in from URLs, Files and `process.stdin`
* Reloads on file changes
* All Chromium Devtools features at hand!

## Installation

```
> npm install inspect-json
```

## Examples

From a File:

```
> inspect-json example.json
```

From a REST Endpoint

```
> inspect-json https://api.github.com/users/mbostock
```

From `process.stdin`

```
> echo { "test": true } | inspect-json
> webpack --stats | inspect-json
```

## License

[MIT](./license)