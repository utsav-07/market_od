import React from 'react'

export default function TextFieldContainer(props) {
    return (
        <div class="form-outline mb-4">
            <input type={props.type} class="form-control" />
            <label class="form-label">{props.text}</label>
        </div>
    )
}
