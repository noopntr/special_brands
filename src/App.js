import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import FirstCarousel from './Components/FirstCarousel/FirstCarousel';
import About from './Components/About/About';
import OurJuice from './Components/OurJuice/OurJuice';
// import SecCarousel from './Components/SecCarousel/SecCarousel'
import Staff from './Components/Staff/Staff'
import FollowUs from './Components/FollowUs/FollowUs';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/footer';
import NoMatch from './Components/404Page/NoMatch';



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <div className="specialBrands">
                <Header />
                <FirstCarousel />
                <About title="About Us" />
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
                <Contact />
                <FollowUs />
                <Footer />
            </div>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
