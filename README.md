# react-odometer

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]


[build-badge]: https://img.shields.io/travis/dearfrankg/react-odometer/master.png?style=flat-square
[build]: https://travis-ci.org/dearfrankg/react-odometer

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://github.com/dearfrankg/react-odometer

[coveralls-badge]: https://img.shields.io/coveralls/dearfrankg/react-odometer/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/dearfrankg/react-odometer



![](http://g.recordit.co/k4Fj8o9JIC.gif)

See the [demo](http://diligent-tendency.surge.sh/)



## Getting Started

```
npm install dearfrankg/react-odometer
```

```javascript
import Odometer from 'react-odometer'
```
```javascript
render(
  <Odometer
    size={72}
    digits={4}
    number={1500}
    speed={500}
  />
)
```

- size – font size in pixels
- digits – number of digits in the odometer
- number – number to display
- speed – milliseconds to animate one digit to the next
