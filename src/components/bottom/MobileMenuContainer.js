import React, { useCallback, useState } from "react";
import Line from "../access/Line";
import MenuContainer from "./mobil-menu/MenuContainer";
import MobileButton from "./mobil-menu/MobileButton";
import MenuLink from "./mobil-menu/MenuLink";
import MenuItem from "./mobil-menu/MenuItem";
import MenuSlide from "./mobil-menu/MenuSlide";
import FixMenu from "./mobil-menu/FixMenu";

function MobileMenuContainer() {
    const [open, setOpen] = useState(false);
    const toggle = useCallback(
        () => setOpen(openAt => !openAt),
        [setOpen],
    );
    const hide = () => setOpen(false);

    return (
        <FixMenu>
            <MenuSlide open={open}>
                <MenuItem icon="home" alt="home-icon" title="home-icon">
                    <MenuContainer cls="home">
                        <MenuLink url="/" hide={hide}>Kezdőlap</MenuLink>
                        <MenuLink url="/rules" hide={hide}>Szabályok</MenuLink>
                        <MenuLink url="/guide" hide={hide}>Útmutató</MenuLink>
                        <MenuLink url="/contact" hide={hide}>Kapcsolat</MenuLink>
                        <MenuLink url="/sitemap" hide={hide}>Oldaltérkép</MenuLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem icon="hokage" alt="hokage-icon" title="hokage-icon">
                    <MenuContainer cls="hokage">
                        <MenuLink url="/academy" hide={hide}>Akadémia</MenuLink>
                        <MenuLink url="/npc-fight" hide={hide}>NPC harc</MenuLink>
                        <MenuLink url="/pvp-fight" hide={hide}>PVP harc</MenuLink>
                        <MenuLink url="/training" hide={hide}>Edzés</MenuLink>
                        <MenuLink url="/arena" hide={hide}>Aréna</MenuLink>
                        <MenuLink url="/chakra-nature" hide={hide}>Elem tanulása</MenuLink>
                        <MenuLink url="/kage-tower" hide={hide}>Kage torony</MenuLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem icon="mission" alt="mission-icon" title="mission-icon">
                    <MenuContainer cls="mission">
                        <MenuLink url="/missions" hide={hide}>Küldetések</MenuLink>
                        <MenuLink url="/works" hide={hide}>Munkák</MenuLink>
                        <MenuLink url="/special-missions" hide={hide}>Speciális küldetések</MenuLink>
                        <MenuLink url="/headhunting" hide={hide}>Fejvadászatok</MenuLink>
                        <MenuLink url="/awards" hide={hide}>Kitüntetések</MenuLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem icon="city" alt="city-icon" title="city-icon">
                    <MenuContainer cls="city">
                        <MenuLink url="/pet-shop" hide={hide}>Kisállat kereskedés</MenuLink>
                        <MenuLink url="/blacksmith" hide={hide}>Kovácsműhely</MenuLink>
                        <MenuLink url="/dns-trading" hide={hide}>DNS kereskedés</MenuLink>
                        <MenuLink url="/rankings" hide={hide}>Rangok</MenuLink>
                        <MenuLink url="/bijuus" hide={hide}>Bijuuk</MenuLink>
                        <MenuLink url="/gambling" hide={hide}>Szerencsejáték</MenuLink>
                        <MenuLink url="/bank" hide={hide}>Bank</MenuLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem icon="jutsu" alt="jutsu-icon" title="jutsu-icon">
                    <MenuContainer cls="jutsu">
                        <MenuLink url="/basic-nature-jutsu" hide={hide}>Alaptermészeti jutsuk</MenuLink>
                        <MenuLink url="/combined-nature-jutsu" hide={hide}>Kombinált természeti jutsuk</MenuLink>
                        <MenuLink url="/other-jutsu" hide={hide}>Egyéb jutsuk</MenuLink>
                        <MenuLink url="/yin-and-yang" hide={hide}>Yin és Yang</MenuLink>
                        <MenuLink url="/kekkei-genkai" hide={hide}>Kekkei Genkai</MenuLink>
                        <MenuLink url="/bloodline-jutsu" hide={hide}>Vérvonal jutsuk</MenuLink>
                        <MenuLink url="/unique-jutsu" hide={hide}>Egyedi jutsuk</MenuLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem icon="weapon" alt="weapon-icon" title="weapon-icon">
                    <MenuContainer cls="weapon">
                        <MenuLink url="/melee-equipments" hide={hide}>Közelharci felszerelések</MenuLink>
                        <MenuLink url="/remote-equipments" hide={hide}>Távolharci felszerelések</MenuLink>
                        <MenuLink url="/puppets" hide={hide}>Bábok</MenuLink>
                        <MenuLink url="/seven-swords" hide={hide}>A Köd Hét Kardja</MenuLink>
                        <MenuLink url="/legendary-equipments" hide={hide}>Legendás felszerelések</MenuLink>
                        <MenuLink url="/unique-equipments" hide={hide}>Egyedi felszerelések</MenuLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem icon="ranklist" alt="ranklist-icon" title="ranklist-icon">
                    <MenuContainer cls="ranklist">
                        <MenuLink url="/characters-ranking" hide={hide}>Karakterek</MenuLink>
                        <MenuLink url="/villages-ranking" hide={hide}>Lakhelyek</MenuLink>
                        <MenuLink url="/team-ranking" hide={hide}>Csapatok</MenuLink>
                        <MenuLink url="/clan-ranking" hide={hide}>Klánok</MenuLink>
                    </MenuContainer>
                </MenuItem>
            </MenuSlide>
            <MobileButton toggle={toggle} open={open}>
                <Line cls="line1" />
                <Line cls="line2" />
            </MobileButton>
        </FixMenu>
    );
}

export default MobileMenuContainer;