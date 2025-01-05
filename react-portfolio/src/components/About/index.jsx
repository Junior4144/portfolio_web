import './index.scss'
import AnimatedLetter from '../AnimatedLetters'


const About = () => {

    return (
        
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetter 
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a 3rd year CS student at the University of Houston
                </p>
                <p>
                    example 2
                </p>
                <p>
                    example 3
                </p>
            </div>
        </div>
    )
}


export default About