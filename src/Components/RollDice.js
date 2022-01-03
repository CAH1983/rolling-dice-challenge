import React, { Component } from "react";
import Dice from "./Dice";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currNum: "one",
    };
  }

  rollDices() {
    const numbersArr = ["one", "two", "three", "four", "five", "six"];
    const randomNum = numbersArr[Math.floor(Math.random() * numbersArr.length)];
    this.setState({ currNum: randomNum });
  }
  render() {
    return (
      <div className="RollDice">
        <Dice number={this.state.currNum} />
        <Dice number={this.state.currNum} />
        <button> Roll it </button>
      </div>
    );
  }
}

export default RollDice;
