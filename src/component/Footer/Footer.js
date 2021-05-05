import React from 'react'
import facebook from'../../assets/facebook.png'
import whatsapp from'../../assets/whatsapp.png'
import twitter from'../../assets/twitter.png'
import instagram from'../../assets/instagram.png'

const Footer= () => {
    return(
<div class="item item--18">

<div class="footer">
  <a href="http://" class="nav"> About Us </a>
  <br/>
  <a href="http://" class="nav">faq</a>
  <br/>
  <a href="http://" class="nav"> Language  </a>
  <br/>
  <a href="http://" class="nav">Anouncement</a>  
</div> 

<div class="footer">
 
  <a href="http://" class="nav">contact</a> 
  <br/>
  <img src={facebook} alt="" srcset="" class="contact-icon" />
       
  <img src={whatsapp} alt="" srcset=""class="contact-icon" />

  <img src={twitter} alt="" srcset=""id="contact_icon-blue"/>

   <img src={instagram} alt="" srcset=""class="contact-icon"/>
</div> 
    
<div class="footer">
  <form action="" method="get">
  <input type="text" name="fullname"  placeholder="Your fullname" />
  <input type="email" name="email"  placeholder="E-mail"/>
  <br/><br/>
  <button type="submit" class="submit">Subscribe</button>
  </form>
  <br/>

<div class="footer">
&#169 UECR Rwanda 2020 All right reserved 
</div> 
         
</div>

</div>

)
}
export default Footer