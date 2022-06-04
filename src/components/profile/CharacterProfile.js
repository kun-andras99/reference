import React from 'react'
import Container from "../../components/access/Container";
import Heading from "../../components/access/Heading";
import Section from "../../components/access/Section";
import Text from "../../components/access/Text";
import { useParams } from 'react-router-dom';

function CharacterProfile() {
    let { characterId } = useParams();

    return (
        <Container>
            <Heading tag="1">#{ characterId } - Hatake Kakashi</Heading>
            <Section cls="mode-content">
                <Text>Karakterlap</Text>
            </Section>
        </Container>
    )
}

export default CharacterProfile;