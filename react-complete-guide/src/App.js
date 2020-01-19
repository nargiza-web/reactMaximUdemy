import React, {Component} from 'react'; //{useState}
import './/Person/Person.css';
import './App.css';
import Person from'./Person/Person';




class App extends Component {
  state = {
    persons: [
      {id:'asdfa1', name: "Max", age: 28}, 
      {id:'bsjki', name: "Manu", age: 29},
      {id: 'nkldm', name:"Stephanie", age:26}
    ],
    otherState: 'some other value',
    showPersons: false
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
    
    this.setState( {
      persons: persons})
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }
  
  render() {
    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    
    let persons = null;
    
    if(this.state.showPersons){
      persons = (
        <div >
        {this.state.persons.map((person, index) => {
          return <Person 
          click = {() => this.deletePersonHandler(index)}
          name={person.name} 
          age = {person.age}
          key = {person.id}
          changed = {(event) => this.nameChangedHandler(event, person.id)}
          />
        })}
      </div> 
      )
    }
    
    return (
      <div className = "App">
        <h1>Hi, I'm React App </h1>
        <p>This is really working</p>
        
        <button 
        style = {style}
        onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
        {persons}
         
      

      </div>
    )
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,"Does this work now?"));
  }
}

export default App;

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