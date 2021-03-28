import './App.css';
import Header from './Components/Header/Header';
import FirstCarousel from './Components/FirstCarousel/FirstCarousel';
import About from './Components/About/About';
import OurJuice from './Components/OurJuice/OurJuice';


function App() {
  return (
    <div className="specialBrands">
        <Header />
        <FirstCarousel />
        <About />
        <OurJuice title="Our Juice"/>
    </div>
  );
}

export default App;
