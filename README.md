# react-odometer

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo



![](http://g.recordit.co/k4Fj8o9JIC.gif)

## Getting Started

```
npm install react-odometer
```

```javascript
import Odometer from 'react-odometer'

[...]

render () {
  return (
    <Odometer
      size={72}
      digits={4}
      number={1500}
      speed={500}
    />
  )
}
```

- size – font size in pixels
- digits – number of digits in the odometer
- number – number to display
- speed – milliseconds to animate one digit to the next