import './App.css';
import Header from './Components/Header/Header';
import FirstCarousel from './Components/FirstCarousel/FirstCarousel';
import About from './Components/About/About';
import OurJuice from './Components/OurJuice/OurJuice';
// import SecCarousel from './Components/SecCarousel/SecCarousel'
import Staff from './Components/Staff/Staff'
import FollowUs from './Components/FollowUs/followus';


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
          firstName="Name, Surname"
          firstPosition="Position"
          secondName="Name, Surname"
          secondPosition="Position"
          thirdName="Name, Surname"
          thirdPosition="Position"
        />
        <FollowUs></FollowUs>       
    </div>
  );
}

export default App;
