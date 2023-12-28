'use client'

import React from 'react';
import { Footer, Navbar, Scrollup } from '../components';
import Blog2 from '../components/Blog2';

const DisplayPage = () => (
  <div className="bg-primary-black overflow-hidden" >
    <Navbar />
    <Blog2 />
    <Footer />
    <Scrollup />
  </div>
);

export default DisplayPage;
