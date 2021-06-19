import { Component } from "react";

class Timer extends Component {
  render() {
    const { seconds } = this.props;
    return (
      <section className="timer">
        <span>{seconds}</span>
      </section>
    );
  }
}

export default Timer;
