import React from 'react';
import { motion } from "framer-motion"


function Lukas() {


  return (
    <motion.img
      style={{
        position: "absolute",
        textAlign: "center",
        x: 50,
        y: -1000,
        zIndex: 200
      }}

      initial={{ scale: 0.1, }}
      animate={{ 
        scale: 0.1, 
        rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360, 0], 
        x: [900, 500, 200, 100, 50, -50, -100, -200, -500, -900], }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      src={require("../../images/luki.png")} alt=""
    />
  );
}
export default Lukas;