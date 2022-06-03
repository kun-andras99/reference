import React, { Component } from 'react';

class Section extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        return (
            <section className={ this.props.cls }>
                { this.props.children }
            </section>
        );
    }
}

export default Section;