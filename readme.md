
![./banner](art/banner.png)

**Robust manipulation and inspection of JSON data using the already familiar Chromium Devtools**

* Allows JSON to be passed in from URLs, Files and `process.stdin`
* Reloads on file changes
* All Chromium Devtools features at hand!

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
> webpack --stats | inspect-json
```

## License

[MIT](./license)