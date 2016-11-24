
![./banner](art/banner.png)

**Robust manipulation and inspection of JSON data using the already familiar Chromium Devtools**

* Allows URLs and Files
* Reloads on file changes
* All Chrome Devtools features at hand!

## Installation

```
> npm install inspect-json
```

## Examples

View a file:

```
> inspect-json example.json
```

View JSON from a REST Endpoint

```
> inspect-json https://api.github.com/users/mbostock
```

View JSON from STDIN

```
>  echo { "test": true } | inspect-json
```
