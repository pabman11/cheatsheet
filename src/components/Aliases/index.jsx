import { React, useEffect, useState } from 'react'

import { Modal } from 'react-responsive-modal'
import { nanoid } from 'nanoid'

import Alias from '../Alias'

import 'react-responsive-modal/styles.css'

import ListOfAliasTypes from '../ListOfAliasTypes'

import useCheatFile from '../../utils/useCheatFile'

export default function Aliases () {
    const [aliases, setAliases] = useState([])
    const [textShown, setTextShown] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const cheatFile = useCheatFile()

    useEffect(() => {
        setAliases(cheatFile.file)
        console.log(cheatFile)
    }, [cheatFile])
    const onOpenModal = (text) => {
        setIsOpen(true)
        setTextShown(text)
    }
    const onCloseModal = () => setIsOpen(false)

    const copyToClipboard = (command) => {
        navigator.clipboard.writeText(command)
        onOpenModal(`🍨 Copied to clipboard 🍨 - ${command}`)
    }

    return (
        <>
            <section className="container mx-auto px-4">
                {aliases.map((alias) => (
                    <Alias
                        key={nanoid()}
                        alias={alias.alias}
                        command={alias.command}
                        explain={alias.explain}
                        link={alias.link}
                        customClickEvent={() => {
                            copyToClipboard(alias.alias)
                        }}
                    />
                ))}
            </section>
            <Modal
                open={isOpen}
                onClose={onCloseModal}
                top
                classNames={{
                    modal:
            'w-100 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-green-100 rounded-lg shadow-lg',
                    modalAnimationIn: 'slideToTop',
                    modalAnimationOut: 'fadeOut'
                }}
                animationDuration={500}
                animationOutDuration={200}
            >
                <p>{textShown}</p>
            </Modal>
        </>
    )
}
