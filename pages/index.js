'use client';

import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, GetStarted2, GetStarted3, Hero, Insights, WhatsNew, WhatsNew2, World } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <GetStarted2 />
    </div>
    <div className="relative">
      <WhatsNew2 />
    </div>
    <div className="relative">
      <GetStarted3 />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
