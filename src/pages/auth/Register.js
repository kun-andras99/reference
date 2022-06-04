import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/access/Container";
import Heading from "../../components/access/Heading";
import Section from "../../components/access/Section";
import Text from "../../components/access/Text";

function Register() {
    return (
        <Container>
            <Heading tag="1">Regisztráció</Heading>
            <Section cls="mode-content">
                ...
            </Section>
            <Text>Van már fiókod? <Link to="/login">Lépj be!</Link></Text>
        </Container>
    );
};

export default Register;