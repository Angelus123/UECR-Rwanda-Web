import React from 'react'
import burgerLog from '../../assets/Logo/burger-logo.png.png'
import './Logo.css'
const logo = (props) => (
<div className= 'Logo' style={{height:props.height}}>
    
    <img src ={burgerLog} alt ="MyBurger" />
</div>
)
export default logo