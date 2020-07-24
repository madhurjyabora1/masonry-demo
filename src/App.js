import React from "react";
import "./App.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
const colors = [
  "palevioletred",
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "lightblue",
  "maroon",
  "DarkCyan"
];

const randomColor = items => {
  return items[randomHeight(0, items.length)];
};

const randomHeight = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      activeIndex: -1
    };
  }
  addActiveClass(activeIndex) {
    this.setState(prev => ({
      activeIndex: prev.activeIndex === activeIndex ? -1 : activeIndex
    }));
  }

  render() {
    return (
      <Router>
      <div className="container">
        {Array.from({ length: 30 }).map((item, index) => {
          return (
            <Link to={`/${index}`}>
            <div
              key={index}
              style={{
                background: randomColor(colors),
                height: randomHeight(100, 200)
              }}
              className={this.state.activeIndex === index ? "full" : "normal"}
              onClick={() => this.addActiveClass(index)}
            />
              </Link>
          );
        })}
      </div>
      </Router>
    );
  }
}
