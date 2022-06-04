import React from "react";
import Container from "../../components/access/Container";
import Heading from "../../components/access/Heading";
import Section from "../../components/access/Section";
import Text from "../../components/access/Text";

function Home() {
    return (
        <Container>
            <Heading text="1">Kezdőlap</Heading>
            <Text>Kedves látogató, üdvözöllek a NarutoRPG weboldalon!</Text>
            <Text>Ez a Naruto MMORPG Online játék a Naruto Anime sorozat egy fanoldala, ahol próbáljuk visszaadni az Anime nyújtotta élményt egy kattintós játékon keresztül, kisebb változásokkal és átalakításokkal. Törekszünk minél több infomációval és tartalommal ellátni weboldalunkat a jobb játékélményhez! Későbbiekben várjuk a látogatóinkat ingyenes regisztrációval!</Text>
            <Text>Ahhoz hogy el tudd kezdeni a játékot először regisztrálnod kell, utána bejelentkezned, majd egy karaktert létrehoznod. Ne aggódj, ha csak egy kedvenc karaktered van, itt esélyt kapsz arra hogy akár 3 karakterrel is játszhatsz egyszerre!</Text>
            <Text>Hozd létre a saját csapatodat akár 20 fővel, alapíts testvériséget a barátaiddal vagy más játékosokkal, szerezd meg az összes bijuut és legyél TE a legerősebb!</Text>
            <Section cls="mode-content">
                <Heading text="3">Figyelmeztetés!</Heading>
                <Text>Jelen weboldalnak csak a kinézete készül néhány tartalommal. Ha véletlenül ide tévedtél, akkor kérlek látogass el Facebook oldalunkra <code>(lájkolj)</code> ahol fejlesztések részéről kaphattok információt.</Text>
            </Section>
        </Container>
    );
};

export default Home;