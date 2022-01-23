import { useEffect, useState } from "react";
import getAliases from "../../services/getAliases";
import Alias from "../Alias";

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ListOfAliasTypes from "../ListOfAliasTypes";

export default function Aliases() {
  const [aliases, setAliases] = useState([]);
  const [textShown, setTextShown] = useState("");
  const [isOpen, setIsOpen] = useState(false);


  const onOpenModal = (text) => {
    setIsOpen(true)
    setTextShown(text)
  };
  const onCloseModal = () => setIsOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAliases();
      setAliases(result);
    };

    fetchData();
    
  }, []);

  const copyToClipboard = (command) => {
    navigator.clipboard.writeText(command);
    onOpenModal('🍨 Copied to clipboard 🍨 - ' + command);
  }

  return (
    <>
      <ListOfAliasTypes />

    </>
  );
}
