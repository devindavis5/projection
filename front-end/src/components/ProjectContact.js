import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import X from '../assets/x.png'
import X2 from '../assets/x2.png'
import Check from '../assets/check.png'
import Archive from '../assets/archive4.png'
import Download from '../assets/download.png'

const ProjectContact = ({ contact, deleteContact, updateContact }) => {
    const [formShow, setFormShow] = useState(false)
    const [name, setName] = useState(contact.name)
    const [email, setEmail] = useState(contact.email)
    const [phone, setPhone] = useState(contact.phone)
    const [notes, setNotes] = useState(contact.notes)
    const [archived, setArchived] = useState(contact.archived)
    const contactId = contact.id

    const deleteProjectContact = () => {
        deleteContact(contact)
    }

    const contactSubmit = (e) => {
        e.preventDefault()
        const contactData = {
            name: name,
            email: email,
            phone: phone,
            notes: notes,
            archived: archived
        }
        updateContact(contactId, contactData)
        resetForm()
    }

    const resetForm = () => {
        setFormShow(false)
        setName(contact.name)
        setEmail(contact.email)
        setPhone(contact.phone)
        setNotes(contact.notes)
    }

    const resetEditForm = () => {
        setName(contact.name)
        setEmail(contact.email)
        setPhone(contact.phone)
        setNotes(contact.notes)
        setFormShow(!formShow)
    }

    const toggleContactArchive = (e) => {
        const contactData = {
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            notes: contact.notes,
            archived: !contact.archived,
            id: contactId
        }
        updateContact(contactId, contactData)
        resetForm()
        setArchived(contact.archived)
    }

    const findSource = () => {
        let source
        if (!archived) {
            source = Archive
        } else {
            source = Download
        }
        return source
    }

    return (
        <>
            <tr >
                {!formShow ?
                    <td style={{ width: "12%" }} onClick={() => resetEditForm()} className="align-middle"><strong>{contact.name}</strong></td>
                    :
                    <td style={{ width: "12%" }} className="align-middle">
                        <Form.Control value={name} onChange={e => setName(e.target.value)} />
                    </td>
                }
                {!formShow ?
                    <td style={{ width: "16%" }} onClick={() => resetEditForm()} className="align-middle">{contact.email}</td>
                    :
                    <td style={{ width: "17%" }} className="align-middle">
                        <Form.Control value={email} onChange={e => setEmail(e.target.value)} />
                    </td>
                }
                {!formShow ?
                    <td style={{ width: "13%" }} onClick={() => resetEditForm()} className="align-middle">{contact.phone}</td>
                    :
                    <td style={{ width: "13%" }} className="align-middle">
                        <Form.Control value={phone} onChange={e => setPhone(e.target.value)} />
                    </td>
                }
                {!formShow ?
                    <td style={{ width: "60%" }} onClick={() => resetEditForm()} className="align-middle">{contact.notes}</td>
                    :
                    <td style={{ width: "60%" }} className="align-middle">
                        <Form.Control as="textarea" rows={2} value={notes} onChange={e => setNotes(e.target.value)} />
                    </td>
                }
                {!formShow ?
                    <td className="align-middle" size="sm" style={{ textAlign: "right" }}><img className="button2" width="25" onClick={(e) => toggleContactArchive(e)} height="25" alt="archive" src={findSource()} /></td>
                    :
                    <td className="align-middle" size="sm" style={{ textAlign: "right" }}>
                        <img width="13" onClick={e => contactSubmit(e)} height="18" alt="archive" className="button" src={Check} />
                        <br /><br />
                        <img width="15" onClick={() => resetForm()} height="20" alt="archive" className="button" src={X2} />
                    </td>
                }
                {archived && !formShow ?
                    <td className="align-middle button2" id="archive-x" size="sm" style={{ textAlign: "right" }}><img onClick={() => deleteProjectContact()} width="15" height="20" alt="archive" src={X} /></td>
                    :
                    null
                }
            </tr>
        </>
    )

}

export default ProjectContact