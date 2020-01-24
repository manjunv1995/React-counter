import React, { Component } from "react";
import { Fragment } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = product => {
    this.setState({ value: product + 1 });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.state.value)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger m-2 btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

//   renderTags() {
//     if (this.state.tags.length === 0) return <p>There are no tags</p>;

//     return (
//       <ul>
//         {this.state.tags.map(tag => (
//           <li key={tag}>{tag}</li>
//         ))}
//       </ul>
//     );
//   }
//   render() {
//     return (
//       <div>
//         {this.state.tags.length === 0 && "Please Create a new tag!"}
//         {this.renderTags()}
//       </div>
//     );
//   }
// }
export default Counter;
