import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import '../assets/css/main.css'

function Intro() {

    const { scrollYProgress } = useScroll();

    const yPostion = useTransform(
        scrollYProgress,
        [0, 1],
        [ 50,400],

    )
    const opacityTrans = useTransform(
        scrollYProgress,
        [0, 1],
        [1, -4],

    )
    return (
        <motion.div
            className="intro"
            initial={{ opacity: 0, transition: { duration: 1 } }}
            animate={{ opacity: 1 }}
            style={{ opacity: opacityTrans, y:yPostion}}
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