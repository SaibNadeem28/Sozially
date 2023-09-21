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
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-60 right-40 w-[50px] h-[50px] p-[6px] rounded-full bg-transparent">
          <img src="phili.png" alt="phili" className="w-full h-full  object-cover" />
          <p  className ="sm:pl-5 pl-6 text-white">Manila Philippine</p>
        </div>

        <div className="absolute top-20 left-[40%] w-[70px] h-[70px] p-[6px] rounded-full bg-transparent">
          <img src="belg.png" alt="belg" className="w-full h-full object-contain" />
          <p  className ="sm:pl-5 pl-6 text-white">Leuven Belgium</p>
        </div>

        <div className="absolute top-40 left-[60%] w-[70px] h-[70px] p-[6px] rounded-full bg-transparent">
          <img src="pak.png" alt="pak" className="w-full h-full object-contain" />
          <p  className ="sm:pl-5 pl-6 text-white">Lahore Pakistan</p>
        </div> 
      </motion.div>
    </motion.div>
  </section>
);

export default World;
