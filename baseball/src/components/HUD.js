import React, { Component } from "react";
import ButtonForm from "../components/ButtonForm.js";

class HUD extends Component {
  state = {
    balls: 0,
    strikes: 0,
  };

  hit = () => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  strike = () => {
    if (this.state.strikes < 2) {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1
      });
    } else {
      this.setState({
        balls: 0,
        strikes: 0
      });
    }
  };

  foul = () => {
    if (this.state.strikes < 2) {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1
      });
    } else {
      this.setState({
        ...this.state
      });
    }
  };

  ball = () => {
    if (this.state.balls < 3) {
      this.setState({
        ...this.state,
        balls: this.state.balls + 1
      });
    } else {
      this.setState({
        balls: 0,
        strikes: 0
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Count</h1>

        <div>
          <h2>Balls: {this.state.balls}</h2>
          <h2>Strikes: {this.state.strikes}</h2>
        </div>

        <HUD
          hit={this.hit}
          strike={this.strike}
          foul={this.foul}
          ball={this.ball}
        />
      </div>
    );
  }
}

export default HUD; 