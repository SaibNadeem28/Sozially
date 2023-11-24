'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section id="about" className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Sozially" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        We are {' '}
        <span className="font-extrabold text-white">Global Digital Solutions Firm</span>  with key offices in {' '}
        <span className="font-extrabold text-white">Leuven, Belgium; Lahore, Pakistan; and Manila, Philippines</span>.
        Our diverse team specializes in {' '}
        <span>branding, web development, social media engagement</span> and {' '}
        <span className="font-extrabold text-white">
          custom app/software solutions.
        </span>{' '}
        We blend {' '}
        <span className="font-extrabold text-white">global insights</span> {' '}
        and {' '}
        <span className="font-extrabold text-white">local expertise</span>{' '}
        to help your business capture and captivate its target audience.
        Whether you're looking to {' '}
        <span className="font-extrabold text-white">boost revenue, enhance customer loyalty,</span>{' '}
        or
        <span className="font-extrabold text-white"> gain a competitive edge,</span>{' '}
        we're your go-to long-term partners. Our tech team excels in crafting software that streamlines operations and enriches user experience. We're all about delivering impactful results in today's dynamic digital landscape.
      </motion.p>

      <Link href="#portfolio"> {/* <-- Add this Link component */}
        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px] cursor-pointer" // added cursor-pointer for a hand cursor on hover
        />
      </Link>
    </motion.div>
  </section>
);

export default About;
