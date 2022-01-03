import React, { Component } from "react";
import Dice from "./Dice";
import "../RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currNum: "one",
      currNum2: "two",
    };

    this.rollDices = this.rollDices.bind(this);
  }

  rollDices() {
    const numbersArr = ["one", "two", "three", "four", "five", "six"];
    const randomNum = numbersArr[Math.floor(Math.random() * numbersArr.length)];
    const randomNum2 =
      numbersArr[Math.floor(Math.random() * numbersArr.length)];
    this.setState({ currNum: randomNum, currNum2: randomNum2 });
  }

  render() {
    return (
      <div className="RollDice">
        <div className="flex-line">
          <Dice number={this.state.currNum} />
          <Dice number={this.state.currNum2} />
        </div>
        <button onClick={this.rollDices}> Roll it </button>
      </div>
    );
  }
}

export default RollDice;
