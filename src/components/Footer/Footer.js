import React from 'react';
import './Footer.css';


export default function Footer() {
  return (
    <div className= 'footerContainer'>
      <div classname='contactIconsContainer'>

        <a href='mailto:&#115;&#116;&#101;&#118;&#101;&#110;&#119;&#098;&#117;&#108;&#108;&#106;&#114;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;'
        target='_blank'
        rel="noopener noreferrer">
          <ion-icon name="mail" classname='contactIcons'></ion-icon>
        </a>

        <a href='https://www.linkedin.com/in/stevenwbull/'
        target='_blank'
        rel="noopener noreferrer">
          <ion-icon name="logo-linkedin" classname='contactIcons'></ion-icon>
        </a>

        <a href='https://github.com/StevenWBull'
        target='_blank'
        rel="noopener noreferrer">
          <ion-icon name="logo-github" classname='contactIcons'></ion-icon>
        </a>
  
      </div>
      <p>Steven Bull | 2019</p>
    </div>
  )
}