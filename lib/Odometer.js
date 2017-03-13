'use strict';

exports.__esModule = true;

var _styles;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Digit = require('./Digit');

var _Digit2 = _interopRequireDefault(_Digit);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Odometer = function Odometer(_ref) {
  var number = _ref.number,
      digits = _ref.digits,
      speed = _ref.speed,
      size = _ref.size,
      classes = _ref.classes;

  var chars = number.toString().split('');
  if (chars.length > digits) chars = chars.slice(-digits);
  while (chars.length < digits) {
    chars.unshift('0');
  }return _react2.default.createElement(
    'div',
    { className: classes.odometer, style: { fontSize: size + 'px', lineHeight: size + 'px' } },
    chars.map(function (digit, i) {
      var place = Math.pow(10, digits - i - 1);
      var animate = number % place === 0 || place === 1;
      return _react2.default.createElement(_Digit2.default, { key: i, digit: digit, animate: animate, speed: speed });
    })
  );
};

var styles = (_styles = {
  odometer: {
    display: 'inline-block',
    height: '1em',
    fontSize: '72px',
    lineHeight: '72px',
    fontFamily: 'sans-serif',
    borderRadius: 5,
    background: '#222',
    color: 'rgba(255, 255, 255, 0.9)',
    textShadow: '0 -1px rgba(0, 0, 0, 0.9)',
    boxShadow: 'inset 0 2px 8px -2px #000'
  }
}, _styles['@keyframes slide1'] = {
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(-1em)' }
}, _styles['@keyframes slide2'] = {
  from: { transform: 'translateY(-1em)' },
  to: { transform: 'translateY(-2em)' }
}, _styles['@keyframes slide3'] = {
  from: { transform: 'translateY(-2em)' },
  to: { transform: 'translateY(-3em)' }
}, _styles['@keyframes slide4'] = {
  from: { transform: 'translateY(-3em)' },
  to: { transform: 'translateY(-4em)' }
}, _styles['@keyframes slide5'] = {
  from: { transform: 'translateY(-4em)' },
  to: { transform: 'translateY(-5em)' }
}, _styles['@keyframes slide6'] = {
  from: { transform: 'translateY(-5em)' },
  to: { transform: 'translateY(-6em)' }
}, _styles['@keyframes slide7'] = {
  from: { transform: 'translateY(-6em)' },
  to: { transform: 'translateY(-7em)' }
}, _styles['@keyframes slide8'] = {
  from: { transform: 'translateY(-7em)' },
  to: { transform: 'translateY(-8em)' }
}, _styles['@keyframes slide9'] = {
  from: { transform: 'translateY(-8em)' },
  to: { transform: 'translateY(-9em)' }
}, _styles['@keyframes slide0'] = {
  from: { transform: 'translateY(-9em)' },
  to: { transform: 'translateY(-10em)' }
}, _styles);

exports.default = (0, _reactJss2.default)(styles)(Odometer);
module.exports = exports['default'];