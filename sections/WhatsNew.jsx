import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures1 } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Our Services" />
        <TitleText title={<>App Development</>} />
        <div className="mt-[31px] flex flex-col max-w-[1000px] gap-[24px]">
          {startingFeatures1.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/1app devwebp.svg"
          alt="get-started"
          className="w-[100%] h-[100%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
