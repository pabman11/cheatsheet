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
            <code className='pl-2 '><span className='sm:hidden after:content-[":"] mr-1 font-bold'>Alias</span>{alias}</code>
            <span className='break-all'><span className='sm:hidden after:content-[":"] mr-1 font-bold'>Command</span>{command}</span>
            <span className='break-all'><span className='sm:hidden after:content-[":"] mr-1 font-bold'>Explain</span>{explain}</span>
            <a href={link} className='break-all'><span className='sm:hidden after:content-[":"] mr-1 font-bold' >Link</span>{link}</a>
        </article>
    )
}
