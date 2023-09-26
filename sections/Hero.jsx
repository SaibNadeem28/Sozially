'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSVG from './animation';
import { TypingText } from '../components';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col relative`}
    >
      <div className="flex flex-row justify-center items-center flex-col relative z-10 text-overlay">
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} no-wrap`} style={{ textShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)' }}>
          WELCOME TO
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center "
        >
          <h1 className={styles.heroHeading} style={{ textShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)' }}>SOZIALLY</h1>
        </motion.div>
        <motion.div
          variants={textVariant(1.1)}
          className="flex items-center justify-center text-center w-full mt-4 px-4 sm:px-0"
          style={{ textShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)' }}
        >
          <TypingText
            title="Connecting you to the future Socially and Digitally"
            textStyles="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl break-words w-full"
          />
        </motion.div>

      </div>

      <motion.div
        variants={slideIn('bottom', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px] z-10"
      >
        <div className="w-full sm:h-[1000px] z-0 moved-image">
          <AnimatedSVG delay={2} />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
