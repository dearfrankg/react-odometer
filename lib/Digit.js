'use strict';

exports.__esModule = true;

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
    { className: classes.digit },
    _react2.default.createElement(
      'div',
      { style: style },
      '0 1 2 3 4 5 6 7 8 9 0'
    )
  );
};

var styles = {
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
};

exports.default = (0, _reactJss2.default)(styles)(Digit);
module.exports = exports['default'];