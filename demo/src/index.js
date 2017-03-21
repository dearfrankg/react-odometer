import React from 'react'
import { render } from 'react-dom'
import injectSheet from 'react-jss'
import Odometer from '../../src'

const styles = {
  demo: {
    textAlign: 'center',
    fontFamily: 'sans-serif'
  },
  controls: {
    margin: 20
  }
}

@injectSheet(styles)
class Demo extends React.Component {
  state = {
    timer1: Math.floor(Math.random() * 1000000),
    timer2: Math.floor(Math.random() * 1000000),
    timer3: Math.floor(Math.random() * 1000000),
    timer4: Math.floor(Math.random() * 1000000),
  }

  interval

  speed = 100

  componentDidMount () {
    this.play()
  }

  play = () => {
    if (!this.interval)
      this.interval = setInterval(this.update, this.speed)
  }

  pause = () => {
    if (this.interval) clearInterval(this.interval)
    this.interval = null
  }

  update = () => {
    this.setState({
      timer1: this.state.timer1 + 1,
      timer2: this.state.timer2 + 1,
      timer3: this.state.timer3 + 1,
      timer4: this.state.timer4 + 1,
    })
  }

  render () {
    const { classes } = this.props
    const { timer1, timer2, timer3, timer4 } = this.state

    return (
      <div className={classes.demo} >
        <h1>odometer component</h1>

        <div className={classes.controls}>
          <button onClick={this.play}>Play</button>
          <button onClick={this.pause}>Pause</button>
        </div>

        <Odometer number={timer1} speed={this.speed} />
        <div></div>
        <Odometer digits={6} size={48} number={timer2}  />
        <div></div>
        <Odometer digits={6} size={36} number={timer3}  />
        <div></div>
        <Odometer size={18} number={timer4}  />

      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
