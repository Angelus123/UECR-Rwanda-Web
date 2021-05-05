import React, {Component} from 'react'
import './style/ustyle.css'
import Header from '../component/Header/Header'
import Slide from '../component/SlideImg/SlideImg'
import Side from '../component/Side/Side'
import AboutUECR from '../component/AboutUECR/AboutUECR'
import AboutRCCI from '../component/AboutRCCI/AboutRCCI'
import AboutRCC from '../component/AboutRCC/AboutRCC'
import WelcUECR from '../component/WelcUECR/WelcUECR'
import WelcUECR_8 from '../component/WelcUECR_8/WelcUECR_8'
import WelcUECR_9 from '../component/WelcUECR_9/WelcUECR_9'
import WeekSaint from '../component/WeekSaint/WeekSaint'
import WeekVersel from '../component/WeekVersel/WeekVersel'
import SevenGift from '../component/SevenGift/SevenGift'
import UECRZone from '../component/UECRZone/UECRZone'
import Footer from '../component/Footer/Footer'
import Layout from '../hoc/Layout/Layout'
import Login from '../component/UI/Login/Login'
import Register from '../component/UI/Register/Register'
import LoginFrom from '../component/Side/LoginFrom/LoginForm'
import RegisterFrom from '../component/Side/RegisterForm/RegisterForm'
class App extends Component{
    state ={
        loginClicked:false,
        registerClicked:false
    }
    loginClickedHandle= ()=>{
        const login = this.state.loginClicked
   this.setState({loginClicked:!login})
    }

    registerClickedHandle= ()=>{
        const register = this.state.registerClicked
   this.setState({registerClicked:!register})
    }
    render(){

        return(             
            <Layout>
                <div className="container">
                    <Header />
                    <Slide />
                    <Side
                     login={this.loginClickedHandle}
                     register={this.registerClickedHandle}/>
                    <Login 
                        show ={this.state.loginClicked} 
                        loginClosed ={this.loginClickedHandle}>
                        <LoginFrom/>
                    </Login>


                    <Register
                        show ={this.state.registerClicked} 
                        registerClosed ={this.registerClickedHandle}>
                        <RegisterFrom 
                        login={this.loginClickedHandle}
                        registerClosed ={this.registerClickedHandle}
                        />
                    </Register>
                    <AboutUECR />
                    <AboutRCCI />
                    <AboutRCC />                       
                    <WelcUECR />
                    <WelcUECR_8 /> 
                    <WelcUECR_9 />
                    <WeekSaint />
                    <WeekVersel />
                    <SevenGift/>
                    <UECRZone/>
                    <Footer />
                </div>
            </Layout>                
        ) 
    }
}
export default App