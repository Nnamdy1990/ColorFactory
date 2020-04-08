import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class AddColor extends Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { push } = this.props.history;
    this.props.handleColor((prevState) => [this.state.value, ...prevState]);
    push("/colors");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          required
          placeholder='Add Color...'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default withRouter(AddColor);
