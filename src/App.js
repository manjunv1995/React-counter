import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    this.setState({
      counters: this.state.counters.map(el => {
        el.value = 0;
        return el;
      })
    });
  };

  handleDelete = counterId => {
    this.setState({
      counters: this.state.counters.filter(c => {
        return c.id !== counterId.id;
      })
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={console.log(
            this.state.counters.filter(c => c.value > 0).length
          )}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
