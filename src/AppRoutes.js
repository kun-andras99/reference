import { Route, Routes } from "react-router-dom";
import NotFound404 from "./pages/error/NotFound404";
import Guide from "./pages/home/Guide";
import Home from "./pages/home/Home";
import Contact from "./pages/home/Contact";
import Rules from "./pages/home/Rules";
import Sitemap from "./pages/home/Sitemap";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import CharacterProfile from "./components/profile/CharacterProfile";
import CharactersRanklist from "./pages/ranklist/CharactersRanklist";
import VillagesRanklist from "./pages/ranklist/VillagesRanklist";
import TeamsRanklist from "./pages/ranklist/TeamsRanklist";
import ClanRanklist from "./pages/ranklist/ClansRanklist";
import Academy from "./pages/hokage/Academy";
import NPCFight from "./pages/hokage/NPCFight";
import PVPFight from "./pages/hokage/PVPFight";
import Training from "./pages/hokage/Training";
import Arena from "./pages/hokage/Arena";
import ChakraNature from "./pages/hokage/ChakraNature";
import KageTower from "./pages/hokage/KageTower";
import Missions from "./pages/mission/Missions";
import Works from "./pages/mission/Works";
import SpecialMissions from "./pages/mission/SpecialMissions";
import Headhunting from "./pages/mission/Headhunting";
import Awards from "./pages/mission/Awards";
import PetShop from "./pages/city/PetShop";
import Blacksmith from "./pages/city/Blacksmith";
import DNSTrading from "./pages/city/DNSTrading";
import Rankings from "./pages/city/Rankings";
import Bijuus from "./pages/city/Bijuus";
import Gambling from "./pages/city/Gambling";
import Bank from "./pages/city/Bank";
import BasicNatureJutsus from "./pages/jutsu/basicnaturejutsus/Index";
import CombinedNatureJutsus from "./pages/jutsu/combinednaturejutsus/Index";
import OtherJutsus from "./pages/jutsu/otherjutsus/Index";
import YinAndYang from "./pages/jutsu/yinandyang/Index";
import KekkeiGenkai from "./pages/jutsu/kekkeigenkai/Index";
import BloodlineJutsus from "./pages/jutsu/bloodlinejutsus/Index";
import UniqueJutsus from "./pages/jutsu/uniquejutsus/Index";
import MeleeEquipments from "./pages/weapon/MeleeEquipments";
import RemoteEquipments from "./pages/weapon/RemoteEquipments";
import Puppets from "./pages/weapon/Puppets";
import SevenSwords from "./pages/weapon/SevenSwords";
import LegendaryEquipments from "./pages/weapon/LegendaryEquipments";
import UniqueEquipments from "./pages/weapon/UniqueEquipments";

function AppRoutes() {
  return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/character/:characterId/profile" element={<CharacterProfile />} />

            <Route path="/academy" element={<Academy />} />
            <Route path="/npc-fight" element={<NPCFight />} />
            <Route path="/pvp-fight" element={<PVPFight />} />
            <Route path="/training" element={<Training />} />
            <Route path="/arena" element={<Arena />} />
            <Route path="/chakra-nature" element={<ChakraNature />} />
            <Route path="/kage-tower" element={<KageTower />} />

            <Route path="/missions" element={<Missions />} />
            <Route path="/works" element={<Works />} />
            <Route path="/special-missions" element={<SpecialMissions />} />
            <Route path="/headhunting" element={<Headhunting />} />
            <Route path="/awards" element={<Awards />} />

            <Route path="/pet-shop" element={<PetShop />} />
            <Route path="/blacksmith" element={<Blacksmith />} />
            <Route path="/dns-trading" element={<DNSTrading />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/bijuus" element={<Bijuus />} />
            <Route path="/gambling" element={<Gambling />} />
            <Route path="/bank" element={<Bank />} />

            <Route path="/basic-nature-jutsu" element={<BasicNatureJutsus />} />
            <Route path="/combined-nature-jutsu" element={<CombinedNatureJutsus />} />
            <Route path="/other-jutsu" element={<OtherJutsus />} />
            <Route path="/yin-and-yang" element={<YinAndYang />} />
            <Route path="/kekkei-genkai" element={<KekkeiGenkai />} />
            {/* <Route path="/bloodline-jutsu" element={<BloodlineJutsus />} /> */}
            <Route path="bloodline-jutsu" element={<BloodlineJutsus />} />
            <Route path="/unique-jutsu" element={<UniqueJutsus />} />

            <Route path="/melee-equipments" element={<MeleeEquipments />} />
            <Route path="/remote-equipments" element={<RemoteEquipments />} />
            <Route path="/puppets" element={<Puppets />} />
            <Route path="/seven-swords" element={<SevenSwords />} />
            <Route path="/legendary-equipments" element={<LegendaryEquipments />} />
            <Route path="/unique-equipments" element={<UniqueEquipments />} />
            
            <Route path="/characters-ranking" element={<CharactersRanklist />} />
            <Route path="/villages-ranking" element={<VillagesRanklist />} />
            <Route path="/team-ranking" element={<TeamsRanklist />} />
            <Route path="/clan-ranking" element={<ClanRanklist />} />

            <Route path="*" element={<NotFound404 />} />
        </Routes>
  );
}

export default AppRoutes;