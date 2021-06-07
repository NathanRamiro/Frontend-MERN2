import React from 'react'
import Card from 'react-bootstrap/Card'

const CardAluno = (props) => {

    let {nome,cpf,dataMatricula,curso} = props.data
    let data = new Date(dataMatricula)


    //if(props.visivel)
    return (
        <Card>
            <Card.Header>
                {nome}
            </Card.Header>
            <Card.Body>

                <Card.Title>CPF: {cpf}</Card.Title>
                <Card.Text>Data de Matricula: {data.toLocaleDateString()}</Card.Text>
                <Card.Text>Curso: {curso}</Card.Text>

            </Card.Body>
        </Card>
        
    )
}

export default CardAluno