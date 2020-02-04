import * as actionTypes from './actions';

const initialState = {
  persons: []
}

const reducer = (state=initialState, action ) => {
  switch (action.type){
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), 
        name: 'Max', 
        age: Math.floor(Math.random() * 40 )
      }
      return {
        ...state,
        persons: state.persons.concat(newPerson)
          // {id: Math.random(), name: 'Max', age: Math.floor( Math.random() * 40 )})
      }
      
    case actionTypes.REMOVE_PERSON:
      // const updatedArray = state.persons.filter(person => person.id !== action.personID)
      return{
        ...state,
        persons: state.persons.filter(person => person.id !== action.personId)
      }
  return state;
}
}

export default reducer 