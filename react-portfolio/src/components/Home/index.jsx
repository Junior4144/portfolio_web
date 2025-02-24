import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import React from 'react'
import doc from '../../documents/Gustavo_Resume_2025_for_web.pdf';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ','G', 'u', 's', 't', 'a', 'v', 'o', ','];
    const jobArray_2 =[  's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'];
    

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 5000)
    }, [])


    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <span className={`${letterClass} _12`}> </span>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} 
                idx ={15}/>

                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray_2} 
                idx ={22}/>
                </h1> 
                <h2>CS Student at University of Houston / Focus in Backend Development</h2>
                <div className='btn-container'>
                    <Link to ="/contact" className="flat-button">CONTACT ME</Link>
                    <a href= {doc} className="flat-button">DOWNLOAD CV</a>
                </div>
                    

            </div>
            <div className="resume-container">
                 {/* <Document file= {samplePdf}/> */}
                 {/* <Document file={samplePdf} onLoadError={console.error}/> */}   
                 
            </div>
            
        </div>
        <Loader type="pacman" />
        </>
    );
};

export default Home