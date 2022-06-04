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

            <Route path="*" element={<NotFound404 />} />
        </Routes>
  );
}

export default AppRoutes;