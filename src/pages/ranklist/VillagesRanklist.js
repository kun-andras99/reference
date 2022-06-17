import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../../components/access/Container";
import Heading from "../../components/access/Heading";
import Section from "../../components/access/Section";
import { DEV_URL, BASE_URL } from "../../constans/constans";

function VillagesRanklist() {
    const [villages, setVillages] = useState([])
    useEffect(() => {
      return () => {
        axios.get(DEV_URL + '/get-all-village.json')
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
                        <li><img src={BASE_URL + `/assets/images/villages/${village.id}.png`} alt="alt" title="title" />{ village.village_name }</li>
                        <li>Lakhely: { village.village_name }</li>
                        <li>Pontok: { village.points }</li>
                    </ul>
                )}
            </Section>
        </Container>
    );
};

export default VillagesRanklist;