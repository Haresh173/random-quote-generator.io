import React, { Component } from "react";
import WelcomePage from "./welcome";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    showWelcome: true,
    advice: "",
  };

  handleEnterClick = () => {
    this.setState({ showWelcome: false });
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { showWelcome } = this.state;
    const { advice } = this.state;

    return (
      <div className={showWelcome ? "welcome" : "app"}>
      {showWelcome ? (
        <WelcomePage onEnterClick={this.handleEnterClick} />
      ) : (
          <div className="quote">
            <div className="card">
              <h1 className="head">{advice}</h1>
              <button className="btn" onClick={this.fetchAdvice}>
                <span>GENERATE QUOTE</span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
