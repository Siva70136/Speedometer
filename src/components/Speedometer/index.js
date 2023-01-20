// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onInc = () => {
    this.setState(prevState =>
      prevState.count !== 200
        ? {count: prevState.count + 10}
        : {count: prevState.count},
    )
  }

  onDec = () => {
    this.setState(prevState =>
      prevState.count === 0
        ? {count: prevState.count}
        : {count: prevState.count - 10},
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="main">
        <div className="box">
          <h1>Speedometer</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="img"
            alt="speedometer"
          />
          <h1>speed is {count}mph</h1>
          <p className="warn">Min Limit is 0mph, Max Limit is 200mph"</p>
          <div className="buttons">
            <button type="button" className="button" onClick={this.onInc}>
              Accelerate
            </button>
            <button type="button" className="button1" onClick={this.onDec}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
