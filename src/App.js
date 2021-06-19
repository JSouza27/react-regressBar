import { Component } from "react";
import ProgressBar from "./ProgressBar";
import "./styles.css";
import Timer from "./Timer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 30,
      percentage: 30
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  startTimer() {
    const { seconds, percentage } = this.state;
    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1
      }));

      console.log((seconds / percentage) * 100);
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.setState({ seconds: 30 });
  }

  render() {
    const { seconds, percentage } = this.state;
    if (seconds === 0) {
      this.stopTimer();
    }
    return (
      <section className="main">
        <Timer seconds={seconds} />
        <button type="button" onClick={() => this.startTimer()}>
          Iniciar
        </button>
        <button type="button" onClick={() => this.stopTimer()}>
          Stop
        </button>
        <h1>React Progress Bar</h1>
        <ProgressBar seconds={seconds} percentage={percentage} />
      </section>
    );
  }
}

export default App;
