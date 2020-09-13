import React, { useState, useEffect, useRef } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";

export const TableInput = ({title, value, id, changeHandler, index, groupName}) => {
    const textArea = useRef();
    const [valueInput, setValueInput] = useState(value);

    const textError = 'Обязательно для заполнения';

    useEffect(()=> {
        M.updateTextFields();
        M.textareaAutoResize(textArea.current)
    }, [])

    const setValue = (newValue) => {
        setValueInput(newValue);
        changeHandler(newValue, title, index, groupName, index);
    }
    return (
        <div className="input-field">
            <label htmlFor={id}>{title}</label>
            <textarea
                id={id}
                ref={textArea}
                type="text"
                name="message"
                className="materialize-textarea validate"
                data-length="120"
                value={valueInput}
                onChange={e => setValue(e.target.value)}
                required
            ></textarea>
            <span className="helper-text" data-error={textError} data-success=""></span>
        </div>
    )
}
