import React, { Component } from "react";

class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width,
      blocks: this.props.blocks
    };
    this.styles = {
      container: {
        backgroundColor: "cornflowerblue",
        display: "grid",
        gridTemplateColumns: "3fr 4fr",
        gridTemplateRows: "40px 40px"
      },
      inputs: {
        margin: "10px"
      }
    };
  }
  widthChange = e => {
    if (e.target.value < 1) return;
    this.setState({ width: e.target.value });
    this.props.setWidth(e.target.value);
    console.log(e.target.value);
  };
  blocksChange = e => {
    if (e.target.value < 1) return;
    this.setState({ blocks: e.target.value });
    this.props.setBlocks(e.target.value);
  };

  render() {
    return (
      <div style={this.styles.container}>
        <h4>Block Width</h4>
        <input
          value={this.state.width}
          onChange={e => this.widthChange(e)}
          style={this.styles.inputs}
          type="number"
        />
        <h4># of Blocks</h4>
        <input
          value={this.state.blocks}
          onChange={e => this.blocksChange(e)}
          style={this.styles.inputs}
          type="number"
        />
      </div>
    );
  }
}

export default InputComponent;
