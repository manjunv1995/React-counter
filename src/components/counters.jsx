// import React, { Component, Fragment } from "react";
// import Counter from "./counter";

// class Counters extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 4 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 }
//     ]
//   };

//   handleDelete = counterId => {
//     this.setState({
//       counters: this.state.counters.filter(el => {
//         return el.id !== counterId.id;
//       })
//     });
//   };
//   render() {
//     return (
//       <div>
//         {this.state.counters.map(counter => (
//           <Counter
//             key={counter.id}
//             onDelete={() => this.handleDelete(counter)}
//             value={counter.value}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Counters;

import React, { Component, Fragment } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary m-2 btn-sm"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            value={counter.value}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
