import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home';
import About from './component/About'
import Contact from './component/Contact'
import Header from './component/Header';
import Footer from './component/Footer';
import ReactGA from 'react-ga';
  const TRACKING_ID = process.env.REACT_APP_G_ANALYTICS_ID // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname);
function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
