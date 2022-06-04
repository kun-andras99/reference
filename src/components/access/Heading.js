import React from 'react';

function Heading(props) {
    // if (props.text == "1") {
    //     return <h1>{ props.children }</h1>
    // } else if (props.text == "2") {
    //     return <h2>{ props.children }</h2>
    // } else if (props.text == "3") {
    //     return <h3>{ props.children }</h3>
    // } else if (props.text == "4") {
    //     return <h4>{ props.children }</h4>
    // } else if (props.text == "5") {
    //     return <h5>{ props.children }</h5>
    // } else if (props.text == "6") {
    //     return <h6>{ props.children }</h6>
    // }
    return (
         <>{ props.children }</>
    )
}

export default Heading;