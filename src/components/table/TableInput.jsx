import React, { useState, useEffect } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";

export const TableInput = ({title, value, id, changeHandler, index, groupName}) => {
    //console.log(item)
    const [valueInput, setValueInput] = useState(value);

    useEffect(()=> {
        M.updateTextFields();
    }, [])

    const setValue = (newValue) => {
        setValueInput(newValue);
        changeHandler(newValue, title, index, groupName);
    }
    return (
        <div className="input-field">
            <label htmlFor={id}>{title}</label>
            <input
                id={id}
                type="text"
                name="message"
                value={valueInput}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    )
}
