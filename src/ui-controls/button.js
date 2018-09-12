import React, { Component } from 'react';




export default class Button extends Component {
  render() {
    return (
      <div>
        <button
          className={this.props.className}
          onClick={this.props.onClick}
        >
          {this.props.title}
        </button>
      </div>
    );
  }
}


