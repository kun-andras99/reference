import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Heading from "../../components/access/Heading";
import Container from "../../components/access/Container";
import Section from "../../components/access/Section";
import Text from "../../components/access/Text";

function NotFound404() {
    const path = useLocation();
    console.log(path);

    return (
        <Container>
            <Heading tag="1">URL hiba</Heading>
            <Section cls="mode-content">
                <Text>A keresett url: <span style={{ color: "#009688" }}>("{ path.pathname }")</span> nem található.</Text>
            </Section>
            <Link to="/">Vissza a kezdőlapra</Link>
        </Container>
    );
};

export default NotFound404;