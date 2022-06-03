import React from "react";
import { BASE_URL } from "../../../constans/constans";

function MenuItem(props) {
    return (
        <li className="mobile-menu-item">
            <span role="button"><img className="mobile-menu-icon" src={ BASE_URL + `/assets/images/icons/${ props.icon }-icon.png`} alt={ props.alt } title={ props.title } /></span>
            { props.children }
        </li>
    );
}

export default MenuItem;