import React, { Component } from 'react';
// import Demo from './Demo';
class Person extends Component {
    constructor(props){
        super(props);
        this.props =props;
        this.state = {
            name: "Ajay Yadav",
            age: 23,
        };
    }

    nameChangeHandler(){
        this.setState({name: "John"},() => {
            console.log(this.state);
        });
    }
    render() {
        return (
            <div>
                <h1>
                    <i>
                    Dear {this.state.name},
                    {this.state.age} years,
                     Welcome To React Complete Course.
                    </i>
                    <br/>
                    <button onClick={() => this.nameChangeHandler()}>Click Me</button>
                </h1>
            </div>
        );
    }
}

export default Person;