import React, {Component} from 'react';
import UserInput from './Users/UserInput';
import UserOutput from './Users/UserOutput';
import './App.css';
import './Users/Users.css'

class App extends Component {
  
  state = {
    persons: [
      {name: 'Nargiza'}
    ]
  }
  
  
  
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value}
      ]
    })
  }
  render(){
    
    const style = {
      backgroundColor: "blue",
      border: '1px solid green'
    }
    return (
      <div>
        <UserInput 
        name={this.state.persons[0].name} 
        changed={this.nameChangedHandler}/>
        <UserOutput style = {style}/>
      </div>
    )
  }
}

export default App;
