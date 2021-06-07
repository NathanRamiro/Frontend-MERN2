import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

import {MdSearch,MdCreate,MdClear} from 'react-icons/md'

import Header from '../components/Header'

import { BACKEND } from '../constants/config'

const Edit = () => {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [curso, setCurso] = useState('')
    const [status, setStatus] = useState(true)
    const [dtMat, setDtMat] = useState('')
    const [formVisisvel, setFormVisivel] = useState(false)

    async function consultaAluno() {

        let uriAluno = `${BACKEND}/${cpf}`
        await fetch(uriAluno)
            .then(response => response.json())
            .then(data => {

                if (data.cpf === cpf) {

                    setNome(data.nome)
                    setCurso(data.curso)
                    setStatus(data.status)
                    setDtMat(data.dataMatricula)
                    setFormVisivel(true)
                    return
                } else {
                    alert('Esse(a) aluno(a) não existe')
                }

            }).catch(err => {
                console.log(err.message)
            })
    }

    async function editaAluno() {

        if ((nome.trim()).length === 0) {
            alert('O nome do aluno é obrigatorio')
            setNome('')
            return
        }

        let data = {
            
            "curso": curso,
            "status": status,
            "nome": nome,
            "dataMatricula": dtMat,
            "cpf": cpf

        }


        await fetch(BACKEND, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-type": 'application/json' }
        })
            .then(response => response.json())
            .then(data => {

                let { errors } = data

                if (errors === undefined) {
                    alert('Dados alterados com sucesso')
                    setNome('')
                    setCpf('')
                    setFormVisivel(false)
                } else {
                    alert('ocorreu um erro')
                }

            }).catch(err => {
                alert(err.message)
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
                                <Form.Control disabled={formVisisvel} as='input' value={cpf} onChange={(e) => {
                                    setCpf(e.target.value)
                                }} />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Button variant="primary" block
                            onClick={() => consultaAluno()}>
                            <MdSearch /> Buscar
                    </Button>
                    </Col>
                </Row>
            </Jumbotron>
            {formVisisvel &&
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control as='input' value={nome} onChange={(e) => {
                                            setNome(e.target.value)
                                        }} />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} lg={6}>
                                <Form.Group>
                                    <Form.Label>Curso</Form.Label>
                                    <Form.Control as='select' value={curso} onChange={(e) => {
                                        setCurso(e.target.value)
                                    }} >
                                        <option>ADS</option>
                                        <option>Mecatronica</option>
                                        <option>Eventos</option>
                                        <option>Adm</option>
                                        <option>Economia</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Check checked={status} type='checkbox' value={status}
                                        label={status ? 'Ativo' : 'Não ativo'}
                                        onChange={() => setStatus(!status)} />
                                </Form>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 32 }}>
                            <Col>
                                <Button variant="primary" block
                                    onClick={() => editaAluno()}>
                                    <MdCreate /> Alterar
                                </Button>
                                <Button variant="danger" block
                                    onClick={() => setFormVisivel(false)}>
                                    <MdClear /> Cancelar
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            }
        </>
    )

}

export default Edit