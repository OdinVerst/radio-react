import React from "react";

export const ButtonDelete = ({ handler }) => {
  return (
    <button
      type="button"
      onClick={handler}
      className="btn-floating btn-small remove-btn waves-effect waves-light red"
    >
      <i className="material-icons">delete</i>
    </button>
  );
};
