import React from "react";
import Container from "../../components/access/Container";
import Heading from "../../components/access/Heading";
import Section from "../../components/access/Section";

function TeamsRanklist() {
    return (
        <Container>
            <Heading tag="1">Csapatok listája</Heading>
            <Section cls="mode-content">
                Még nincs létrehozva csapat!
            </Section>
        </Container>
    );
};

export default TeamsRanklist;