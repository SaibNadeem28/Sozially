'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Sozially around the Globe" textStyles="text-center" />
      <TitleText
        title={(
          <>Global Reach, Local Expertise: Our Offices Around the World.
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex flex-wrap w-full" // Allow content to wrap on smaller screens
        style={{ maxWidth: '100%' }}
      >
        <img src="/map_1.svg" alt="map" className="w-full h-full object-cover" />

      </motion.div>
    </motion.div>
  </section>
);

export default World;
