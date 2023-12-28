// File: components/InsightCard.jsx
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index, route }) => {
  const router = useRouter(); // Initialize the router

  const navigate = () => {
    router.push(route); // Use the route prop to navigate
  };

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4 items-center cursor-pointer"
      onClick={navigate} // Add the onClick event here to the entire card
    >
      {/* Image */}
      <img
        src={imgUrl}
        alt={title}
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />

      {/* Title and Subtitle */}
      <div className="flex-1">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        {subtitle && (
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default InsightCard;
