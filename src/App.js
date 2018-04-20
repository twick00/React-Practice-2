import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayComponent from "./components/DisplayComponent";
import InputComponent from "./components/InputComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: "20", blocks: "1" };
    this.styles = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      // gridTemplateRows: "1fr",
      height: "100vh"
    };
  }
  blockWidth = width => {
    this.setState({ width: width });
  };
  blockNumber = blocks => {
    this.setState({ blocks: blocks });
  };

  render() {
    return (
      <div style={this.styles} className="App">
        <InputComponent
          setWidth={this.blockWidth}
          setBlocks={this.blockNumber}
          width={this.state.width}
          blocks={this.state.blocks}
        />
        <DisplayComponent width={this.state.width} blocks={this.state.blocks} />
      </div>
    );
  }
}

export default App;
