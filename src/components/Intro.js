import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import '../assets/css/main.css'
import '../assets/css/noscript.css'

function Intro() {

    const { scrollYProgress } = useScroll();

    const yPostion = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 500],

    )
    const y = useTransform(scrollYProgress, scrollYProgress =>  scrollYProgress *2)
    const opacityTrans = useTransform(
        y,
        [0, 1],
        [1, -8],

    )
    return (
        <motion.div
            className="intro"
            initial={{ opacity: 0, transition: { duration: 5 } ,y:-50}}
            animate={{ opacity: 1 }}
            style={{ opacity: opacityTrans}}
        >
            <div id="intro">
                <h1>Mahra<br />
                    & <br />
                    Valentin</h1>
            </div>
        </motion.div>
    );
}

export default Intro;