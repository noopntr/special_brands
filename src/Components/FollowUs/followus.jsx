import './followus.css';
import React from 'react';
import InstaSamka from '../../Assets/social-icons/instagram.svg';

import { useTranslation} from 'react-i18next'
 

import img1 from '../../Assets/Imgs/followImgs/img1.png';
import img2 from '../../Assets/Imgs/followImgs/img2.png';
import img3 from '../../Assets/Imgs/followImgs/img3.png';
import img4 from '../../Assets/Imgs/followImgs/img4.png';
import img5 from '../../Assets/Imgs/followImgs/img5.png';
import img6 from '../../Assets/Imgs/followImgs/img6.png';



const FollowUs = () => {
  const {t} = useTranslation()
  
  const followArr = [
    { img: img1, link: 'https://www.instagram.com/' },
    { img: img2, link: 'https://www.instagram.com/' },
    { img: img3, link: 'https://www.instagram.com/' },
    { img: img4, link: 'https://www.instagram.com/' },
    { img: img5, link: 'https://www.instagram.com/' },
    { img: img6, link: 'https://www.instagram.com/' },
  ]

  

  return (
    <div className="follow-holder">
      <h1>{t('Followus.title')}</h1>

      <div className="follow-container">
        {
          followArr.map((e, i) => {
            return (
              
                <div className="follow-card" style={{'width': window.innerWidth/followArr.length}} key={i}>
                  <div style={{filter: 'brightness(0.7)'}}><img src={e.img} alt=""/></div>
                  <div className="follow-hover">
                    <a href={e.link} target="_blank" rel="noreferrer"><img src={InstaSamka} alt="" /></a>
                  </div>
                </div>
              
            );
          })
        }
      </div>
    </div>
  );
}




export default FollowUs;