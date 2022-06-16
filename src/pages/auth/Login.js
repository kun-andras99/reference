import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/access/Container";
import Heading from "../../components/access/Heading";
import Section from "../../components/access/Section";
import Text from "../../components/access/Text";

function Login() {

    const userLogin = () => {
        console.log('login');
    }

    const handleLoginForm = () => {
        console.log('login handler');
    }

    return (
        <Container>
            <Heading tag="1">Bejelentkezés</Heading>
            <Section cls="mode-content">
                <form name="userLogin" onSubmit={userLogin}>
                    <label htmlFor="username">Felhasználónév</label>
                    <input type="text" name="username"
                    placeholder="Felhasználónév" />
                    <label htmlFor="username">Jelszó</label>
                    <input type="password" name="password"
                    placeholder="Jelszó" />
                    <button onClick={handleLoginForm}>Belépés</button>
                </form>
            </Section>
            <Text>Nincs még fiókod? <Link to="/register">Hozz létre! </Link></Text>
            <Text><Link to="/forgot-password">Elfelejtett jelszó</Link></Text>
        </Container>
    );
};

export default Login;