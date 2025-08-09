import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((curState) => {
      return { Count: curState.Count - 1 };
    });
  }

  handleIncrement() {
    this.setState((curState) => {
      return { Count: curState.Count + 1 };
    });
  }

  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.Count);

    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()}[{this.state.Count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
