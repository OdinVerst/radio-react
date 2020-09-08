import React from "react";

export const ButtonAdd = ({ handler }) => {
  return (
    <button onClick={handler} className="waves-effect waves-light btn orange">
        <i className="material-icons left">add</i>Добавить поле
    </button>
  );
};
