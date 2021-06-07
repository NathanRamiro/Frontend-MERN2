import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

import {MdLoop} from 'react-icons/md'

import { BACKEND } from '../constants/config'

import Header from '../components/Header'
import CardAluno from '../components/CardAluno'

const Alunos = () => {

    const [dados, setDados] = useState([{}])
    const [carregando, setCarregando] = useState(false)

    useEffect(() => {
        document.title = 'Alunos'

        obtemAlunos()
    }, [])

    async function obtemAlunos() {

        setCarregando(true)

        await fetch('https://backend-trabalho2.herokuapp.com/alunos')
            .then(response => response.json())
            .then(data => {

                setDados(data)
            }).catch((err => {
                console.log(err.message)
            }))

        setCarregando(false)
    }

    return (
        <>
            <Container fluid className='p-0' >
                <Header />
                <Jumbotron>
                    <Row>
                        {carregando ?
                            (
                                <Col style={{ justifyContent: 'center', flex: 1, display: 'flex' }}>
                                    <Spinner animation="border" variant="primary" />
                                </Col>
                            ) : (

                                <Col xs={12} lg={12}>

                                    <Button style={{marginBottom:16}} onClick={()=>obtemAlunos()} variant="primary" size="lg" block>
                                       <MdLoop /> Recarregar
                                    </Button>

                                    {dados.length===0&&
                                        <Container className='m-0' >
                                         <p>Não existem dados</p>
                                        </Container>
                                    }

                                    {!carregando && dados.map((val) => {
                                        return (
                                            <Container>
                                                <CardAluno data={val} />
                                            </Container>
                                        )
                                    })}
                                </Col>
                                
                            )
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </>
    )
}

export default Alunos