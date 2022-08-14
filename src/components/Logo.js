import React, { useEffect, useState } from 'react'
import '../assets/css/main.css'

function Logo() {
    const [show, setShow] = useState(false)

    const controlLogo = () => {
        if (window.scrollY > 300) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlLogo)
        return () => {
            window.removeEventListener('scroll', controlLogo)
        }
    }, [])
    return (
        <header id="header" className={`${show && 'hidden'}`}>
            <a href="/" className="logo">The future Grosjeans</a>
        </header>

    );
}

export default Logo;