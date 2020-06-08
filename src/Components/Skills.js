import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'


function Skills(){
    return (
      <div>
        <h5 className="font-weight-bolder">Here Are Some Of My Skills</h5>

        <Container fluid={true} className="margins p-4 justify-content-center">
          <h6 className="lead">Technical Skills</h6>
          <Row className = 'd-flex flex-row ml-auto'>
            <h6 className="p-1 mr-3 skill-level-confident text-black">Python</h6>
            <h6 className="p-1 mr-3 skill-level-confident text-black">C/C++</h6>
            <h6 className="p-1 mr-3 skill-level-confident text-black">Java</h6>
            <h6 className="p-1 mr-3 skill-level-medium text-black">Swift</h6>
            <h6 className="p-1 mr-3 skill-level-confident text-black">HTML</h6>
            <h6 className="p-1 mr-3 skill-level-confident text-black">CSS</h6>
            <h6 className="p-1 mr-3 skill-level-beginner text-white">React.js</h6>
            <h6 className="p-1 mr-3 skill-level-beginner text-white">JavaScript</h6>
            <h6 className="p-1 mr-3 skill-level-medium text-black">SQL</h6>
            <h6 className="p-1 mr-3 skill-level-confident text-black">
              Data Structures and Algorithms
            </h6>
            <h6 className="p-1 mr-3 skill-level-medium text-black">NumPy</h6>
            <h6 className="p-1 mr-3 skill-level-beginner text-white">OpenCV</h6>
            <h6 className="p-1 mr-3 skill-level-beginner text-white">Keras</h6>

          </Row>
          <br/>
          <h6 className="lead">Other Skills</h6>
          <Row className = "d-flex flex-row ml-auto">
            <h6 className="p-1 mr-3 bg-dark box-shadow text-white">Photoshop</h6>
            <h6 className="p-1 mr-3 bg-dark box-shadow text-white">Adobe Illustrator</h6>
            <h6 className="p-1 mr-3 bg-dark box-shadow text-white">Graphic Design</h6>


          </Row>

        </Container>
      </div>
    );
}

export default Skills;