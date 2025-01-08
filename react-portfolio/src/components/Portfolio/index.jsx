import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import {useState,useEffect} from 'react';

import tic_tac_toe_img from "../../assets/images/tic-tac-toe-img.png"

import todListImg from "../../assets/images/todoListImage.png"
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
                    
                    <img src= {todListImg} alt="portfolio"  className='portfolio-image-1' />
                    <div className="content">
                        <p className='title'>Todo-List</p>
                        <h4 className='description'>Javascript, HTML, CSS<br /> Webpack, Node.js</h4>
                        <button className='btn' onClick={() => window.open("https://junior4144.github.io/Todo-List-Project/")}>View</button>
                    </div>
                </div>
                <div className="image-box">
                    <img src={tic_tac_toe_img} alt="portfolio"  className='portfolio-image' />
                    <div className="content">
                        <p className='title'>Tic-Tac-Toe</p>
                        <h4 className='description'>Javascript, HTML, CSS <br /> &nbsp; </h4>
                        <button className='btn' onClick={() => window.open("https://junior4144.github.io/Tic-Tac-Toe-Project/")}>View</button>
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