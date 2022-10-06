import React, { useEffect, useState } from 'react'
import { motion, useAnimation, useTransform, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../assets/css/main.css'

function Intro() {

    const { scrollYProgress } = useScroll();
    const opacityTrans = useTransform(
        scrollYProgress,
        [0, 1],
        [1, -2],

    )
    return (
        <motion.div
            className="intro"
            initial={{ opacity: 0, transition: { duration: 1 } }}
            animate={{ opacity: 1 }}
            style={{ opacity: opacityTrans }}
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