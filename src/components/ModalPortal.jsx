import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ModalPortal({ children }) {
  const [modalContainer, setModalContainer] = useState(null);

  useEffect(() => {
    let el = document.getElementById("modal-root");
    if (!el) {
      el = document.createElement("div");
      el.id = "modal-root";
      document.body.appendChild(el);
    }
    setModalContainer(el);
  }, []);

  if (!modalContainer) return null;

  return createPortal(children, modalContainer);
}
