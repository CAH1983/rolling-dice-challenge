import React, { Component } from "react";
import Dice from "./Dice";

class RollDice extends Component {
  render() {
    return (
      <div className="RollDice">
        <Dice />
        <button> Roll it </button>
      </div>
    );
  }
}

export default RollDice;
