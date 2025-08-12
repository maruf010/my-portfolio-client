import React from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Education from '../../components/Education';
import Contact from '../../components/Contact';
import SkillsRadial from '../../components/SkillsRadial';
import ProjectsSection from '../../components/Projects/ProjectsSection';
import Navbar from '../../components/Navbar';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            {/* <SkillsRadial></SkillsRadial> */}
            <Skills></Skills>
            <ProjectsSection></ProjectsSection>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;