import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import NotFound404 from "./pages/error/NotFound404";
import Home from "./pages/home/Home";

function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound404 />} />
          </Routes>
      </Layout>
  );
}

export default App;