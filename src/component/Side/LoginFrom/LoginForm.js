import React, {Component} from'react'
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Auxi/Auxilliary'
class OrderSumary extends Component{
  //This could be functional component ,it doesn't have to be class component
  componentDidUpdate(){
    console.log('[OrderSumary.js] DidUpdate')
  }
  render() {
    // const ingredientSumary =Object.keys(this.props.ingredients)
    // .map(igKey => {
    //   return <li key={igKey}><span style ={{textTransform:'capitalize '}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
    // })
    return (
      <Aux>
      <h3>Login</h3>
      <input type="text" placeholder="Email"/>
      <input type="text" placeholder="Password"/>
      <p>Not having account sign up</p>
       <Button btnType='Danger' clicked ={this.props.modalClosed }>CANCEL</Button>
       <Button btnType='Success'>Login</Button>
   </Aux>)
    
  }
}

export default OrderSumary