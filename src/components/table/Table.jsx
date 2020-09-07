import React, { Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import { TableGroup } from "./TableGroup";
import { Button } from "../layout/Button";
import { URL_POST, ONE_PARAM } from "../../const";

export const Table = ({ data }) => {
  const keyNameTable = Object.keys(data);
  const wrapData = data;

  const submitHandler = (evt) => {
    evt.preventDefault();
    fetch(URL_POST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {

        M.toast({html: 'Успешно сохранено!'})
        console.log(data);
      });
  };

  const changeHandler = (newValue, title, index, group) => {
    if (index === ONE_PARAM) {
      wrapData[group][title] = newValue;
    } else {
      wrapData[group][index][title] = newValue;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        {keyNameTable.map((item, key) => {
          return (
            <Fragment key={key}>
              <TableGroup
                fileds={data[item]}
                title={item}
                changeHandler={changeHandler}
              />
            </Fragment>
          );
        })}
      </div>
      <Button />
    </form>
  );
};
