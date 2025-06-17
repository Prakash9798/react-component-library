import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  toggleModal } from "../features/ModalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.Modal.isVisible);
  return (
    <>
      {isVisible && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          laudantium animi quibusdam nihil beatae vel quod deleniti quo repellat
          autem.
        </p>
      )}
      <button onClick={()=>dispatch(toggleModal())}>ToggleModal</button>
    </>
  );
};
export default Modal;
