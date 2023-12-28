
/* eslint-disable */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypingText } from '.';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
// import { blog } from '../sections';

const Blog2 = () => (
  <section id="about" className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    {/* <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    > */}
      <TypingText title="| Why You Need a Custom Website for Your Business" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <div className="mt-[16px] w-full text-center md:text-left">
          <p className="font-bold lg:text-[30px] text-[14px] text-secondary-white">
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
              Indroduction:
            </h1>
            <h1 className="mt-[25px] font-normal lg:text-[20px] text-[14px] text-justify text-secondary-white">
            In an era where digital footprints serve as indelible ink, your website isn't just a URL—it's the digital embodiment of your brand. Sure, off-the-shelf templates can get you online, but they're the equivalent of fast food in a world craving gourmet experiences. Here's why a custom website isn't a luxury; it's a business imperative.
            </h1>
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
            Customization for Brand Identity: Tailoring Your Digital Suit </h1>
            <h1 className="mt-[25px] font-bold lg:text-[20px] text-[14px] text-justify text-secondary-white">
            The Aesthetics and Beyond:
            </h1>
            <h1 className="mt-[25px] font-normal lg:text-[20px] text-[14px] text-justify text-secondary-white">
            Imagine walking into a room where everyone is wearing the same outfit. How do you stand out? Customization is more than skin-deep—it's about creating a unique digital persona that's unmistakably you. From the color palette to the micro-interactions on your buttons, every element should be a harmonious note in the symphony that is your brand.
            </h1>
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
            SEO Advantages: Not Just Alphabet Soup
            </h1>
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
            The Intricacies of Search Algorithms:
            </h1>
            <h1 className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-justify text-secondary-white">
            In the labyrinthine world of SEO, a custom website is your compass. Unlike the rigidity of templates, custom sites are fluid, adaptable canvases for SEO strategies. Think meta descriptions that sing, and schema markups that talk directly to search engines. The result? A spotlight on the digital stage, with organic traffic that's not just high in numbers but rich in quality
            </h1>
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
            Scalability and Flexibility: Your Business in Flux
            </h1>
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
            The Modular Approach
            </h1>
            <h1 className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-justify text-secondary-white">
            Businesses evolve, and your website should be a living entity that morphs with it. Custom websites are modular by design, allowing for seamless integrations, be it a new payment gateway or an AI-driven customer service bot. It's not about adding rooms to a house; it's about having the architecture that lets you build skyscrapers.
            </h1>
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
            Enhanced User Experience: The Silent Conductor of Conversion
            </h1>
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
            Speed, Responsiveness, and Intuitive Journeys
            </h1>
            <h1 className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-justify text-secondary-white">
            In a world with an 8-second attention span, loading time isn't just a metric; it's a business KPI. Custom websites are streamlined for performance, ensuring that your audience stays glued, not just clicked. And let's not forget mobile—where responsiveness isn't a feature but a mandate.
            </h1>
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
            Competitive Edge: The Unseen Battlefield
            </h1>
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
            The Nuances of Differentiation
            </h1>
            <h1 className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-justify text-secondary-white">
            In a sea of me-toos, a custom website is your battle flag. It allows you to showcase what's unique about your business—be it your sustainable practices, your heritage, or your community involvement—in a way that's both authentic and compelling
            </h1>
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
            Cost-Benefit Analysis: The Long Game
            </h1>
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
            ROI in Digital Real Estate
            </h1>
            <h1 className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-justify text-secondary-white">
            The upfront costs of a custom website might make you wince, but consider this: What's the lifetime value of a customer who had a memorable brand interaction? The ROI isn't just in dollars and cents; it's in brand loyalty, customer advocacy, and a robust digital reputation.
            </h1>
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
            Conclusion: The Sum of All Parts
            </h1>
            <h1 className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-justify text-secondary-white">
            A custom website is a confluence of strategy, branding, technology, and user experience. It's not just about looking different; it's about being different—in a way that's measurable, scalable, and ultimately, profitable.
            </h1>
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
            Call to Action
            </h1>
            <h1 className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-justify text-secondary-white">
            Ready for a digital transformation that pays dividends? Contact us at Sozially. Let's architect your digital future, one custom element at a time. Request a quote from Sozially today.By aligning with Sozially, you're not just opting for a website—you're opting for a digital strategy that propels your business into the future.
            </h1>
            <h1 className="mt-[16px] font-bold lg:text-[25px] text-[14px] text-justify text-secondary-white">
              FAQs
              <li className="mt-[16px] font-bold lg:text-[20px] text-[14px] text-justify text-secondary-white">
                Is a custom website expensive? &nbsp
                <li className="mt-[16px] ml-[35px] font-normal lg:text-[20px] text-[14px] text-justify text-secondary-white">
                    It's not an expense; it's a high-yield investment.
                    </li>
                </li>
                <li className="mt-[16px] font-bold lg:text-[20px] text-[14px] text-justify text-secondary-white">
                    Do I need to know coding to have a custom website?
                <li className="mt-[16px] ml-[35px] font-normal lg:text-[20px] text-[14px] text-justify text-secondary-white">
                    Coding is our job; running your business is yours.
                    </li>
                </li>
                <li className="mt-[16px] font-bold lg:text-[20px] text-[14px] text-justify text-secondary-white">
                    How long does it take to build a custom website?
                <li className="mt-[16px] ml-[35px] font-normal lg:text-[20px] text-[14px] text-justify text-secondary-white">
                    Time is relative; excellence is constant.
                    </li>
                </li>
                <li className="mt-[16px] font-bold lg:text-[20px] text-[14px] text-justify text-secondary-white">
                    Can I update my custom website myself?
                <li className="mt-[16px] ml-[35px] font-normal lg:text-[20px] text-[14px] text-justify text-secondary-white">
                    Absolutely, we build it; you drive it.
                    </li>
                </li>
                <li className="mt-[16px] font-bold lg:text-[20px] text-[14px] text-justify text-secondary-white">
                    Is a custom website better than using a website builder?
                <li className="mt-[16px] ml-[35px] font-normal lg:text-[20px] text-[14px] text-justify text-secondary-white">
                    It's like comparing a tailored suit to off-the-rack; one simply fits better.
                    </li>
                </li>
            </h1>
          </p>
        </div>
      </motion.p>
    {/* </motion.div> */}
  </section>
);

export default Blog2;