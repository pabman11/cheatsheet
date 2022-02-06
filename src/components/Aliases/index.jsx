import { React, useEffect, useState, useContext } from 'react'

import { Modal } from 'react-responsive-modal'
import { nanoid } from 'nanoid'

import getListOfAliasFiles from '../../services/getListofAliasFiles'
import Alias from '../Alias'

import 'react-responsive-modal/styles.css'

import ListOfAliasTypes from '../ListOfAliasTypes'

export default function Aliases () {
    const [aliases, setAliases] = useState([])
    const [textShown, setTextShown] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const fetchData = () =>
            getListOfAliasFiles().then((res) => setAliases(res))

        fetchData()
    }, [])

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
            <ListOfAliasTypes />
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
