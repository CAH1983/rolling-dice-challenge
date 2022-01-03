import React, { Component } from "react";
import "../Dice.css";

class Dice extends Component {
  render() {
    return (
      <div className="Dice">
        <div className="Dice-icon-wrapper">
          <i className={`fas fa-dice-${this.props.number}`}></i>
        </div>
      </div>
    );
  }
}

export default Dice;
