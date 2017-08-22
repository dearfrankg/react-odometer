import PropTypes from 'prop-types';
import React from 'react'
import injectSheet from 'react-jss'

const Digit = ({digit, animate, speed, classes}) => {
  const style = {}
  style.transform = `translateY(-${digit}em)`
  if (animate) {
    style.animationName = `slide${digit}`
    style.animationTimingFunction = 'linear'
    style.animationIterationCount = 1
    style.animationDuration = `${speed}ms`
  }
  return (
    <div className={[classes.digit, 'digit'].join(' ')} >
      <div style={style} >
        0 1 2 3 4 5 6 7 8 9 0
      </div>
    </div>
  )
}

Digit.propTypes = {
  digit: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  animate: PropTypes.bool,
}

const styles = {
  digit: {
    display: 'inline-block',
    width: '0.6em',
    height: '1em',
    padding: '0 0.2em',
    overflow: 'hidden',
    borderRight: '1px solid rgba(0, 0, 0, 0.5)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
    '&:first-child': {
      borderLeft: 'none',
    },
    '&:last-child': {
      borderRight: 'none',
    }
  },
  [`@keyframes slide1`]: {
    from: {transform: 'translateY(0)'},
    to: {transform: 'translateY(-1em)'}
  },
  [`@keyframes slide2`]: {
    from: {transform: 'translateY(-1em)'},
    to: {transform: 'translateY(-2em)'}
  },
  [`@keyframes slide3`]: {
    from: {transform: 'translateY(-2em)'},
    to: {transform: 'translateY(-3em)'}
  },
  [`@keyframes slide4`]: {
    from: {transform: 'translateY(-3em)'},
    to: {transform: 'translateY(-4em)'}
  },
  [`@keyframes slide5`]: {
    from: {transform: 'translateY(-4em)'},
    to: {transform: 'translateY(-5em)'}
  },
  [`@keyframes slide6`]: {
    from: {transform: 'translateY(-5em)'},
    to: {transform: 'translateY(-6em)'}
  },
  [`@keyframes slide7`]: {
    from: {transform: 'translateY(-6em)'},
    to: {transform: 'translateY(-7em)'}
  },
  [`@keyframes slide8`]: {
    from: {transform: 'translateY(-7em)'},
    to: {transform: 'translateY(-8em)'}
  },
  [`@keyframes slide9`]: {
    from: {transform: 'translateY(-8em)'},
    to: {transform: 'translateY(-9em)'}
  },
  [`@keyframes slide0`]: {
    from: {transform: 'translateY(-9em)'},
    to: {transform: 'translateY(-10em)'}
  },
}

export default injectSheet(styles)(Digit)
