import React from 'react'
import bible from'../../assets/bible.jpg'
import rukara from'../../assets/rukaraInside.jpg'

import './AboutRCC.css'

const AboutRCC = () => {
    return(

<div className="item item--6" >
      <div  className="itema2">    
        <h3>RCC</h3>
        <hr color="lightgray" />
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              
                <a href="http://">More</a>  
            </p>
        </div>
        <img src={rukara} alt="" srcSet=""className="img0" />
            
    </div>
    )
}
export default AboutRCC