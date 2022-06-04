import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Heading from "../../components/access/Heading";

function NotFound404() {
    const path = useLocation();
    console.log(path);

    return (
        <>
            <Heading tag="1">URL hiba</Heading>
            <p>A keresett oldal: <span style={{ color: "#009688" }}>("{ path.pathname }")</span> nem található.</p>
            <Link to="/">Vissza a kezdőlapra</Link>
        </>
    );
};

export default NotFound404;