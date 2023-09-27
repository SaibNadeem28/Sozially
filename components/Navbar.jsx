'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', checkIsMobile);
    checkIsMobile();
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Define your animation variants here
  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
      style={{ zIndex: 10 }}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" style={{ zIndex: 10 }} />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}>
        <img
          src="/logow.svg"
          alt="logo"
          className="logo"
        />

        {isMobile ? (
          <>
            <button type="button" onClick={toggleMobileMenu} className="menu-toggle">
              <img src="/menu.svg" alt="Menu" />
            </button>

            {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              variants={dropdownVariants}
              initial="closed"
              animate={isMobileMenuOpen ? 'open' : 'closed'}
            >
              <Link href="#about" onClick={closeMobileMenu}>
                <h2>About Us</h2>
              </Link>
              <Link href="#portfolio" onClick={closeMobileMenu}>
                <h2>Portfolio</h2>
              </Link>
              <Link href="#services" onClick={closeMobileMenu}>
                <h2>Services</h2>
              </Link>
              <Link href="#blog" onClick={closeMobileMenu}>
                <h2>Blog</h2>
              </Link>
              <Link href="#feedback" onClick={closeMobileMenu}>
                <h2>Get In Touch</h2>
              </Link>
            </motion.div>
            )}
          </>
        ) : (
          <>
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
          </>
        )}
      </div>

      <style>{`
        .logo {
          width: 35px;
          height: 50px;
          position: relative;
          z-index: 2;
        }

        .menu-toggle {
          display: none;
        }

        .mobile-menu {
          position: absolute;
          top: 100%; 
          right: 0;
          background-color: #fff;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          z-index: 10;
          width: 390px;
          text-align: center; 
          display: flex;      
          flex-direction: column;
          align-items: center;
          justify-content: center; 
        }
        .mobile-menu button {
          align-self: flex-end; 
        }
        .mobile-menu h2 {
          margin-bottom: 10px;  
        }
        
        
        
        .fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.9);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        @media (max-width: 767px) {
          .menu-toggle {
            display: block;
          }
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
        }

        .rectangle:hover {
          box-shadow: 0 0 20px rgba(83, 175, 206, 1);
        }
      `}
      </style>

    </motion.nav>
  );
};

export default Navbar;
