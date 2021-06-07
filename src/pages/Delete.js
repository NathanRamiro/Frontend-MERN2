import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

import {MdDelete} from 'react-icons/md'

import Header from '../components/Header'

import { BACKEND } from '../constants/config'

const Add = () => {

    const [cpf, setCpf] = useState('')

    async function deletaAluno() {

        let uriAluno = `${BACKEND}/${cpf}`
        await fetch(uriAluno, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(data => {
                let { message } = data
                if(message){
                    alert(message)
                } else{
                    throw new Error()
                }

            }).catch(err => {
                alert('O aluno não foi encontrado')
            })
    }

    return (
        <>
            <Header />
            <Jumbotron>
                <Row>
                    <Col xs={12} lg={6} >
                        <Form>
                            <Form.Group>
                                <Form.Label>CPF</Form.Label>
                                <Form.Control as='input' value={cpf} onChange={(e) => {
                                    setCpf(e.target.value)
                                }} />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Button variant="danger" block
                            onClick={() => deletaAluno()}>
                            <MdDelete /> Remover
                        </Button>
                    </Col>
                </Row>
            </Jumbotron>
        </>
    )

}

export default Add