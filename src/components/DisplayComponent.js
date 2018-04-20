import React, { Component } from "react";

class DisplayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width, //parseInt(this.props.width),
      blocks: this.props.blocks //parseInt(this.props.blocks)
    };
    // console.log(this.props, this.state);
    // this.setState({ width: this.props.width }, { blocks: this.props.blocks });
  }

  componentWillReceiveProps(props) {
    this.setState({ width: this.props.width });
    console.log(this.state);
  }
  buildBlocks(num) {
    if (num === 0) {
      return;
    }
    let blockNum = [];
    for (let i = 0; i < num; i++) {
      blockNum.push(<div style={this.styles.squares} key={i} />);
    }
    return blockNum;
  }

  render() {
    this.styles = {
      container: {
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, ${this.state.width * 5}px)`,
        gridTemplateRows: "repeat(auto-fill, 50px)",
        gridAutoFlow: "dense",
        gridGap: "25px",
        margin: "25px"
      },
      squares: {
        backgroundColor: "coral",
        width: `${this.state.width * 5}px`,
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
