import React from 'react'
import Card from 'react-bootstrap/Card'



function Crd(props){
    return(
        <Card className= "crd-style p-4 neumorphicShadow" style={{borderRadius: '50px', border: 'none', height: 'auto', marginRight: 'auto', marginLeft: 'auto'}}>
            <Card.Img className= "neumorphicShadow crdImage" style ={{
                borderRadius: '50px'
            }} variant="top" src={props.image} />
            <Card.Body>
                <br/>


            {/* <div className= "neumorphicIndentSmall p-3"> */}
            <Card.Title>{props.title}</Card.Title>
            <p className = "cardText">{props.company}</p>
            <small>{props.time}</small>
           
            <br/>
            <br/>
            <Card.Text className = "cardText">
                {props.text}
            </Card.Text>
                {/* </div> */}
            </Card.Body>
        </Card>
    );
}

export default Crd;