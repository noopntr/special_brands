import './footer.css';
import React from 'react';

import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

import topImg from '../../Assets/Imgs/followImgs/top.png';


const bottomFooter = () => {
  return (
    <div className="bottomfooter-holder">
      <div className="social-icons">
        <a href="/" target="_blank" rel="noreferrer">
          <AiFillFacebook color="#1C2C4A"></AiFillFacebook>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <AiOutlineInstagram color="#1C2C4A"></AiOutlineInstagram>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <AiFillYoutube color="#1C2C4A"></AiFillYoutube>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <AiOutlineTwitter color="#1C2C4A"></AiOutlineTwitter>
        </a>
      </div>

      <div className="copyright">
          <p>Copyright 2021 © Special Brands. All rights reserved by <a href="https://nekodev.org/" target="_blank" rel="noreferrer">Nekodev.org</a>.</p>
      </div>

      <div className="toTop">
          <a href="#navbar"><img src={topImg} alt=""/></a>
      </div>
    </div>
  );
}


export default bottomFooter;