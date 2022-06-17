import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../../components/access/Container";
import Heading from "../../components/access/Heading";
import Section from "../../components/access/Section";
import { DEV_URL } from "../../constans/constans";

function CharactersRanklist() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
      return () => {
        axios.get(DEV_URL + '/get-all-character.json')
            .then((response) => setCharacters(response.data))
            .catch(err => console.log(err));
      }
    }, [characters])
    console.log(characters);
    return (
        <Container>
            <Heading tag="1">Karakterek listája</Heading>
            <Section>
                {characters.map((character, idx) => 
                    <ul key={ idx }>
                        <li>Karakter neve: { character.tblcharacter_id }</li>
                        <li>Felhasználó: { character.user_id }</li>
                        <li>Lakhely: { character.tblvillage_id }</li>
                        <li>Rang: { character.tblrang_id }</li>
                        <li>Pontok: { character.tblpont_id }</li>
                    </ul>
                )}
            </Section>
        </Container>
    );
};

export default CharactersRanklist;