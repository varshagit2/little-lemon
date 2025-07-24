import './App.css';
import BookingForm from './component/BookingForm';
import { Routes, Route, useLocation } from 'react-router-dom';
import ConfirmedBooking from './component/ConfirmedBooking';
import Main from './component/Main';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import Specials from './component/Specials';
import Testimonials from './component/Testimonials';
import About from './component/About';
import Footer from './component/Footer';

function App() {
  const location = useLocation();

  // Check if we're on the homepage
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Header />

      {isHomePage && (
        <>
          <HeroSection />
          <Specials />
          <Testimonials />
          <About />
        </>
      )}

      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
