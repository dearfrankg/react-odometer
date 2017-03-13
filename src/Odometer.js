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
  }
}

export default injectSheet(styles)(Odometer)
