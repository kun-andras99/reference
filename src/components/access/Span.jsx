import React, { Component } from 'react';

class Span extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        return (
            <span className={ this.props.cls }>{ this.props.children }</span>
        );
    }
}

export default Span;