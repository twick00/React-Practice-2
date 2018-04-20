import React, { Component } from "react";

class InputComponent extends Component {
  styles = {
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

  widthChange = e => {
    this.props.setWidth(e.target.value);
  };
  blocksChange = e => {
    this.props.setBlocks(e.target.value);
  };

  render() {
    return (
      <div style={this.styles.container}>
        <h4>Block Width</h4>
        <input
          min="1"
          value={this.props.width}
          onChange={e => this.widthChange(e)}
          style={this.styles.inputs}
          type="number"
        />
        <h4># of Blocks</h4>
        <input
          min="1"
          value={this.props.blocks}
          onChange={e => this.blocksChange(e)}
          style={this.styles.inputs}
          type="number"
        />
      </div>
    );
  }
}

export default InputComponent;
