import React from 'react'
import Card from 'react-bootstrap/Card'



function Crd(props){
    return(
        <Card className= "crd-style p-4 neumorphicIndent" style={{borderRadius: '50px', border: 'none', height: 'auto', marginRight: 'auto', marginLeft: 'auto'}}>
            <Card.Img className= "neumorphicShadow" style={{
                maxWidth: '300px',
                height: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '50px'
                 }} variant="top" src={props.image} />
            <Card.Body>
                <br/>


            {/* <div className= "neumorphicIndentSmall p-3"> */}
            <Card.Title>{props.title}</Card.Title>
            <p>{props.company}</p>
            <small>{props.time}</small>
           
            <br/>
            <br/>
            <Card.Text>
                {props.text}
            </Card.Text>
                {/* </div> */}
            </Card.Body>
        </Card>
    );
}

export default Crd;