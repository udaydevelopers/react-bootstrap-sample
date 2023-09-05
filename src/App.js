
import {
  Routes,
  Route,
  useLocation 
} from "react-router-dom";

import Home from './components/Home';
import About from "./components/About";
import Client from "./components/Client";
import Contact from "./components/Contact";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from './components/Hero';
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Team from "./components/Team";
import WhyUs from "./components/WhyUs";
import Newsletter from "./components/Newsletter";


function App() {
  const location = useLocation();
  // Check if the current pathname is the root URL ('/')
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Header />
      {isHomePage && <Hero />}
      <main id="main">
          <Routes>
            <Route index path="/" element={<Home/>} />
            {/* <Route path="/home" element={<Home/>} /> */}
            <Route path="/client" element={<Client/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/why-us" element={<WhyUs/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/cta" element={<Cta/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/price" element={<Price/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      </main>
      <footer id="footer">
      {isHomePage && <Newsletter />}
        <Footer />
      </footer>
    </>
  );
}

export default App;
