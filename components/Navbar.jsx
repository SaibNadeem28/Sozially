'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" style={{ zIndex: 0 }} />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}>
        <img src="/logow.svg" alt="logo" className="logo" />

        {/* Mobile Menu Toggle Button */}
        <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <div className={`menu-items ${isOpen ? 'active' : ''}`}>
          {/* Your Link Contents */}
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
          <Link href="#feedback">
            <div className="rectangle-container">
              <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
                Get In Touch
              </h2>
              <div className="rectangle" />
            </div>
          </Link>
        </div>
      </div>
      <style>{`
        /* ...existing styles... */

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

        /* Mobile menu button style */
        .mobile-menu {
          display: none; /* By default, hide the menu button */
          cursor: pointer;
          font-size: 24px;
          z-index: 10;
          color: #fff;
        }

        /* Mobile menu items style */
        .menu-items {
          display: flex;
          gap: 8px;
        }

        /* On mobile, show the menu button and adjust the menu items */
        @media (max-width: 768px) {
          .mobile-menu {
            display: block;
          }
          .menu-items {
            display: none; /* By default, hide the menu items on mobile */
            flex-direction: column;
            gap: 16px;
          }
          .menu-items.active {
            display: flex; /* Display the menu items when active (open) */
          }
        }
      `}
      </style>
    </motion.nav>
  );
};

export default Navbar;
