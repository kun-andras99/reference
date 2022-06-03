import React, { Component } from 'react';

class Line extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        return (
            <div className={ this.props.cls }></div>
        );
    }
}

export default Line;