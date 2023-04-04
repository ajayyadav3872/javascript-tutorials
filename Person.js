import React, { Component } from 'react';
import Name from './Name';
class Person extends Component {
    constructor(props){
        super(props);
        this.props =props;
    }
    render() {
        return (
            <div>
                <div>Name: {this.props.name}</div>
                <div>Age: {this.props.Age} </div>
                <Name/>
            </div>
        );
    }
}

export default Person;