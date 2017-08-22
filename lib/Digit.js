'use strict';

exports.__esModule = true;

var _styles;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Digit = function Digit(_ref) {
  var digit = _ref.digit,
      animate = _ref.animate,
      speed = _ref.speed,
      classes = _ref.classes;

  var style = {};
  style.transform = 'translateY(-' + digit + 'em)';
  if (animate) {
    style.animationName = 'slide' + digit;
    style.animationTimingFunction = 'linear';
    style.animationIterationCount = 1;
    style.animationDuration = speed + 'ms';
  }
  return _react2.default.createElement(
    'div',
    { className: [classes.digit, 'digit'].join(' ') },
    _react2.default.createElement(
      'div',
      { style: style },
      '0 1 2 3 4 5 6 7 8 9 0'
    )
  );
};

process.env.NODE_ENV !== "production" ? Digit.propTypes = {
  digit: _propTypes2.default.string.isRequired,
  speed: _propTypes2.default.number.isRequired,
  animate: _propTypes2.default.bool
} : void 0;

var styles = (_styles = {
  digit: {
    display: 'inline-block',
    width: '0.6em',
    height: '1em',
    padding: '0 0.2em',
    overflow: 'hidden',
    borderRight: '1px solid rgba(0, 0, 0, 0.5)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
    '&:first-child': {
      borderLeft: 'none'
    },
    '&:last-child': {
      borderRight: 'none'
    }
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

exports.default = (0, _reactJss2.default)(styles)(Digit);
module.exports = exports['default'];