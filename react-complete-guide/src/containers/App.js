import React, {Component} from 'react'; //{useState}
import './components/Persons/Person.css';
import classes from './App.css';
import Persons from'../components/Persons/Persons';
import styled from 'styled-components'
import Cockpit from '../components/Cockpit/Cockpit'

//import Radium, {StyleRoot} from 'radium'

// const StyledButton = styled.button`

// background-color: ${props => props.alt ? 'red' : 'green'};
//       color: white;
//       font: inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;
      
//       &:hover {
//         background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//         color: black; }

// `

class App extends Component {
  constructor(props){
    super(props)
    console.log('[App.js] constructor')
  }
  
  
  state = {
    persons: [
      {id:'asdfa1', name: "Max", age: 28}, 
      {id:'bsjki', name: "Manu", age: 29},
      {id: 'nkldm', name:"Stephanie", age:26}
    ],
    otherState: 'some other value',
    showPersons: false
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }
  
  // switchNameHandler = (newName) => {
  //   console.log('Was clicked!');
  //   this.setState({
  //     persons: [
  //     {name: newName, age: 28}, 
  //     {name: "Manu", age: 29},
  //     {name:"Stephanie", age:27}
  //     ]
  //   })
  // }
  
  componentDidMount() {
    console.log('[App.js] componentDidMount' )
  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate')
    return true
  }
  
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    }
   // const person = Object.assign({}, this.state.persons[personIndex])
   
   person.name = event.target.value
   
   const persons = [...this.state.persons]
   persons[personIndex] = person
    
    this.setState( {persons: persons})
  }
  
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  
  render() {    
    console.log('[App.js] render')
    let persons = null;
    if(this.state.showPersons){
      persons = 
          <Persons persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}/>
      // style.backgroundColor = 'red'
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }
    

    
    return (
      //<StyleRoot>
          <div className = {classes.App}>
          <Cockpit 
              title = {this.props.appTitle}
              showPersons = {this.state.showPersons}
              persons={this.state.persons} 
              clicked = {this.togglePersonsHandler}/>
          {persons}
          </div>
     // </StyleRoot>

    )
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,"Does this work now?"));
  }
}

export default App;



//export default Radium(App);

// <button 
//style = {style}
//onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
// <button onClick = {() => this.switchNameHandler('Maximilian!!')}

// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       {name: "Max", age: 28}, 
//       {name: "Manu", age: 29},
//       {name:"Stephanie", age:26}
//     ],
//     otherState: 'some other value'
// })

// const [otherState, setOtherState] = useState('some other value')


// console.log(personsState, otherState)

//     const switchNameHandler = () => {
//     console.log('Was clicked!');
//     setPersonsState({
//       persons: [
//       {name: "Maximillian", age: 28}, 
//       {name: "Manu", age: 29},
//       {name:"Stephanie", age:27}
//       ]
//       //otherState: personsState.otherState
//     })
//   }
//     return (
//       <div className = "App">
//         <h1>Hi, I'm React App </h1>
//         <p>This is really working</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies: Racing </Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//       </div>
//     )
//     // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,"Does this work now?"));
  
// }

// export default App;