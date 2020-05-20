import React from 'react';
import Container from 'react-bootstrap/Container';


function Skills(){
    return (
      <div>
        <h5 className="font-weight-bolder">Here Are Some Of My Skills</h5>

        <Container fluid={true} className="margins p-4 justify-content-center">
          <h6 className="lead">Technical Skills</h6>
          <div className="d-flex flex-row">
            <h6 className="p-1 mr-3 bg-dark text-white">Python</h6>
            <h6 className="p-1 mr-3 bg-dark text-white">C/C++</h6>
            <h6 className="p-1 mr-3 bg-dark text-white">Java</h6>
            <h6 className="p-1 mr-3 bg-dark text-white">Swift</h6>
            <h6 className="p-1 mr-3 bg-dark text-white">HTML</h6>
            <h6 className="p-1 mr-3 bg-dark text-white">CSS</h6>
            <h6 className="p-1 mr-3 bg-dark text-white">React.JS</h6>
            <h6 className="p-1 mr-3 bg-dark text-white">SQL</h6>
            <h6 className="p-1 mr-3 bg-dark text-white">
              Data Structures and Algorithms
            </h6>
          </div>
        </Container>
      </div>
    );
}

export default Skills;