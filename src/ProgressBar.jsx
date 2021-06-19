import { Component } from "react";

class ProgressBar extends Component {
  render() {
    const { seconds, percentage } = this.props;
    return (
      <section className="progress">
        <section
          className="bar"
          style={{
            opacity: 1,
            width: `${(seconds / percentage) * 100}%`
          }}
        />
      </section>
    );
  }
}

export default ProgressBar;
