import React from "react";

export const ButtonAdd = ({ handler }) => {
  return (
    <button onClick={handler} className="waves-effect waves-light btn">
      Добавить поле
    </button>
  );
};
