import React from 'react'
import logo from'../../assets/Bible1.png'
import '../../style/ustyle.css'
const Slide = () => {
    let slideIndex = 0;
    
        
    function carousel() {
      let i;
     const x = document.getElementsByclassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1} 
      x[slideIndex-1].style.display = "block"; 
      setTimeout(carousel, 4000); 
    }
    const style = {
        backgroundColor: '#1c012052',
        border: '2px solid #007',
        // padding: '10px 0 5px 0',
        // margin: '10px 0 -5px 0',
        color: 'white',
        padding: '0px 10% 0px 5%',
        // cursor: 'pointer'
    }
    const box = {
      
    }
    const hr = {
        boxShadow: 'float: left',
    }
    return(
        <div className="item item--2">
        <img className="mySlides" src={logo}/> 
     

        
        <div style={style} >
            <h1  style ={box}>Welcome to UECR</h1>
            <hr color="red" width="25%" />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sapiente ex molestiae quam culpa consectetur beatae expedita,
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sapiente ex molestiae quam culpa consectetur beatae expedita.
                
                </p>
                
         </div>
<hr color="aliceblue"/>
<h2>Unite des Etudiants Charsmatique au Rwanda</h2>
    </div>
    )
}
export default Slide