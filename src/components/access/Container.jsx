import React, { Component } from "react";

class Container extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        return (
            <main className={ this.props.cls }>
                { this.props.children }
            </main>
        );
    }
}

export default Container;