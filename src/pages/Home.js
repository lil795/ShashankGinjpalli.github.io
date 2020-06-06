import React from 'react';
import Intro from '../Components/Intro'
import Experience from '../Components/Experience' 
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import Contact from '../Components/Contact'



function Home(props){

    const hd1 = "Passionate in all things Technology and eagerly seeking new opportunities to learn"
    const hd2 = " Interested in AI, DataVis and Robotics and I am actively looking for opportunities in Summer 2020"

    return(
        <div className = "center">
            <div className = "align-center-left">
                <Intro title="Hi I'm Shashank!" subTitle="Computer Science @ Arizona State University 🔱" headlineln1={hd1} headlineln2={hd2} />
                <Experience />
                <Projects />
                <Skills />
                <Contact />

            </div> 
        </div>
    );   
}

export default Home;
