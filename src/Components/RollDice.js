import React, { Component } from "react";
import Dice from "./Dice";
import "../RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currNum: "one",
      currNum2: "two",
      isRolling: false,
      extraclass: null,
    };

    this.rollDices = this.rollDices.bind(this);
  }

  rollDices() {
    const numbersArr = ["one", "two", "three", "four", "five", "six"];
    let randomNum;
    let randomNum2;

    this.setState({
      isRolling: true,
      extraclass: "shaking",
    });

    setTimeout(() => {
      randomNum = numbersArr[Math.floor(Math.random() * numbersArr.length)];
      randomNum2 = numbersArr[Math.floor(Math.random() * numbersArr.length)];
      this.setState({
        currNum: randomNum,
        currNum2: randomNum2,
        isRolling: false,
        extraclass: null,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="flex-line">
          <Dice
            number={this.state.currNum}
            extraclass={this.state.extraclass}
          />
          <Dice
            number={this.state.currNum2}
            extraclass={this.state.extraclass}
          />
        </div>
        <button disabled={this.state.isRolling} onClick={this.rollDices}>
          {" "}
          Roll it{" "}
        </button>
      </div>
    );
  }
}

export default RollDice;
