import React, { Fragment, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import { TableGroup } from "./TableGroup";
import { Button } from "../layout/Button";
import { URL_POST, ONE_PARAM } from "../../const";
import { Tabs } from "../layout/Tabs";

export const Table = ({ data }) => {
  const keyNameTable = Object.keys(data);
  const wrapData = data;
  const [currentTab, setCurrentTab] = useState("all");

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
        M.toast({ html: "Успешно сохранено!" });
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

  const changeTab = (newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Fragment>
      <Tabs names={keyNameTable} changeTab={changeTab} />
      <form onSubmit={submitHandler}>
        <div className={currentTab === "all" ? "row": "row row-flex"}>
          {currentTab === "all" ? (
            keyNameTable.map((item, key) => {
              return (
                <Fragment key={key}>
                  <TableGroup
                    fileds={data[item]}
                    title={item}
                    changeHandler={changeHandler}
                  />
                </Fragment>
              );
            })
          ) : (
            <TableGroup
              fileds={data[currentTab]}
              title={currentTab}
              isFilter
              changeHandler={changeHandler}
            />
          )}
        </div>
        <Button />
      </form>
    </Fragment>
  );
};
