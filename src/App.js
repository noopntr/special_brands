import './App.css';
import Header from './Components/Header/Header';
import FirstCarousel from './Components/FirstCarousel/FirstCarousel';
import About from './Components/About/About';
import OurJuice from './Components/OurJuice/OurJuice';
// import SecCarousel from './Components/SecCarousel/SecCarousel'
import Staff from './Components/Staff/Staff'


function App() {
  return (
    <div className="specialBrands">
        <Header />
        <FirstCarousel />
        <About />
        <OurJuice title="Our Juice"/>
        {/* <SecCarousel /> */}
        <Staff 
          title="Our Staff"
          firstName="Name, Surename"
          firstPosition="Poisition"
          secondName="Name, Surename"
          secondPosition="Position"
          thirdName="Name, Surename"
          thirdPosition="Position"
        />
    </div>
  );
}

export default App;
