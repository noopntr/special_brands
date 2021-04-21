import './footer.css';
import { useTranslation } from 'react-i18next'

import React from 'react';

import logo from '../../Assets/BrandLogo/BrandLogo.svg';





const UpperFooter = () => {

  
 
  const {t} = useTranslation()
  
  return (
    <div className='upperfooter-holder'>
      <div className="upperfooter-logo">
        <img src={logo} alt="" />
      </div>

      <div className="upperfooter-menu">
        <ul className="nav-links">
          <li>
            <a href="#navbar">{t('NavLinks.part1')}</a>
          </li>
          <li>
            <a href="#about">{t('NavLinks.part2')}</a>
          </li>
          <li>
            <a href="#products">{t('NavLinks.part3')}</a>
          </li>
          <li>
            <a href="/">{t('NavLinks.part4')}</a>
          </li>
          <li className="search-icon">
            <a href="/">{t('NavLinks.part5')}</a>
          </li>
        </ul>
      </div>

      
    </div>
  );
}


export default UpperFooter;