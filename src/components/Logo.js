import React, { useEffect, useState } from 'react'
import '../assets/css/main.css'

function Logo() {
    const [show, setShow] = useState(true)
    const controlLogo = () => {
        if (window.scrollY < 300) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlLogo)
        return () => {
            window.removeEventListener('scroll', controlLogo)
        }
    }, [])
    return (
        <header id="header">
            <a href="index.html" class="logo">The future Grosjeans</a>
        </header>

    );
}

export default Logo;