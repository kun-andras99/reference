import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import NotFound404 from "./pages/error/NotFound404";
import Guide from "./pages/home/Guide";
import Home from "./pages/home/Home";
import Contact from "./pages/home/Contact";
import Rules from "./pages/home/Rules";
import Sitemap from "./pages/home/Sitemap";

function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="*" element={<NotFound404 />} />
          </Routes>
      </Layout>
  );
}

export default App;