/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React from 'react'

export default function Alias ({
    alias,
    command,
    explain,
    link,
    customClickEvent
}) {
    return (
        <article
            className="grid grid-cols-4 gap-3 odd:bg-red-200 even:bg-red-400 hover:bg-blue-200"
            key={alias}
            onClick={customClickEvent}
        >
            <code>{alias}</code>
            <span>{command}</span>
            <span>{explain}</span>
            <a href={link}>{link}</a>
        </article>
    )
}
