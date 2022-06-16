import React, { useState, useEffect } from 'react'
import Container from "../../components/access/Container";
import Heading from "../../components/access/Heading";
import Section from "../../components/access/Section";
import Text from "../../components/access/Text";
import { useParams } from 'react-router-dom';

// import { http } from "../../http-common";

function CharacterProfile() {
    let { characterId } = useParams();
    const [character, setCharacter] = useState([]);
    
    /**
     * SERVER SIDE
     * 
    useEffect(() => {
      return () => {
        http.get(`/character/${characterId}`)
            .then((response) =>  {
                setCharacter(response.data)
                console.log(response)
            })
            .catch(err => console.log(err));
      }
    }, [characterId])
    */

    return (
        <Container>
            <Heading tag="1">#{ character.id } - { character.character_name }</Heading>
            <Section cls="mode-content">
                <Text>Karakterlap</Text>
            </Section>
        </Container>
    )
}

export default CharacterProfile;