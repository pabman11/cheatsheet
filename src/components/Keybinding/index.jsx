/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React from 'react'

export default function Keybinding ({
    context,
    key,
    keybinding,
    command,
    when,
    name
}) {
    return (
        <article
            className="grid grid-cols-5 gap-3 odd:bg-red-200 even:bg-red-400 hover:bg-blue-200"
            key={key}
        >
            <span>{context}</span>
            <code>{keybinding}</code>
            <span>{command}</span>
            <span>{when}</span>
            <span>{name}</span>
        </article>
    )
}
