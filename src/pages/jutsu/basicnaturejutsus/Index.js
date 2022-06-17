import React from "react";
import Container from "../../../components/access/Container";
import Heading from "../../../components/access/Heading";
import Section from "../../../components/access/Section";
import { BASE_URL } from "../../../constans/constans";

function BasicNatureJutsus() {
    return (
        <Container>
            <Heading tag="1">Alapelemi jutsuk</Heading>
            <Section cls="mode-content">
                <img src={ BASE_URL + `/assets/images/jutsu/katon-jutsu-element.png` } alt="katon jutsu" title="katon jutsu" />
            </Section>
        </Container>
    );
};

export default BasicNatureJutsus;