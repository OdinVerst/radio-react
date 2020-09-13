import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export const PopupNewItem = ({ modal, changeModal, changeValue }) => {
  const modalEl = useRef();
  const [formData, setFormData] = useState({
      title: '',
      description: ''
  });
  
  const changeHandler = (evt) => {
      evt.persist();
      setFormData((prev) => ({...prev, [evt.target.name]: evt.target.value}));
  }

  const submitHandel = (evt) => {
      evt.preventDefault();
      document.querySelector('.modal-overlay').click();
      changeValue(formData);
      setFormData({
        title: '',
        description: ''
    });
  }

  useEffect(() => {
    const modalInit = M.Modal.init(modalEl.current, {
      onCloseEnd: changeModal,
    });
    if (modal) modalInit.open();
  }, [modal, changeModal]);

  const textError = 'Обязательно для заполнения';

  return (
    <div id="new-item" ref={modalEl} className="modal">
      <div className="modal-content">
        <h4>Добавить новое поле</h4>
        <form onSubmit={submitHandel}>
          <div className="input-field">
            <label htmlFor='sdd'>Title</label>
            <input
              id={'sdd'}
              type="text"
              name="title"
              className="materialize-textarea validate"
              value={formData.title}
              onChange={changeHandler}
              required
            />
            <span
              className="helper-text"
              data-error={textError}
              data-success=""
            ></span>
          </div>
          <div className="input-field">
            <label htmlFor='sdd2'>Description</label>
            <input
              id={'sdd2'}
              type="text"
              name="description"
              className="materialize-textarea validate"
              value={formData.description}
              onChange={changeHandler}
              required
            />
            <span
              className="helper-text"
              data-error={textError}
              data-success=""
            ></span>
          </div>
          <button className="btn waves-effect waves-light" type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
};
