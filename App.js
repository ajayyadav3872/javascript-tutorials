// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Person from './Components/Person';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      demo: "Testing",
    };
  }

  buttonClickHandler (){
    console.log(this.state)
  }

  render(){
    return(
      <div className='App'>
        <Person name= "Ajay Yadav" age= "23"/>
        <button type='button' onClick={this.buttonClickHandler.bind(this)}>
          Click Me
        </button>
      </div>
    );
  }
}
export default App;
