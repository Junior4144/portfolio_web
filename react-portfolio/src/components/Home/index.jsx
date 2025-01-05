import { useEffect, useState } from 'react'

import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['u', 's', 't', 'a', 'v', 'o'];
    const jobArray = ['i', 'n', 'c', 'o', 'm', 'i', 'n', 'g',' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'];


    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} 
                idx ={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray} 
                idx ={22}/>
                </h1> 
                <h2>CS Student / inspiring backend developer</h2>
                <Link to ="/contact" className="flat-button">CONTACT ME</Link>

            </div>
            <Logo />
        </div>
    );
};

export default Home