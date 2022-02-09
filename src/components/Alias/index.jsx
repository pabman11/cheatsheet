/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React from 'react'

export default function Alias ({
    alias,
    command,
    explain,
    link,
    className
}) {
    return (
        <article
            className={className}
            key={alias}
        >
            <code>{alias}</code>
            <span>{command}</span>
            <span>{explain}</span>
            <a href={link}>{link}</a>
        </article>
    )
}
