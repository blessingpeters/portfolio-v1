import { easeOut, motion} from "framer-motion"
import React from "react";

function FadeLeftWhenVisible({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease:easeOut}}
        variants={{
          visible: { opacity: 1, x: 0},
          hidden: { opacity: 0, x: '-10vw'}
        }}
      >
        {children}
      </motion.div>
    );
  }

  function FadeRightWhenVisible({ children }) {
      return (
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease:easeOut}}
          variants={{
            visible: { opacity: 1, x: 0},
            hidden: { opacity: 0, x: 100}
          }}
        >
          {children}
        </motion.div>
      );
    }

function FadeInWhenVisible({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5}}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }
  function FadeAnimation({FadeInWhenVisible, FadeRightWhenVisible,FadeLeftWhenVisible }) {
    return (
      <>
        <FadeInWhenVisible/>
        <FadeRightWhenVisible/>
        <FadeLeftWhenVisible />
      </>
    );
  }

  export default FadeAnimation;