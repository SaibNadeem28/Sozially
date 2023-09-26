'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" style={{ zIndex: 0 }} />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}
    >
      <img
        src="/logow.svg"
        alt="logo"
        className="logo"
      />

      <Link href="#about">
        <div className="rectangle-container">
          <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
            About Us
          </h2>
          <div className="rectangle" />
        </div>
      </Link>
      <Link href="#portfolio">
        <div className="rectangle-container">
          <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
            Portfolio
          </h2>
          <div className="rectangle" />
        </div>
      </Link>
      <Link href="#services">
        <div className="rectangle-container">
          <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
            Services
          </h2>
          <div className="rectangle" />
        </div>
      </Link>
      <Link href="#blog">
        <div className="rectangle-container">
          <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
            Blog
          </h2>
          <div className="rectangle" />
        </div>
      </Link>
      {/* <Link href="#feedback">
      <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Get in Touch
          </span>
        </button>
        </Link> */}
      <Link href="#feedback">
        <div className="rectangle-container">
          <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
            Get In Touch
          </h2>
          <div className="rectangle" />
        </div>
      </Link>

    </div>
    <style>{`
  .logo {
    width: 35px;
    height: 50px;
    position: relative;
    z-index: 2;
  }

        .rectangle-container {
          position: relative;
        }

        .rectangle {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform: translate(-50%, 50%);
          width: 130%;
          height: 50px;
          border: 2px solid transparent;
          border-radius: 60px;
          box-sizing: border-box;
          box-shadow: none; /* No glow by default */
        }

        .rectangle:hover {
          box-shadow: 0 0 20px rgba(83, 175, 206, 1); /* Add glow on hover */
        }        
      `}
    </style>

  </motion.nav>
);

export default Navbar;
