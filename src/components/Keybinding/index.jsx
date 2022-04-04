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
            data-context={context}
        >
            <span className='pl-2 block'><span className='sm:hidden after:content-[":"] mr-1 font-bold'>Context</span>{context}</span>
            <code className='break-all block'><span className='sm:hidden after:content-[":"] mr-1 font-bold'>Keybinding</span>{keybinding}</code>
            <span className='break-all block'><span className='sm:hidden after:content-[":"] mr-1 font-bold'>Command</span>{command}</span>
            <span className='break-all block'><span className='sm:hidden after:content-[":"] mr-1 font-bold'>When</span>{when}</span>
            <span className='break-all block'><span className='sm:hidden after:content-[":"] mr-1 font-bold'>Name</span>{name}</span>
        </article>
    )
}
