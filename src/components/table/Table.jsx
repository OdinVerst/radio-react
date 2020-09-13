import React, { Fragment, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import { TableGroup } from "./TableGroup";
import { Button } from "../layout/Button";
import { URL_POST, ONE_PARAM, DELETE, ADD } from "../../const";
import { Tabs } from "../layout/Tabs";
import { PopupNewItem } from "./PopupNewItem";

export const Table = ({ data }) => {
  const [dataState, setDataState] = useState(data);
  const [currentTab, setCurrentTab] = useState(Object.keys(dataState)[0]);
  const [modal, setModal] = useState(false);
  const wrapData = dataState;

  const sendData = (data, text = "Успешно сохранено!") => {
    fetch(URL_POST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((newData) => {
        M.toast({ html: text });
        setDataState(newData);
      });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    sendData(dataState);
  };

  const changeModal = () => {
    setModal(!modal);
  };

  const setNewItem = (item) => {
    changeHandler(item, null, null, 'contacts', ADD);
    changeModal();
  }

  const changeHandler = (newValue, title, index, group, type) => {
    switch (type) {
      case DELETE:
        wrapData[group].splice(index, 1);
        sendData(wrapData, "Успешно удалено!");
        return;
      case ADD:
        wrapData[group].push(newValue);
        sendData(wrapData, "Успешно добавлено!");
        return;
      case ONE_PARAM:
        wrapData[group][title] = newValue;
        return;
      default:
        wrapData[group][index][title] = newValue;
        return;
    }
  };

  const changeTab = (newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Fragment>
      <Tabs names={Object.keys(dataState)} changeTab={changeTab} />
      <form onSubmit={submitHandler}>
        <div className={currentTab === "all" ? "row" : "row row-flex"}>
          {currentTab === "all" ? (
            Object.keys(dataState).map((item, key) => {
              return (
                <TableGroup
                  key={`${key}${Math.random()}`}
                  fileds={dataState[item]}
                  title={item}
                  changeHandler={changeHandler}
                  changeModal={changeModal}
                />
              );
            })
          ) : (
            <TableGroup
              fileds={dataState[currentTab]}
              title={currentTab}
              isFilter
              changeHandler={changeHandler}
              changeModal={changeModal}
            />
          )}
        </div>
        <Button />
      </form>
      <PopupNewItem modal={modal} changeModal={changeModal} changeValue={setNewItem} />
    </Fragment>
  );
};
