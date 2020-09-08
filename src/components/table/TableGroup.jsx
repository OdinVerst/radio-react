import React, { useState, useEffect } from "react";
import { FiledsGroup } from "./FiledsGroup";
import { ButtonAdd } from "../layout/ButtonAdd";
import { ADD } from "../../const";

export const TableGroup = ({ fileds, title, changeHandler, isFilter }) => {
  const [filedsNomallize, setFiledsNomallize] = useState([]);
  const [isArray, setIsArray] = useState(false);
  useEffect(() => {
    const tempArray = [];
    if (Array.isArray(fileds)) {
      fileds.map((item) => tempArray.push(item));
      setIsArray(true);
    } else {
      tempArray.push(fileds);
      setIsArray(false);
    }
    setFiledsNomallize(tempArray);
  }, [fileds]);

  const addFiledHandler = () => {
    const template = {
        title: '',
        description: ''
    }
    changeHandler(template, null, null, title, ADD);
  }

  return (
    <div className={isFilter ? "col s12 m12 l10" : "col s12 m12 l6"}>
      <div className="card">
        <div className="card-content">
          <span className="card-title">{title}</span>
          {filedsNomallize.map((item, index) => {
            const itemsFiledKey = Object.keys(item);
            return (
              <FiledsGroup
                key={`${index}${Math.random()}`}
                list={itemsFiledKey}
                currentItem={item}
                changeHandler={changeHandler}
                title={title}
                isArray={isArray}
                indexItem={index}
              />
            );
          })}
          {isArray ? <ButtonAdd handler={addFiledHandler} />: null}
        </div>
      </div>
    </div>
  );
};
