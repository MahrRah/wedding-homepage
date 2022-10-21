import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import '../assets/css/main.css'

function Logo() {

    const { scrollYProgress } = useScroll();
    const opacityTrans = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 7],


    )
    const yPostion = useTransform(
        scrollYProgress,
        [0, 1],
        [ 0,-200],

    )

    return (
        <motion.div
            initial={{ opacity: 0, transition: { duration: 5 } }}
            style={{ opacity: opacityTrans, y:yPostion}}
            className="header"
        >
            <header id="header">
                <a href="/" className="logo">The future Grosjeans</a>
            </header>
        </motion.div>
    );
}

export default Logo;