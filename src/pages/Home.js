import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

import Header from '../components/Header'

/*
{
    "foto": {
      "originalname": "massas2.png",
      "path": "public/uploads/massas.png",
      "size": 20771,
      "mimetype": "image/png"
    },
    "curso": ['ADS','Mecatronica','Eventos','Adm','Economia'],
    "status": true,
    "_id": "60aeda52812133e2de5b1493",
    "nome": "Jo",
    "dataMatricula": "12983571982375",
    "cpf": "527.975.133-20",
    "createdAt": "2021-05-26T23:31:30.303Z",
    "updatedAt": "2021-05-26T23:31:30.303Z",
    "__v": 0
}
*/

const Home = () => {
    useEffect(() => {
        document.title = 'Home'
    }, [])

    return (
        <>
            <Container fluid className='p-0' >

                <Header />
                <Jumbotron>
                    <h1>Bem Vindo</h1> <br></br>
                    <p>Este banco de dados contem as informações dos alunos cadastrados</p>
                    <p>Use os botões acima para navegar entre as paginas</p>
                </Jumbotron>

            </Container>
        </>
    )
}

export default Home