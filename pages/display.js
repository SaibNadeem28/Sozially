'use client';

import React from 'react';
import { Footer, Navbar, Scrollup } from '../components';

import Blog1 from '../components/Blog1';

const DisplayPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Blog1 />
    <Footer />
    <Scrollup />
  </div>
);
export default DisplayPage;
