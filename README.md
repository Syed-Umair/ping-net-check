[![Build Status](https://travis-ci.org/Syed-Umair/ping-net-check.svg?branch=master)](https://travis-ci.org/Syed-Umair/ping-net-check)
[![Known Vulnerabilities](https://snyk.io/test/github/Syed-Umair/ping-net-check/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Syed-Umair/ping-net-check?targetFile=package.json)
[![GitHub license](https://img.shields.io/github/license/Syed-Umair/ping-net-check.svg)](https://github.com/Syed-Umair/ping-net-check/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/Syed-Umair/ping-net-check.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FSyed-Umair%2Fping-net-check)

# ping-net-check
A Node.js Module to check whether you are connected to network or not. Returns a promise resolves to <em>true</em> with network access and to <em>false</em> without network access.

## Install Module
```
    npm install ping-net-check
```

<strong>Note: <i>Requires Node >= 8.0.0</i></strong>

## Usage

With Default Options

* host: google.com
* timeout: 2000

```javascript
    const { netCheck } = require('ping-net-check');
    netCheck().then(value => console.log(value));
    // prints 'true' or 'false' depending on networking connectivity
```

With Options

- timeout: <i>milliseconds</i>
- host: <i>string without protocol</i>

```javascript
    const { netCheck } = require('ping-net-check');
    netCheck({
        timeout: 3000,
        host: 'example.com'
    }).then(value => console.log(value));
    // prints 'true' or 'false' depending on networking connectivity
```