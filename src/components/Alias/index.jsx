import Popup from "../Helpers/Popup";
import { useEffect, useState } from "react";
import Aliases from "../aliases";

export default function Alias({ alias, command, explain, link }) {

  function copyToClipboard(command) {
    navigator.clipboard.writeText(command);

    Aliases.setTextShown("Copied to clipboard! ${command}");
    Aliases.setIsOpen(true);
  }

  return (
    <article
      className={`grid grid-cols-4 gap-3 odd:bg-red-200 even:bg-red-400 hover:bg-blue-200`}
      key={alias}
      onClick={() => copyToClipboard(alias)}
    >
      <code>{alias}</code>
      <span>{command}</span>
      <span>{explain}</span>
      <a href={link}>{link}</a>
    </article>
  );
}
