import React from 'react'



export default function ButtonContainer(props) {
    return (
    <button type="button" onClick={props.handleButtonChange}  class={props.class}>{props.text}{props.children}</button>
    
    );
}