import React from 'react';
import { motion } from "framer-motion"


function MotionObject() {


  return (
    <motion.img
      style={{
        position: "absolute",
        textAlign: "center",
        x: 50,
        y: -700,
        zIndex: 200
      }}

      initial={{ scale: 0.1, }}
      animate={{ 
        scale: 0.3, 
        // rotate: [...Array(10).keys()].map(x => x*360/10),
        x: [...Array(30).keys()].map(x => 1500-x*(3000)/30 ), }}
      transition={{
        duration:5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      src={require("../../images/vali.png")} alt=""
    />
  );
}
export default MotionObject;