import React from 'react';

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

function ProjectCard(props){
    return(
        <Card className="crd-style neumorphicShadow p-4" style={{borderRadius: '50px', border: 'none', height: 'auto', marginRight: 'auto', marginLeft: 'auto' }}>
            <br/>
            <Card.Img className= "neumorphicShadow" style={{
            
                maxHeight: 'auto',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '30px',
            }} variant="top" src={props.img} />
            <Card.Body>
                <br/>
            <Card.Title>{props.title}</Card.Title>
            <small>{props.dates}</small>
            <p className = "lead">{props.projectType}</p>
                <h6 className = "font-weight-bolder">Skills Used</h6>
                <Row className = "d-flex flex-row p-1 ml-auto">
                    <h6 className= "p-2 mr-2 mt-2 neumorphicIndentSmall">{props.skill1}</h6>
                    <h6 className= " p-2 mr-2 mt-2 neumorphicIndentSmall" >{props.skill2}</h6>
                    <h6 className=" p-2 mr-2 mt-2 neumorphicIndentSmall" >{props.skill3}</h6>
                    <h6 className=" p-2 mr-2 mt-2 neumorphicIndentSmall" >{props.skill4}</h6>
                </Row>
                <br />
                <Card.Text>
                    {props.headline}
                </Card.Text>
                <br/>
                <a className="orange-gradient remove-color-hyperlink font-weight-bolder p-2" href={props.link} target="_blank" rel="noopener noreferrer">See Details...</a>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;