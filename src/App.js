import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

class App extends Component {
  // ini jalan ketika class jalan (pertama)
  constructor(props) {
    super(props);
    console.log("ini constructor");
    this.state = {
      angka: 0,
      isLoading: true,
      text: "",
      isShowText: false
    };
  }

  // setelah render
  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.state.angka);
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  // ketika keluar dari class
  componentWillUnmount() {
    console.log("will mount");
  }

  // ketika di panggil
  handleCount() {
    this.setState({ angka: this.state.angka + 1 });
    console.log(this.state.angka);
  }

  handleChangeInput(value) {
    this.setState({ text: value, isShowText: false });
  }

  handleShowText() {
    this.setState({ isShowText: true });
  }

  // setelah constructor
  render() {
    console.log("ini render");
    return (
      <div className="App">
        <Header title="Header" />
        {this.state.isLoading ? <p>Loading..</p> : <Body />}

        <button onClick={() => this.handleCount()}>Count</button>

        <p>{this.state.angka}</p>

        <input
          value={this.state.text}
          placeholder="input"
          onChange={res => this.handleChangeInput(res.target.value)}
        />

        <button onClick={() => this.handleShowText()}>show text input</button>

        {this.state.isShowText ? <p>{this.state.text}</p> : null}
      </div>
    );
  }
}

export default App;
