import React from 'react';
import injectSheet from 'react-jss';

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

  return React.createElement(
    'div',
    { className: classes.digit },
    React.createElement(
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

export default injectSheet(styles)(Digit);