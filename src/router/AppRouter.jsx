import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";

import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Housing from "../pages/Housing/Housing.jsx";
import Error from "../pages/Error/Error.jsx";

import Layout from "../components/Layout/Layout.jsx";


function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Housing />} />

          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;