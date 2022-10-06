import React, { useEffect, useState } from 'react'
import { motion, useAnimation,useTransform, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../assets/css/main.css'

function Intro() {
    
    // const { scrollYProgress } = useScroll();
    const boxVariant = {
        visible: { opacity: 1, scale: 1},
        hidden: { opacity: 0, scale: 1, transition: { duration: 1.0 }  }
    };


  


    const Box = ({ num }) => {

        const control = useAnimation();
        const [ref, inView] = useInView();


        useEffect(() => {
            console.log(inView)
            if (inView) {
                control.start("visible");
            } else {
                control.start("hidden");
            }
        }, [control, inView]);

        return (
            <motion.div
                className="intro"
                ref={ref}
                variants={boxVariant}
                initial="visible"
                animate={control}
                // opacity={scrollYProgress}
            >
                {/* <div id="intro"> */}
                    <h1>Mahra<br />
                        & <br />
                        Valentin</h1>
                {/* </div> */}
            </motion.div>
        );
    };

    const [show, setShow] = useState(true)


    const controlIntro = () => {
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
 
        //   <motion.div
        //     // className="intro"
        //     // animate={{ opacity: 100, scale: 1 }}
        //   >
        //     <div className="intro">

        //  <h1>Mahra<br />
        //                 & <br />
        //                 Valentin</h1>
        //     </div>
        //   </motion.div>

        // <Box></Box>
        <div id="intro" className={`${show && 'hidden'}`}>
            <h1>Mahra<br />
                & <br />
                Valentin</h1>
        </div>

    );
}

export default Intro;