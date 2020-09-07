import React, { Fragment, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import { TableGroup } from "./TableGroup";
import { Button } from "../layout/Button";
import { URL_POST, ONE_PARAM } from "../../const";
import { Tabs } from "../layout/Tabs";

export const Table = ({ data }) => {
    const [currentTab, setCurrentTab] = useState("all");
    const [dataState, setDataState] = useState(data);
    const wrapData = dataState;


    const sendData = (data) => {
        fetch(URL_POST, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((newData) => {
              M.toast({ html: "Успешно сохранено!" });
              setDataState(newData)
              
            });
    }

  const submitHandler = (evt) => {
    evt.preventDefault();
    sendData(dataState);
  };

  const changeHandler = (newValue, title, index, group, isDel) => {
      console.log(index);
    if (isDel) {
        wrapData[group].splice(index, 1);
        sendData(wrapData)
    }else if (index === ONE_PARAM) {
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
      <Tabs names={Object.keys(dataState)} changeTab={changeTab} />
      <form onSubmit={submitHandler}>
        <div className={currentTab === "all" ? "row": "row row-flex"}>
          {currentTab === "all" ? (
            Object.keys(dataState).map((item, key) => {
              return (
                  <TableGroup
                    key={`${key}${Math.random()}`}
                    fileds={dataState[item]}
                    title={item}
                    changeHandler={changeHandler}
                  />
              );
            })
          ) : (
            <TableGroup
              fileds={dataState[currentTab]}
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
