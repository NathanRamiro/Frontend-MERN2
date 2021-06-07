import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

import {MdAddBox} from 'react-icons/md'

import Header from '../components/Header'
import isCpfValido from '../components/IsCpfValido'

import {BACKEND} from '../constants/config'

const Add = () => {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [curso, setCurso] = useState('ADS')
    const [status, setStatus] = useState(true)

    async function cadastraAluno() {

        let dtMat = new Date()

        if((nome.trim()).length===0){
            alert('O nome do aluno é obrigatorio')
            setNome('')
            return
        }

        if(!isCpfValido(cpf)){
            alert('CPF invalido')
            setCpf('')
            return
        }

        let data = {
            curso: curso,
            status: status,
            nome: nome,
            dataMatricula: dtMat,
            cpf: cpf
        }

        let uriAluno = `${BACKEND}/${cpf}`

        await fetch(uriAluno)
        .then(response=>response.json())
        .then(data=>{

            if(data.cpf===cpf){

                alert('Esse(a) aluno(a) ja foi cadastrado(a)')
                    setNome('')
                    setCpf('')
                return
            }

        }).catch(err=>{
            console.log(err)
        })

        await fetch(BACKEND, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": 'application/json' }
        })
            .then(response => response.json())
            .then(data => {

                if (data.cpf===cpf) {

                    alert('Aluno cadastrado com sucesso')
                    setNome('')
                    setCpf('')
                    
                }

            }).catch(err => {
                console.log(err)
            })

    }

    return (
        <>
            <Header />
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
                                onClick={() => cadastraAluno()}>
                                <MdAddBox /> Cadastrar
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </>
    )

}

export default Add