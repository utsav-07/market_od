import React from 'react'



export default function ButtonContainer(props) {
    return (
    <button type="button" class={props.class}>{props.text}{props.children}</button>
    
    );
}