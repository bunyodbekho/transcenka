import { observer } from "mobx-react-lite";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Services from "components/pages/Services";
import ContactUs from "components/pages/ContactUs";
import Careers from "components/pages/Careers";
import Certifications from "components/pages/Certifications";
import News from "components/pages/News";
import Home from "../pages";
import AboutPage from "components/pages/AboutPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="company" element={<AboutPage />} />
        <Route path="services" element={<Services />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="careers" element={<Careers />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default observer(Router);
