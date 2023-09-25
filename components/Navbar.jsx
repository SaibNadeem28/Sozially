'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react'; // Import useEffect
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State to track if it's mobile view
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Use useEffect to update isMobile state based on window width
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust breakpoint as needed
    };

    // Listen for window resize events
    window.addEventListener('resize', checkIsMobile);

    // Initial check when the component mounts
    checkIsMobile();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" style={{ zIndex: 0 }} />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}>
        <img
          src="/logow.svg"
          alt="logo"
          className="logo"
        />

        {/* Conditionally render based on isMobile state */}
        {isMobile ? (
          <>
            <button type="button" onClick={toggleMobileMenu} className="menu-toggle">
              <img src="/menu.svg" alt="Menu" />
            </button>

            {isMobileMenuOpen && (
              <div className="mobile-menu">
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
              </div>
            )}
          </>
        ) : (
          <>
            <Link href="about">
              <div className="rectangle-container">
                <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
                  About Us
                </h2>
                <div className="rectangle" />
              </div>
            </Link>
            <Link href="portfolio">
              <div className="rectangle-container">
                <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
                  Portfolio
                </h2>
                <div className="rectangle" />
              </div>
            </Link>
            <Link href="services">
              <div className="rectangle-container">
                <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
                  Services
                </h2>
                <div className="rectangle" />
              </div>
            </Link>
            <Link href="blog">
              <div className="rectangle-container">
                <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
                  Blog
                </h2>
                <div className="rectangle" />
              </div>
            </Link>
            <Link href="feedback">
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
          top: 60px;
          right: 0;
          background-color: #fff;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          z-index: 3; /* Increase the z-index to position it above other elements */
        }

        /* Show the menu toggle button on small screens */
        @media (max-width: 767px) {
          .menu-toggle {
            display: block;
          }
          .mobile-menu {
            display: ${isMobileMenuOpen ? 'block' : 'none'};
            /* You can add additional styling for the mobile menu here */
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
          box-shadow: none; /* No glow by default */
        }

        .rectangle:hover {
          box-shadow: 0 0 20px rgba(83, 175, 206, 1); /* Add glow on hover */
        }        
      `}
      </style>

    </motion.nav>
  );
};

export default Navbar;
