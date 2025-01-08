import './index.scss';
import AnimationLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs
            .sendForm(
                `service_7fbvyj3`,
                `template_icewyc9`,
                refForm.current,
                `Oea0Az6wTsqvqGunH`
            )
            .then(
                () =>{
                    alert('Message successfully sent!')
                    window.location.reload(false);
                },
                () =>{
                    alert('Failed to send the message, please try again')
                }
            )
            
    }

    return (

        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimationLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interest in software engineering internships or if you have any questions. Contact Me!
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        
        
        </>
    )
}

export default Contact;