import React from 'react'

export const ButtonAdd = ({handler}) => {
    return (
        <a onClick={handler} className="waves-effect waves-light btn">Добавить поле</a>
    )
}
