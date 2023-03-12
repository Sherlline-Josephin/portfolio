import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SocialIcons from "../../components/SocialIcons";
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Landing = ({ name, tagline }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current,{
      strings:["STUDENT .","FULL STACK DEVELOPER ."],
      startDelay:300,
      typeSpeed:150,
      backDelay:1000,
      backSpeed:150,
      smartBackspace:true,
      showCursor: true,
      loop:true,
    })
    console.log(typed)
  },[])
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <section className="landing" style={styles.landing}>
      <div className="textContainer" style={styles.textContainer}>
        <motion.h1
          className="name"
          style={styles.name}
          ref={ref}
          initial={{ y: "-10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="description"
          ref={ref}
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
         I'm a <span className="description1" ref={el}></span>
        </motion.p>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
