'use client';

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
      <div className="flex flex-row justify-center items-center flex-col relative mt-10">
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} no-wrap`} style={{ textShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)' }}>
          WELCOME TO
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center "
        >
          <h1 className={styles.heroHeading} style={{ textShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)' }}>SOZ</h1>
          <h1 className={styles.heroHeading} style={{ textShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)' }}>IALLY</h1>
        </motion.div>
        <motion.div
          variants={textVariant(1.1)}
          className="text-center mt-4 md:mt-8"
          style={{ textShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)' }}
        >
          <TypingText
            title="Connecting you to the future"
            textStyles="text-center text-sm sm:text-md md:text-lg lg:text-xl"
            className="sm:pl-16 pl-6"
          />
          <TypingText
            title="Socially and Digitally"
            textStyles="text-center text-sm sm:text-md md:text-lg lg:text-xl"
            className="sm:pl-16 pl-6"
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
      <style>{`
        .z-10 {
          z-index: 9;
      }
      `}
      </style>
    </motion.div>
  </section>
);

export default Hero;
