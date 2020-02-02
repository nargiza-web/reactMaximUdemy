import React, {Component} from 'react'
import classes from './Person.css'
//import styled from 'styled-components'
//import './Person.css'
// import Radium from 'radium'

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: auto;
//     border:1 px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;
  
//   @media(min-width: 500px){
//     width: 450px;
//   } 
// `;

class Person extends Component{
  render () {
    console.log('[Person.js] rendering...')
    return (
      <div className = {classes.Person}>
         <p onClick= {this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>
         <p>{this.props.children}</p>
         <input type = "text" onChange = {this.props.changed} value={this.props.name}/>
      </div>
     )
  }
} 
  
export default Person