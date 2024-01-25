import { Component } from "react";
import './index.css';
class CounterApp extends Component{
  state={count:0}
onDecrement=()=> {
  this.setState((prevstate=>({count:prevstate.count-1})))
}

onIncrement=()=> {
  this.setState((prevstate=>({count:prevstate.count+1})))
}
onReset=()=> {
  this.setState({count:0})
}


  render () {
  return(
      <div className="app">
      <h1> Counter App</h1>

      <p>{this.state.count}</p>
      <div className="buttons">

      <button type="button"  className="button"  onClick={this.onIncrement}>+</button> 
      <button type="button" className="button"  onClick={this.onDecrement}>-</button>
      <button type="button" className="button"  onClick={this.onReset}>Reset </button>
    
      </div>
      </div>)
      
  }

}
    



export default CounterApp;
