import React, { useEffect, useState } from 'react'
import '../assets/css/main.css'

function Intro() {
    const [show, setShow] = useState(true)
    const controlIntro= () => {
        if (window.scrollY < 400) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlIntro)
        return () => {
            window.removeEventListener('scroll', controlIntro)
        }
    }, [])
    return (
        <div id="intro" className={`${show && 'hidden'}`}>
            <h1>Mahra<br />
                & <br />
                Valentin</h1>
        </div>

    );
}

export default Intro;