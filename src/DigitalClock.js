import React, { Component} from "react";
import "./Weather.css"
import Animation from './component/img/animation.gif'


class DigitalClock extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }
  currentTime() {
    this.setState({ time: new Date() });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.currentTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>


          <h1 id="time">
            
            {this.state.time.toLocaleTimeString()}</h1>
        <div className="Clock">
        {/* <img src={Animation} alt ="Animation"/> */}
        </div>
      </>
    );
    
  }
}

export default DigitalClock;