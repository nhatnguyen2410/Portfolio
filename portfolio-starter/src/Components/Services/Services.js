import React from 'react'
import '../Services/Service.css';

import HeartEmoji  from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';


function Services() {
  return (
    <div className="services">

        {/* {left side} */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <spane>
                Lorem ispum is simpley dummy text of printing of printing Lorem 
                <br/>
                ispum is simpley dummy text of printing
            </spane>

            <div className="button s-button">Download CV</div>
            <div className='blur s-blur' style={{background:"#ABF1FF94"}}>

            </div>
        </div>

        {/* {right side} */}
        <div className='cards'>
            I am right side
        </div>
    </div>
  )
}

export default Services