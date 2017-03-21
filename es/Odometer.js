import React from 'react';
import Digit from './Digit';
import injectSheet from 'react-jss';

var Odometer = function Odometer(_ref) {
  var number = _ref.number,
      _ref$digits = _ref.digits,
      digits = _ref$digits === undefined ? 4 : _ref$digits,
      _ref$speed = _ref.speed,
      speed = _ref$speed === undefined ? 100 : _ref$speed,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 72 : _ref$size,
      classes = _ref.classes;

  var chars = number.toString().split('');
  if (chars.length > digits) chars = chars.slice(-digits);
  while (chars.length < digits) {
    chars.unshift('0');
  }var odometerStyle = {
    fontSize: size + 'px',
    lineHeight: size + 'px'
  };

  return React.createElement(
    'div',
    { className: [classes.odometer, 'odometer'].join(' '), style: odometerStyle },
    chars.map(function (digit, i) {
      var place = Math.pow(10, digits - i - 1);
      var animate = number % place === 0 || place === 1;
      return React.createElement(Digit, { key: i, digit: digit, animate: animate, speed: speed });
    })
  );
};

process.env.NODE_ENV !== "production" ? Odometer.propTypes = {
  number: React.PropTypes.number.isRequired,
  digits: React.PropTypes.number,
  speed: React.PropTypes.number,
  size: React.PropTypes.number
} : void 0;

var styles = {
  odometer: {
    display: 'inline-block',
    height: '1em',
    fontFamily: 'sans-serif',
    borderRadius: 5,
    background: '#222',
    color: 'rgba(255, 255, 255, 0.9)',
    textShadow: '0 -1px rgba(0, 0, 0, 0.9)',
    boxShadow: 'inset 0 2px 8px -2px #000'
  }
};

export default injectSheet(styles)(Odometer);