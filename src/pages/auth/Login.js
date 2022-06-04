import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/access/Container";
import Heading from "../../components/access/Heading";
import Section from "../../components/access/Section";
import Text from "../../components/access/Text";
import Button from "../../components/access/Button";

function Login() {
    return (
        <Container>
            <Heading tag="1">Bejelentkezés</Heading>
            <Section cls="mode-content">
                ...
            </Section>
            <Text>Nincs még fiókod? <Link to="/register">Hozz létre! </Link></Text>
            <Text><Link to="/forgot-password">Elfelejtett jelszó</Link></Text>
        </Container>
    );
};

export default Login;