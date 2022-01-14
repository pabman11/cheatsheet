import { Transition } from "@tailwindui/react";
import { useState, useEffect } from "react";

function Popup({ selector, text, time, isOpen }) {
  const [opened, setIsOpened] = useState(isOpen);
  const [textShown, setTextShown] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpened(false);
    }, time);
  }, []);

  return (
    <Transition
      id={selector}
      show={opened}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={`w-1/2 bg-blue-200 rounded-md text-center font-bold`}>
        {textShown}
      </div>
    </Transition>
  );
}

export default Popup;
