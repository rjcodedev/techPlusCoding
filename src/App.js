import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/page/home/Home";
import About from "./component/About";
import Contact from "./component/page/contact/Contact";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ReactGA from "react-ga";
import EBookSection from "./component/page/ebook/EBookSection";
import Placment from "./component/page/carrer/Carrer";
import FreePdf from "./component/page/freepdf/FreePdf";
import ErrorPage from "./component/page/ErrorPage";
const TRACKING_ID = process.env.REACT_APP_G_ANALYTICS_ID; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname);
function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ebook" element={<EBookSection />} />
          <Route path="carrer" element={<Placment />} />
          <Route path="freepdf" element={<FreePdf />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
