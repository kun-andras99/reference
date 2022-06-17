import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../../components/access/Container";
import Heading from "../../components/access/Heading";
import Section from "../../components/access/Section";

function VillagesRanklist() {
    const [villages, setVillages] = useState([])
    useEffect(() => {
      return () => {
        axios.get('/json/get-all-village.json')
            .then((response) => setVillages(response.data))
            .catch(err => console.log(err));
      }
    }, []);
    console.log(villages);
    return (
        <Container>
            <Heading tag="1">Lakhelyek listája</Heading>
            <Section>
                {villages.map((village, idx) => 
                    <ul key={ idx }>
                        <li>Lakhely: { village.village_name }</li>
                        <li>Pontok: { village.points }</li>
                    </ul>
                )}
            </Section>
        </Container>
    );
};

export default VillagesRanklist;