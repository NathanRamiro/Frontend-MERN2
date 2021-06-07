import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import {MdAccountBox, MdAdd, MdEdit, MdDelete, MdHelpOutline, MdPeople} from 'react-icons/md'

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            
                <Navbar.Brand href="#home"><MdAccountBox /> BD Alunos </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#alunos"><MdPeople /> Alunos</Nav.Link>
                    <Nav.Link href="#add"><MdAdd /> Adicionar</Nav.Link>
                    <Nav.Link href="#edit"><MdEdit /> Editar</Nav.Link>
                    <Nav.Link href="#delete"><MdDelete /> Deletar</Nav.Link>
                    <Nav.Link><MdHelpOutline /> Ajuda </Nav.Link>
                </Nav>
            
        </Navbar>
    )
}

export default Header