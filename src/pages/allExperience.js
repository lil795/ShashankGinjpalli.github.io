import React from 'react';
import Container from 'react-bootstrap/Container'
import Crd from '../Components/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import engineering from '../assets/images/engineering.png'
import ASU from '../assets/images/ASU.png'
import AutonomIQ from '../assets/images/autonomiq.jpeg'
import oneclass from '../assets/images/oneclass.jpg'



class allExperience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    title: 'Undergraduate Student Researcher',
                    company: 'Sonoran Visualization Lab @ Arizona State University',
                    time: '[August 2019 - Current]',
                    image: engineering,
                    source: 'https://svl-at-asu.github.io',
                    text: "Working on a research project to see the feasability of using NLP automatically recommending datasets based on a text document"
                },
                {
                    title: 'AI Intern',
                    company: 'AutonomIQ',
                    time: '[May 2019 - August 2019]',
                    image: AutonomIQ,
                    source: 'https://autonomiq.io',
                    text: "Worked on a product that greatly improves a Software Tester’s efficiency by using AI to automatically test their application. Created a smart scraper that goes through the customers website and grabs all of the data that is required to feed into the test case generation algorithm"
                },
                {
                    title: 'Student Deskside Support I',
                    company: 'Arizona State Universtiy Technology Office',
                    time: '[October 2017 - Decemeber 2018]',
                    image: ASU,
                    source: 'https://uto.asu.edu',
                    text: 'Worked as an IT technician where I was in charge of setting up technology for use in classrooms and helped the staff diagnose issues with their lab equipment'
                },
                {
                    title: 'Student Note Taker',
                    company: 'OneClass Inc',
                    time: '[August 2017 - Decemeber 2017]',
                    image: oneclass,
                    source: 'https://oneclass.com',
                    text: 'Took Notes for the duration of my Calc 1 and Intro to Programming classes so that students who required help with those classes could refer back to my notes and understand the material '
                }
            ]
        }
    }

    render(){
        return (
        <div>
        <div className="center">
            <div className="align-center-left">
                <h5 className = "font-weight-bolder pt-5"> All Experience</h5>

                <Container fluid = {true}>
                        <Row className="justify-content-around margins">

                            <Col xl={4} lg={6} md={9} sm={12} >
                                <a href={this.state.items[0].source} target="_blank" className="remove-hyperlink" rel="noopener noreferrer">
                                        <Crd title={this.state.items[0].title} company={this.state.items[0].company} time={this.state.items[0].time} image={this.state.items[0].image} text={this.state.items[0].text} />
                                </a>
                            </Col>
                            <Col xl={4} lg={6} md={9} sm={12} >
                                <a href={this.state.items[1].source} target="_blank" className="remove-hyperlink" rel="noopener noreferrer">
                                    <Crd title={this.state.items[1].title} company={this.state.items[1].company} time={this.state.items[1].time} image={this.state.items[1].image} text={this.state.items[1].text} />
                                </a>
                            </Col>
                            <Col xl={4} lg={6} md={9} sm={12} >
                                <a href={this.state.items[2].source} target="_blank" className="remove-hyperlink" rel="noopener noreferrer">
                                    <Crd title={this.state.items[2].title} company={this.state.items[2].company} time={this.state.items[2].time} image={this.state.items[2].image} text={this.state.items[2].text} />
                                </a>
                            </Col>
                        </Row>
                        <br/>
                        <Row className="justify-content-around margins">

                            <Col xl={4} lg={6} md={9} sm={12} >
                                <a href={this.state.items[3].source} target="_blank" className="remove-hyperlink" rel="noopener noreferrer">
                                    <Crd title={this.state.items[3].title} company={this.state.items[3].company} time={this.state.items[3].time} image={this.state.items[3].image} text={this.state.items[3].text} />
                                </a>
                            </Col>
                        </Row>

                </Container>
               
            </div>

        </div>
        </div>

        );
    }



    
}

export default allExperience;