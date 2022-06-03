import React, { Component } from 'react';

class Image extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        return (
            <img className={ this.props.cls } src={ this.props.src } alt={ this.props.alt } title={ this.props.title } />
        );
    }
}

export default Image;