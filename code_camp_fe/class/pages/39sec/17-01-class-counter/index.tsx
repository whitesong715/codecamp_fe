import { Component } from "react";

export default class ClassCounter extends Component {
  state = {
    count: 0,
  };

  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
  };

  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>업</button>
      </>
    );
  }
}
