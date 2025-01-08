import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import {useState,useEffect} from 'react';

const Portfolio = () => {


    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    const renderPortfolio = () => {
        return (
            <div className="images-container">
                <div className="image-box">
                    <img src="#" alt="portfolio"  className='portfolio-image' />
                    <div className="content">
                        <p className='title'>Example 1</p>
                        <h4 className='description'>Description</h4>
                        <button className='btn' onClick={() => window.open("https://google.com/")}>View</button>
                    </div>
                </div>
                <div className="image-box">
                    <img src="#" alt="portfolio"  className='portfolio-image' />
                    <div className="content">
                        <p className='title'>Example 2</p>
                        <h4 className='description'>Description</h4>
                        <button className='btn' onClick={() => window.open("https://google.com/")}>View</button>
                    </div>
                </div>
                
            </div>
            
            
        )
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className='page-title'>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray = {"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                {/* {<div>{renderPortfolio()}</div>} */}
                <h1 className='page-title-classic'>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray = {"The Classics".split("")}
                        idx={15}
                    />
                </h1>
                {<div>{renderPortfolio()}</div>}
                
            </div>
            <Loader type="pacman"/>
        </>
    )
}


export default Portfolio