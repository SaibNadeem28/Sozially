import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures1 } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const WhatsNew = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        {isMobile ? (
          <motion.div
            variants={planetVariants('right')} // Apply animation to the image
            className={`flex-1 ${styles.flexCenter}`}
          >
            <Image
              src="/1app devwebp.svg"
              alt="get-started"
              width={500} // Adjust the width as needed
              height={300} // Adjust the height as needed
              layout="responsive"
            />
          </motion.div>
        ) : null}
        <motion.div
          variants={fadeIn(isMobile ? 'bottom' : 'right', 'tween', 0.1, 0.5)}
          className="flex-[0.75] flex justify-center flex-col"
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
        {!isMobile ? (
          <motion.div
            variants={planetVariants('right')} // Apply animation to the image
            className={`flex-1 ${styles.flexCenter}`}
          >
            <Image
              src="/1app devwebp.svg"
              alt="get-started"
              width={500} // Adjust the width as needed
              height={300} // Adjust the height as needed
              layout="responsive"
            />
          </motion.div>
        ) : null}
      </motion.div>
    </section>
  );
};

export default WhatsNew;
