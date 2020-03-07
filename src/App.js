import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("ini constructor");
    this.state = {
      angka: 0,
      isLoading: true
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.state.angka);
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  componentWillUnmount() {
    console.log("will mount");
  }

  handleClick() {
    this.setState({ angka: this.state.angka + 1 });
    console.log(this.state.angka);
  }

  // render view
  render() {
    console.log("ini render");
    return (
      <div className="App">
        <Header title="Header" />
        {this.state.isLoading ? <p>Loading..</p> : <Body />}

        <button onClick={() => this.handleClick()}>Klik</button>

        <p>{this.state.angka}</p>
      </div>
    );
  }
}

export default App;
