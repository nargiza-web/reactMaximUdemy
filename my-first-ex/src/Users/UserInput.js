import React from 'react'

const userInput = (props) => {
  return (
    <div>
    <p>Hi {props.name}</p>
      <input type="text" onChange = {props.changed} value = {props.name} />
    </div>
  )
}

export default userInput