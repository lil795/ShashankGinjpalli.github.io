import React from 'react'
import Card from 'react-bootstrap/Card'



function Crd(props){
    return(
        <Card className = "crd-style p-4" style={{border: 'none', height: 'auto', marginRight: 'auto', marginLeft: 'auto'}}>
            <Card.Img style={{
                maxWidth: '300px',
                height: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
                boxShadow: '0px 0px 10px 1px #CCC',
                borderRadius: '10px',
                 }} variant="top" src={props.image} />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <p>{props.company}</p>
            <small>{props.time}</small>
            <br/>
            <br/>
            <Card.Text>
                {props.text}
            </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Crd;