import React from "react";
import { Overlay } from "./Modal.styled";
import { Photo } from "./Modal.styled";


const Modal = ({ active, setActive, children }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Overlay onClick={() => setActive(false)}>
      <Photo onClick={handleClick}>
        {children}
      </Photo>
    </Overlay>
  );
};

export default Modal;



// import React, { useEffect } from "react";
// import ReactModal from "react-modal";
// // import style from "../Modal/modal.modul.css"

// ReactModal.setAppElement("#root");

// export const Modal = ({ isOpen, largeImageURL, tags, onClose }) => {
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.keyCode === 27) {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("keydown", handleKeyDown);
//     }

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [isOpen, onClose]);

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <ReactModal
//       isOpen={isOpen}
//       onRequestClose={handleClose}
//       overlayClassName="modal_overlay"
//       className="modal-content"
//     >
//       <img src={largeImageURL} alt={tags} />
//     </ReactModal>
//   );
// };