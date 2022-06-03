import React, { Component } from 'react';

class Heading extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        return (
            <h1>{ this.props.children }</h1>
        );
    }
}

export default Heading;