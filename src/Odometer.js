import React from 'react'
import Digit from './Digit'
import injectSheet from 'react-jss'

const Odometer = ({number, digits, speed, size, classes}) => {
  let chars = number.toString().split('')
  if (chars.length > digits) chars = chars.slice(-digits)
  while (chars.length < digits) chars.unshift('0')

  return (
    <div className={classes.odometer} style={{fontSize: `${size}px`, lineHeight: `${size}px`}}>
      {
        chars.map((digit, i) => {
          const place = Math.pow(10, (digits-i-1))
          const animate = (number % place === 0) || place === 1
          return (
            <Digit key={i} digit={digit} animate={animate} speed={speed} />
          )
        })
      }
    </div>
  )
}

const styles = {
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
    boxShadow: 'inset 0 2px 8px -2px #000',
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

export default injectSheet(styles)(Odometer)
