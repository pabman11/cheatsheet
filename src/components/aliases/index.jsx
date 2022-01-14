import { useEffect, useState } from "react";
import getAliases from "../../services/getAliases";
import Alias from "../Alias";

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

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
    console.log("Copied to clipboard: " + command);
    onOpenModal('Copied! 🎉'+ command);
  }

  return (
    <>
      <h1>Aliases</h1>
      <section className={`container mx-auto px-4`}>
        {aliases.map((alias) => (
          <Alias
            key={alias.alias}
            {...alias}
            customClickEvent={() => { copyToClipboard(alias.alias); }}
          />
        ))}
      </section>
      <Modal open={isOpen} onClose={onCloseModal} center classNames={{
          modal: 'w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5',
        }}
>
        <p>
        {textShown}
        </p>
      </Modal>
    </>
  );
}
