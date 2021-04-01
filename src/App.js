import './App.css';
import Header from './Components/Header/Header';
import FirstCarousel from './Components/FirstCarousel/FirstCarousel';
import About from './Components/About/About';
import OurJuice from './Components/OurJuice/OurJuice';
import Staff from './Components/Staff/Staff';


function App() {
  return (
    <div className="specialBrands">
        <Header />
        <FirstCarousel />
        <About />
        <OurJuice title="Our Juice"/>
        <Staff title="Staff" />
    </div>
  );
}

export default App;
