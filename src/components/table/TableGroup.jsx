import React, { useState, useEffect } from "react";
import { TableInput } from "./TableInput";
import { ONE_PARAM } from "../../const";

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
    }
    setFiledsNomallize(tempArray);
  }, [fileds]);

  return (
    <div className={isFilter ? 'col s12 m12 l10': 'col s12 m12 l6'}>
      <div className="card">
        <div className="card-content">
          <span className="card-title">{title}</span>
          {filedsNomallize.map((item) => {
            const itemsFiledKey = Object.keys(item);
            return itemsFiledKey.map((flied, index) => (
              <TableInput
                key={`${flied}_${index}`}
                changeHandler={changeHandler}
                title={flied}
                value={item[flied]}
                id={`${flied}_${index}`}
                index={isArray ? index : ONE_PARAM}
                groupName={title}
              />
            ));
          })}
        </div>
      </div>
    </div>
  );
};
