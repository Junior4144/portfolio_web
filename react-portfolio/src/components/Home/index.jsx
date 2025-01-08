import { useEffect, useState } from 'react'

import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';


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
                <br />
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
                <Link to ="/contact" className="flat-button">CONTACT ME</Link>

            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    );
};

export default Home