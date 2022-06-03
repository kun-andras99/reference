import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function NotFound404() {
    const path = useLocation();
    console.log(path);

    return (
        <>
            <h1>URL hiba</h1>
            <p>A keresett oldal: <span style={{ color: "#009688" }}>("{ path.pathname }")</span> nem található.</p>
            <Link to="/">Vissza a kezdőlapra</Link>
        </>
    );
};

export default NotFound404;