import React from 'react';

import Card from 'react-bootstrap/Card'

function ProjectCard(props){
    return(
        <Card className="crd-style p-4" style={{ border: 'none', height: 'auto', marginRight: 'auto', marginLeft: 'auto' }}>
            <Card.Img style={{
            
                maxHeight: '300px',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
                boxShadow: '0px 0px 20px 1px #CCC',
                borderRadius: '10px',
            }} variant="top" src={props.img} />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <small>{props.dates}</small>
            <p className = "lead">{props.projectType}</p>
                <h6 className = "font-weight-bolder">Skills Used</h6>
                <div className = "d-flex flex-row p-1">
                    <h6 className = " p-1 mr-2 bg-dark text-white mt-2">{props.skill1}</h6>
                    <h6 className= " p-1 mr-2 bg-dark text-white mt-2 " >{props.skill2}</h6>
                    <h6 className=" p-1 mr-2 bg-dark text-white mt-2" >{props.skill3}</h6>
                    <h6 className=" p-1 mr-2 bg-dark text-white mt-2" >{props.skill4}</h6>
                </div>
                <br />
                <Card.Text>
                    {props.headline}
                </Card.Text>
                    <a className="orange-gradient font-weight-bolder" href={props.link} target="_blank" rel="noopener noreferrer">See Details...</a>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;