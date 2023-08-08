import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    location.reload();
  };

  console.log("isOpen: ", isOpen);

  return { isOpen, open, close };
};

export default useModal;
