import reactDom from "react-dom";
import { useEffect, useState } from "react";
import getAliases from "../../services/getAliases";
import Alias from "../Alias";
import Popup from "../Helpers/Popup";

export default function Aliases() {
  const [aliases, setAliases] = useState([]);
  const [textShown, setTextShown] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAliases();
      setAliases(result);
    };

    fetchData();
    
  }, []);
  return (
    <>
      <h1>Aliases</h1>
      <section className={`container mx-auto px-4`}>
        {aliases.map((alias) => (
          <Alias
            key={alias.alias}
            {...alias}
          />
        ))}
      </section>
      <Popup
        selector="popup"
        text={textShown}
        isOpen={isOpen}
        time={2000}
      />
    </>
  );
}
