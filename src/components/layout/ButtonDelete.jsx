import React from 'react'

export const ButtonDelete = ({handler}) => {
    return (
        <a onClick={handler} className="btn-floating remove-btn waves-effect waves-light red"><i className="material-icons">delete</i></a>
    )
}
