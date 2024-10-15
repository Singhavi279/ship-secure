import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import { ContactUs } from './components/ContactUs';
import { OurVision } from './components/OurVision';

function App() {
  return (
    <>
      <Home  id="home"/>
      <AboutUs id="aboutus"/>
      <OurVision id="ourvision"/>
      <ContactUs id="contactus"/>
      <Footer id="footer" />
    </>
  );
}

export default App;
