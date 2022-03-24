import React, { useState } from "react";

const Input = (props:any) => {
    const [userInput, setUserInput] = useState('');

    function removeUserInput() {
        setUserInput('')
    }

    return (
        <div>
            <input type="text" placeholder="New Project" value={props.userInput} onChange={ (event) => setUserInput(event.target.value)} />
            <span onClick={ () => {props.addToDo(userInput); removeUserInput()} }/>Add Project
            
        </div>
    )
}

export default Input;