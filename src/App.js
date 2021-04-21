import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import FirstCarousel from './Components/FirstCarousel/FirstCarousel';
import About from './Components/About/About';
import OurJuice from './Components/OurJuice/OurJuice';
// import SecCarousel from './Components/SecCarousel/SecCarousel'
import Staff from './Components/Staff/Staff'
import FollowUs from './Components/FollowUs/followus';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/footer';
import NoMatch from './Components/404Page/NoMatch';
import React, { useState, useEffect } from 'react'


import Lottie from 'react-lottie';
import * as animationData from './Assets/mango.json'





function App() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, []);

  const anim = (<div style={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Lottie options={defaultOptions}
     height={400}
     width={400}/>
  </div>);

  const [loading, setLoading] = useState(false)

  const mainContent = (<Router>
    <div>
      <Switch>
        <Route exact path='/'>
          <div className="specialBrands">
            <Header />
            <FirstCarousel />
            <About />
            <OurJuice />
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
  </Router>)

  return (
    <div>
      {loading ? (anim) : (mainContent)}
    </div>
  );
}

export default App;
