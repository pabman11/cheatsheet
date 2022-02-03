import { React, useEffect, useState } from "react";
import shortid from "shortid";
import getListOfAliasFiles from "../../services/getListofAliasFiles";
import getCheatFile from "../../services/getListofAliasFiles/getCheatFile";

export default function ListOfAliasTypes() {
  const [aliasFiles, setAliasFiles] = useState([]);

  let aliasTypes = [];
  function setAliasTypes(alias) {
    aliasTypes = alias;
  }
  async function refreshAliasNames() {
    await getListOfAliasFiles().then((res) => setAliasTypes(res));

    setAliasFiles([]);
    await aliasTypes.forEach(async (ghRef) => {
      await getCheatFile({ rawFileName: ghRef.download_url }).then((res) => {
        setAliasFiles((prev) => [...prev, res]);
      });
    });

    // eslint-disable-next-line no-console
    console.log(aliasTypes, aliasFiles);
  }
  useEffect(() => {
    refreshAliasNames();
  }, []);

  return (
    <>
      <h1 className="text-3xl text-center font-bold mb-4">Alias Types</h1>
      <section className="container mx-auto px-4">
        <ul className="list-none flex gap-4">
          {aliasFiles.map((aliasFile) => (
            <li
              className={`text-blue-600 transform hover:scale-110 `}
              key={shortid.generate()}
            >
              {aliasFile.name}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
