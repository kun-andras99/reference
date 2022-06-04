import React from "react";

function Button(props) {
    return (
        <button className={ props.cls } >
        {/* <button className={ props.cls } { ...props.name ? "name=''" : "name=''" } type={ props.type ? props.type : '' } value={ props.value ? props.value : '' } onClick={ props.onclick ? props.onclick : '' } > */}
            { props.children }
        </button>
    );
}

export default Button;