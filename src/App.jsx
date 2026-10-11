import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import LeadershipPage from "./pages/LeadershipPage.jsx";
import MoneySkillsPage from "./pages/MoneySkillsPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import BusinessPlanPage from "./pages/BusinessPlanPage.jsx";
import FranchisePage from "./pages/FranchisePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CategoryDetailPage from "./pages/CategoryDetailPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-white text-ink">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/money-skills" element={<MoneySkillsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/category/:slug" element={<CategoryDetailPage />} />
            <Route path="/products/:slug" element={<CategoryDetailPage />} />
            <Route path="/business-plan" element={<BusinessPlanPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
