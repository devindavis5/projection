import React, { useState } from 'react';
import { Card, ListGroupItem, Table, Form, Row, Col, Button } from 'react-bootstrap';
import X from '../assets/x.png'
import X2 from '../assets/x2.png'
import Check from '../assets/check.png'

const ProjectContact = ({contact, projectId, deleteContact, updateContact}) => {
    const [formShow, setFormShow] = useState(false)
    const [name, setName] = useState(contact.name)
    const [email, setEmail] = useState(contact.email)
    const [phone, setPhone] = useState(contact.phone)
    const [notes, setNotes] = useState(contact.notes)
    const contactId = contact.id

    const deleteProjectContact = () => {
        deleteContact(contact, projectId)
    }

    const contactSubmit = (e) => {
        e.preventDefault()
        const contactData = {
            name: name,
            email: email,
            phone: phone,
            notes: notes
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
    
    return (
        <>
        <tr >
        {!formShow ?    
        <td style={{width: "12%"}} onClick={() => resetEditForm()} className="align-middle"><strong>{contact.name}</strong></td>  
        : 
        <td style={{width: "12%"}} className="align-middle">
        <Form.Control value={name} onChange={e => setName(e.target.value)}/>
        </td>
        } 
        {!formShow ? 
        <td style={{width: "16%"}} onClick={() => resetEditForm()} className="align-middle">{contact.email}</td>
        :
        <td style={{width: "17%"}} className="align-middle">
        <Form.Control value={email} onChange={e => setEmail(e.target.value)}/> 
        </td>
        }
        {!formShow ? 
        <td style={{width: "10%"}} onClick={() => resetEditForm()} className="align-middle">{contact.phone}</td>
        :
        <td style={{width: "13%"}} className="align-middle">
        <Form.Control value={phone} onChange={e => setPhone(e.target.value)}/> 
        </td>
        }
        {!formShow ? 
        <td style={{width: "60%"}} onClick={() => resetEditForm()} className="align-middle">{contact.notes}</td>
        :
        <td style={{width: "60%"}} className="align-middle">
        <Form.Control as="textarea" rows={2} value={notes} onChange={e => setNotes(e.target.value)}/> 
        </td>
        }
        {!formShow ?
        <td className="align-middle"size="sm" style={{ textAlign:"right" }}><img width="15" onClick={() => deleteProjectContact()} height="20" alt="archive" src={X}/></td>
        :
        <td className="align-middle"size="sm" style={{ textAlign:"right" }}>
         <img width="13" onClick={e => contactSubmit(e)} height="18" alt="archive" src={Check}/>
         <br/><br/>
         <img width="15" onClick={() => resetForm()} height="20" alt="archive" src={X2}/>
        </td>
        }
        </tr> 
        </>
    )
    
}

export default ProjectContact