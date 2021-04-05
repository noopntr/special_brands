import './footer.css';
import React from 'react';
import UpperFooter from './upperfooter';
import BottomFooter from './bottomfooter';


const Footer = () => {
  return (
    <div className='footer-holder'>
        <UpperFooter></UpperFooter>
        <BottomFooter></BottomFooter>
    </div>
  );
}

export default Footer;