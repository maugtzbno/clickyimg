import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav";
import Jumbotron from './Components/Jumbotron';
import Footer from './Components/Footer';

class App extends Component {
  state = {
    num : 0
  };

  handleLost = event => {
    alert("You lost")
  }

  handleClickSubmit = event => {
    !this.status? this.state.num++ : this.handleLost
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div>{this.state.num}</div>
        <Jumbotron />
        <div>
          <div className="row">
            <div className="col">
              <img
                src="1.jpg"
                onClick={this.handleClickSubmit}
                status={false}
              />
            </div>
            <div className="col">
              <img
                src="2.png"
                onClick={this.handleClickSubmit}
                status={false}
              />
            </div>
            <div className="col">
              <img
                src="3.png"
                onClick={this.handleClickSubmit}
                status={false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src="4.png"
                onClick={this.handleClickSubmit}
                status={false}
              />
            </div>
            <div className="col">
              <img
                src="5.jpg"
                onClick={this.handleClickSubmit}
                status={false}
              />
            </div>
            <div className="col">
              <img
                src="6.jpg"
                onClick={this.handleClickSubmit}
                status={false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src="7.jpg"
                onClick={this.handleClickSubmit}
                status={false}
              />
            </div>
            <div className="col">
              <img
                src="8.jpg"
                onClick={this.handleClickSubmit}
                status={false}
              />
            </div>
            <div className="col">
              <img
                src="9.jpg"
                onClick={this.handleClickSubmit}
                status={false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src="10.png"
                onClick={this.handleClickSubmit}
                status={false}
              />
            </div>
            <div className="col">
              <img
                src="11.jpg"
                onClick={this.handleClickSubmit}
                status={false}
              />
            </div>
            <div className="col">
              <img
                src="12.jpg"
                onClick={this.handleClickSubmit}
                status={false}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div >
    )
  }

}

export default App;
