import React, { Component } from 'react';
import './App.css';
import Nav from "./Components/Nav";
import Jumbotron from './Components/Jumbotron';
import Footer from './Components/Footer';

var Images = [
  {
    "src": "1.jpg",
    "status": false
  },
  {
    "src": "2.png",
    "status": false
  },
  {
    "src": "3.png",
    "status": false
  },
  {
    "src": "4.png",
    "status": false
  },
  {
    "src": "5.jpg",
    "status": false
  },
  {
    "src": "6.jpg",
    "status": false
  },
  {
    "src": "7.jpg",
    "status": false
  },
  {
    "src": "8.jpg",
    "status": false
  },
  {
    "src": "9.jpg",
    "status": false
  },
  {
    "src": "10.png",
    "status": false
  },
  {
    "src": "11.jpg",
    "status": false
  },
  {
    "src": "12.jpg",
    "status": false
  }
]


console.log("blah", Images);




class App extends Component {
  state = {
    num: 0,
    arr: [0,1,2,3,4,5,6,7,8,9,10,11]
  };

  handleLost = event => {
    alert("You lost")
  }

  handleClickSubmit(ref){

    if (Images[ref].status === false){
      Images[ref].status = true;
      this.setState({ "num": this.state.num + 1 })
      this.random();
    }
    else{
      this.handleLost();
    }
  }

  handleBlah(blah){
    console.log(blah);
  }

  random = event => {
    let num=[];

    while (num.length<12) {
      
      let a = Math.floor(Math.random()*12)
      if (num.indexOf(a)=== -1){
        num.push(a);
      }
    }
    this.setState({
      "arr": num
    })
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
                src={Images[this.state.arr[0]].src}
                status={Images[this.state.arr[0]].status}
                onClick = {() => this.handleClickSubmit(this.state.arr[0])}
              >
              </img>
            </div>
            <div className="col">
            <img
                src={Images[this.state.arr[1]].src}
                status={Images[this.state.arr[1]].status}
                onClick = {() => this.handleClickSubmit(this.state.arr[1])}
              >
              </img>
            </div>
            <div className="col">
            <img
                src={Images[this.state.arr[2]].src}
                status={Images[this.state.arr[2]].status}
                onClick = {() => this.handleClickSubmit(this.state.arr[2])}
              >
              </img>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <img
                src={Images[this.state.arr[3]].src}
                status={Images[this.state.arr[3]].status}
                onClick = {() => this.handleClickSubmit(this.state.arr[3])}
              >
              </img>
            </div>
            <div className="col">
            <img
                src={Images[this.state.arr[4]].src}
                status={Images[this.state.arr[4]].status}
                onClick = {() => this.handleClickSubmit(this.state.arr[4])}
              >
              </img>
            </div>
            <div className="col">
            <img
                src={Images[this.state.arr[5]].src}
                status={Images[this.state.arr[5]].status}
                onClick = {() => this.handleClickSubmit(this.state.arr[5])}
              >
              </img>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <img
                src={Images[this.state.arr[6]].src}
                status={Images[this.state.arr[6]].status}
                onClick = {() => this.handleClickSubmit(this.state.arr[6])}
              >
              </img>
            </div>
            <div className="col">
            <img
                src={Images[this.state.arr[7]].src}
                status={Images[this.state.arr[7]].status}
                onClick = {() => this.handleClickSubmit(this.state.arr[7])}
              >
              </img>
            </div>
            <div className="col">
            <img
                src={Images[this.state.arr[8]].src}
                status={Images[this.state.arr[8]].status}
                onClick = {() => this.handleClickSubmit(this.state.arr[8])}
              >
              </img>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <img
                src={Images[this.state.arr[9]].src}
                status={Images[this.state.arr[9]].status}
                onClick = {() => this.handleClickSubmit(this.state.arr[9])}
              >
              </img>
            </div>
            <div className="col">
            <img
                src={Images[this.state.arr[10]].src}
                status={Images[this.state.arr[10]].status}
                onClick = {() => this.handleClickSubmit(this.state.arr[10])}
              >
              </img>
            </div>
            <div className="col">
            <img
                src={Images[this.state.arr[11]].src}
                status={Images[this.state.arr[11]].status}
                onClick = {() => this.handleClickSubmit(this.state.arr[11])}
              >
              </img>
            </div>
          </div>
        </div>
        <Footer />
      </div >
    )
  }

}

export default App;
