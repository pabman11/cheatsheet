/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React from 'react'
import { nanoid } from 'nanoid'

export default function Keybinding ({
    context,
    keybinding,
    command,
    when,
    name,
    className
}) {
    return (
        <article
            className={className}
            key={nanoid()}
        >
            <span className='pl-2'>{context}</span>
            <code>{keybinding}</code>
            <span>{command}</span>
            <span>{when}</span>
            <span>{name}</span>
        </article>
    )
}
