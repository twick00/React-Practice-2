import React, { Component } from "react";

class DisplayComponent extends Component {
  constructor(props) {
    super(props);
  }
  buildBlocks(num) {
    return Array.from({ length: num }).map(
      (val, i) => (val = <div style={this.styles.squares} key={i} />)
    );
  }

  render() {
    this.styles = {
      container: {
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, ${this.props.width}%)`,
        gridTemplateRows: "repeat(auto-fill, 50px)",
        gridAutoFlow: "dense",
        gridGap: "25px",
        margin: "25px"
      },
      squares: {
        backgroundColor: "coral",
        width: `100%`,
        height: "50px"
      }
    };
    return (
      <div style={this.styles.container}>
        {this.buildBlocks(this.props.blocks)}
      </div>
    );
  }
}

export default DisplayComponent;
