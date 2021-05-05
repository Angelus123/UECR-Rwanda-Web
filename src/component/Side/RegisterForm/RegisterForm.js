import React, {Component} from'react'
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Auxi/Auxilliary'
class RegisterForm extends Component{
  //This could be functional component ,it doesn't have to be class component
  componentDidUpdate(){
    console.log('[OrderSumary.js] DidUpdate')
  }
  render() {
   
    return (
      <Aux>
      <div style ={{textAlign:'center'}}>
      <h3>Register</h3>
      <form action= "post">
        <input type="text" placeholder="Full Name"/>
        <input type="text" placeholder="Phone"/>
        <input type="text" placeholder="Name of Group"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
      </form>

        
      <div>Already have account <button onClick={this.props.login}>
        Login</button></div>
       <Button btnType='Danger' clicked ={this.props.modalClosed }>CANCEL</Button>
       <Button btnType='Success'>Login</Button>
      </div>
   </Aux>)
    
  }
}

export default RegisterForm