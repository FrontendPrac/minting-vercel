import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const node = document.getElementById("modal");

  return createPortal(children, node);
};

export default Portal;
