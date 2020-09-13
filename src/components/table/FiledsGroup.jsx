import React from 'react'
import { TableInput } from './TableInput'
import { ONE_PARAM, DELETE } from '../../const'
import { ButtonDelete } from '../layout/ButtonDelete'

export const FiledsGroup = ({list, currentItem, changeHandler, isArray, title, indexItem, isLast = false}) => {
    const deleteHandler = () => {
        changeHandler(null, null, indexItem, title, DELETE);
    }

    return (
        <div className="filled-group">
            {isArray && !isLast ? <ButtonDelete handler={deleteHandler}/>: null}
            {list.map((flied, index) => (
              <TableInput
                key={`${index}${Math.random()}`}
                changeHandler={changeHandler}
                title={flied}
                value={currentItem[flied]}
                id={`${flied}_${indexItem}`}
                index={isArray ? indexItem : ONE_PARAM}
                groupName={title}
              />
            ))}
        </div>
    )
}
