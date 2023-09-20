import React, { useEffect } from 'react';

function SvgComponent({ delay, ...props }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const element = document.getElementById('flash');
      if (element) {
        element.style.animation = 'flashing 4s infinite';
        element.style.animationDelay = `${delay}s`;
      }
    }, delay * 1700);

    return () => clearTimeout(timer);  // Cleanup timeout if the component unmounts
  }, [delay]);

  return (

    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 866 545.56"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1{opacity:.82}.cls-13{mix-blend-mode:screen}.cls-16{opacity:.3}.cls-48,.cls-50,.cls-51,.cls-52,.cls-54,.cls-56,.cls-57,.cls-58,.cls-59,.cls-60,.cls-61,.cls-62,.cls-63,.cls-64,.cls-65{mix-blend-mode:multiply}.cls-102,.cls-16{fill:#fff}.cls-48{opacity:.57}.cls-48,.cls-50,.cls-51,.cls-52,.cls-56,.cls-58,.cls-59,.cls-60,.cls-61,.cls-62,.cls-63,.cls-64{fill:#bbc0c0}.cls-107{fill:#6947cf}.cls-50{opacity:.65}.cls-225{opacity:.45}.cls-237{opacity:.18}.cls-244{opacity:.09}.cls-247{fill:#9e88ce}.cls-254{opacity:.2}.cls-266{fill:#101232}.cls-267{opacity:0}.cls-52{opacity:.14}.cls-319{opacity:.36}.cls-340{fill:#3d2c8d}.cls-54{fill:#d0d4d4}.cls-56{opacity:.4}.cls-57{opacity:.1}.cls-58{opacity:.31}.cls-59{opacity:.48}.cls-474{opacity:.64}.cls-60{opacity:.83}.cls-61{opacity:.05}.cls-527{fill:#44e5f5}.cls-624{opacity:.73}.cls-62{opacity:.74}.cls-63{opacity:.91}.cls-698{opacity:.55}.cls-744{opacity:.91}.cls-64{opacity:.22}.cls-752{opacity:.27}.cls-65{fill:#0f0f0f;opacity:.19}"
        }
      </style>
      <linearGradient
        id="New_Gradient_Swatch_copy_5"
        x1={183.49}
        y1={376.82}
        x2={374.77}
        y2={319.54}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1b1032" />
        <stop offset={1} stopColor="#3d2c8d" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_5-2"
        x1={28.64}
        y1={399.96}
        x2={279.2}
        y2={343.79}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient"
        x1={223.58}
        y1={176.9}
        x2={171.08}
        y2={276.96}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.51} stopColor="#3d2c8d" />
        <stop offset={0.63} stopColor="#3d2f8d" />
        <stop offset={0.74} stopColor="#3d3a8f" />
        <stop offset={0.84} stopColor="#3d4b93" />
        <stop offset={0.94} stopColor="#3e6498" />
        <stop offset={1} stopColor="#3f779c" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1={155.82}
        y1={288.99}
        x2={32.49}
        y2={381.66}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#ff9891" />
        <stop offset={0.08} stopColor="#b670af" />
        <stop offset={0.14} stopColor="#7e52c6" />
        <stop offset={0.16} stopColor="#6947cf" />
        <stop offset={0.37} stopColor="#606ad7" />
        <stop offset={0.84} stopColor="#4bc5ed" />
        <stop offset={1} stopColor="#44e5f5" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-3"
        x1={160.95}
        y1={295.82}
        x2={37.62}
        y2={388.49}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-4"
        x1={166.08}
        y1={302.65}
        x2={42.74}
        y2={395.31}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-5"
        x1={171.21}
        y1={309.47}
        x2={47.87}
        y2={402.14}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-6"
        x1={176.33}
        y1={316.3}
        x2={53}
        y2={408.96}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-7"
        x1={181.46}
        y1={323.12}
        x2={58.13}
        y2={415.79}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-8"
        x1={186.59}
        y1={329.95}
        x2={63.26}
        y2={422.61}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-9"
        x1={191.72}
        y1={336.77}
        x2={68.39}
        y2={429.44}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-10"
        x1={196.85}
        y1={343.6}
        x2={73.51}
        y2={436.26}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-11"
        x1={201.98}
        y1={350.42}
        x2={78.64}
        y2={443.09}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-12"
        x1={207.1}
        y1={357.25}
        x2={83.77}
        y2={449.92}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-13"
        x1={212.23}
        y1={364.07}
        x2={88.9}
        y2={456.74}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-14"
        x1={217.36}
        y1={370.9}
        x2={94.03}
        y2={463.57}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-15"
        x1={222.49}
        y1={377.73}
        x2={99.16}
        y2={470.39}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-16"
        x1={227.62}
        y1={384.55}
        x2={104.28}
        y2={477.22}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-17"
        x1={232.75}
        y1={391.38}
        x2={109.41}
        y2={484.04}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-18"
        x1={4500.84}
        y1={411.81}
        x2={4562.17}
        y2={234.81}
        gradientTransform="matrix(-1 0 0 1 4740.62 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.03} stopColor="#3d2c8d" />
        <stop offset={1} stopColor="#3f779c" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-19"
        x1={4503.54}
        y1={414.71}
        x2={4564.87}
        y2={237.71}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-20"
        x1={4506.24}
        y1={417.6}
        x2={4567.57}
        y2={240.6}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-21"
        x1={4508.93}
        y1={420.49}
        x2={4570.27}
        y2={243.49}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-22"
        x1={4511.63}
        y1={423.38}
        x2={4572.97}
        y2={246.38}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-23"
        x1={4514.33}
        y1={426.28}
        x2={4575.66}
        y2={249.28}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-24"
        x1={4517.03}
        y1={429.17}
        x2={4578.36}
        y2={252.17}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-25"
        x1={4519.73}
        y1={432.06}
        x2={4581.06}
        y2={255.06}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-26"
        x1={4522.42}
        y1={434.96}
        x2={4583.76}
        y2={257.96}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-27"
        x1={4525.12}
        y1={437.85}
        x2={4586.45}
        y2={260.85}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-28"
        x1={4527.82}
        y1={440.74}
        x2={4589.15}
        y2={263.74}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-29"
        x1={4530.52}
        y1={443.63}
        x2={4591.85}
        y2={266.63}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-30"
        x1={4533.22}
        y1={446.53}
        x2={4594.55}
        y2={269.53}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-31"
        x1={4535.91}
        y1={449.42}
        x2={4597.25}
        y2={272.42}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-32"
        x1={4538.61}
        y1={452.31}
        x2={4599.94}
        y2={275.31}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-33"
        x1={4541.31}
        y1={455.21}
        x2={4602.64}
        y2={278.21}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-3"
        x1={9108.52}
        y1={9319.19}
        x2={9072.94}
        y2={9387.01}
        gradientTransform="rotate(-180 4625.225 4826.05)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-4"
        x1={132.59}
        y1={271.36}
        x2={193.26}
        y2={251.59}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-5"
        x1={185.45}
        y1={263.41}
        x2={206.38}
        y2={254.26}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-34"
        x1={135.22}
        y1={300.84}
        x2={229.17}
        y2={233.68}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-6"
        x1={651.81}
        y1={385.15}
        x2={848.94}
        y2={326.12}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-7"
        x1={521.71}
        y1={408.67}
        x2={698.56}
        y2={369.03}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-35"
        x1={720.02}
        y1={182.9}
        x2={639.44}
        y2={336.46}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-8"
        x1={8669.03}
        y1={9205.12}
        x2={8600.16}
        y2={9336.38}
        gradientTransform="rotate(-180 4625.225 4826.05)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-9"
        x1={575.35}
        y1={334.02}
        x2={695.51}
        y2={294.86}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-10"
        x1={671.69}
        y1={309.37}
        x2={693.14}
        y2={299.99}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-36"
        x1={570.27}
        y1={380.52}
        x2={747.8}
        y2={253.62}
        xlinkHref="#linear-gradient"
      />
      <radialGradient
        id="radial-gradient"
        cx={5416.33}
        cy={320.36}
        fx={5416.33}
        fy={320.36}
        r={2.8}
        gradientTransform="translate(-4773.91)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.03} stopColor="#f5cc85" />
        <stop offset={0.78} stopColor="#f5a9a6" />
        <stop offset={0.99} stopColor="#e7a09c" />
      </radialGradient>
      <linearGradient
        id="linear-gradient-37"
        x1={5421.61}
        y1={335.49}
        x2={5421.61}
        y2={332.31}
        gradientTransform="translate(-4773.91)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09} stopColor="#1b1032" />
        <stop offset={0.36} stopColor="#24184c" />
        <stop offset={0.89} stopColor="#3d2c8d" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_15"
        x1={5419.91}
        y1={326.34}
        x2={5424.69}
        y2={326.34}
        gradientTransform="translate(-4773.91)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#5c4edb" />
        <stop offset={0.44} stopColor="#6b5de4" />
        <stop offset={1} stopColor="#877af5" />
      </linearGradient>
      <radialGradient
        id="radial-gradient-2"
        cx={4964.03}
        cy={264.72}
        fx={4964.03}
        fy={264.72}
        r={3.6}
        gradientTransform="rotate(4.44 2285.387 -55489.426)"
        xlinkHref="#radial-gradient"
      />
      <linearGradient
        id="linear-gradient-38"
        x1={5402.13}
        y1={323.81}
        x2={5408.49}
        y2={323.81}
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="linear-gradient-39"
        x1={5397.02}
        y1={327.03}
        x2={5402.34}
        y2={327.03}
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20"
        x1={5402.01}
        y1={313.79}
        x2={5406.18}
        y2={313.79}
        gradientTransform="translate(-4773.91)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#2f539b" />
        <stop offset={0.18} stopColor="#3162a4" />
        <stop offset={0.47} stopColor="#378abd" />
        <stop offset={0.86} stopColor="#40cbe5" />
        <stop offset={1} stopColor="#44e5f5" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_20-2"
        x1={5396.77}
        y1={315.28}
        x2={5402.58}
        y2={315.28}
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_3"
        x1={5401.85}
        y1={294.35}
        x2={5405.81}
        y2={291.44}
        gradientTransform="translate(-4773.91)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#9ba4b3" />
        <stop offset={0.58} stopColor="#d2d1d8" />
        <stop offset={1} stopColor="#edebf2" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_14"
        x1={5403.15}
        y1={295.39}
        x2={5405.54}
        y2={293.91}
        gradientTransform="translate(-4773.91)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#7a43b5" />
        <stop offset={0.24} stopColor="#894abf" />
        <stop offset={0.65} stopColor="#b15eda" />
        <stop offset={1} stopColor="#da72f5" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_20-3"
        x1={5403.22}
        y1={296.83}
        x2={5410.4}
        y2={297.04}
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-4"
        x1={5403.25}
        y1={293.13}
        x2={5405.82}
        y2={293.13}
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_3-2"
        x1={5399.28}
        y1={291.01}
        x2={5403.43}
        y2={288.82}
        xlinkHref="#New_Gradient_Swatch_copy_3"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-5"
        x1={5396.22}
        y1={298.5}
        x2={5406.28}
        y2={296.69}
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-6"
        x1={5398.29}
        y1={295.15}
        x2={5402.77}
        y2={293.26}
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <radialGradient
        id="Radial_Gradient_2"
        cx={5399.88}
        cy={294.41}
        fx={5399.88}
        fy={294.41}
        r={3.68}
        gradientTransform="translate(-4773.91)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff" />
        <stop offset={1} />
      </radialGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_20-7"
        x1={5396.97}
        y1={302.88}
        x2={5401.38}
        y2={302.46}
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-8"
        x1={5406.79}
        y1={302.32}
        x2={5408.22}
        y2={302.32}
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <radialGradient
        id="radial-gradient-3"
        cx={5411.4}
        cy={301.83}
        fx={5411.4}
        fy={301.83}
        r={4.35}
        gradientTransform="translate(-4773.91)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.03} stopColor="#f5cc85" />
        <stop offset={1} stopColor="#f5a9a6" />
      </radialGradient>
      <radialGradient
        id="radial-gradient-4"
        cx={5412.57}
        cy={299.88}
        fx={5412.57}
        fy={299.88}
        r={6.75}
        xlinkHref="#radial-gradient"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-9"
        x1={5390.83}
        y1={297.71}
        x2={5406.13}
        y2={296.97}
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <linearGradient
        id="linear-gradient-40"
        x1={5415.77}
        y1={339.02}
        x2={5417.03}
        y2={335.31}
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_15-2"
        x1={5414.87}
        y1={327.8}
        x2={5420.99}
        y2={327.8}
        xlinkHref="#New_Gradient_Swatch_copy_15"
      />
      <radialGradient
        id="radial-gradient-5"
        cx={5417.82}
        cy={297.05}
        fx={5417.82}
        fy={297.05}
        r={4.26}
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="linear-gradient-41"
        x1={5421.32}
        y1={299.42}
        x2={5418.44}
        y2={294.34}
        gradientTransform="translate(-4773.91)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#622425" />
        <stop offset={0.62} stopColor="#703325" />
        <stop offset={1} stopColor="#7d4026" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_15-3"
        x1={5413.51}
        y1={302.33}
        x2={5424.84}
        y2={302.33}
        xlinkHref="#New_Gradient_Swatch_copy_15"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_3-3"
        x1={5419.94}
        y1={301.89}
        x2={5419.05}
        y2={300.3}
        xlinkHref="#New_Gradient_Swatch_copy_3"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_15-4"
        x1={5414.68}
        y1={310}
        x2={5425.41}
        y2={310}
        xlinkHref="#New_Gradient_Swatch_copy_15"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_15-5"
        x1={5417.48}
        y1={306.16}
        x2={5420.11}
        y2={299.4}
        xlinkHref="#New_Gradient_Swatch_copy_15"
      />
      <radialGradient
        id="Radial_Gradient_2-2"
        cx={5419.47}
        cy={302.13}
        fx={5419.47}
        fy={302.13}
        r={2.62}
        xlinkHref="#Radial_Gradient_2"
      />
      <radialGradient
        id="radial-gradient-6"
        cx={5405.04}
        cy={285.94}
        fx={5405.04}
        fy={285.94}
        r={4.77}
        xlinkHref="#radial-gradient-3"
      />
      <radialGradient
        id="radial-gradient-7"
        cx={5404.2}
        cy={285.98}
        fx={5404.2}
        fy={285.98}
        r={5.08}
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="linear-gradient-42"
        x1={5399.41}
        y1={284.82}
        x2={5404.76}
        y2={284.82}
        xlinkHref="#linear-gradient-41"
      />
      <linearGradient
        id="linear-gradient-43"
        x1={5416.04}
        y1={328.04}
        x2={5421.33}
        y2={326.46}
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="linear-gradient-44"
        x1={5403.9}
        y1={327.54}
        x2={5431.19}
        y2={321.42}
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_4"
        x1={5410.27}
        y1={327.48}
        x2={5413.95}
        y2={326.65}
        gradientTransform="translate(-4773.91)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#ff9891" />
        <stop offset={0.3} stopColor="#fca79f" />
        <stop offset={0.82} stopColor="#f7cfc7" />
        <stop offset={1} stopColor="#f5dfd6" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-45"
        x1={5400.6}
        y1={326.1}
        x2={5424.55}
        y2={320.73}
        xlinkHref="#linear-gradient-37"
      />
      <radialGradient
        id="Radial_Gradient_2-3"
        cx={5410.26}
        cy={329.47}
        fx={5410.26}
        fy={329.47}
        r={4.8}
        xlinkHref="#Radial_Gradient_2"
      />
      <linearGradient
        id="linear-gradient-46"
        x1={5413.81}
        y1={319.83}
        x2={5412.51}
        y2={322.31}
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="linear-gradient-47"
        x1={5413.54}
        y1={322.82}
        x2={5412.31}
        y2={320.54}
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="linear-gradient-48"
        x1={5525.58}
        y1={729.19}
        x2={5536.62}
        y2={726.72}
        gradientTransform="rotate(30 4053.852 -9388.826) skewX(30)"
        xlinkHref="#linear-gradient-37"
      />
      <radialGradient
        id="Radial_Gradient_2-4"
        cx={5413.97}
        cy={324.16}
        fx={5413.97}
        fy={324.16}
        r={3.03}
        xlinkHref="#Radial_Gradient_2"
      />
      <radialGradient
        id="radial-gradient-8"
        cx={4752.29}
        cy={272.46}
        fx={4752.29}
        fy={272.46}
        r={2.97}
        gradientTransform="rotate(6.44 2286.61 -36269.806)"
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_15-6"
        x1={5412.44}
        y1={311.19}
        x2={5419.04}
        y2={311.19}
        xlinkHref="#New_Gradient_Swatch_copy_15"
      />
      <radialGradient
        id="radial-gradient-9"
        cx={4959.36}
        cy={260.15}
        fx={4959.36}
        fy={260.15}
        r={4.04}
        gradientTransform="rotate(4.44 2285.387 -55489.426)"
        xlinkHref="#radial-gradient-3"
      />
      <radialGradient
        id="radial-gradient-10"
        cx={5410.34}
        cy={303.91}
        fx={5410.34}
        fy={303.91}
        r={1.95}
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-11"
        x1={559.91}
        y1={369.68}
        x2={732.96}
        y2={317.86}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-12"
        x1={415.49}
        y1={390.58}
        x2={641.89}
        y2={339.83}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-49"
        x1={598.62}
        y1={187.46}
        x2={546.11}
        y2={287.52}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-50"
        x1={509.07}
        y1={276.93}
        x2={551.07}
        y2={337.43}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#ff9891" />
        <stop offset={0.25} stopColor="#b670af" />
        <stop offset={0.45} stopColor="#7e52c6" />
        <stop offset={0.55} stopColor="#6947cf" />
        <stop offset={0.8} stopColor="#666ad0" />
        <stop offset={1} stopColor="#658bd2" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-51"
        x1={504.05}
        y1={284.08}
        x2={557.8}
        y2={347.24}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#f29191" />
        <stop offset={0.2} stopColor="#ba73a7" />
        <stop offset={0.41} stopColor="#8355be" />
        <stop offset={0.51} stopColor="#6e4ac7" />
        <stop offset={0.54} stopColor="#6a47c8" />
        <stop offset={0.55} stopColor="#6645cb" />
        <stop offset={0.79} stopColor="#6368cc" />
        <stop offset={1} stopColor="#628ace" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-52"
        x1={498.74}
        y1={292.13}
        x2={564.79}
        y2={355.86}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#e58a90" />
        <stop offset={0.18} stopColor="#b771a2" />
        <stop offset={0.4} stopColor="#8053b9" />
        <stop offset={0.51} stopColor="#6b48c3" />
        <stop offset={0.54} stopColor="#6745c4" />
        <stop offset={0.55} stopColor="#6343c6" />
        <stop offset={0.79} stopColor="#6166c8" />
        <stop offset={1} stopColor="#6088cb" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-53"
        x1={493.37}
        y1={301.15}
        x2={571.78}
        y2={363.19}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#d88290" />
        <stop offset={0.16} stopColor="#b36e9f" />
        <stop offset={0.39} stopColor="#7c51b6" />
        <stop offset={0.51} stopColor="#6746bf" />
        <stop offset={0.54} stopColor="#6344c0" />
        <stop offset={0.55} stopColor="#6042c2" />
        <stop offset={0.79} stopColor="#5e65c4" />
        <stop offset={1} stopColor="#5d87c7" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-54"
        x1={488.18}
        y1={311.19}
        x2={578.45}
        y2={369.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#cb7b90" />
        <stop offset={0.13} stopColor="#b06c9a" />
        <stop offset={0.38} stopColor="#794eb1" />
        <stop offset={0.51} stopColor="#6443ba" />
        <stop offset={0.54} stopColor="#6041bb" />
        <stop offset={0.55} stopColor="#5d40bd" />
        <stop offset={0.79} stopColor="#5b63c0" />
        <stop offset={1} stopColor="#5b86c4" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-55"
        x1={483.4}
        y1={322.22}
        x2={584.49}
        y2={373.95}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#be7490" />
        <stop offset={0.09} stopColor="#ac6a96" />
        <stop offset={0.37} stopColor="#754cad" />
        <stop offset={0.51} stopColor="#6041b6" />
        <stop offset={0.54} stopColor="#5c3fb7" />
        <stop offset={0.55} stopColor="#5a3eb9" />
        <stop offset={0.79} stopColor="#5861bc" />
        <stop offset={1} stopColor="#5884c0" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-56"
        x1={479.29}
        y1={334.17}
        x2={589.59}
        y2={377.55}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#b16d8f" />
        <stop offset={0.05} stopColor="#a96991" />
        <stop offset={0.36} stopColor="#724aa9" />
        <stop offset={0.51} stopColor="#5d3fb2" />
        <stop offset={0.54} stopColor="#593db3" />
        <stop offset={0.55} stopColor="#573cb5" />
        <stop offset={0.79} stopColor="#565fb8" />
        <stop offset={1} stopColor="#5683bc" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-57"
        x1={476.07}
        y1={346.89}
        x2={593.47}
        y2={380.21}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#a4668f" />
        <stop offset={0.34} stopColor="#6e48a5" />
        <stop offset={0.51} stopColor="#593dae" />
        <stop offset={0.54} stopColor="#553aaf" />
        <stop offset={0.55} stopColor="#543ab0" />
        <stop offset={0.79} stopColor="#535db4" />
        <stop offset={1} stopColor="#5382b9" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-58"
        x1={473.95}
        y1={360.19}
        x2={595.9}
        y2={382.17}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#985e8f" />
        <stop offset={0.32} stopColor="#6b46a1" />
        <stop offset={0.51} stopColor="#563baa" />
        <stop offset={0.55} stopColor="#5239ab" />
        <stop offset={0.55} stopColor="#5239ac" />
        <stop offset={0.79} stopColor="#515cb0" />
        <stop offset={1} stopColor="#5180b5" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-59"
        x1={473.07}
        y1={373.83}
        x2={596.7}
        y2={383.76}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#8b578f" />
        <stop offset={0.3} stopColor="#67449d" />
        <stop offset={0.51} stopColor="#5239a6" />
        <stop offset={0.55} stopColor="#4f37a7" />
        <stop offset={0.79} stopColor="#4e5aac" />
        <stop offset={1} stopColor="#4e7fb2" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-60"
        x1={473.32}
        y1={387.55}
        x2={596.03}
        y2={385.33}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#7e508e" />
        <stop offset={0.26} stopColor="#644298" />
        <stop offset={0.51} stopColor="#4f37a2" />
        <stop offset={0.55} stopColor="#4c35a3" />
        <stop offset={0.78} stopColor="#4c58a8" />
        <stop offset={1} stopColor="#4c7eae" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-61"
        x1={473.98}
        y1={401.19}
        x2={594.87}
        y2={387.07}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#71498e" />
        <stop offset={0.21} stopColor="#604094" />
        <stop offset={0.51} stopColor="#4b359e" />
        <stop offset={0.55} stopColor="#49339f" />
        <stop offset={0.78} stopColor="#4956a4" />
        <stop offset={1} stopColor="#497caa" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-62"
        x1={475.93}
        y1={414.53}
        x2={592.05}
        y2={389.24}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#64428e" />
        <stop offset={0.12} stopColor="#5d3e90" />
        <stop offset={0.51} stopColor="#483299" />
        <stop offset={0.55} stopColor="#46319a" />
        <stop offset={0.78} stopColor="#4654a0" />
        <stop offset={1} stopColor="#477ba7" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-63"
        x1={479.14}
        y1={427.29}
        x2={587.64}
        y2={392.21}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#573a8e" />
        <stop offset={0.51} stopColor="#443095" />
        <stop offset={0.55} stopColor="#433096" />
        <stop offset={0.78} stopColor="#43539c" />
        <stop offset={1} stopColor="#447aa3" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-64"
        x1={483.48}
        y1={439.18}
        x2={581.81}
        y2={396.34}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#4a338d" />
        <stop offset={0.51} stopColor="#412e91" />
        <stop offset={0.55} stopColor="#402e91" />
        <stop offset={0.78} stopColor="#405198" />
        <stop offset={1} stopColor="#4278a0" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-65"
        x1={488.79}
        y1={449.95}
        x2={574.79}
        y2={401.95}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-66"
        x1={547.69}
        y1={360.36}
        x2={619.19}
        y2={197.86}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-67"
        x1={550.59}
        y1={362.24}
        x2={622.09}
        y2={199.74}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-68"
        x1={553.49}
        y1={364.13}
        x2={624.99}
        y2={201.63}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-69"
        x1={556.39}
        y1={366.02}
        x2={627.89}
        y2={203.52}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-70"
        x1={559.29}
        y1={367.9}
        x2={630.79}
        y2={205.4}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-71"
        x1={562.2}
        y1={369.79}
        x2={633.7}
        y2={207.29}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-72"
        x1={565.1}
        y1={371.68}
        x2={636.6}
        y2={209.18}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-73"
        x1={568}
        y1={373.57}
        x2={639.5}
        y2={211.07}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-74"
        x1={570.9}
        y1={375.45}
        x2={642.4}
        y2={212.95}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-75"
        x1={573.81}
        y1={377.34}
        x2={645.31}
        y2={214.84}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-76"
        x1={576.71}
        y1={379.23}
        x2={648.21}
        y2={216.73}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-77"
        x1={579.61}
        y1={381.11}
        x2={651.11}
        y2={218.61}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-78"
        x1={582.51}
        y1={383}
        x2={654.01}
        y2={220.5}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-79"
        x1={585.41}
        y1={384.89}
        x2={656.91}
        y2={222.39}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-80"
        x1={588.32}
        y1={386.77}
        x2={659.82}
        y2={224.27}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-81"
        x1={591.22}
        y1={388.66}
        x2={662.72}
        y2={226.16}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-13"
        x1={561.8}
        y1={289.86}
        x2={642.92}
        y2={265.57}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-14"
        x1={479.2}
        y1={299.55}
        x2={584.33}
        y2={275.99}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-82"
        x1={562}
        y1={287.35}
        x2={640.53}
        y2={263.84}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#6e81d5" />
        <stop offset={1} stopColor="#877af5" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-83"
        x1={480.87}
        y1={296.73}
        x2={582.58}
        y2={273.93}
        xlinkHref="#linear-gradient-82"
      />
      <linearGradient
        id="linear-gradient-84"
        x1={588.35}
        y1={199.78}
        x2={546.48}
        y2={279.57}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-15"
        x1={8725.18}
        y1={9332.76}
        x2={8699.61}
        y2={9381.48}
        gradientTransform="rotate(-180 4625.225 4826.05)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-16"
        x1={518.57}
        y1={275.12}
        x2={562.15}
        y2={260.92}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-17"
        x1={556.54}
        y1={269.41}
        x2={571.58}
        y2={262.84}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-85"
        x1={520.46}
        y1={296.3}
        x2={587.96}
        y2={248.05}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-86"
        x1={262.15}
        y1={416.84}
        x2={392.9}
        y2={416.84}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3d2c8d" />
        <stop offset={0.22} stopColor="#43309c" />
        <stop offset={0.39} stopColor="#4a36ac" />
        <stop offset={0.87} stopColor="#1b1032" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-87"
        x1={262.15}
        y1={395.35}
        x2={392.9}
        y2={395.35}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#5c4edb" />
        <stop offset={0.16} stopColor="#6b5de4" />
        <stop offset={0.35} stopColor="#877af5" />
        <stop offset={0.44} stopColor="#44e5f5" />
        <stop offset={0.87} stopColor="#5c4edb" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-88"
        x1={262.15}
        y1={401.38}
        x2={392.9}
        y2={401.38}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#5c4edb" />
        <stop offset={0.16} stopColor="#6b5de4" />
        <stop offset={0.35} stopColor="#877af5" />
        <stop offset={0.44} stopColor="#4ad2f3" />
        <stop offset={0.53} stopColor="#4cb6ed" />
        <stop offset={0.87} stopColor="#594ad2" />
        <stop offset={0.97} stopColor="#5849d0" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-89"
        x1={262.15}
        y1={407.41}
        x2={392.9}
        y2={407.41}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#5c4edb" />
        <stop offset={0.16} stopColor="#6b5de4" />
        <stop offset={0.35} stopColor="#877af5" />
        <stop offset={0.44} stopColor="#51c0f1" />
        <stop offset={0.53} stopColor="#4ea4ea" />
        <stop offset={0.87} stopColor="#5547ca" />
        <stop offset={0.97} stopColor="#5344c5" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-90"
        x1={262.15}
        y1={413.45}
        x2={392.9}
        y2={413.45}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#5c4edb" />
        <stop offset={0.16} stopColor="#6b5de4" />
        <stop offset={0.35} stopColor="#877af5" />
        <stop offset={0.44} stopColor="#57adef" />
        <stop offset={0.53} stopColor="#5193e7" />
        <stop offset={0.87} stopColor="#5243c1" />
        <stop offset={0.97} stopColor="#4f3fba" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-91"
        x1={262.15}
        y1={419.48}
        x2={392.9}
        y2={419.48}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#5c4edb" />
        <stop offset={0.16} stopColor="#6b5de4" />
        <stop offset={0.35} stopColor="#877af5" />
        <stop offset={0.44} stopColor="#5e9bed" />
        <stop offset={0.53} stopColor="#5482e4" />
        <stop offset={0.87} stopColor="#4e3fb9" />
        <stop offset={0.97} stopColor="#4a3bae" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-92"
        x1={262.15}
        y1={425.51}
        x2={392.9}
        y2={425.51}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#5c4edb" />
        <stop offset={0.16} stopColor="#6b5de4" />
        <stop offset={0.35} stopColor="#877af5" />
        <stop offset={0.44} stopColor="#6488eb" />
        <stop offset={0.53} stopColor="#5771e1" />
        <stop offset={0.87} stopColor="#4b3bb0" />
        <stop offset={0.97} stopColor="#4636a3" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-93"
        x1={262.15}
        y1={431.55}
        x2={392.9}
        y2={431.55}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#5c4edb" />
        <stop offset={0.16} stopColor="#6b5de4" />
        <stop offset={0.35} stopColor="#877af5" />
        <stop offset={0.44} stopColor="#6b76e9" />
        <stop offset={0.53} stopColor="#595fde" />
        <stop offset={0.87} stopColor="#4738a8" />
        <stop offset={0.97} stopColor="#413198" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-94"
        x1={262.15}
        y1={437.58}
        x2={392.9}
        y2={437.58}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#5c4edb" />
        <stop offset={0.16} stopColor="#6b5de4" />
        <stop offset={0.35} stopColor="#877af5" />
        <stop offset={0.53} stopColor="#5c4edb" />
        <stop offset={0.97} stopColor="#3d2c8d" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-95"
        x1={262.18}
        y1={441.24}
        x2={262.19}
        y2={441.24}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3d2c8d" />
        <stop offset={0.28} stopColor="#43309c" />
        <stop offset={0.5} stopColor="#4a36ac" />
        <stop offset={0.87} stopColor="#1b1032" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-96"
        x1={407.99}
        y1={221.6}
        x2={316.12}
        y2={396.67}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.74} stopColor="#3d2c8d" />
        <stop offset={1} stopColor="#3f779c" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-97"
        x1={3723.98}
        y1={373.44}
        x2={3844.29}
        y2={373.44}
        gradientTransform="matrix(-1 0 0 1 4104.62 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#9181a5" />
        <stop offset={0.26} stopColor="#9383a7" />
        <stop offset={0.36} stopColor="#9a8aae" />
        <stop offset={0.44} stopColor="#a797bb" />
        <stop offset={0.49} stopColor="#b5a6ca" />
        <stop offset={0.51} stopColor="#b8aacc" />
        <stop offset={0.52} stopColor="#c3b7d4" />
        <stop offset={0.53} stopColor="#d5cde1" />
        <stop offset={0.55} stopColor="#eeebf3" />
        <stop offset={0.56} stopColor="#fff" />
        <stop offset={0.57} stopColor="#e7dff3" />
        <stop offset={0.58} stopColor="#d4c7ea" />
        <stop offset={0.59} stopColor="#c9b9e4" />
        <stop offset={0.6} stopColor="#c6b4e3" />
        <stop offset={0.61} stopColor="#beade0" />
        <stop offset={0.67} stopColor="#9c91d5" />
        <stop offset={0.72} stopColor="#847dcd" />
        <stop offset={0.77} stopColor="#7671c8" />
        <stop offset={0.81} stopColor="#716dc7" />
        <stop offset={1} stopColor="#9e88ce" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_19"
        x1={3721.42}
        y1={370.29}
        x2={3837.17}
        y2={370.29}
        gradientTransform="matrix(-1 0 0 1 4104.62 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#8a7bca" />
        <stop offset={0.14} stopColor="#9081cc" />
        <stop offset={0.33} stopColor="#a292d4" />
        <stop offset={0.55} stopColor="#c0afe0" />
        <stop offset={0.58} stopColor="#c6b4e3" />
        <stop offset={0.76} stopColor="#d2c3e8" />
        <stop offset={1} stopColor="#e7def3" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-98"
        x1={3722.71}
        y1={370.29}
        x2={3835.87}
        y2={370.29}
        gradientTransform="matrix(-1 0 0 1 4104.62 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#29143e" />
        <stop offset={1} stopColor="#5148c1" />
      </linearGradient>
      <radialGradient
        id="New_Gradient_Swatch_copy_18"
        cx={4708.56}
        cy={694.29}
        fx={4708.56}
        fy={694.29}
        r={21.1}
        gradientTransform="matrix(0 -1 -.66 0 769.53 5112.02)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#843b94" />
        <stop offset={0.03} stopColor="#7b378a" />
        <stop offset={0.19} stopColor="#552660" />
        <stop offset={0.34} stopColor="#36183d" />
        <stop offset={0.5} stopColor="#1e0d22" />
        <stop offset={0.66} stopColor="#0d060f" />
        <stop offset={0.83} stopColor="#030103" />
        <stop offset={1} />
      </radialGradient>
      <radialGradient
        id="New_Gradient_Swatch_copy_18-2"
        cx={4551.58}
        cy={13.53}
        fx={4551.58}
        fy={13.53}
        r={16.18}
        gradientTransform="rotate(-161.02 2478.521 523.588) scale(1 -.59)"
        xlinkHref="#New_Gradient_Swatch_copy_18"
      />
      <linearGradient
        id="linear-gradient-99"
        x1={698.06}
        y1={-1094.1}
        x2={645.3}
        y2={-1133.98}
        gradientTransform="matrix(-.86603 .5 1.50012 .2886 2571.42 350.69)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#29143e" />
        <stop offset={1} stopColor="#101133" />
        <stop offset={1} stopColor="#101232" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-100"
        x1={3770.58}
        y1={343.69}
        x2={3800.13}
        y2={390.07}
        gradientTransform="matrix(-1 0 0 1 4104.62 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#9181a5" />
        <stop offset={0.25} stopColor="#9282a7" />
        <stop offset={0.34} stopColor="#9989ae" />
        <stop offset={0.42} stopColor="#a493bb" />
        <stop offset={0.48} stopColor="#b4a3ce" />
        <stop offset={0.53} stopColor="#c8b7e6" />
        <stop offset={0.56} stopColor="#d5c3f5" />
        <stop offset={0.61} stopColor="#beafea" />
        <stop offset={0.7} stopColor="#9c92db" />
        <stop offset={0.78} stopColor="#847dd0" />
        <stop offset={0.86} stopColor="#7671c9" />
        <stop offset={0.92} stopColor="#716dc7" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_11"
        x1={288.86}
        y1={348.49}
        x2={368.2}
        y2={209.15}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#8a7bca" />
        <stop offset={0.14} stopColor="#8d7ecb" />
        <stop offset={0.27} stopColor="#9889d0" />
        <stop offset={0.4} stopColor="#ab9bd8" />
        <stop offset={0.52} stopColor="#c6b4e3" />
        <stop offset={0.65} stopColor="#d1c3e8" />
        <stop offset={0.9} stopColor="#f1ecf8" />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-101"
        x1={4817.29}
        y1={370.54}
        x2={4759.83}
        y2={281.46}
        gradientTransform="matrix(-1 0 0 1 5090.19 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1f183c" />
        <stop offset={0.69} stopColor="#5148c1" />
        <stop offset={1} stopColor="#8e41b0" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-102"
        x1={4839.75}
        y1={377.5}
        x2={4780.55}
        y2={282.92}
        gradientTransform="matrix(-1 0 0 1 5090.19 0)"
        xlinkHref="#linear-gradient-97"
      />
      <radialGradient
        id="Radial_Gradient_2-5"
        cx={4822.86}
        cy={319.39}
        fx={4822.86}
        fy={319.39}
        r={10.06}
        gradientTransform="matrix(-1 0 0 1 5090.19 0)"
        xlinkHref="#Radial_Gradient_2"
      />
      <radialGradient
        id="radial-gradient-11"
        cx={1891.83}
        cy={3214.19}
        fx={1891.83}
        fy={3214.19}
        r={4.72}
        gradientTransform="matrix(-.3801 .92494 .61046 .25087 -987.88 -2242.95)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#843b94" />
        <stop offset={0.03} stopColor="#7b378a" />
        <stop offset={0.19} stopColor="#552660" />
        <stop offset={0.34} stopColor="#36183d" />
        <stop offset={0.5} stopColor="#1e0d22" />
        <stop offset={0.66} stopColor="#0d060f" />
        <stop offset={0.83} stopColor="#030103" />
        <stop offset={1} />
      </radialGradient>
      <linearGradient
        id="linear-gradient-103"
        x1={268.88}
        y1={323.89}
        x2={332.95}
        y2={323.89}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.01} stopColor="#f5878f" />
        <stop offset={1} stopColor="#1a00d9" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-104"
        x1={268.94}
        y1={335.31}
        x2={333.06}
        y2={335.31}
        xlinkHref="#linear-gradient-103"
      />
      <linearGradient
        id="linear-gradient-105"
        x1={268.9}
        y1={343.16}
        x2={333.15}
        y2={343.16}
        xlinkHref="#linear-gradient-103"
      />
      <linearGradient
        id="linear-gradient-106"
        x1={435.27}
        y1={259.5}
        x2={485.92}
        y2={320.64}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.16} stopColor="#1b1032" />
        <stop offset={1} stopColor="#7a43b5" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-107"
        x1={-179.28}
        y1={2830.59}
        x2={-154.97}
        y2={2830.59}
        gradientTransform="rotate(30 5695.393 -286.276) skewX(30)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.01} stopColor="#44e5f5" />
        <stop offset={1} stopColor="#1a00d9" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-108"
        x1={-176.74}
        y1={2834.07}
        x2={-163.93}
        y2={2834.07}
        xlinkHref="#linear-gradient-107"
      />
      <linearGradient
        id="linear-gradient-109"
        x1={480.2}
        y1={296.33}
        x2={483.93}
        y2={313.98}
        xlinkHref="#linear-gradient-107"
      />
      <linearGradient
        id="linear-gradient-110"
        x1={483.24}
        y1={302.36}
        x2={473.68}
        y2={286.78}
        xlinkHref="#linear-gradient-107"
      />
      <linearGradient
        id="linear-gradient-111"
        x1={469.72}
        y1={289.82}
        x2={477.82}
        y2={297.19}
        xlinkHref="#linear-gradient-107"
      />
      <linearGradient
        id="linear-gradient-112"
        x1={479.55}
        y1={300.82}
        x2={471.35}
        y2={290.95}
        xlinkHref="#linear-gradient-107"
      />
      <linearGradient
        id="linear-gradient-113"
        x1={5658.39}
        y1={-1394.23}
        x2={5664.56}
        y2={-1394.23}
        gradientTransform="matrix(0 -1.15 .87 .49789 1684.56 7536.25)"
        xlinkHref="#linear-gradient-107"
      />
      <linearGradient
        id="linear-gradient-114"
        x1={5658.45}
        y1={-1399.37}
        x2={5662.99}
        y2={-1399.37}
        gradientTransform="matrix(0 -1.15 .87 .49789 1684.56 7536.25)"
        xlinkHref="#linear-gradient-107"
      />
      <linearGradient
        id="linear-gradient-115"
        x1={469.01}
        y1={293.71}
        x2={475.45}
        y2={297.24}
        xlinkHref="#linear-gradient-107"
      />
      <linearGradient
        id="linear-gradient-116"
        x1={438.32}
        y1={283.98}
        x2={463.26}
        y2={283.98}
        xlinkHref="#linear-gradient-107"
      />
      <linearGradient
        id="linear-gradient-117"
        x1={430.67}
        y1={260.92}
        x2={376.42}
        y2={324.67}
        xlinkHref="#linear-gradient-106"
      />
      <linearGradient
        id="linear-gradient-118"
        x1={8823.47}
        y1={318.85}
        x2={8824.72}
        y2={284.65}
        gradientTransform="matrix(-1 0 0 1 9229.11 0)"
        xlinkHref="#linear-gradient-107"
      />
      <linearGradient
        id="linear-gradient-119"
        x1={8822.24}
        y1={270.34}
        x2={8824.46}
        y2={305.28}
        gradientTransform="matrix(-1 0 0 1 9229.11 0)"
        xlinkHref="#linear-gradient-107"
      />
      <linearGradient
        id="linear-gradient-120"
        x1={8823.97}
        y1={299.2}
        x2={8825}
        y2={316.85}
        gradientTransform="matrix(-1 0 0 1 9229.11 0)"
        xlinkHref="#linear-gradient-107"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-18"
        x1={308.09}
        y1={401.32}
        x2={455.08}
        y2={357.31}
        gradientTransform="translate(142 50.84)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-19"
        x1={168.34}
        y1={419.17}
        x2={361.92}
        y2={375.78}
        gradientTransform="translate(142 50.84)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-121"
        x1={340.94}
        y1={257.4}
        x2={277.93}
        y2={377.48}
        gradientTransform="translate(142 50.84)"
        xlinkHref="#linear-gradient-96"
      />
      <linearGradient
        id="linear-gradient-122"
        x1={483.15}
        y1={241.96}
        x2={420.01}
        y2={362.3}
        xlinkHref="#linear-gradient-96"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21"
        x1={423.97}
        y1={424.23}
        x2={537.05}
        y2={390.37}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.03} stopColor="#6947cf" />
        <stop offset={0.28} stopColor="#606ad7" />
        <stop offset={0.82} stopColor="#4bc5ed" />
        <stop offset={1} stopColor="#44e5f5" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-123"
        x1={334.32}
        y1={429.89}
        x2={483.04}
        y2={396.55}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#2f539b" />
        <stop offset={0.18} stopColor="#3162a4" />
        <stop offset={0.47} stopColor="#378abd" />
        <stop offset={0.86} stopColor="#40cbe5" />
        <stop offset={1} stopColor="#44e5f5" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_5-20"
        x1={319.24}
        y1={387.42}
        x2={494.03}
        y2={348.24}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-21"
        x1={447.38}
        y1={378.3}
        x2={596.21}
        y2={333.74}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-22"
        x1={6641.02}
        y1={381.01}
        x2={6768.12}
        y2={342.95}
        gradientTransform="matrix(-1 0 0 1 7062.05 0)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-23"
        x1={6524.59}
        y1={408.01}
        x2={6692.11}
        y2={370.46}
        gradientTransform="matrix(-1 0 0 1 7062.05 0)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-24"
        x1={6656.89}
        y1={417.31}
        x2={6791.2}
        y2={377.09}
        gradientTransform="matrix(-1 0 0 1 7062.05 0)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-124"
        x1={6509.71}
        y1={375.64}
        x2={6641.79}
        y2={431.09}
        gradientTransform="matrix(-1 0 0 1 7062.05 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#3d2c8d" />
        <stop offset={0.08} stopColor="#39277f" />
        <stop offset={0.39} stopColor="#29143e" />
        <stop offset={1} stopColor="#101133" />
        <stop offset={1} stopColor="#101232" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-125"
        x1={6548.83}
        y1={417.14}
        x2={6770.15}
        y2={367.53}
        gradientTransform="matrix(-1 0 0 1 7062.05 0)"
        xlinkHref="#linear-gradient-123"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-25"
        x1={316.67}
        y1={415.47}
        x2={493.81}
        y2={375.76}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <radialGradient
        id="radial-gradient-12"
        cx={404.11}
        cy={384.84}
        fx={404.11}
        fy={384.84}
        r={24.73}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4f91b2" />
        <stop offset={0.11} stopColor="#3d708a" />
        <stop offset={0.26} stopColor="#2a4e60" />
        <stop offset={0.4} stopColor="#1b323d" />
        <stop offset={0.54} stopColor="#0f1c22" />
        <stop offset={0.69} stopColor="#060c0f" />
        <stop offset={0.84} stopColor="#010303" />
        <stop offset={1} />
      </radialGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_5-26"
        x1={6514.26}
        y1={451.39}
        x2={6649.39}
        y2={421.1}
        gradientTransform="matrix(-1 0 0 1 7062.05 0)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-126"
        x1={6509.36}
        y1={375.48}
        x2={6641.84}
        y2={431.09}
        xlinkHref="#linear-gradient-124"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-2"
        x1={6598.35}
        y1={407.73}
        x2={6705.06}
        y2={375.78}
        gradientTransform="matrix(-1 0 0 1 7062.05 0)"
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-27"
        x1={446.25}
        y1={410.49}
        x2={580.16}
        y2={370.4}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-28"
        x1={6648.53}
        y1={406.68}
        x2={6774.38}
        y2={368.99}
        gradientTransform="matrix(-1 0 0 1 7062.05 0)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-29"
        x1={6531.55}
        y1={434.37}
        x2={6697.42}
        y2={397.19}
        gradientTransform="matrix(-1 0 0 1 7062.05 0)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-127"
        x1={6534.85}
        y1={373.04}
        x2={6724.44}
        y2={452.63}
        xlinkHref="#linear-gradient-124"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-30"
        x1={6902.56}
        y1={3817.36}
        x2={6971.83}
        y2={3796.62}
        gradientTransform="rotate(-180 3664.01 2088.89)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-31"
        x1={6837.22}
        y1={3825.78}
        x2={6928.47}
        y2={3805.32}
        gradientTransform="rotate(-180 3664.01 2088.89)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-32"
        x1={6921.86}
        y1={3741.86}
        x2={6892.77}
        y2={3797.31}
        gradientTransform="rotate(-180 3664.01 2088.89)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <radialGradient
        id="radial-gradient-13"
        cx={6975.39}
        cy={327}
        fx={6975.39}
        fy={327}
        r={17.41}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#radial-gradient-3"
      />
      <radialGradient
        id="radial-gradient-14"
        cx={6978.9}
        cy={327.66}
        fx={6978.9}
        fy={327.66}
        r={14.34}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="linear-gradient-128"
        x1={6986.27}
        y1={309.94}
        x2={7008.46}
        y2={304.96}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_3-4"
        x1={6986.45}
        y1={309.99}
        x2={7007.58}
        y2={305.25}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#New_Gradient_Swatch_copy_3"
      />
      <linearGradient
        id="linear-gradient-129"
        x1={6986.65}
        y1={309.79}
        x2={7006.28}
        y2={305.39}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#linear-gradient-37"
      />
      <radialGradient
        id="radial-gradient-15"
        cx={6977.86}
        cy={327.57}
        fx={6977.86}
        fy={327.57}
        r={15.9}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#radial-gradient-3"
      />
      <radialGradient
        id="radial-gradient-16"
        cx={6980.96}
        cy={331.12}
        fx={6980.96}
        fy={331.12}
        r={15.5}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-2"
        x1={6981.99}
        y1={318.39}
        x2={6995.86}
        y2={318.39}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-3"
        x1={6991.09}
        y1={318.64}
        x2={6977.8}
        y2={317.72}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <radialGradient
        id="radial-gradient-17"
        cx={6996.12}
        cy={309.05}
        fx={6996.12}
        fy={309.05}
        r={2.41}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#radial-gradient-3"
      />
      <radialGradient
        id="radial-gradient-18"
        cx={6996.12}
        cy={308.98}
        fx={6996.12}
        fy={308.98}
        r={2.48}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-4"
        x1={6982.42}
        y1={307.39}
        x2={6993.4}
        y2={301.72}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <linearGradient
        id="linear-gradient-130"
        x1={399.34}
        y1={311.04}
        x2={409.58}
        y2={308.94}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.07} stopColor="#7a43b5" />
        <stop offset={0.27} stopColor="#894abf" />
        <stop offset={0.66} stopColor="#b15eda" />
        <stop offset={1} stopColor="#da72f5" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_14-5"
        x1={400.9}
        y1={309.86}
        x2={409.74}
        y2={309.86}
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <radialGradient
        id="radial-gradient-19"
        cx={6986.28}
        cy={298.26}
        fx={6986.28}
        fy={298.26}
        r={3.63}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_3-5"
        x1={6984.5}
        y1={302.99}
        x2={6986.5}
        y2={301.36}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#New_Gradient_Swatch_copy_3"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-6"
        x1={6984.02}
        y1={302.08}
        x2={6989.21}
        y2={302.08}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <radialGradient
        id="Radial_Gradient_2-6"
        cx={6985.81}
        cy={303.38}
        fx={6985.81}
        fy={303.38}
        r={2.05}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#Radial_Gradient_2"
      />
      <linearGradient
        id="linear-gradient-131"
        x1={6985.26}
        y1={300.52}
        x2={6986.67}
        y2={294.21}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#linear-gradient-41"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-7"
        x1={394.5}
        y1={310.69}
        x2={405.24}
        y2={307.48}
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <linearGradient
        id="linear-gradient-132"
        x1={6983.82}
        y1={300.19}
        x2={6983.82}
        y2={295.7}
        gradientTransform="matrix(-1 0 0 1 7390.56 0)"
        xlinkHref="#linear-gradient-41"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-33"
        x1={573.44}
        y1={424.37}
        x2={653.69}
        y2={380.37}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-133"
        x1={661.12}
        y1={356.86}
        x2={551.07}
        y2={441.56}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3d2c8d" />
        <stop offset={0.25} stopColor="#3d2f8d" />
        <stop offset={0.48} stopColor="#3d3a8f" />
        <stop offset={0.68} stopColor="#3d4b93" />
        <stop offset={0.88} stopColor="#3e6498" />
        <stop offset={1} stopColor="#3f779c" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_21-3"
        x1={604.83}
        y1={351.31}
        x2={626.83}
        y2={412.98}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-134"
        x1={664.36}
        y1={370.87}
        x2={588.11}
        y2={407.12}
        xlinkHref="#linear-gradient-133"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-34"
        x1={349.3}
        y1={496.36}
        x2={425.8}
        y2={449.36}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-135"
        x1={419.79}
        y1={443.91}
        x2={351.4}
        y2={496.55}
        xlinkHref="#linear-gradient-133"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-35"
        x1={661.02}
        y1={403.03}
        x2={827.35}
        y2={353.23}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-36"
        x1={565.92}
        y1={423.08}
        x2={713.74}
        y2={389.94}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-136"
        x1={711.34}
        y1={237.44}
        x2={658.84}
        y2={337.49}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-37"
        x1={685.33}
        y1={408.18}
        x2={876.05}
        y2={351.07}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-38"
        x1={576.28}
        y1={431.18}
        x2={748.08}
        y2={392.66}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-137"
        x1={741.84}
        y1={218.43}
        x2={683.31}
        y2={329.98}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-138"
        x1={656.62}
        y1={460.76}
        x2={693.62}
        y2={322.43}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-4"
        x1={673.81}
        y1={458.79}
        x2={693.48}
        y2={330.12}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-139"
        x1={663.98}
        y1={462.74}
        x2={700.98}
        y2={324.4}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-140"
        x1={667.67}
        y1={463.72}
        x2={704.67}
        y2={325.39}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-141"
        x1={671.35}
        y1={464.71}
        x2={708.35}
        y2={326.37}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-5"
        x1={690.44}
        y1={461.33}
        x2={710.11}
        y2={332.66}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-142"
        x1={678.72}
        y1={466.68}
        x2={715.72}
        y2={328.34}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-6"
        x1={670.55}
        y1={458.29}
        x2={690.22}
        y2={329.62}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-143"
        x1={661.81}
        y1={462.16}
        x2={698.81}
        y2={323.82}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-144"
        x1={665.49}
        y1={463.14}
        x2={702.49}
        y2={324.81}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-7"
        x1={683.03}
        y1={460.2}
        x2={702.69}
        y2={331.53}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-145"
        x1={676.54}
        y1={466.09}
        x2={713.54}
        y2={327.76}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-146"
        x1={680.23}
        y1={467.08}
        x2={717.23}
        y2={328.75}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-147"
        x1={659.63}
        y1={461.57}
        x2={696.63}
        y2={323.24}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-8"
        x1={675.61}
        y1={459.06}
        x2={695.28}
        y2={330.39}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-9"
        x1={679.77}
        y1={459.7}
        x2={699.44}
        y2={331.03}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-148"
        x1={670.68}
        y1={464.53}
        x2={707.68}
        y2={326.19}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-149"
        x1={674.37}
        y1={465.51}
        x2={711.36}
        y2={327.18}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-150"
        x1={678.05}
        y1={466.5}
        x2={715.05}
        y2={328.16}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-10"
        x1={696.41}
        y1={462.24}
        x2={716.07}
        y2={333.57}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-151"
        x1={661.14}
        y1={461.98}
        x2={698.14}
        y2={323.64}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-152"
        x1={668.5}
        y1={463.95}
        x2={705.5}
        y2={325.61}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-11"
        x1={684.83}
        y1={460.47}
        x2={704.5}
        y2={331.8}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-153"
        x1={675.87}
        y1={465.91}
        x2={712.87}
        y2={327.58}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-12"
        x1={693.15}
        y1={461.74}
        x2={712.82}
        y2={333.08}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-154"
        x1={683.24}
        y1={467.89}
        x2={720.24}
        y2={329.55}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-155"
        x1={662.64}
        y1={462.38}
        x2={699.64}
        y2={324.04}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-156"
        x1={666.33}
        y1={463.36}
        x2={703.33}
        y2={325.03}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-13"
        x1={681.57}
        y1={459.97}
        x2={701.24}
        y2={331.31}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-157"
        x1={673.69}
        y1={465.33}
        x2={710.69}
        y2={327}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-158"
        x1={677.38}
        y1={466.32}
        x2={714.38}
        y2={327.99}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-159"
        x1={684.75}
        y1={468.29}
        x2={721.75}
        y2={329.96}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-14"
        x1={674.16}
        y1={458.84}
        x2={693.82}
        y2={330.17}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-15"
        x1={678.32}
        y1={459.47}
        x2={697.98}
        y2={330.81}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-160"
        x1={671.52}
        y1={464.75}
        x2={708.52}
        y2={326.42}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-161"
        x1={675.2}
        y1={465.74}
        x2={712.2}
        y2={327.4}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-16"
        x1={690.79}
        y1={461.38}
        x2={710.46}
        y2={332.72}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-162"
        x1={682.57}
        y1={467.71}
        x2={719.57}
        y2={329.37}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-17"
        x1={699.11}
        y1={462.65}
        x2={718.78}
        y2={333.99}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-18"
        x1={675.06}
        y1={458.98}
        x2={694.72}
        y2={330.31}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-163"
        x1={669.34}
        y1={464.17}
        x2={706.34}
        y2={325.84}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-164"
        x1={673.02}
        y1={465.15}
        x2={710.02}
        y2={326.82}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-165"
        x1={676.71}
        y1={466.14}
        x2={713.71}
        y2={327.81}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-19"
        x1={691.69}
        y1={461.52}
        x2={711.36}
        y2={332.85}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-166"
        x1={684.07}
        y1={468.11}
        x2={721.07}
        y2={329.78}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-167"
        x1={687.76}
        y1={469.1}
        x2={724.76}
        y2={330.76}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-168"
        x1={667.16}
        y1={463.59}
        x2={704.16}
        y2={325.25}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-169"
        x1={670.85}
        y1={464.57}
        x2={707.85}
        y2={326.24}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-20"
        x1={684.28}
        y1={460.39}
        x2={703.94}
        y2={331.72}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-21"
        x1={688.44}
        y1={461.02}
        x2={708.1}
        y2={332.35}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-170"
        x1={681.9}
        y1={467.53}
        x2={718.9}
        y2={329.19}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-22"
        x1={696.75}
        y1={462.29}
        x2={716.42}
        y2={333.63}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-171"
        x1={689.26}
        y1={469.5}
        x2={726.27}
        y2={331.16}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-23"
        x1={676.86}
        y1={459.25}
        x2={696.53}
        y2={330.59}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-172"
        x1={672.35}
        y1={464.98}
        x2={709.35}
        y2={326.64}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-173"
        x1={679.72}
        y1={466.95}
        x2={716.72}
        y2={328.61}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-174"
        x1={683.4}
        y1={467.93}
        x2={720.4}
        y2={329.6}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-175"
        x1={687.09}
        y1={468.92}
        x2={724.09}
        y2={330.58}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-176"
        x1={690.77}
        y1={469.9}
        x2={727.77}
        y2={331.57}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-24"
        x1={677.76}
        y1={459.39}
        x2={697.43}
        y2={330.72}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-25"
        x1={681.92}
        y1={460.03}
        x2={701.59}
        y2={331.36}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-177"
        x1={677.54}
        y1={466.36}
        x2={714.54}
        y2={328.03}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-26"
        x1={690.24}
        y1={461.3}
        x2={709.91}
        y2={332.63}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-27"
        x1={694.4}
        y1={461.93}
        x2={714.07}
        y2={333.27}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-178"
        x1={688.59}
        y1={469.32}
        x2={725.59}
        y2={330.99}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-28"
        x1={702.72}
        y1={463.2}
        x2={722.38}
        y2={334.54}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-179"
        x1={671.68}
        y1={464.8}
        x2={708.68}
        y2={326.46}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-180"
        x1={675.37}
        y1={465.78}
        x2={712.37}
        y2={327.45}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-29"
        x1={686.98}
        y1={460.8}
        x2={706.65}
        y2={332.13}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-181"
        x1={682.73}
        y1={467.75}
        x2={719.73}
        y2={329.42}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-182"
        x1={686.42}
        y1={468.74}
        x2={723.42}
        y2={330.4}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-183"
        x1={690.1}
        y1={469.72}
        x2={727.1}
        y2={331.39}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-184"
        x1={693.78}
        y1={470.71}
        x2={730.78}
        y2={332.37}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-185"
        x1={676.87}
        y1={466.18}
        x2={713.87}
        y2={327.85}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-186"
        x1={680.56}
        y1={467.17}
        x2={717.56}
        y2={328.84}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-187"
        x1={684.24}
        y1={468.15}
        x2={721.24}
        y2={329.82}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-30"
        x1={696.2}
        y1={462.21}
        x2={715.87}
        y2={333.54}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-31"
        x1={700.36}
        y1={462.84}
        x2={720.03}
        y2={334.18}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-188"
        x1={695.29}
        y1={471.11}
        x2={732.29}
        y2={332.78}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-32"
        x1={680.47}
        y1={459.8}
        x2={700.13}
        y2={331.14}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-189"
        x1={678.38}
        y1={466.59}
        x2={715.38}
        y2={328.25}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-190"
        x1={682.06}
        y1={467.57}
        x2={719.06}
        y2={329.24}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-33"
        x1={692.94}
        y1={461.71}
        x2={712.61}
        y2={333.05}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-191"
        x1={689.43}
        y1={469.54}
        x2={726.43}
        y2={331.21}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-192"
        x1={696.8}
        y1={471.51}
        x2={733.8}
        y2={333.18}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-193"
        x1={676.2}
        y1={466}
        x2={713.2}
        y2={327.67}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-34"
        x1={685.53}
        y1={460.58}
        x2={705.19}
        y2={331.91}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-194"
        x1={683.57}
        y1={467.97}
        x2={720.57}
        y2={329.64}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-35"
        x1={693.85}
        y1={461.85}
        x2={713.51}
        y2={333.18}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-36"
        x1={698}
        y1={462.48}
        x2={717.67}
        y2={333.82}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-195"
        x1={694.62}
        y1={470.93}
        x2={731.62}
        y2={332.6}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-37"
        x1={706.32}
        y1={463.76}
        x2={725.99}
        y2={335.09}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-196"
        x1={677.71}
        y1={466.41}
        x2={714.71}
        y2={328.07}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-197"
        x1={681.39}
        y1={467.39}
        x2={718.39}
        y2={329.06}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-198"
        x1={688.76}
        y1={469.36}
        x2={725.76}
        y2={331.03}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-38"
        x1={698.91}
        y1={462.62}
        x2={718.57}
        y2={333.95}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-39"
        x1={703.06}
        y1={463.26}
        x2={722.73}
        y2={334.59}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-199"
        x1={699.81}
        y1={472.32}
        x2={736.81}
        y2={333.98}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-40"
        x1={683.17}
        y1={460.22}
        x2={702.84}
        y2={331.55}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-41"
        x1={687.33}
        y1={460.85}
        x2={707}
        y2={332.19}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-200"
        x1={686.58}
        y1={468.78}
        x2={723.58}
        y2={330.45}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-42"
        x1={695.65}
        y1={462.12}
        x2={715.32}
        y2={333.46}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-201"
        x1={693.95}
        y1={470.75}
        x2={730.95}
        y2={332.42}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-202"
        x1={697.63}
        y1={471.74}
        x2={734.63}
        y2={333.4}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-203"
        x1={680.72}
        y1={467.21}
        x2={717.72}
        y2={328.88}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-204"
        x1={684.41}
        y1={468.2}
        x2={721.41}
        y2={329.87}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-205"
        x1={688.09}
        y1={469.18}
        x2={725.09}
        y2={330.85}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-206"
        x1={691.77}
        y1={470.17}
        x2={728.77}
        y2={331.83}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-207"
        x1={695.46}
        y1={471.15}
        x2={732.46}
        y2={332.82}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-208"
        x1={699.14}
        y1={472.14}
        x2={736.14}
        y2={333.81}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-43"
        x1={709.03}
        y1={464.17}
        x2={728.69}
        y2={335.5}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-209"
        x1={682.23}
        y1={467.62}
        x2={719.23}
        y2={329.28}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-44"
        x1={689.13}
        y1={461.13}
        x2={708.8}
        y2={332.46}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-210"
        x1={689.6}
        y1={469.59}
        x2={726.6}
        y2={331.25}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-211"
        x1={693.28}
        y1={470.57}
        x2={730.28}
        y2={332.24}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-45"
        x1={701.61}
        y1={463.04}
        x2={721.28}
        y2={334.37}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-212"
        x1={700.65}
        y1={472.54}
        x2={737.65}
        y2={334.21}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-213"
        x1={704.33}
        y1={473.53}
        x2={741.33}
        y2={335.2}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-214"
        x1={683.73}
        y1={468.02}
        x2={720.74}
        y2={329.68}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-46"
        x1={690.03}
        y1={461.27}
        x2={709.7}
        y2={332.6}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-215"
        x1={691.1}
        y1={469.99}
        x2={728.1}
        y2={331.66}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-47"
        x1={698.35}
        y1={462.54}
        x2={718.02}
        y2={333.87}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-216"
        x1={698.47}
        y1={471.96}
        x2={735.47}
        y2={333.63}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-217"
        x1={702.15}
        y1={472.95}
        x2={739.15}
        y2={334.61}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-218"
        x1={705.84}
        y1={473.93}
        x2={742.84}
        y2={335.6}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-219"
        x1={4894.31}
        y1={481.28}
        x2={4931.31}
        y2={342.94}
        gradientTransform="matrix(-1 0 0 1 5571.02 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#658bd2" />
        <stop offset={0.55} stopColor="#6947cf" />
        <stop offset={0.67} stopColor="#8c5ac0" />
        <stop offset={0.93} stopColor="#e78b9a" />
        <stop offset={1} stopColor="#ff9891" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-220"
        x1={4901.68}
        y1={483.24}
        x2={4938.68}
        y2={344.91}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-221"
        x1={4899.5}
        y1={482.66}
        x2={4936.5}
        y2={344.33}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-222"
        x1={4903.18}
        y1={483.65}
        x2={4940.18}
        y2={345.32}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-223"
        x1={4897.32}
        y1={482.08}
        x2={4934.32}
        y2={343.75}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-224"
        x1={4901.01}
        y1={483.07}
        x2={4938.01}
        y2={344.73}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-225"
        x1={4898.83}
        y1={482.48}
        x2={4935.83}
        y2={344.15}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-226"
        x1={4906.2}
        y1={484.46}
        x2={4943.2}
        y2={346.12}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-227"
        x1={4900.34}
        y1={482.89}
        x2={4937.34}
        y2={344.56}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-228"
        x1={4907.7}
        y1={484.86}
        x2={4944.7}
        y2={346.53}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-229"
        x1={4905.53}
        y1={484.28}
        x2={4942.53}
        y2={345.94}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-230"
        x1={4907.03}
        y1={484.68}
        x2={4944.03}
        y2={346.35}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-231"
        x1={4910.72}
        y1={485.66}
        x2={4947.72}
        y2={347.33}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-232"
        x1={4904.85}
        y1={484.1}
        x2={4941.86}
        y2={345.76}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-233"
        x1={4912.22}
        y1={486.07}
        x2={4949.22}
        y2={347.73}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-234"
        x1={4906.36}
        y1={484.5}
        x2={4943.36}
        y2={346.17}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-235"
        x1={4910.05}
        y1={485.49}
        x2={4947.05}
        y2={347.15}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-236"
        x1={4913.73}
        y1={486.47}
        x2={4950.73}
        y2={348.14}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-237"
        x1={4911.55}
        y1={485.89}
        x2={4948.55}
        y2={347.55}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-238"
        x1={4909.37}
        y1={485.31}
        x2={4946.37}
        y2={346.97}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-239"
        x1={4913.06}
        y1={486.29}
        x2={4950.06}
        y2={347.96}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-240"
        x1={4916.74}
        y1={487.28}
        x2={4953.74}
        y2={348.94}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-241"
        x1={4918.25}
        y1={487.68}
        x2={4955.25}
        y2={349.35}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-242"
        x1={4912.39}
        y1={486.11}
        x2={4949.39}
        y2={347.78}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-243"
        x1={4919.76}
        y1={488.08}
        x2={4956.76}
        y2={349.75}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-244"
        x1={4917.58}
        y1={487.5}
        x2={4954.58}
        y2={349.17}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-245"
        x1={4922.77}
        y1={488.89}
        x2={4959.77}
        y2={350.55}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-246"
        x1={4916.91}
        y1={487.32}
        x2={4953.91}
        y2={348.99}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-247"
        x1={4920.59}
        y1={488.31}
        x2={4957.59}
        y2={349.97}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-248"
        x1={4918.41}
        y1={487.72}
        x2={4955.41}
        y2={349.39}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-249"
        x1={4922.1}
        y1={488.71}
        x2={4959.1}
        y2={350.37}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-250"
        x1={4923.6}
        y1={489.11}
        x2={4960.6}
        y2={350.78}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-251"
        x1={4927.29}
        y1={490.1}
        x2={4964.29}
        y2={351.77}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-252"
        x1={4921.43}
        y1={488.53}
        x2={4958.43}
        y2={350.19}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-253"
        x1={4925.11}
        y1={489.51}
        x2={4962.11}
        y2={351.18}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-254"
        x1={4928.79}
        y1={490.5}
        x2={4965.79}
        y2={352.17}
        xlinkHref="#linear-gradient-219"
      />
      <linearGradient
        id="linear-gradient-255"
        x1={4909.88}
        y1={437.58}
        x2={4886.88}
        y2={292.33}
        gradientTransform="matrix(-1 0 0 1 5571.02 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.03} stopColor="#454d99" />
        <stop offset={0.55} stopColor="#6947cf" />
        <stop offset={0.67} stopColor="#8c5ac0" />
        <stop offset={0.93} stopColor="#e78b9a" />
        <stop offset={1} stopColor="#ff9891" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-256"
        x1={4919.15}
        y1={463.94}
        x2={4896.15}
        y2={318.69}
        xlinkHref="#linear-gradient-255"
      />
      <linearGradient
        id="linear-gradient-257"
        x1={4927.01}
        y1={481.45}
        x2={4904.01}
        y2={336.2}
        xlinkHref="#linear-gradient-255"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-39"
        x1={160.51}
        y1={428.72}
        x2={230.95}
        y2={407.62}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-40"
        x1={56.48}
        y1={437.42}
        x2={232.65}
        y2={397.93}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-258"
        x1={156.21}
        y1={346.31}
        x2={145.89}
        y2={365.96}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-259"
        x1={665.7}
        y1={459.2}
        x2={606.43}
        y2={504.82}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#3d2c8d" />
        <stop offset={0.18} stopColor="#39277f" />
        <stop offset={1} stopColor="#29143e" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_5-41"
        x1={333.73}
        y1={513.47}
        x2={427.65}
        y2={485.35}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-260"
        x1={329.76}
        y1={411.4}
        x2={286.48}
        y2={493.88}
        xlinkHref="#linear-gradient-133"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-42"
        x1={311.73}
        y1={466.97}
        x2={405.65}
        y2={438.85}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-261"
        x1={329.57}
        y1={358.11}
        x2={287.96}
        y2={437.41}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-43"
        x1={289.9}
        y1={420.52}
        x2={383.82}
        y2={392.39}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-262"
        x1={319.67}
        y1={321.96}
        x2={279.52}
        y2={398.48}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-44"
        x1={267.61}
        y1={374.1}
        x2={361.53}
        y2={345.98}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-263"
        x1={297.38}
        y1={275.54}
        x2={257.23}
        y2={352.06}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-45"
        x1={245.23}
        y1={327.6}
        x2={339.15}
        y2={299.48}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-46"
        x1={81.08}
        y1={461.42}
        x2={424.66}
        y2={384.4}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-264"
        x1={275.01}
        y1={229.04}
        x2={234.85}
        y2={305.56}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-265"
        x1={347.59}
        y1={524.82}
        x2={330.99}
        y2={497.46}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-266"
        x1={349.5}
        y1={531.58}
        x2={327.73}
        y2={500.01}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-267"
        x1={350.55}
        y1={537.05}
        x2={323.04}
        y2={501.77}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-268"
        x1={350.55}
        y1={541.43}
        x2={316.79}
        y2={503.01}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-269"
        x1={325.42}
        y1={478.49}
        x2={308.83}
        y2={451.13}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-270"
        x1={327.33}
        y1={485.24}
        x2={305.56}
        y2={453.68}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-271"
        x1={328.38}
        y1={490.72}
        x2={300.87}
        y2={455.44}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-272"
        x1={328.38}
        y1={495.1}
        x2={294.62}
        y2={456.68}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-273"
        x1={303.75}
        y1={431.82}
        x2={287.16}
        y2={404.46}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-274"
        x1={305.67}
        y1={438.58}
        x2={283.9}
        y2={407.01}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-275"
        x1={306.72}
        y1={444.05}
        x2={279.2}
        y2={408.77}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-276"
        x1={306.72}
        y1={448.43}
        x2={272.95}
        y2={410.01}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-277"
        x1={281.46}
        y1={385.4}
        x2={264.87}
        y2={358.04}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-278"
        x1={283.38}
        y1={392.16}
        x2={261.61}
        y2={360.59}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-279"
        x1={284.42}
        y1={397.63}
        x2={256.91}
        y2={362.36}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-280"
        x1={284.42}
        y1={402.02}
        x2={250.66}
        y2={363.6}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-281"
        x1={259.09}
        y1={338.9}
        x2={242.49}
        y2={311.54}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-282"
        x1={261}
        y1={345.66}
        x2={239.23}
        y2={314.09}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-283"
        x1={262.05}
        y1={351.13}
        x2={234.54}
        y2={315.86}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-284"
        x1={262.05}
        y1={355.52}
        x2={228.29}
        y2={317.1}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-47"
        x1={221.97}
        y1={472.66}
        x2={375.67}
        y2={426.64}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-48"
        x1={97.23}
        y1={489.64}
        x2={281.15}
        y2={448.41}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-285"
        x1={257.51}
        y1={322.02}
        x2={206.51}
        y2={419.22}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-49"
        x1={221.5}
        y1={421.2}
        x2={296.06}
        y2={398.87}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-50"
        x1={145.58}
        y1={430.11}
        x2={242.21}
        y2={408.45}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-286"
        x1={221.68}
        y1={418.89}
        x2={293.86}
        y2={397.28}
        xlinkHref="#linear-gradient-82"
      />
      <linearGradient
        id="linear-gradient-287"
        x1={147.12}
        y1={427.51}
        x2={240.6}
        y2={406.56}
        xlinkHref="#linear-gradient-82"
      />
      <linearGradient
        id="linear-gradient-288"
        x1={245.9}
        y1={338.4}
        x2={207.42}
        y2={411.74}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-289"
        x1={199.64}
        y1={515.91}
        x2={236.64}
        y2={377.58}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-290"
        x1={203.33}
        y1={516.9}
        x2={240.33}
        y2={378.57}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-48"
        x1={216.76}
        y1={512.71}
        x2={236.42}
        y2={384.05}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-49"
        x1={220.92}
        y1={513.35}
        x2={240.58}
        y2={384.68}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-291"
        x1={214.38}
        y1={519.86}
        x2={251.38}
        y2={381.52}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-50"
        x1={229.23}
        y1={514.62}
        x2={248.9}
        y2={385.95}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-292"
        x1={221.74}
        y1={521.82}
        x2={258.74}
        y2={383.49}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-51"
        x1={209.34}
        y1={511.58}
        x2={229.01}
        y2={382.91}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-293"
        x1={204.83}
        y1={517.3}
        x2={241.83}
        y2={378.97}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-294"
        x1={212.2}
        y1={519.27}
        x2={249.2}
        y2={380.94}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-295"
        x1={215.88}
        y1={520.26}
        x2={252.88}
        y2={381.92}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-296"
        x1={219.57}
        y1={521.24}
        x2={256.57}
        y2={382.91}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-297"
        x1={223.25}
        y1={522.23}
        x2={260.25}
        y2={383.9}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-52"
        x1={210.24}
        y1={511.72}
        x2={229.91}
        y2={383.05}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-53"
        x1={214.4}
        y1={512.35}
        x2={234.07}
        y2={383.69}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-298"
        x1={210.02}
        y1={518.69}
        x2={247.02}
        y2={380.36}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-54"
        x1={222.72}
        y1={513.63}
        x2={242.39}
        y2={384.96}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-55"
        x1={226.88}
        y1={514.26}
        x2={246.54}
        y2={385.59}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-299"
        x1={221.07}
        y1={521.65}
        x2={258.07}
        y2={383.31}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-56"
        x1={235.2}
        y1={515.53}
        x2={254.86}
        y2={386.87}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-300"
        x1={204.16}
        y1={517.12}
        x2={241.16}
        y2={378.79}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-301"
        x1={207.85}
        y1={518.11}
        x2={244.85}
        y2={379.77}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-57"
        x1={219.46}
        y1={513.13}
        x2={239.13}
        y2={384.46}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-302"
        x1={215.21}
        y1={520.08}
        x2={252.21}
        y2={381.75}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-303"
        x1={218.9}
        y1={521.06}
        x2={255.9}
        y2={382.73}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-304"
        x1={222.58}
        y1={522.05}
        x2={259.58}
        y2={383.72}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-305"
        x1={226.26}
        y1={523.04}
        x2={263.26}
        y2={384.7}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-306"
        x1={209.35}
        y1={518.51}
        x2={246.35}
        y2={380.18}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-307"
        x1={213.04}
        y1={519.5}
        x2={250.04}
        y2={381.16}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-308"
        x1={216.72}
        y1={520.48}
        x2={253.72}
        y2={382.15}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-58"
        x1={228.68}
        y1={514.54}
        x2={248.35}
        y2={385.87}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-59"
        x1={232.84}
        y1={515.17}
        x2={252.51}
        y2={386.5}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-309"
        x1={227.77}
        y1={523.44}
        x2={264.77}
        y2={385.1}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-60"
        x1={212.95}
        y1={512.13}
        x2={232.61}
        y2={383.46}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-310"
        x1={210.86}
        y1={518.91}
        x2={247.86}
        y2={380.58}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-311"
        x1={214.54}
        y1={519.9}
        x2={251.54}
        y2={381.57}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-61"
        x1={225.42}
        y1={514.04}
        x2={245.09}
        y2={385.37}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-312"
        x1={221.91}
        y1={521.87}
        x2={258.91}
        y2={383.54}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-313"
        x1={229.28}
        y1={523.84}
        x2={266.28}
        y2={385.51}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-314"
        x1={208.68}
        y1={518.33}
        x2={245.68}
        y2={380}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-62"
        x1={218.01}
        y1={512.9}
        x2={237.67}
        y2={384.24}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-315"
        x1={216.05}
        y1={520.3}
        x2={253.05}
        y2={381.97}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-63"
        x1={226.32}
        y1={514.18}
        x2={245.99}
        y2={385.51}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-64"
        x1={230.48}
        y1={514.81}
        x2={250.15}
        y2={386.14}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-316"
        x1={227.1}
        y1={523.26}
        x2={264.1}
        y2={384.92}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-65"
        x1={238.8}
        y1={516.08}
        x2={258.47}
        y2={387.42}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-317"
        x1={210.19}
        y1={518.73}
        x2={247.19}
        y2={380.4}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-318"
        x1={213.87}
        y1={519.72}
        x2={250.87}
        y2={381.39}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-319"
        x1={221.24}
        y1={521.69}
        x2={258.24}
        y2={383.36}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-66"
        x1={231.39}
        y1={514.95}
        x2={251.05}
        y2={386.28}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-67"
        x1={235.54}
        y1={515.59}
        x2={255.21}
        y2={386.92}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-320"
        x1={232.29}
        y1={524.65}
        x2={269.29}
        y2={386.31}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-68"
        x1={215.65}
        y1={512.54}
        x2={235.32}
        y2={383.88}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-69"
        x1={219.81}
        y1={513.18}
        x2={239.48}
        y2={384.51}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-321"
        x1={219.06}
        y1={521.11}
        x2={256.06}
        y2={382.77}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-70"
        x1={228.13}
        y1={514.45}
        x2={247.79}
        y2={385.78}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-322"
        x1={226.43}
        y1={523.08}
        x2={263.43}
        y2={384.74}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-323"
        x1={230.11}
        y1={524.06}
        x2={267.11}
        y2={385.73}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-324"
        x1={213.2}
        y1={519.54}
        x2={250.2}
        y2={381.21}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-325"
        x1={216.89}
        y1={520.53}
        x2={253.89}
        y2={382.19}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-326"
        x1={220.57}
        y1={521.51}
        x2={257.57}
        y2={383.18}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-327"
        x1={224.25}
        y1={522.5}
        x2={261.25}
        y2={384.16}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-328"
        x1={227.94}
        y1={523.48}
        x2={264.94}
        y2={385.15}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-329"
        x1={231.62}
        y1={524.47}
        x2={268.62}
        y2={386.14}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-71"
        x1={241.51}
        y1={516.5}
        x2={261.17}
        y2={387.83}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-330"
        x1={214.71}
        y1={519.94}
        x2={251.71}
        y2={381.61}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-72"
        x1={221.61}
        y1={513.46}
        x2={241.28}
        y2={384.79}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-331"
        x1={222.08}
        y1={521.91}
        x2={259.08}
        y2={383.58}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-332"
        x1={225.76}
        y1={522.9}
        x2={262.76}
        y2={384.56}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-73"
        x1={234.09}
        y1={515.36}
        x2={253.76}
        y2={386.7}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-333"
        x1={233.13}
        y1={524.87}
        x2={270.13}
        y2={386.54}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-334"
        x1={236.81}
        y1={525.85}
        x2={273.81}
        y2={387.52}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-335"
        x1={216.21}
        y1={520.35}
        x2={253.21}
        y2={382.01}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-74"
        x1={222.51}
        y1={513.59}
        x2={242.18}
        y2={384.93}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-336"
        x1={223.58}
        y1={522.32}
        x2={260.58}
        y2={383.98}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-75"
        x1={230.83}
        y1={514.86}
        x2={250.5}
        y2={386.2}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-337"
        x1={230.95}
        y1={524.29}
        x2={267.95}
        y2={385.96}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-338"
        x1={234.63}
        y1={525.27}
        x2={271.63}
        y2={386.94}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-339"
        x1={238.32}
        y1={526.26}
        x2={275.32}
        y2={387.92}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="linear-gradient-340"
        x1={3739.63}
        y1={470.5}
        x2={3821.96}
        y2={336.16}
        gradientTransform="matrix(-1 0 0 1 3956.84 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4c38a6" />
        <stop offset={0.38} stopColor="#6947cf" />
        <stop offset={0.56} stopColor="#8c5cc1" />
        <stop offset={0.95} stopColor="#e7949d" />
        <stop offset={1} stopColor="#f49c99" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-341"
        x1={3741.82}
        y1={471.84}
        x2={3824.16}
        y2={337.51}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-342"
        x1={3748.4}
        y1={475.87}
        x2={3830.73}
        y2={341.54}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-343"
        x1={3752.79}
        y1={478.56}
        x2={3835.12}
        y2={344.23}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-344"
        x1={3744.51}
        y1={473.49}
        x2={3826.84}
        y2={339.16}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-345"
        x1={196.96}
        y1={439.48}
        x2={155.71}
        y2={495.98}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-346"
        x1={3748.9}
        y1={476.18}
        x2={3831.23}
        y2={341.84}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-347"
        x1={3751.09}
        y1={477.52}
        x2={3833.42}
        y2={343.19}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-348"
        x1={3753.28}
        y1={478.87}
        x2={3835.62}
        y2={344.53}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-349"
        x1={3755.47}
        y1={480.21}
        x2={3837.81}
        y2={345.88}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-350"
        x1={3749.39}
        y1={476.48}
        x2={3831.73}
        y2={342.15}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-351"
        x1={3755.97}
        y1={480.51}
        x2={3838.3}
        y2={346.18}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-352"
        x1={3747.7}
        y1={475.44}
        x2={3830.03}
        y2={341.11}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-353"
        x1={3749.89}
        y1={476.79}
        x2={3832.22}
        y2={342.45}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-354"
        x1={3754.28}
        y1={479.47}
        x2={3836.61}
        y2={345.14}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-355"
        x1={3756.47}
        y1={480.82}
        x2={3838.8}
        y2={346.48}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-356"
        x1={3758.66}
        y1={482.16}
        x2={3840.99}
        y2={347.83}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-357"
        x1={3760.85}
        y1={483.51}
        x2={3843.19}
        y2={349.17}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-358"
        x1={206.99}
        y1={462.03}
        x2={165.74}
        y2={518.53}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-359"
        x1={3752.58}
        y1={478.43}
        x2={3834.91}
        y2={344.1}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-360"
        x1={3754.77}
        y1={479.78}
        x2={3837.11}
        y2={345.45}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-361"
        x1={3756.96}
        y1={481.12}
        x2={3839.3}
        y2={346.79}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-362"
        x1={3763.54}
        y1={485.15}
        x2={3845.88}
        y2={350.82}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-363"
        x1={3755.27}
        y1={480.08}
        x2={3837.6}
        y2={345.75}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-364"
        x1={3757.46}
        y1={481.43}
        x2={3839.79}
        y2={347.09}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-365"
        x1={3761.85}
        y1={484.11}
        x2={3844.18}
        y2={349.78}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-366"
        x1={191.78}
        y1={443.44}
        x2={150.54}
        y2={499.94}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-367"
        x1={3766.23}
        y1={486.8}
        x2={3848.56}
        y2={352.47}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-368"
        x1={3755.77}
        y1={480.39}
        x2={3838.1}
        y2={346.05}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-369"
        x1={3760.15}
        y1={483.07}
        x2={3842.48}
        y2={348.74}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-370"
        x1={3766.73}
        y1={487.11}
        x2={3849.06}
        y2={352.78}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-371"
        x1={3758.45}
        y1={482.04}
        x2={3840.79}
        y2={347.7}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-372"
        x1={3760.65}
        y1={483.38}
        x2={3842.98}
        y2={349.05}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-373"
        x1={210.52}
        y1={457.12}
        x2={169.27}
        y2={513.62}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-374"
        x1={3765.03}
        y1={486.07}
        x2={3847.36}
        y2={351.73}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-375"
        x1={3771.61}
        y1={490.1}
        x2={3853.94}
        y2={355.76}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-376"
        x1={3765.53}
        y1={486.37}
        x2={3847.86}
        y2={352.04}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-377"
        x1={3769.91}
        y1={489.06}
        x2={3852.25}
        y2={354.73}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-378"
        x1={3772.11}
        y1={490.4}
        x2={3854.44}
        y2={356.07}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-379"
        x1={184.52}
        y1={462.42}
        x2={143.27}
        y2={518.92}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-380"
        x1={3763.83}
        y1={485.33}
        x2={3846.17}
        y2={351}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-381"
        x1={3766.02}
        y1={486.68}
        x2={3848.36}
        y2={352.34}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-382"
        x1={3768.22}
        y1={488.02}
        x2={3850.55}
        y2={353.69}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-383"
        x1={3770.41}
        y1={489.36}
        x2={3852.74}
        y2={355.03}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-384"
        x1={3772.6}
        y1={490.71}
        x2={3854.94}
        y2={356.37}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-385"
        x1={3774.79}
        y1={492.05}
        x2={3857.13}
        y2={357.72}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-386"
        x1={3766.52}
        y1={486.98}
        x2={3848.85}
        y2={352.65}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-387"
        x1={3770.91}
        y1={489.67}
        x2={3853.24}
        y2={355.34}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-388"
        x1={3773.1}
        y1={491.01}
        x2={3855.43}
        y2={356.68}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-389"
        x1={3777.48}
        y1={493.7}
        x2={3859.82}
        y2={359.37}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-390"
        x1={3779.68}
        y1={495.04}
        x2={3862.01}
        y2={360.71}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-391"
        x1={3769.21}
        y1={488.63}
        x2={3851.54}
        y2={354.3}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-392"
        x1={3773.6}
        y1={491.32}
        x2={3855.93}
        y2={356.98}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-393"
        x1={3777.98}
        y1={494}
        x2={3860.31}
        y2={359.67}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-394"
        x1={3780.17}
        y1={495.35}
        x2={3862.51}
        y2={361.01}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="linear-gradient-395"
        x1={3782.37}
        y1={496.69}
        x2={3864.7}
        y2={362.36}
        xlinkHref="#linear-gradient-340"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-76"
        x1={5387.65}
        y1={412.1}
        x2={5552.22}
        y2={375.21}
        gradientTransform="matrix(-1 0 0 1 5682.1 0)"
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-77"
        x1={233.43}
        y1={403.36}
        x2={259.6}
        y2={373.39}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-78"
        x1={5501.32}
        y1={316.51}
        x2={5463.13}
        y2={389.3}
        gradientTransform="matrix(-1 0 0 1 5682.1 0)"
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <radialGradient
        id="Radial_Gradient_2-7"
        cx={211.51}
        cy={390.58}
        fx={211.51}
        fy={390.58}
        r={16.42}
        xlinkHref="#Radial_Gradient_2"
      />
      <linearGradient
        id="linear-gradient-396"
        x1={-321.38}
        y1={694.33}
        x2={-338.32}
        y2={681.53}
        gradientTransform="rotate(30 112.199 3036.316) skewX(-49.11)"
        xlinkHref="#linear-gradient-99"
      />
      <linearGradient
        id="linear-gradient-397"
        x1={210.72}
        y1={377.56}
        x2={220.21}
        y2={392.45}
        xlinkHref="#linear-gradient-100"
      />
      <linearGradient
        id="linear-gradient-398"
        x1={7249.99}
        y1={404.96}
        x2={7249.99}
        y2={401.54}
        gradientTransform="matrix(-1 0 0 1 7454.5 0)"
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_4-2"
        x1={204.58}
        y1={404.87}
        x2={203.07}
        y2={393.22}
        xlinkHref="#New_Gradient_Swatch_copy_4"
      />
      <linearGradient
        id="linear-gradient-399"
        x1={7243.71}
        y1={408.75}
        x2={7245.06}
        y2={404.77}
        gradientTransform="matrix(-1 0 0 1 7454.5 0)"
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_4-3"
        x1={7246.43}
        y1={399.96}
        x2={7246.51}
        y2={390.64}
        gradientTransform="matrix(-1 0 0 1 7454.5 0)"
        xlinkHref="#New_Gradient_Swatch_copy_4"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_15-7"
        x1={194.69}
        y1={417.52}
        x2={207.24}
        y2={397.43}
        xlinkHref="#New_Gradient_Swatch_copy_15"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_15-8"
        x1={200.54}
        y1={403.02}
        x2={220.93}
        y2={396.91}
        xlinkHref="#New_Gradient_Swatch_copy_15"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_15-9"
        x1={181.17}
        y1={405.04}
        x2={207.41}
        y2={399.16}
        xlinkHref="#New_Gradient_Swatch_copy_15"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-8"
        x1={200.54}
        y1={402.49}
        x2={220.93}
        y2={396.38}
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-9"
        x1={181.17}
        y1={404.51}
        x2={207.41}
        y2={398.63}
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-10"
        x1={208.27}
        y1={380.41}
        x2={197.49}
        y2={400.95}
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <radialGradient
        id="radial-gradient-20"
        cx={1423.72}
        cy={-3740.19}
        fx={1423.72}
        fy={-3740.19}
        r={3.46}
        gradientTransform="scale(-1 1) rotate(68.99 -2394.267 -2862.914)"
        xlinkHref="#radial-gradient"
      />
      <radialGradient
        id="radial-gradient-21"
        cx={-490.88}
        cy={-2588.85}
        fx={-490.88}
        fy={-2588.85}
        r={3.92}
        gradientTransform="scale(-1 1) rotate(79.57 -2131.887 -932.19)"
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_15-10"
        x1={6600.09}
        y1={194.43}
        x2={6612.88}
        y2={194.43}
        gradientTransform="scale(-1 1) rotate(3.1 -290.558 -125442.007)"
        xlinkHref="#New_Gradient_Swatch_copy_15"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_4-4"
        x1={198.74}
        y1={395.53}
        x2={196.73}
        y2={392.42}
        xlinkHref="#New_Gradient_Swatch_copy_4"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_4-5"
        x1={202.54}
        y1={399.63}
        x2={202.62}
        y2={390.32}
        xlinkHref="#New_Gradient_Swatch_copy_4"
      />
      <radialGradient
        id="radial-gradient-22"
        cx={5141.87}
        cy={870.76}
        fx={5141.87}
        fy={870.76}
        r={5.25}
        gradientTransform="scale(-1 1) rotate(-8.78 -740.777 35420.981)"
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="linear-gradient-400"
        x1={5146.18}
        y1={873.69}
        x2={5142.64}
        y2={867.42}
        gradientTransform="scale(-1 1) rotate(-8.78 -740.777 35420.981)"
        xlinkHref="#linear-gradient-41"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_15-11"
        x1={257.13}
        y1={886.94}
        x2={263.74}
        y2={876.27}
        gradientTransform="rotate(8.78 3448.066 226.64)"
        xlinkHref="#New_Gradient_Swatch_copy_15"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_3-6"
        x1={203.16}
        y1={386.43}
        x2={197.83}
        y2={382.04}
        xlinkHref="#New_Gradient_Swatch_copy_3"
      />
      <radialGradient
        id="radial-gradient-23"
        cx={5634.84}
        cy={343.02}
        fx={5634.84}
        fy={343.02}
        r={3.79}
        gradientTransform="rotate(-157.13 2928.016 912.84)"
        xlinkHref="#radial-gradient"
      />
      <radialGradient
        id="radial-gradient-24"
        cx={3866.27}
        cy={-811.83}
        fx={3866.27}
        fy={-811.83}
        r={3.92}
        gradientTransform="rotate(-123.77 2361.932 764.917)"
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_15-12"
        x1={212.47}
        y1={-59.96}
        x2={216.23}
        y2={-66.55}
        gradientTransform="rotate(-7.86 3510.871 228.617)"
        xlinkHref="#New_Gradient_Swatch_copy_15"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-11"
        x1={197.49}
        y1={397.63}
        x2={202.78}
        y2={396.04}
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-12"
        x1={178.69}
        y1={398.08}
        x2={208.43}
        y2={391.41}
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-13"
        x1={193.86}
        y1={386.11}
        x2={192.57}
        y2={388.57}
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <linearGradient
        id="linear-gradient-401"
        x1={207.63}
        y1={342.76}
        x2={240.36}
        y2={381.86}
        xlinkHref="#linear-gradient-106"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-51"
        x1={669.85}
        y1={464.15}
        x2={707.54}
        y2={494.57}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-52"
        x1={704.86}
        y1={491.17}
        x2={714.52}
        y2={476.61}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-402"
        x1={5014.1}
        y1={428.64}
        x2={4986.04}
        y2={482.11}
        gradientTransform="matrix(-1 0 0 1 5682.1 0)"
        xlinkHref="#linear-gradient-96"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-53"
        x1={674.8}
        y1={457.55}
        x2={712.49}
        y2={487.97}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-54"
        x1={716.49}
        y1={489.08}
        x2={764.42}
        y2={416.79}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-403"
        x1={4995.11}
        y1={409.21}
        x2={4965.09}
        y2={466.43}
        gradientTransform="matrix(-1 0 0 1 5682.1 0)"
        xlinkHref="#linear-gradient-96"
      />
      <linearGradient
        id="linear-gradient-404"
        x1={6622.22}
        y1={452.02}
        x2={6637.88}
        y2={452.02}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f5a9a6" />
        <stop offset={1} stopColor="#f5cc85" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-405"
        x1={6638.41}
        y1={432.62}
        x2={6643.17}
        y2={432.62}
        xlinkHref="#linear-gradient-404"
      />
      <linearGradient
        id="linear-gradient-406"
        x1={6637.66}
        y1={435.8}
        x2={6639.09}
        y2={434.1}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d2d1d8" />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_15-13"
        x1={6621.41}
        y1={469.85}
        x2={6634.07}
        y2={449.56}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#New_Gradient_Swatch_copy_15"
      />
      <radialGradient
        id="Radial_Gradient_2-8"
        cx={6633.18}
        cy={459.53}
        fx={6633.18}
        fy={459.53}
        r={8.47}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#Radial_Gradient_2"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_15-14"
        x1={6627.31}
        y1={455.21}
        x2={6647.9}
        y2={449.04}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#New_Gradient_Swatch_copy_15"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_15-15"
        x1={6607.76}
        y1={457.25}
        x2={6634.25}
        y2={451.31}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#New_Gradient_Swatch_copy_15"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-14"
        x1={6627.31}
        y1={454.67}
        x2={6647.9}
        y2={448.51}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-15"
        x1={6607.76}
        y1={456.71}
        x2={6634.25}
        y2={450.77}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-16"
        x1={6635.12}
        y1={432.37}
        x2={6624.23}
        y2={453.12}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <radialGradient
        id="Radial_Gradient_2-9"
        cx={6631.35}
        cy={454.97}
        fx={6631.35}
        fy={454.97}
        r={6.51}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#Radial_Gradient_2"
      />
      <linearGradient
        id="linear-gradient-407"
        x1={6625.72}
        y1={454.44}
        x2={6641.38}
        y2={454.44}
        xlinkHref="#linear-gradient-404"
      />
      <linearGradient
        id="linear-gradient-408"
        x1={6619}
        y1={447.7}
        x2={6634.85}
        y2={447.7}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09} stopColor="#101232" />
        <stop offset={0.89} stopColor="#1e1238" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_20-10"
        x1={6620.26}
        y1={436.42}
        x2={6611.37}
        y2={440.87}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <linearGradient
        id="linear-gradient-409"
        x1={6621.9}
        y1={427.13}
        x2={6628.08}
        y2={427.13}
        xlinkHref="#linear-gradient-404"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-11"
        x1={6616.44}
        y1={442.43}
        x2={6629.14}
        y2={433.63}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-12"
        x1={6630.02}
        y1={446.68}
        x2={6632.61}
        y2={433.44}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <radialGradient
        id="radial-gradient-25"
        cx={6625.41}
        cy={-1499.12}
        fx={6625.41}
        fy={-1499.12}
        r={5.47}
        gradientTransform="matrix(-1 0 0 1.3 7340.47 2375.1)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f5b787" />
        <stop offset={1} stopColor="#ff9891" />
      </radialGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_14-17"
        x1={6624.23}
        y1={449.76}
        x2={6629.58}
        y2={448.16}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-18"
        x1={6605.24}
        y1={450.22}
        x2={6635.28}
        y2={443.49}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_14-19"
        x1={6620.57}
        y1={438.13}
        x2={6619.26}
        y2={440.62}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#New_Gradient_Swatch_copy_14"
      />
      <radialGradient
        id="Radial_Gradient_2-10"
        cx={6620.74}
        cy={444.23}
        fx={6620.74}
        fy={444.23}
        r={5.43}
        gradientTransform="matrix(-1 0 0 1 7340.47 0)"
        xlinkHref="#Radial_Gradient_2"
      />
      <linearGradient
        id="linear-gradient-410"
        x1={705.67}
        y1={491.28}
        x2={573.34}
        y2={491.28}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1b1032" />
        <stop offset={0.44} stopColor="#3d2c8d" />
        <stop offset={0.48} stopColor="#3a2a85" />
        <stop offset={0.52} stopColor="#342472" />
        <stop offset={0.57} stopColor="#2a1b52" />
        <stop offset={0.6} stopColor="#251741" />
        <stop offset={0.68} stopColor="#281a4d" />
        <stop offset={0.88} stopColor="#30216a" />
        <stop offset={1} stopColor="#332475" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-411"
        x1={656.25}
        y1={433.33}
        x2={623.1}
        y2={517.95}
        xlinkHref="#linear-gradient-133"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-55"
        x1={544.92}
        y1={447.41}
        x2={721.34}
        y2={394.58}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-56"
        x1={397.13}
        y1={468.71}
        x2={627.91}
        y2={416.98}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-57"
        x1={397.13}
        y1={468.71}
        x2={627.91}
        y2={416.98}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-412"
        x1={584.69}
        y1={261.46}
        x2={530.53}
        y2={364.69}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-58"
        x1={546.51}
        y1={364.79}
        x2={630.12}
        y2={339.75}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-59"
        x1={462.51}
        y1={374.79}
        x2={570.95}
        y2={350.48}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-413"
        x1={573.22}
        y1={272.29}
        x2={531.39}
        y2={352.01}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-60"
        x1={542.78}
        y1={350.15}
        x2={603.16}
        y2={332.07}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-61"
        x1={482.8}
        y1={357.38}
        x2={561.16}
        y2={339.81}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-414"
        x1={561.69}
        y1={283.57}
        x2={532.27}
        y2={339.63}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-62"
        x1={539.45}
        y1={335.6}
        x2={579.31}
        y2={323.67}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-63"
        x1={500.76}
        y1={340.37}
        x2={552.53}
        y2={328.77}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-415"
        x1={551.43}
        y1={291.93}
        x2={533.04}
        y2={326.98}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-64"
        x1={516.19}
        y1={504.32}
        x2={583.81}
        y2={484.07}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-65"
        x1={415.15}
        y1={512.42}
        x2={571.08}
        y2={477.46}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-416"
        x1={493.32}
        y1={468.29}
        x2={540.57}
        y2={416.79}
        xlinkHref="#linear-gradient-133"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-66"
        x1={493.23}
        y1={473.39}
        x2={609.79}
        y2={447.26}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-67"
        x1={557.6}
        y1={458.99}
        x2={674.98}
        y2={423.84}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-417"
        x1={4832.25}
        y1={369.26}
        x2={4821.46}
        y2={389.81}
        gradientTransform="matrix(-1 0 0 1 5384.16 0)"
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-418"
        x1={567.13}
        y1={465.58}
        x2={629.29}
        y2={364.16}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-419"
        x1={563.79}
        y1={464.05}
        x2={625.95}
        y2={362.63}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.03} stopColor="#3d2c8d" />
        <stop offset={0.51} stopColor="#3e3f91" />
        <stop offset={0.65} stopColor="#3e4291" />
        <stop offset={0.77} stopColor="#3e4d93" />
        <stop offset={0.89} stopColor="#3e5e97" />
        <stop offset={1} stopColor="#3f779c" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-420"
        x1={560.44}
        y1={462.53}
        x2={622.61}
        y2={361.11}
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-68"
        x1={533.92}
        y1={318.96}
        x2={544.97}
        y2={315.65}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-69"
        x1={519.18}
        y1={322.24}
        x2={545.53}
        y2={316.34}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-421"
        x1={-452.53}
        y1={372.07}
        x2={-418.69}
        y2={430.68}
        gradientTransform="translate(933.61)"
        xlinkHref="#linear-gradient-97"
      />
      <radialGradient
        id="radial-gradient-26"
        cx={-408.77}
        cy={391.92}
        fx={-408.77}
        fy={391.92}
        r={36.58}
        gradientTransform="translate(933.61)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#8987f5" />
        <stop offset={1} stopColor="#101232" />
      </radialGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_11-2"
        x1={455.75}
        y1={446.14}
        x2={528.74}
        y2={407.21}
        xlinkHref="#New_Gradient_Swatch_copy_11"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-70"
        x1={-446.45}
        y1={416.26}
        x2={-409.68}
        y2={416.26}
        gradientTransform="translate(933.61)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-422"
        x1={-447.09}
        y1={379.99}
        x2={-399.88}
        y2={470.02}
        gradientTransform="translate(933.61)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.01} stopColor="#7a43b5" />
        <stop offset={0.48} stopColor="#3d2c8d" />
        <stop offset={0.58} stopColor="#3a2a87" />
        <stop offset={0.7} stopColor="#342576" />
        <stop offset={0.84} stopColor="#2a1c5a" />
        <stop offset={0.99} stopColor="#1c1034" />
        <stop offset={1} stopColor="#1b1032" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-423"
        x1={3103.99}
        y1={418.28}
        x2={3133.9}
        y2={418.28}
        gradientTransform="translate(-2613.53)"
        xlinkHref="#linear-gradient-107"
      />
      <linearGradient
        id="linear-gradient-424"
        x1={513.25}
        y1={468.66}
        x2={385.9}
        y2={468.66}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1b1032" />
        <stop offset={0.38} stopColor="#3d2c8d" />
        <stop offset={0.43} stopColor="#3a2a85" />
        <stop offset={0.49} stopColor="#342472" />
        <stop offset={0.56} stopColor="#2a1b52" />
        <stop offset={0.6} stopColor="#251741" />
        <stop offset={0.68} stopColor="#281a4d" />
        <stop offset={0.88} stopColor="#30216a" />
        <stop offset={1} stopColor="#332475" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-425"
        x1={478.01}
        y1={441.59}
        x2={429.62}
        y2={478.84}
        xlinkHref="#linear-gradient-96"
      />
      <linearGradient
        id="linear-gradient-426"
        x1={322.25}
        y1={469.02}
        x2={123.82}
        y2={469.02}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.05} stopColor="#1b1032" />
        <stop offset={0.21} stopColor="#3d2c8d" />
        <stop offset={0.26} stopColor="#3a2a85" />
        <stop offset={0.35} stopColor="#342472" />
        <stop offset={0.44} stopColor="#2a1b52" />
        <stop offset={0.49} stopColor="#251741" />
        <stop offset={0.61} stopColor="#22143c" />
        <stop offset={1} stopColor="#1b1032" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-427"
        x1={113.37}
        y1={408.33}
        x2={315.06}
        y2={527}
        xlinkHref="#linear-gradient-133"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_21-79"
        x1={131.9}
        y1={368.12}
        x2={153.72}
        y2={429.29}
        xlinkHref="#New_Gradient_Swatch_copy_21"
      />
      <linearGradient
        id="linear-gradient-428"
        x1={133.54}
        y1={418.07}
        x2={205.54}
        y2={367.4}
        xlinkHref="#linear-gradient-133"
      />
      <linearGradient
        id="linear-gradient-429"
        x1={3813.97}
        y1={413.29}
        x2={3825.19}
        y2={394.99}
        gradientTransform="matrix(-1 0 0 1 4197.28 0)"
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-430"
        x1={3808.1}
        y1={416.12}
        x2={3819.31}
        y2={397.81}
        gradientTransform="matrix(-1 0 0 1 4197.28 0)"
        xlinkHref="#linear-gradient-419"
      />
      <linearGradient
        id="linear-gradient-431"
        x1={3802.22}
        y1={418.95}
        x2={3813.44}
        y2={400.64}
        gradientTransform="matrix(-1 0 0 1 4197.28 0)"
        xlinkHref="#linear-gradient-18"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-71"
        x1={375.78}
        y1={433.35}
        x2={409.03}
        y2={412.85}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-72"
        x1={3780.46}
        y1={401.5}
        x2={3876.96}
        y2={467.75}
        gradientTransform="matrix(-1 0 0 1 4197.28 0)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-432"
        x1={1898.18}
        y1={372.02}
        x2={1870.38}
        y2={425}
        gradientTransform="translate(-1484.82)"
        xlinkHref="#linear-gradient-96"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-73"
        x1={379.95}
        y1={440.2}
        x2={413.95}
        y2={419.95}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-74"
        x1={3775.75}
        y1={408.35}
        x2={3872.26}
        y2={474.61}
        gradientTransform="matrix(-1 0 0 1 4197.28 0)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-433"
        x1={1903.26}
        y1={378.62}
        x2={1875.46}
        y2={431.6}
        gradientTransform="translate(-1484.82)"
        xlinkHref="#linear-gradient-96"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-75"
        x1={387.35}
        y1={446.4}
        x2={419.35}
        y2={424.9}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-76"
        x1={3771.05}
        y1={415.21}
        x2={3867.55}
        y2={481.46}
        gradientTransform="matrix(-1 0 0 1 4197.28 0)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-434"
        x1={1908.32}
        y1={385.24}
        x2={1880.52}
        y2={438.22}
        gradientTransform="translate(-1484.82)"
        xlinkHref="#linear-gradient-96"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-77"
        x1={391.07}
        y1={452.41}
        x2={433.07}
        y2={428.66}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-78"
        x1={3766.34}
        y1={422.07}
        x2={3862.84}
        y2={488.32}
        gradientTransform="matrix(-1 0 0 1 4197.28 0)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-435"
        x1={1913.4}
        y1={391.84}
        x2={1885.6}
        y2={444.82}
        gradientTransform="translate(-1484.82)"
        xlinkHref="#linear-gradient-96"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-79"
        x1={370.6}
        y1={426.32}
        x2={413.1}
        y2={402.07}
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_5-80"
        x1={3794.44}
        y1={381.14}
        x2={3890.94}
        y2={447.39}
        gradientTransform="matrix(-1 0 0 1 4197.28 0)"
        xlinkHref="#New_Gradient_Swatch_copy_5"
      />
      <linearGradient
        id="linear-gradient-436"
        x1={1879.37}
        y1={352.77}
        x2={1849.62}
        y2={409.46}
        gradientTransform="translate(-1484.82)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#3d2c8d" />
        <stop offset={1} stopColor="#3f779c" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_copy_20-13"
        x1={3878.55}
        y1={476.07}
        x2={3869.04}
        y2={478.23}
        gradientTransform="matrix(-1 0 0 1 4150.73 0)"
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <linearGradient
        id="linear-gradient-437"
        x1={3611.51}
        y1={512.61}
        x2={3611.51}
        y2={508.98}
        gradientTransform="translate(-3336.95)"
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-14"
        x1={3606.8}
        y1={501.83}
        x2={3615.02}
        y2={501.83}
        gradientTransform="translate(-3336.95)"
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <linearGradient
        id="linear-gradient-438"
        x1={4758.76}
        y1={777.37}
        x2={4760.2}
        y2={773.15}
        gradientTransform="rotate(-19.69 1735.361 13586.19)"
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-15"
        x1={3880.88}
        y1={497.16}
        x2={3890.81}
        y2={497.16}
        gradientTransform="matrix(-1 0 0 1 4150.73 0)"
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <radialGradient
        id="radial-gradient-27"
        cx={3603.82}
        cy={495.48}
        fx={3603.82}
        fy={495.48}
        r={3.19}
        gradientTransform="translate(-3336.95)"
        xlinkHref="#radial-gradient"
      />
      <radialGradient
        id="radial-gradient-28"
        cx={4090.17}
        cy={531.16}
        fx={4090.17}
        fy={531.16}
        r={4.86}
        gradientTransform="rotate(-8.44 1755.513 26421.04)"
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="linear-gradient-439"
        x1={4094.15}
        y1={533.87}
        x2={4090.87}
        y2={528.08}
        gradientTransform="rotate(-8.44 1755.513 26421.04)"
        xlinkHref="#linear-gradient-41"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_3-7"
        x1={4092.58}
        y1={536.68}
        x2={4091.56}
        y2={534.87}
        gradientTransform="rotate(-8.44 1755.513 26421.04)"
        xlinkHref="#New_Gradient_Swatch_copy_3"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-16"
        x1={4086.59}
        y1={545.94}
        x2={4098.82}
        y2={545.94}
        gradientTransform="rotate(-8.44 1755.513 26421.04)"
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-17"
        x1={4089.78}
        y1={541.56}
        x2={4092.78}
        y2={533.85}
        gradientTransform="rotate(-8.44 1755.513 26421.04)"
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <radialGradient
        id="Radial_Gradient_2-11"
        cx={4092.05}
        cy={536.96}
        fx={4092.05}
        fy={536.96}
        r={2.99}
        gradientTransform="rotate(-8.44 1755.513 26421.04)"
        xlinkHref="#Radial_Gradient_2"
      />
      <linearGradient
        id="linear-gradient-440"
        x1={4352.15}
        y1={503.71}
        x2={4358.04}
        y2={501.95}
        gradientTransform="translate(-4085.51)"
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="linear-gradient-441"
        x1={4338.65}
        y1={503.15}
        x2={4369}
        y2={496.34}
        gradientTransform="translate(-4085.51)"
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_4-6"
        x1={4345.73}
        y1={503.08}
        x2={4349.83}
        y2={502.16}
        gradientTransform="translate(-4085.51)"
        xlinkHref="#New_Gradient_Swatch_copy_4"
      />
      <linearGradient
        id="linear-gradient-442"
        x1={4334.98}
        y1={501.55}
        x2={4361.61}
        y2={495.57}
        gradientTransform="translate(-4085.51)"
        xlinkHref="#linear-gradient-37"
      />
      <radialGradient
        id="Radial_Gradient_2-12"
        cx={4345.72}
        cy={505.3}
        fx={4345.72}
        fy={505.3}
        r={5.34}
        gradientTransform="translate(-4085.51)"
        xlinkHref="#Radial_Gradient_2"
      />
      <linearGradient
        id="linear-gradient-443"
        x1={4349.67}
        y1={494.58}
        x2={4348.23}
        y2={497.34}
        gradientTransform="translate(-4085.51)"
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="linear-gradient-444"
        x1={4349.37}
        y1={497.9}
        x2={4348.01}
        y2={495.37}
        gradientTransform="translate(-4085.51)"
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="linear-gradient-445"
        x1={4296}
        y1={1412.97}
        x2={4308.28}
        y2={1410.22}
        gradientTransform="rotate(30 4398.047 -8104.273) skewX(30)"
        xlinkHref="#linear-gradient-37"
      />
      <radialGradient
        id="Radial_Gradient_2-13"
        cx={4349.85}
        cy={499.39}
        fx={4349.85}
        fy={499.39}
        r={3.37}
        gradientTransform="translate(-4085.51)"
        xlinkHref="#Radial_Gradient_2"
      />
      <radialGradient
        id="radial-gradient-29"
        cx={2970.28}
        cy={649.65}
        fx={2970.28}
        fy={649.65}
        r={3.39}
        gradientTransform="rotate(6.44 3005.09 -23498.836)"
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-18"
        x1={4084.02}
        y1={547.29}
        x2={4091.56}
        y2={547.29}
        gradientTransform="rotate(-8.44 1755.513 26421.04)"
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <radialGradient
        id="radial-gradient-30"
        cx={3972.01}
        cy={448}
        fx={3972.01}
        fy={448}
        r={3.15}
        gradientTransform="matrix(-1 0 0 1 4465.52 0)"
        xlinkHref="#radial-gradient"
      />
      <linearGradient
        id="linear-gradient-446"
        x1={3977.97}
        y1={465.05}
        x2={3977.97}
        y2={461.47}
        gradientTransform="matrix(-1 0 0 1 4465.52 0)"
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-19"
        x1={3976.05}
        y1={454.74}
        x2={3981.44}
        y2={454.74}
        gradientTransform="matrix(-1 0 0 1 4465.52 0)"
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <linearGradient
        id="linear-gradient-447"
        x1={3971.38}
        y1={469.03}
        x2={3972.8}
        y2={464.86}
        gradientTransform="matrix(-1 0 0 1 4465.52 0)"
        xlinkHref="#linear-gradient-37"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-20"
        x1={3970.37}
        y1={456.38}
        x2={3977.27}
        y2={456.38}
        gradientTransform="matrix(-1 0 0 1 4465.52 0)"
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <radialGradient
        id="radial-gradient-31"
        cx={3973.7}
        cy={421.73}
        fx={3973.7}
        fy={421.73}
        r={4.8}
        gradientTransform="matrix(-1 0 0 1 4465.52 0)"
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="linear-gradient-448"
        x1={3977.64}
        y1={424.4}
        x2={3974.4}
        y2={418.67}
        gradientTransform="matrix(-1 0 0 1 4465.52 0)"
        xlinkHref="#linear-gradient-41"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_3-8"
        x1={3976.09}
        y1={427.18}
        x2={3975.08}
        y2={425.39}
        gradientTransform="matrix(-1 0 0 1 4465.52 0)"
        xlinkHref="#New_Gradient_Swatch_copy_3"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-21"
        x1={3970.16}
        y1={436.32}
        x2={3982.26}
        y2={436.32}
        gradientTransform="matrix(-1 0 0 1 4465.52 0)"
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-22"
        x1={3973.32}
        y1={432}
        x2={3976.28}
        y2={424.38}
        gradientTransform="matrix(-1 0 0 1 4465.52 0)"
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <radialGradient
        id="Radial_Gradient_2-14"
        cx={3975.56}
        cy={427.46}
        fx={3975.56}
        fy={427.46}
        r={2.95}
        gradientTransform="matrix(-1 0 0 1 4465.52 0)"
        xlinkHref="#Radial_Gradient_2"
      />
      <radialGradient
        id="radial-gradient-32"
        cx={3330.87}
        cy={561.18}
        fx={3330.87}
        fy={561.18}
        r={3.35}
        gradientTransform="scale(-1 1) rotate(6.44 2440.8 -33529.081)"
        xlinkHref="#radial-gradient-3"
      />
      <linearGradient
        id="New_Gradient_Swatch_copy_20-23"
        x1={3967.63}
        y1={437.67}
        x2={3975.07}
        y2={437.67}
        gradientTransform="matrix(-1 0 0 1 4465.52 0)"
        xlinkHref="#New_Gradient_Swatch_copy_20"
      />
      <linearGradient
        id="linear-gradient-449"
        x1={439.65}
        y1={377.08}
        x2={497.34}
        y2={359.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.04} stopColor="#06324f" />
        <stop offset={0.13} stopColor="#153d57" />
        <stop offset={0.32} stopColor="#3e5a6e" />
        <stop offset={0.58} stopColor="#7f8993" />
        <stop offset={0.9} stopColor="#d8cac6" />
        <stop offset={1} stopColor="#f5dfd6" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-450"
        x1={385.23}
        y1={384.09}
        x2={461.23}
        y2={367.05}
        xlinkHref="#linear-gradient-449"
      />
      <linearGradient
        id="linear-gradient-451"
        x1={455.73}
        y1={314.2}
        x2={431.5}
        y2={360.38}
        xlinkHref="#linear-gradient-449"
      />
      <linearGradient
        id="linear-gradient-452"
        x1={433}
        y1={369.67}
        x2={433}
        y2={7.12}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#52706e" />
        <stop offset={0.05} stopColor="#567673" stopOpacity={0.9} />
        <stop offset={0.24} stopColor="#658986" stopOpacity={0.58} />
        <stop offset={0.43} stopColor="#709995" stopOpacity={0.32} />
        <stop offset={0.62} stopColor="#78a4a0" stopOpacity={0.14} />
        <stop offset={0.81} stopColor="#7daaa6" stopOpacity={0.04} />
        <stop offset={1} stopColor="#7fada9" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="linear-gradient-453"
        x1={433}
        y1={363.33}
        x2={433}
        y2={7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#15a5ff" />
        <stop offset={0.05} stopColor="#149ff5" stopOpacity={0.89} />
        <stop offset={0.15} stopColor="#1294e5" stopOpacity={0.68} />
        <stop offset={0.26} stopColor="#118ad6" stopOpacity={0.5} />
        <stop offset={0.37} stopColor="#1082c9" stopOpacity={0.35} />
        <stop offset={0.48} stopColor="#0f7bbf" stopOpacity={0.22} />
        <stop offset={0.6} stopColor="#0e76b7" stopOpacity={0.12} />
        <stop offset={0.72} stopColor="#0e72b1" stopOpacity={0.05} />
        <stop offset={0.85} stopColor="#0e70ae" stopOpacity={0.01} />
        <stop offset={1} stopColor="#0e70ad" stopOpacity={0} />
      </linearGradient>
    </defs>
    <g
      style={{
        isolation: "isolate"
      }}
    >
      <g id="Layer_2">
        <g id="Layer_1-2">
          <g id="not">
            <path
              fill="url(#New_Gradient_Swatch_copy_5)"
              d="M174.44 475.03L221.62 447.9 221.62 269.9 174.44 297.03 174.44 475.03z"
            />
            <path
              fill="url(#New_Gradient_Swatch_copy_5-2)"
              d="M127.93 447.9L174.46 475.03 174.46 297.03 127.93 269.94 127.93 447.9z"
            />
            <path
              fill="url(#linear-gradient)"
              d="M127.93 269.94L174.46 297.03 221.62 269.9 175.04 242.78 127.93 269.94z"
            />
            <path
              fill="url(#linear-gradient-2)"
              d="M168.6 301.18L133.36 280.66 133.36 284.08 168.6 304.6 168.6 301.18z"
            />
            <path
              fill="url(#linear-gradient-3)"
              d="M168.6 311.86L133.36 291.34 133.36 294.76 168.6 315.28 168.6 311.86z"
            />
            <path
              fill="url(#linear-gradient-4)"
              d="M168.6 322.54L133.36 302.01 133.36 305.44 168.6 325.96 168.6 322.54z"
            />
            <path
              fill="url(#linear-gradient-5)"
              d="M168.6 333.21L133.36 312.69 133.36 316.12 168.6 336.64 168.6 333.21z"
            />
            <path
              fill="url(#linear-gradient-6)"
              d="M168.6 343.89L133.36 323.37 133.36 326.8 168.6 347.32 168.6 343.89z"
            />
            <path
              fill="url(#linear-gradient-7)"
              d="M168.6 354.57L133.36 334.05 133.36 337.48 168.6 358 168.6 354.57z"
            />
            <path
              fill="url(#linear-gradient-8)"
              d="M168.6 365.25L133.36 344.73 133.36 348.16 168.6 368.68 168.6 365.25z"
            />
            <path
              fill="url(#linear-gradient-9)"
              d="M168.6 375.93L133.36 355.41 133.36 358.83 168.6 379.35 168.6 375.93z"
            />
            <path
              fill="url(#linear-gradient-10)"
              d="M168.6 386.61L133.36 366.09 133.36 369.51 168.6 390.03 168.6 386.61z"
            />
            <path
              fill="url(#linear-gradient-11)"
              d="M168.6 397.29L133.36 376.77 133.36 380.19 168.6 400.71 168.6 397.29z"
            />
            <path
              fill="url(#linear-gradient-12)"
              d="M168.6 407.96L133.36 387.44 133.36 390.87 168.6 411.39 168.6 407.96z"
            />
            <path
              fill="url(#linear-gradient-13)"
              d="M168.6 418.64L133.36 398.12 133.36 401.55 168.6 422.07 168.6 418.64z"
            />
            <path
              fill="url(#linear-gradient-14)"
              d="M168.6 429.32L133.36 408.8 133.36 412.23 168.6 432.75 168.6 429.32z"
            />
            <path
              fill="url(#linear-gradient-15)"
              d="M168.6 440L133.36 419.48 133.36 422.91 168.6 443.43 168.6 440z"
            />
            <path
              fill="url(#linear-gradient-16)"
              d="M168.6 450.68L133.36 430.16 133.36 433.58 168.6 454.1 168.6 450.68z"
            />
            <path
              fill="url(#linear-gradient-17)"
              d="M168.6 461.36L133.36 440.84 133.36 444.26 168.6 464.78 168.6 461.36z"
            />
            <path
              fill="url(#linear-gradient-18)"
              d="M180.86 301.18L216.1 280.66 216.1 284.08 180.86 304.6 180.86 301.18z"
            />
            <path
              fill="url(#linear-gradient-19)"
              d="M180.86 311.86L216.1 291.34 216.1 294.76 180.86 315.28 180.86 311.86z"
            />
            <path
              fill="url(#linear-gradient-20)"
              d="M180.86 322.54L216.1 302.01 216.1 305.44 180.86 325.96 180.86 322.54z"
            />
            <path
              fill="url(#linear-gradient-21)"
              d="M180.86 333.21L216.1 312.69 216.1 316.12 180.86 336.64 180.86 333.21z"
            />
            <path
              fill="url(#linear-gradient-22)"
              d="M180.86 343.89L216.1 323.37 216.1 326.8 180.86 347.32 180.86 343.89z"
            />
            <path
              fill="url(#linear-gradient-23)"
              d="M180.86 354.57L216.1 334.05 216.1 337.48 180.86 358 180.86 354.57z"
            />
            <path
              fill="url(#linear-gradient-24)"
              d="M180.86 365.25L216.1 344.73 216.1 348.16 180.86 368.68 180.86 365.25z"
            />
            <path
              fill="url(#linear-gradient-25)"
              d="M180.86 375.93L216.1 355.41 216.1 358.83 180.86 379.35 180.86 375.93z"
            />
            <path
              fill="url(#linear-gradient-26)"
              d="M180.86 386.61L216.1 366.09 216.1 369.51 180.86 390.03 180.86 386.61z"
            />
            <path
              fill="url(#linear-gradient-27)"
              d="M180.86 397.29L216.1 376.77 216.1 380.19 180.86 400.71 180.86 397.29z"
            />
            <path
              fill="url(#linear-gradient-28)"
              d="M180.86 407.96L216.1 387.44 216.1 390.87 180.86 411.39 180.86 407.96z"
            />
            <path
              fill="url(#linear-gradient-29)"
              d="M180.86 418.64L216.1 398.12 216.1 401.55 180.86 422.07 180.86 418.64z"
            />
            <path
              fill="url(#linear-gradient-30)"
              d="M180.86 429.32L216.1 408.8 216.1 412.23 180.86 432.75 180.86 429.32z"
            />
            <path
              fill="url(#linear-gradient-31)"
              d="M180.86 440L216.1 419.48 216.1 422.91 180.86 443.43 180.86 440z"
            />
            <path
              fill="url(#linear-gradient-32)"
              d="M180.86 450.68L216.1 430.16 216.1 433.58 180.86 454.1 180.86 450.68z"
            />
            <path
              fill="url(#linear-gradient-33)"
              d="M180.86 461.36L216.1 440.84 216.1 444.26 180.86 464.78 180.86 461.36z"
            />
            <path
              fill="url(#New_Gradient_Swatch_copy_5-3)"
              d="M206.91 269.96L175.02 251.38 143.09 269.77 175.02 288.36 206.91 269.96z"
            />
            <path
              fill="url(#New_Gradient_Swatch_copy_5-4)"
              d="M175.04 256.87L175.04 251.39 175.02 251.38 143.09 269.77 147.84 272.53 175.04 256.87z"
            />
            <path
              fill="url(#New_Gradient_Swatch_copy_5-5)"
              d="M175.02 256.87L202.18 272.69 206.91 269.96 175.02 251.38 175.02 256.87z"
            />
            <path
              fill="url(#linear-gradient-34)"
              d="M148.04 272.41L174.82 288.01 201.96 272.39 175.16 256.78 148.04 272.41z"
            />
            <path
              fill="url(#New_Gradient_Swatch_copy_5-6)"
              d="M629.88 444.29L703.7 401.79 703.7 317.03 629.88 359.54 629.88 444.29z"
            />
            <path
              fill="url(#New_Gradient_Swatch_copy_5-7)"
              d="M586.52 419L629.9 444.29 629.9 359.54 586.52 334.27 586.52 419z"
            />
            <path
              fill="url(#linear-gradient-35)"
              d="M586.52 334.27L629.9 359.54 703.7 317.03 660.28 291.74 586.52 334.27z"
            />
            <path
              fill="url(#New_Gradient_Swatch_copy_5-8)"
              d="M693.93 316.62L660.22 296.94 596.94 333.32 630.68 353.01 693.93 316.62z"
            />
            <path
              fill="url(#New_Gradient_Swatch_copy_5-9)"
              d="M660.23 300.88L660.23 296.95 660.22 296.94 596.94 333.32 600.35 335.3 660.23 300.88z"
            />
            <path
              fill="url(#New_Gradient_Swatch_copy_5-10)"
              d="M660.22 300.88L690.53 318.58 693.93 316.62 660.22 296.94 660.22 300.88z"
            />
            <path
              fill="url(#linear-gradient-36)"
              d="M600.5 335.21L630.54 352.75 690.37 318.37 660.31 300.82 600.5 335.21z"
            />
            <path
              className="cls-57"
              d="M623.84 328.87c3.83 1.6 5.72.33 8.59-1.33 2.88-1.66 3.2-3.3.99-4.33-4.17-1.95-6.55.02-9.42 1.68s-2.41 3.05-.16 3.99zM640.03 339.59c4.19 1.6 6.09.38 8.96-1.28 2.88-1.66 4.13-3.09.99-4.33-3.07-1.22-6.13.06-9.01 1.73-2.88 1.66-3.23 3.02-.95 3.89z"
            />
            <path
              d="M640.49 319.24c-.05.64-.29 1.24-.46 1.59-.19.4-.26.86-.47.79-.21-.08.06-1.94.06-1.94l.87-.43z"
              fill="url(#radial-gradient)"
            />
            <path
              className="cls-266"
              d="M650.4 335.75s.21.81.05 1.15c-.16.34-.91.61-1.5.32-.6-.29-.86-.91-1.08-1.07-.23-.16-1.5-.31-2.46-1.12-.95-.81-.82-1.7.13-1.71.95-.02 2.68.42 3.3.82.61.4 1.57 1.6 1.57 1.6z"
            />
            <path
              d="M649.95 336.62c-.68.14-1.55-.45-1.96-.79-.4-.34-1.12-.16-2.04-.89-.92-.73-1.25-1.23-.82-1.47.42-.24 1.95-.17 3.15.47 1.2.65 2 1.11 2 1.11s.29.89.15 1.08c-.15.19-.08.4-.47.49z"
              fill="url(#linear-gradient-37)"
            />
            <path
              d="M649.96 316.22s.51 2.18.17 4.95c-.34 2.77.19 8.32.32 10.29.12 1.97.8 4.38-.19 4.88-.57.29-1.6.12-2.4-.8s-.97-1.82-.87-1.99c.1-.17.24-.92-.07-2.55-.32-1.63-.95-5.58-.9-6.87.05-1.29.51-7.33.51-7.33l3.45-.58z"
              fill="url(#New_Gradient_Swatch_copy_15)"
            />
            <path
              className="cls-54"
              d="M646 324.12c-.05 1.29.58 5.24.9 6.87.32 1.63.17 2.38.07 2.55-.1.17.07 1.07.87 1.99.31.36.66.6 1 .75-.34-.65-.86-2-.86-4.22 0-3.35-.7-7.62-.79-9.95-.06-1.36.26-3.94.26-5.6l-.95.28s-.46 6.04-.51 7.33z"
            />
            <path
              d="M640.25 301.94s-2.08-.21-2.91.19c-.83.4-2.17 1.7-2.17 2.12 0 .37 1.12.86 1.8.67.67-.19.75-.29 1.3-.41.55-.11 1.64-.47 2.03-.68.4-.21-.04-1.89-.04-1.89z"
              fill="url(#radial-gradient-2)"
            />
            <path
              className="cls-266"
              d="M628.32 322.04l-.27 1.57s.78.45 1.13.57c.36.11.94-.11 1.23.26.29.37 1.48 1.32 2.47 1.52 1.07.21 1.81-.13 1.83-.44.02-.31-.26-.81-1.23-1.44-.97-.63-1.8-2.17-1.8-2.17l-3.36.13z"
            />
            <path
              d="M628.24 323.04c.15.18 1.93.6 2.22.97.33.42 2 1.45 2.84 1.59.77.13 1.35-.25 1.28-.54-.11-.42-.81-.81-1.42-1.28-.61-.47-1.28-1.55-1.28-1.55l-3.66-.26.02 1.07z"
              fill="url(#linear-gradient-38)"
            />
            <path
              className="cls-266"
              d="M623.08 324.91l-.03 1.46.66.66.21-.08s.43 1.07 1.7 1.89c1.1.71 2.42.54 2.74.28s.32-.5-.49-1.59c-.81-1.08-1.97-2.65-1.97-2.65l-2.83.03z"
            />
            <path
              d="M623.16 325.76s1.18 1.09 1.59 1.73c.61.96 2.23 1.7 3.3 1.35 1.07-.36-.37-1.47-.66-1.96-.29-.49-1.12-1.7-1.12-1.7l-3.15-.03.05.61z"
              fill="url(#linear-gradient-39)"
            />
            <path
              d="M631.97 304.09s.33 6.97.28 8.64c-.05 1.67-1.01 6.03-.84 6.8.17.78.53 1.46.63 1.94.1.49.24 1.15.24 1.15s-1.04.99-2.23.85c-1.19-.15-1.81-.36-1.92-.66-.11-.29.17-7.89.17-7.89l-.16-9.83 3.83-1.02z"
              fill="url(#New_Gradient_Swatch_copy_20)"
            />
            <path
              className="cls-54"
              d="M629.09 321.35c-.17-1.94.39-4.35 1-6.97.51-2.21.24-7.57.14-9.21l-2.05.55.12 9.22s-.28 7.59-.17 7.89c.11.28.67.49 1.76.63-.35-.67-.74-1.51-.79-2.11z"
            />
            <path
              d="M628.67 304.55s-.47 5.54-.6 7.99c-.12 2.45-.73 5.9-1.04 7.18-.32 1.29-.68 3.11-.58 4 .1.9.51 1.6-.02 1.99s-2.33.61-2.77.39-.8-.17-.8-1.04.12-5.8.46-7.76-.21-8.85-.22-9.73c-.02-2.06.78-3.2.78-3.2l4.79.19z"
              fill="url(#New_Gradient_Swatch_copy_20-2)"
            />
            <path
              d="M627.49 287.48c-.87.24-1.97.17-1.02 2.43.95 2.26 4.37 9.95 4.37 9.95s1.16-2.79.99-5.22c-.17-2.43-1.63-6.58-1.63-6.58l-2.72-.58z"
              fill="url(#New_Gradient_Swatch_copy_3)"
            />
            <path
              d="M629.21 290.24l.37-.16.24.26-.1.53s1.04 2.02 1.42 3.25c.39 1.23.47 2.9.32 3.67-.15.78-.86 1.91-.86 1.91s-.52-3.72-.68-4.61c-.16-.89-.66-4.06-.66-4.06l-.37-.23.31-.57z"
              fill="url(#New_Gradient_Swatch_copy_14)"
            />
            <path
              d="M629.34 287.57s1.08-.13 1.91.61c.59.54.92 1.23 1.1 2.59.16 1.21-.05 3.88 0 4.56.05.68.27 4.97.39 6.31.12 1.33.53 2.86-.22 3.62-.75.75-1.55 1.14-1.75.7s-.78-4.34-.46-5.51c.32-1.16 1.19-3.54 1.14-4.97-.05-1.43-.68-5.27-1.09-6.02-.41-.75-1.02-1.89-1.02-1.89z"
              fill="url(#New_Gradient_Swatch_copy_20-3)"
            />
            <path
              className="cls-54"
              d="M632.01 293.05c-.1-1.33-.13-2.36-.13-2.36l-.51-.28.34-.6s-.62-.36-.83-.83c-.18-.41-.66-.92-1.03-1.41-.3-.02-.51.02-.51.02s.61 1.14 1.02 1.89c.41.75 1.04 4.59 1.09 6.02.03.88-.29 2.13-.62 3.23.16-.35.44-1.07.5-1.27.34-1.12.78-3.07.68-4.39z"
            />
            <path
              d="M631.89 292.91c-.1-1.33-.13-2.36-.13-2.36l-.6-.16.42-.77s-.47-.17-.67-.62c-.18-.41-.54-1.06-1.07-1.44-.3-.02-.51.02-.51.02s.61 1.14 1.02 1.89c.41.75 1.04 4.59 1.09 6.02.03.88-.29 2.13-.62 3.23.16-.35.44-1.07.5-1.27.34-1.12.66-3.2.57-4.53z"
              fill="url(#New_Gradient_Swatch_copy_20-4)"
            />
            <path
              className="cls-54"
              d="M623.88 304.36s-.8 1.14-.78 3.2c.01.88.56 7.76.22 9.73-.34 1.97-.46 6.89-.46 7.76s.36.82.8 1.04c.17.09.55.1.98.07-.34-.59-.7-1.5-.8-2.84-.21-2.8.81-5.92.67-8.48-.12-2.26-.19-7.35.18-10.39l-.8-.1zM629.67 287.94l-2.17-.47c-.67.19-1.48.19-1.37 1.21.46.79 1.05 1.74 1.42 2.1.7.68 1.2 1.3 1.2 1.3l.63-2.24 1.07 1.46s.06-1.28-.03-1.7c-.05-.21-.4-.97-.74-1.67z"
            />
            <path
              d="M629.67 287.94l-2.17-.47c-.67.19-1.48.19-1.37 1.21.46.79 1.05 1.74 1.42 2.1.7.68 1.16.97 1.16.97l.66-1.91 1.04 1.13s.1-.95 0-1.38c-.05-.21-.4-.97-.74-1.67z"
              fill="url(#New_Gradient_Swatch_copy_3-2)"
            />
            <path
              d="M626.73 287.54s-.68.21-.31 1.18 1.84 2.6 2.8 4.84c.95 2.23 1.6 4.59 1.54 7.29-.06 2.7-.26 5.13-.87 5.77-.69.72-2.8 1.54-5.03 1.15-2.23-.39-2.88-1.25-2.64-1.78.24-.53 1.55-6.1 1.65-6.92.1-.82-.68-3.02-.92-3.9-.24-.87-.66-2.64-.36-3.61.31-.97.86-1.08 1.42-1.67.37-.38.93-.93 1.58-1.5.35-.3.7-.74 1.14-.87z"
              fill="url(#New_Gradient_Swatch_copy_20-5)"
            />
            <path
              className="cls-54"
              d="M629.23 293.56c-.95-2.23-2.43-3.87-2.8-4.84-.32-.83.13-1.1.27-1.16-.4.12-.76.35-1.09.63-.07.65-.13.8.14 1.96.29 1.23.22 1.73.22 1.73l.82.18v.81s.36-.3 1.45 1.46c1.1 1.77 1.88 2.68 2.47 4.8-.18-2-.73-3.82-1.48-5.56z"
            />
            <path
              d="M629.23 293.56c-.95-2.23-2.43-3.87-2.8-4.84-.32-.83.13-1.1.27-1.16-.4.12-.76.35-1.09.63-.07.65-.13.8.14 1.96.29 1.23.37 1.5.37 1.5l.82.18v.81s.56-.07 1.57 1.74c.94 1.69 1.61 2.63 2.19 4.74-.18-2-.73-3.82-1.48-5.56z"
              fill="url(#New_Gradient_Swatch_copy_20-6)"
            />
            <path
              d="M628.59 294.33c-1.01-1.81-1.58-1.8-1.58-1.8v-.81l-.82-.18s-.08-.27-.37-1.5c-.26-1.12-.2-1.33-.13-1.92a.27.27 0 00-.08.07c-.07.65-.13.8.14 1.96.29 1.23.37 1.5.37 1.5l.82.18v.81s.56-.07 1.57 1.74c.94 1.69 1.61 2.63 2.19 4.74-.02-.24-.06-.39-.1-.63-.54-1.72-1.17-2.64-2.02-4.16z"
              style={{
                mixBlendMode: "color-dodge"
              }}
              fill="url(#Radial_Gradient_2)"
            />
            <path
              className="cls-54"
              d="M624.15 301.76s.68.28 1.39.49c.71.21 1.57.44 1.57.44s0 1.05-.43 1.06c-.42.02-2.57-.55-2.7-.81s.17-1.18.17-1.18z"
            />
            <path
              d="M624.15 301.76s.68.28 1.39.49c.71.21 1.57.44 1.57.44s-.06.86-.49.87c-.42.02-2.57-.55-2.7-.81s.23-.99.23-.99z"
              fill="url(#New_Gradient_Swatch_copy_20-7)"
            />
            <path
              d="M634.3 300.93s.06.78-.32 1.49-1.08 1.29-1.08 1.29-.11-1.47.27-2.02c.39-.55 1.13-.76 1.13-.76z"
              fill="url(#New_Gradient_Swatch_copy_20-8)"
            />
            <path
              d="M633.84 301s.48.38.85.41c.37.03 1.61-.01 2.02.13.39.13 1.6.5 1.63.82.03.33-.41.11-.76.06-.35-.05-.93-.09-.93-.09s.72.74 1.16.99 1.15.37 1.27.62c.12.25-.03.49-.39.74-.54.38-.99.25-1.45.27-.81.03-1.74-.3-2.12-.61-.37-.31-1.43-1.14-1.67-1.29s-1.1-.46-1.1-.46l1.44-1.63.06.04z"
              fill="url(#radial-gradient-3)"
            />
            <path
              d="M638.68 304.68c.36-.25.51-.49.39-.74a.4.4 0 00-.11-.12c-.3.38-1.25.57-1.85.44-.63-.14-2.26-1.23-2.73-1.69-.24-.23-1.03-.53-1.75-.76l-.29.78s.86.32 1.1.46c.24.14 1.29.98 1.67 1.29.37.31 1.31.64 2.12.61.46-.02.91.11 1.45-.27z"
              fill="url(#radial-gradient-4)"
            />
            <path
              className="cls-54"
              d="M625.47 304.95c.03-1.79 1.18-4.05 1.73-5.39.55-1.34-.16-5.39-1-7.15-.68-1.43-2.67-.94-3.68-.49-.14 1 .22 2.47.43 3.25.24.87 1.02 3.07.92 3.9-.1.82-1.41 6.39-1.65 6.92-.24.53.4 1.39 2.64 1.78.38.07.76.1 1.13.1-.23-.67-.54-1.79-.52-2.92z"
            />
            <path
              d="M623.15 290.73c-.94.3-1 2.11-.4 3.44.39.87 1.3 2.83 1.62 3.67.32.84.84 2.57 1.75 3.06.91.49 3.28 1.28 4.22 1.68.94.4 2.56 1.13 2.56 1.13s.27-1.12.68-1.81c.4-.7.73-.97.73-.97s-3.2-1.5-4.3-2.12c-1.1-.61-1.67-.95-1.91-1.52-.24-.57-1.03-3.02-1.29-3.62-.65-1.5-1.42-3.66-3.65-2.94z"
              fill="url(#New_Gradient_Swatch_copy_20-9)"
            />
            <path
              className="cls-266"
              d="M645.32 338.63s.36 1.05-.08 1.28c-.44.23-1.12.36-1.67.11-.55-.24-.78-.49-1.36-.49s-2.85-1.12-3.28-1.67c-.44-.55 0-1.18 1.08-1.1s2.64.21 2.91.31 2.39 1.55 2.39 1.55z"
            />
            <path
              d="M644.84 339.4c-1.02.12-1.34-.16-2.28-.36-.94-.19-3.61-1.28-3.56-1.87s.66-.47 1.18-.42 2.17.16 2.3.16 2.81 1.21 2.81 1.21.19.87.02 1c-.18.13-.19.24-.47.28z"
              fill="url(#linear-gradient-40)"
            />
            <path
              d="M646.8 316.94s.61 1.31.02 3.57-1.26 4.93-1.29 7.79c-.02 2.86.32 10.26-.12 10.68-.44.41-1.97.55-2.6.1-1.01-.74-1.55-1.8-1.46-2.16.1-.36.87-1.67.61-2.84s-1.16-5.19-.99-7.93.63-9.9.63-9.9l5.19.7z"
              fill="url(#New_Gradient_Swatch_copy_15-2)"
            />
            <path
              d="M644.32 294.31c-.64.31-1.29.84-1.33 2.46-.03 1.62-.05 2.39.27 2.6.32.21.57 0 .63.45s-.06 1.2-.06 1.2l3.53-.79s-.24-.57-.02-1.15c.23-.58 1.25-1.71.47-3.38s-2.73-1.76-3.49-1.39z"
              fill="url(#radial-gradient-5)"
            />
            <path
              d="M642.96 295.68c-.01.31.18.81.61.84.44.03.65.55.55.79-.1.24-.03.31-.03.31s.32-.13.47.13c.15.26-.05.81-.15 1.02-.1.21.63.86 1.23.91.6.05 1.41-.02 1.67-.32.26-.31 1.21-1.34.87-2.99-.34-1.65-1.86-2.64-3.27-2.36-1.41.28-1.94 1.25-1.96 1.68z"
              fill="url(#linear-gradient-41)"
            />
            <path
              d="M639.98 301.82s-.45.33-.37.94c.08.61.66 1.55.66 1.55l6.13-.34s4.73-.2 4.52-2.13c-.2-1.84-1.46-1.75-4.19-1.04s-3.8.82-4.69.91c-.89.08-2.06.11-2.06.11z"
              fill="url(#New_Gradient_Swatch_copy_15-3)"
            />
            <path
              d="M643.26 301.93s.38-1.33 1.18-1.49c.79-.16 1.49-.06 2.02-.31.53-.24.82-.7.82-.7s.61.17.16.72c-.45.55-4.18 1.78-4.18 1.78z"
              fill="url(#New_Gradient_Swatch_copy_3-3)"
            />
            <path
              className="cls-54"
              d="M639.9 303.61c.23.46.38.71.38.71l6.13-.34s4.71-.2 4.52-2.12c-1.13.28-3.98 1.44-6.57 1.58-2.38.13-3.83.16-4.45.17zM643.44 316.49l-1.83-.25s-.46 7.16-.63 9.9c-.17 2.74.73 6.77.99 7.93.27 1.16-.51 2.47-.61 2.84-.09.33.35 1.24 1.2 1.96-.13-1.53 0-3.13.08-4.22.11-1.26-.84-5.83-.58-8.57.23-2.38 1.13-8.14 1.36-9.59z"
            />
            <path
              d="M646.2 300.68c.73-.24 1.49-.7 1.49-.7s1.12-.02 1.77.08c.65.1 1.63.7 1.57 1.91-.06 1.21-.33 2.77-.73 4.47-.4 1.7-.39 2.93-.08 4.63.31 1.7 1.37 5.42 1.29 5.82-.08.4-1 1.84-3.12 2.59-2.12.74-5.65.92-7.07-.71s.42-7.26.5-10.01c.08-2.75-.92-3.9.24-5.32s2.47-2.28 3.22-2.47c.74-.19.92-.28.92-.28z"
              fill="url(#New_Gradient_Swatch_copy_15-4)"
            />
            <path
              className="cls-54"
              d="M643.16 302.02c.34-.45 1.02-1.07 1.65-1.15.63-.08 1.85-.33 2.25-.63.46-.34.52-.63.52-.63l.95.35s.08 1.13-1.24 1.53c-1.33.4-2.82.39-3.78.95-.91.53-1.47 1.05-1.47 1.05l1.13-1.47z"
            />
            <path
              d="M643.16 302.02c.34-.45 1.02-1.07 1.65-1.15.63-.08 1.85-.33 2.25-.63.46-.34.52-.63.52-.63l.95.35s-.01.92-1.34 1.33c-1.33.4-3.06.52-3.9 1.15s-1.26 1.05-1.26 1.05l1.13-1.47z"
              fill="url(#New_Gradient_Swatch_copy_15-5)"
            />
            <path
              d="M648.43 299.93c-.02.19-.18.93-1.34 1.28-1.33.4-3.06.52-3.9 1.15-.32.24-.57.44-.77.61l-.4.52s.42-.42 1.26-1.05c.84-.63 2.57-.74 3.9-1.15 1.33-.4 1.34-1.33 1.34-1.33l-.1-.04z"
              style={{
                mixBlendMode: "color-dodge"
              }}
              fill="url(#Radial_Gradient_2-2)"
            />
            <path
              d="M626.77 287.22l-.27.6s.82 1.36 1.44 1.75c.61.39 1.34.83 1.55.52.21-.31.44-1.15.44-1.15l-3.15-1.71z"
              fill="url(#radial-gradient-6)"
            />
            <path
              d="M626.73 287.54l.34.02s1.04 1.2 1.67 1.46c.63.26 1.25.29 1.52-.15s.68-3.11.45-4.16c-.23-1.05-1.71-3.04-3.88-1.6s-.63 3.98-.55 4.06c.08.08.45.37.45.37z"
              fill="url(#radial-gradient-7)"
            />
            <path
              d="M626.28 287.21s-.32-.72-.03-.93a.31.31 0 01.13-.06c.16-.05.33.02.44.14l.3.33s.05-.34.2-.98c.1-.41.61-.78 1.68-.68.57.05 1.28.34 1.67.03s.08-.97-.11-1.29c-.19-.32-2.02-2.2-3.95-.83-1.92 1.37-.84 3.78-.32 4.28z"
              fill="url(#linear-gradient-42)"
            />
            <path
              className="cls-54"
              d="M644.65 304.43c-.91-1.35-2.22-.27-3.16.65.02.91.37 2 .32 3.68-.08 2.75-1.92 8.38-.5 10.01.69.79 1.86 1.15 3.14 1.24-.11-.63-.21-1.38-.24-2.22-.11-2.37.6-3.68.89-6.86.29-3.18.74-4.73-.45-6.49zM648.21 296.49c-.29.24-.81.53-1.67.69-.9.17-1.78.03-2.41-.14.02.1.02.19 0 .27-.1.24-.03.31-.03.31s.32-.13.47.13c.15.26-.05.81-.15 1.02-.1.21.63.86 1.23.91.6.05 1.41-.02 1.67-.32.25-.3 1.16-1.29.9-2.86z"
            />
            <path
              fill="url(#linear-gradient-43)"
              d="M642.51 324.65L642.51 331.46 643.32 330.99 643.32 324.15 642.51 324.65z"
            />
            <path
              fill="url(#linear-gradient-44)"
              d="M642.51 324.65L642.51 331.46 634.22 326.7 634.22 319.86 642.51 324.65z"
            />
            <path
              d="M638.75 327.06v.46c0 .17-.19.28-.34.19l-.63-.36a.436.436 0 01-.21-.37v-.34c0-.17.19-.28.34-.19l.74.42c.07.04.11.11.11.19z"
              fill="url(#New_Gradient_Swatch_copy_4)"
            />
            <path
              d="M642.51 324.65v2.07c0 .26-.21.48-.48.48h-3.37c-.37 0-.72-.17-.96-.46l-3.08-3.86c-.26-.33-.41-.74-.41-1.17v-1.85l8.29 4.79z"
              fill="url(#linear-gradient-45)"
            />
            <path
              d="M642.51 324.65v2.07c0 .26-.21.48-.48.48h-3.37c-.37 0-.72-.17-.96-.46l-3.08-3.86c-.26-.33-.41-.74-.41-1.17v-1.85l8.29 4.79z"
              style={{
                mixBlendMode: "color-dodge"
              }}
              fill="url(#Radial_Gradient_2-3)"
            />
            <path
              fill="url(#linear-gradient-46)"
              d="M634.22 319.86L642.51 324.65 643.32 324.15 635.02 319.37 634.22 319.86z"
            />
            <path
              d="M639.4 320.48l-1.07-.62c-.26-.15-.5-.16-.67-.06l-.27.13.04.2c-.02.08-.03.16-.03.25v.7l.24.14.06.34.28-.14v-.63c0-.29.21-.41.46-.27l.84.49c.26.15.46.51.46.8v.63l.26.15.04.32.28-.14v-.7c0-.59-.42-1.31-.93-1.6z"
              fill="url(#linear-gradient-47)"
            />
            <path
              d="M637.12 320.54v.7l.58.33v-.63c0-.29.21-.41.46-.27l.84.49c.26.15.46.51.46.8v.63l.58.33v-.7c0-.59-.42-1.31-.93-1.6l-1.07-.62c-.51-.3-.93-.06-.93.53z"
              fill="url(#linear-gradient-48)"
            />
            <path
              style={{
                mixBlendMode: "color-dodge"
              }}
              fill="url(#Radial_Gradient_2-4)"
              d="M642.53 326.95L642.59 324.69 643.32 324.15 642.49 324.52 636.81 321.36 642.41 324.65 642.53 326.95z"
            />
            <path
              d="M639.14 317.41s-.91 1.11-1.32 1.87c-.22.41-.21.48-.11 1.32.05.39.12.67.33.7.1.01.04-.22.04-.22s.04.39.29.45c.25.06.12-.25.12-.25s.07.41.33.46c.26.05.11-.28.11-.28s.09.43.29.51c.2.07.24-.06.24-.36 0-.35.15-.66.46-1.21.33-.59.61-.86.58-1.41-.03-.56.43-1.03.43-1.03l-1.78-.54z"
              fill="url(#radial-gradient-8)"
            />
            <path
              d="M642.55 303.64c1.13-.39 2.24.31 2.51 1.49s-.31 5.66-.76 6.91-3.27 6.83-3.27 6.83-.99-.13-1.6-.4c-.61-.28-.91-.84-.91-.84s1.94-4.8 2.31-5.92c.37-1.12.24-3.95.36-5.21.14-1.53.26-2.46 1.35-2.85z"
              fill="url(#New_Gradient_Swatch_copy_15-6)"
            />
            <path
              className="cls-54"
              d="M635.54 302.7c-.12.14-.05.46.35.49.4.03 1.28-.06 1.61-.06s1.95-.63 1.95-.63l-3.92.2z"
            />
            <path
              d="M637.52 301.97c-.39.22-.99.35-1.31.51-.32.16-.6.07-.68.22s-.02.54.77.36c.79-.18 1.24-.29 1.71-.27s1.39 0 1.56-.25c.17-.26-.16-.6-.16-.6l-1.9.04z"
              fill="url(#radial-gradient-9)"
            />
            <path
              d="M634.86 304.23c-.08-.15.71-.12.95-.03s1.07.42 1.26.55c.14.09.33.23-.18.26-.98.06-1.74-.24-2.03-.78z"
              fill="url(#radial-gradient-10)"
            />
            <g>
              <path
                fill="url(#New_Gradient_Swatch_copy_5-11)"
                d="M549.47 451.03L596.65 423.9 596.65 280.45 549.47 307.59 549.47 451.03z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-12)"
                d="M502.97 423.9L549.5 451.03 549.5 307.59 502.97 280.49 502.97 423.9z"
              />
              <path
                fill="url(#linear-gradient-49)"
                d="M502.97 280.49L549.49 307.59 596.65 280.45 550.08 253.33 502.97 280.49z"
              />
              <path
                d="M539.65 307.48v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-50)"
              />
              <path
                d="M539.65 315.96v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-51)"
              />
              <path
                d="M539.65 324.45v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-52)"
              />
              <path
                d="M539.65 332.93v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-53)"
              />
              <path
                d="M539.65 341.41v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-54)"
              />
              <path
                d="M539.65 349.9v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-55)"
              />
              <path
                d="M539.65 358.38v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-56)"
              />
              <path
                d="M539.65 366.86v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6V365l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-57)"
              />
              <path
                d="M539.65 375.34v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-58)"
              />
              <path
                d="M539.65 383.83v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-59)"
              />
              <path
                d="M539.65 392.31v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-60)"
              />
              <path
                d="M539.65 400.79v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-61)"
              />
              <path
                d="M539.65 409.27v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-62)"
              />
              <path
                d="M539.65 417.76v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-63)"
              />
              <path
                d="M539.65 426.24v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-64)"
              />
              <path
                d="M539.65 434.72v3.78l4.23 2.6v-3.78l-4.23-2.6zm-7.73-.68l4.23 2.6v-3.78l-4.23-2.6v3.78zm-23.18-13.36l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78zm7.73 4.45l4.23 2.6v-3.78l-4.23-2.6v3.78z"
                fill="url(#linear-gradient-65)"
              />
              <g>
                <path
                  d="M591.03 289.67l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-66)"
                />
                <path
                  d="M591.03 298.16l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-67)"
                />
                <path
                  d="M591.03 306.64l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-68)"
                />
                <path
                  d="M591.03 315.12l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-69)"
                />
                <path
                  d="M591.03 323.6l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zM555.89 344v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-70)"
                />
                <path
                  d="M591.03 332.09l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-71)"
                />
                <path
                  d="M591.03 340.57l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-72)"
                />
                <path
                  d="M591.03 349.05l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-73)"
                />
                <path
                  d="M591.03 357.53l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-74)"
                />
                <path
                  d="M591.03 366.02l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-75)"
                />
                <path
                  d="M591.03 374.5l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-76)"
                />
                <path
                  d="M591.03 382.98l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-77)"
                />
                <path
                  d="M591.03 391.46l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-78)"
                />
                <path
                  d="M591.03 399.95l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-79)"
                />
                <path
                  d="M591.03 408.43l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-80)"
                />
                <path
                  d="M591.03 416.91l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-7.73 4.45l-4.23 2.6v3.78l4.23-2.6v-3.78zm-19.68 11.5v3.78l4.23-2.6v-3.78l-4.23 2.6zm11.96-7.05l-4.23 2.6v3.78l4.23-2.6v-3.78z"
                  fill="url(#linear-gradient-81)"
                />
              </g>
              <g>
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-13)"
                  d="M549.15 295.58L549.15 302.09 586.78 280.45 586.78 273.94 549.15 295.58z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-14)"
                  d="M549.17 295.58L549.17 302.09 512.07 280.45 512.07 273.97 549.17 295.58z"
                />
                <path
                  fill="url(#linear-gradient-82)"
                  opacity={0.5}
                  d="M549.15 295.58L549.15 297.19 586.78 275.55 586.78 273.94 549.15 295.58z"
                />
                <path
                  fill="url(#linear-gradient-83)"
                  opacity={0.5}
                  d="M549.17 295.58L549.17 297.19 512.07 275.56 512.07 273.97 549.17 295.58z"
                />
                <path
                  fill="url(#linear-gradient-84)"
                  d="M512.07 273.97L549.17 295.58 586.78 273.94 549.64 252.31 512.07 273.97z"
                />
              </g>
              <g>
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-15)"
                  d="M571.96 274.12L549.05 260.77 526.11 273.98 549.05 287.34 571.96 274.12z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-16)"
                  d="M549.06 264.72L549.06 260.78 549.05 260.77 526.11 273.98 529.52 275.97 549.06 264.72z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-17)"
                  d="M549.05 264.72L568.56 276.08 571.96 274.12 549.05 260.77 549.05 264.72z"
                />
                <path
                  fill="url(#linear-gradient-85)"
                  d="M529.67 275.88L548.91 287.08 568.41 275.87 549.15 264.65 529.67 275.88z"
                />
              </g>
            </g>
            <g>
              <path
                d="M392.86 420.2v-53.42l-130.68 16.93v53.87c-.24 1.79.71 3.54 2.91 4.8l39.74 22.84c4.36 2.52 11.97 2.2 17.01-.71l66.88-38.27c2.99-1.72 4.39-3.97 4.13-6.04z"
                fill="url(#linear-gradient-86)"
              />
              <path
                d="M392.86 372.78v-1.59c-.22 1.78-1.61 3.61-4.13 5.06l-66.88 38.27c-5.03 2.91-12.65 3.22-17.01.7l-39.74-22.84c-1.77-1.02-2.73-2.36-2.91-3.78v.55c-.23 1.79.72 4.54 2.91 5.8l39.74 22.84c4.36 2.52 11.97 2.2 17.01-.7l66.88-38.27c2.99-1.72 4.39-3.97 4.13-6.04z"
                fill="url(#linear-gradient-87)"
              />
              <path
                d="M392.86 378.82v-1.59c-.22 1.78-1.61 3.61-4.13 5.06l-66.88 38.27c-5.03 2.91-12.65 3.22-17.01.71l-39.74-22.84c-1.77-1.02-2.73-2.36-2.91-3.78v.55c-.23 1.79.72 4.54 2.91 5.8l39.74 22.84c4.36 2.52 11.97 2.2 17.01-.71l66.88-38.27c2.99-1.72 4.39-3.97 4.13-6.04z"
                fill="url(#linear-gradient-88)"
              />
              <path
                d="M392.86 384.85v-1.59c-.22 1.78-1.61 3.61-4.13 5.06l-66.88 38.27c-5.03 2.91-12.65 3.22-17.01.71l-39.74-22.84c-1.77-1.02-2.73-2.36-2.91-3.78v.55c-.23 1.79.72 4.54 2.91 5.8l39.74 22.84c4.36 2.52 11.97 2.2 17.01-.71l66.88-38.27c2.99-1.72 4.39-3.97 4.13-6.04z"
                fill="url(#linear-gradient-89)"
              />
              <path
                d="M392.86 390.88v-1.59c-.22 1.78-1.61 3.61-4.13 5.06l-66.88 38.27c-5.03 2.91-12.65 3.22-17.01.71l-39.74-22.84c-1.77-1.02-2.73-2.36-2.91-3.78v.55c-.23 1.79.72 4.54 2.91 5.8l39.74 22.84c4.36 2.52 11.97 2.2 17.01-.71l66.88-38.27c2.99-1.72 4.39-3.97 4.13-6.04z"
                fill="url(#linear-gradient-90)"
              />
              <path
                d="M392.86 396.92v-1.59c-.22 1.78-1.61 3.61-4.13 5.06l-66.88 38.27c-5.03 2.91-12.65 3.22-17.01.71l-39.74-22.84c-1.77-1.02-2.73-2.36-2.91-3.78v.55c-.23 1.79.72 4.54 2.91 5.8l39.74 22.84c4.36 2.52 11.97 2.2 17.01-.71l66.88-38.27c2.99-1.72 4.39-3.97 4.13-6.04z"
                fill="url(#linear-gradient-91)"
              />
              <path
                d="M392.86 402.95v-1.59c-.22 1.78-1.61 3.61-4.13 5.06l-66.88 38.27c-5.03 2.91-12.65 3.22-17.01.71l-39.74-22.84c-1.77-1.02-2.73-2.36-2.91-3.78v.55c-.23 1.79.72 4.54 2.91 5.8l39.74 22.84c4.36 2.52 11.97 2.2 17.01-.71l66.88-38.27c2.99-1.72 4.39-3.97 4.13-6.04z"
                fill="url(#linear-gradient-92)"
              />
              <path
                d="M392.86 408.99v-1.59c-.22 1.78-1.61 3.61-4.13 5.06l-66.88 38.27c-5.03 2.91-12.65 3.22-17.01.71L265.1 428.6c-1.77-1.02-2.73-2.36-2.91-3.78v.55c-.23 1.79.72 4.54 2.91 5.8l39.74 22.84c4.36 2.52 11.97 2.2 17.01-.71l66.88-38.27c2.99-1.72 4.39-3.97 4.13-6.04z"
                fill="url(#linear-gradient-93)"
              />
              <path
                d="M392.86 415.02v-1.59c-.22 1.78-1.61 3.61-4.13 5.06l-66.88 38.27c-5.03 2.91-12.65 3.22-17.01.71l-39.74-22.84c-1.77-1.02-2.73-2.36-2.91-3.78v.55c-.23 1.79.72 4.54 2.91 5.8l39.74 22.84c4.36 2.52 11.97 2.2 17.01-.71l66.88-38.27c2.99-1.72 4.39-3.97 4.13-6.04z"
                fill="url(#linear-gradient-94)"
              />
              <g>
                <path
                  d="M392.86 418.15c-.2 1.79-1.6 3.63-4.13 5.1l-66.88 38.27c-5.03 2.91-12.65 3.22-17.01.7l-39.74-22.84c-1.78-1.03-2.74-2.37-2.91-3.79v1.97c-.24 1.79.71 3.54 2.91 4.8l39.74 22.84c4.36 2.52 11.97 2.2 17.01-.71l66.88-38.27c2.99-1.72 4.39-3.97 4.13-6.04v-2.04z"
                  style={{
                    mixBlendMode: "multiply"
                  }}
                  fill="#919898"
                />
                <path
                  d="M262.19 441.2v0z"
                  style={{
                    mixBlendMode: "multiply"
                  }}
                  fill="url(#linear-gradient-95)"
                  opacity={0.2}
                />
                <path className="cls-54" d="M262.19 434.58v0z" />
              </g>
              <path
                d="M304.84 410.76l-39.74-22.84c-4.36-2.52-3.81-6.91 1.22-9.82l66.88-38.27c5.03-2.91 12.65-3.22 17.01-.71l39.74 22.84c4.36 2.52 3.81 6.91-1.22 9.82l-66.88 38.27c-5.03 2.91-12.65 3.22-17.01.7z"
                fill="url(#linear-gradient-96)"
              />
            </g>
            <g>
              <g className="cls-254">
                <path
                  className="cls-267"
                  d="M312.32 410.48c2.33 0 4.45-.51 6.12-1.48l64.81-37.42c2.23-1.29 3.51-3.33 3.51-5.59 0-2.48-1.54-4.8-4.23-6.35l-36.78-21.24c-2.11-1.22-4.75-1.89-7.43-1.89-2.33 0-4.45.51-6.12 1.48l-64.81 37.42c-2.23 1.29-3.51 3.33-3.51 5.59 0 2.48 1.54 4.8 4.23 6.35l36.78 21.24c2.11 1.22 4.75 1.89 7.43 1.89z"
                />
                <path
                  className="cls-244"
                  d="M332.37 338.27l-64.81 37.42c-2.23 1.29-3.38 3.32-3.23 5.53.03.53.15 1.05.32 1.57.53 1.66 2.18 3.44 4.07 4.53l36.35 20.99c2.1 1.22 4.76 1.87 7.41 1.84 1.07-.01 2.09-.15 3.04-.37 1.02-.24 2.21-.72 3.03-1.19l64.57-37.28c2.22-1.28 3.38-3.31 3.25-5.52-.04-.62-.19-1.23-.4-1.82-.57-1.57-2.16-3.23-3.96-4.27l-36.26-20.94c-.46-.26-1.06-.56-1.56-.77a15.47 15.47 0 00-5.75-1.14c-2.3-.01-4.39.48-6.04 1.43z"
                />
                <path
                  className="cls-237"
                  d="M332.53 338.56l-64.81 37.42c-2.22 1.28-3.25 3.31-2.96 5.47.07.51.23 1 .4 1.5.52 1.48 2.43 3.37 4.14 4.35l35.91 20.74c2.1 1.21 4.76 1.84 7.39 1.78 1.07-.03 2.08-.19 3.01-.42s2.25-.8 2.99-1.23l64.32-37.14c2.21-1.28 3.25-3.3 2.98-5.45-.07-.59-.26-1.16-.49-1.73-.55-1.39-2.39-3.16-4.01-4.1l-35.74-20.64c-.41-.24-1.08-.58-1.53-.77-1.72-.72-3.67-1.14-5.66-1.16-2.26-.02-4.34.45-5.95 1.38z"
                />
                <path
                  className="cls-752"
                  d="M332.69 338.84l-64.81 37.42c-2.21 1.28-3.12 3.31-2.68 5.41.1.48.3.94.49 1.42.51 1.3 2.69 3.3 4.21 4.18l35.48 20.49c2.09 1.21 4.77 1.82 7.37 1.73 1.07-.04 2.07-.23 2.99-.48.81-.21 2.3-.89 2.96-1.27l64.08-36.99c2.2-1.27 3.13-3.28 2.72-5.37-.11-.56-.34-1.1-.58-1.65-.53-1.22-2.61-3.1-4.06-3.93l-35.23-20.34c-.36-.21-1.1-.59-1.5-.76-1.68-.72-3.61-1.16-5.56-1.19-2.22-.04-4.28.42-5.87 1.34z"
                />
                <path
                  className="cls-319"
                  d="M332.85 339.12l-64.81 37.42c-2.21 1.27-3 3.29-2.4 5.35.13.46.37.89.57 1.35.48 1.12 2.95 3.23 4.28 4l35.05 20.23c2.09 1.21 4.78 1.8 7.35 1.68 1.06-.05 2.05-.28 2.96-.53.71-.19 2.35-.97 2.93-1.3l63.83-36.85c2.19-1.26 3-3.26 2.45-5.3-.14-.54-.42-1.03-.68-1.57-.5-1.05-2.84-3.03-4.1-3.76l-34.71-20.04c-.32-.18-1.13-.61-1.48-.76-1.65-.72-3.55-1.17-5.46-1.21-2.18-.05-4.22.39-5.78 1.29z"
                />
                <path
                  className="cls-225"
                  d="M333.01 339.4l-64.81 37.42c-2.2 1.27-2.88 3.28-2.13 5.29.16.43.44.83.66 1.28.45.94 3.21 3.16 4.35 3.82l34.61 19.98c2.08 1.2 4.79 1.77 7.32 1.62 1.06-.07 2.04-.32 2.94-.58.6-.18 2.4-1.05 2.89-1.34l63.59-36.71c2.17-1.26 2.88-3.24 2.19-5.23-.18-.51-.5-.96-.77-1.48-.46-.89-3.06-2.96-4.15-3.58l-34.19-19.74c-.27-.16-1.15-.63-1.45-.76-1.62-.71-3.48-1.18-5.37-1.24-2.15-.06-4.17.36-5.7 1.24z"
                />
                <path
                  className="cls-698"
                  d="M333.18 339.68l-64.81 37.42c-2.19 1.27-2.77 3.27-1.85 5.23.19.41.43.82.75 1.21.24.84 3.47 3.1 4.42 3.64l34.18 19.73c2.08 1.2 4.79 1.75 7.3 1.57 1.06-.08 2.02-.36 2.91-.63.5-.15 2.45-1.14 2.86-1.37l63.34-36.57c2.16-1.25 2.77-3.22 1.92-5.15a5.63 5.63 0 00-.86-1.4c-.26-.79-3.29-2.89-4.19-3.41l-33.67-19.44c-.23-.13-1.17-.65-1.42-.76-1.59-.71-3.42-1.2-5.27-1.26-2.11-.07-4.11.33-5.61 1.2z"
                />
                <path
                  className="cls-474"
                  d="M333.34 339.96l-64.81 37.42c-2.19 1.26-2.66 3.27-1.57 5.16.22.39.49.77.83 1.14.19.67 3.73 3.03 4.49 3.46l33.75 19.48c2.07 1.2 4.8 1.73 7.28 1.52 1.05-.09 2.01-.4 2.89-.68.4-.13 2.5-1.22 2.83-1.41l63.1-36.43c2.15-1.24 2.66-3.2 1.66-5.08-.24-.45-.55-.9-.95-1.31-.21-.63-3.51-2.82-4.24-3.24l-33.15-19.14c-.18-.11-1.2-.66-1.4-.75-1.56-.71-3.35-1.21-5.18-1.29-2.07-.09-4.05.3-5.53 1.15z"
                />
                <path
                  className="cls-624"
                  d="M333.5 340.24l-64.81 37.42c-2.18 1.26-2.56 3.26-1.3 5.1.25.36.55.73.92 1.06.14.5 3.99 2.96 4.56 3.29l33.31 19.23c2.07 1.19 4.81 1.7 7.26 1.47 1.05-.11 2-.44 2.86-.74.3-.1 2.55-1.3 2.79-1.45l62.85-36.29c2.14-1.24 2.56-3.19 1.4-5.01-.27-.42-.61-.84-1.04-1.23-.16-.47-3.74-2.75-4.28-3.07l-32.63-18.84c-.14-.08-1.22-.68-1.37-.75-1.53-.71-3.29-1.22-5.08-1.31-2.04-.1-4 .27-5.44 1.11z"
                />
                <path
                  className="cls-1"
                  d="M333.66 340.52l-64.81 37.42c-2.18 1.26-2.46 3.27-1.02 5.04.28.34.61.68 1.01.99.09.34 4.25 2.89 4.63 3.11l32.88 18.98c2.06 1.19 4.82 1.68 7.24 1.41 1.05-.12 1.98-.48 2.84-.79.2-.07 2.6-1.39 2.76-1.48l62.61-36.15c2.13-1.23 2.46-3.18 1.13-4.94-.3-.4-.67-.79-1.14-1.14-.1-.32-3.97-2.69-4.33-2.89l-32.11-18.54c-.09-.05-1.24-.7-1.34-.75-1.5-.71-3.23-1.24-4.99-1.33-2-.11-3.94.24-5.36 1.06z"
                />
                <path
                  className="cls-744"
                  d="M333.82 340.8l-64.81 37.42c-2.17 1.25-2.36 3.27-.74 4.98.3.32.67.63 1.09.92.05.17 4.51 2.82 4.7 2.93l32.45 18.73c2.06 1.19 4.82 1.66 7.22 1.36 1.05-.13 1.96-.53 2.81-.84.1-.04 2.64-1.47 2.73-1.52l62.36-36.01c2.12-1.22 2.36-3.18.87-4.86-.33-.37-.73-.73-1.23-1.06-.05-.16-4.19-2.62-4.37-2.72l-31.6-18.24s-1.27-.72-1.31-.75c-1.47-.7-3.16-1.25-4.89-1.36-1.96-.12-3.89.21-5.28 1.01z"
                />
                <path d="M316.66 405.92l64.81-37.42c2.56-1.48 2.24-4.06-.72-5.77l-36.78-21.24c-2.96-1.71-7.43-1.89-9.99-.41l-64.81 37.42c-2.56 1.48-2.24 4.06.72 5.76l36.78 21.24c2.96 1.71 7.43 1.89 9.99.41z" />
              </g>
              <path
                d="M316.66 405.86l64.81-37.42c1.14-.66 1.71-1.54 1.73-2.46v-3.21c-.02-1.12-.85.83-2.44-.1l-36.78-21.24c-2.96-1.71-7.43-1.89-9.99-.41l-64.81 37.42c-.85.49-1.47-1.6-1.7-.93-.07.22-.03 3.16-.03 3.39-.02 1.15.8 2.36 2.44 3.31l36.78 21.24c2.96 1.71 7.43 1.89 9.99.41z"
                fill="url(#linear-gradient-97)"
              />
              <path
                d="M316.66 402.71l64.81-37.42c2.56-1.48 2.24-4.06-.72-5.76l-36.78-21.24c-2.96-1.71-7.43-1.89-9.99-.41l-64.81 37.42c-2.56 1.48-2.24 4.06.72 5.76l36.78 21.24c2.96 1.71 7.43 1.89 9.99.41z"
                fill="url(#New_Gradient_Swatch_copy_19)"
              />
              <path
                d="M312.32 402.41c1.46 0 2.77-.29 3.69-.82l64.81-37.42c.4-.23 1.08-.72 1.08-1.38s-.67-1.49-1.8-2.14l-36.78-21.24c-1.36-.79-3.19-1.24-5-1.24-1.46 0-2.77.29-3.69.82l-64.81 37.42c-.4.23-1.08.72-1.08 1.38s.67 1.49 1.8 2.14l36.78 21.24c1.36.79 3.19 1.24 5 1.24z"
                fill="url(#linear-gradient-98)"
              />
              <path
                className="cls-102"
                d="M269.89 380.52l36.78 21.24c2.96 1.71 7.43 1.89 9.99.41l64.81-37.42c1.06-.61 1.62-1.42 1.71-2.27.13 1.05-.43 2.06-1.71 2.8l-64.81 37.42c-2.56 1.48-7.03 1.29-9.99-.41l-36.78-21.24c-1.73-1-2.55-2.3-2.42-3.5.13 1.04.95 2.11 2.42 2.96z"
              />
              <ellipse
                cx={308.68}
                cy={403.68}
                rx={14}
                ry={21.1}
                transform="rotate(-67.66 308.672 403.673)"
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#New_Gradient_Swatch_copy_18)"
              />
              <path
                d="M330.13 346.48c-1.72 4.99 3.74 11.39 12.19 14.3s16.69 1.22 18.41-3.77c1.72-4.99-3.74-11.39-12.19-14.3s-16.69-1.22-18.41 3.77z"
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#New_Gradient_Swatch_copy_18-2)"
              />
              <path
                d="M305.14 388.92l52.63-30.39c1.05-.61.92-1.67-.3-2.37l-19.76-11.41c-1.22-.7-3.06-.78-4.11-.17l-52.63 30.39c-1.05.61-.92 1.67.3 2.37l19.76 11.41c1.22.7 3.06.78 4.11.17z"
                fill="url(#linear-gradient-99)"
              />
              <path
                d="M336.57 346.08c-.43-.25-1.12-.24-1.55 0l-3.37 1.95c-.43.25-.43.65 0 .89.43.25 1.12.24 1.55 0l3.37-1.95c.43-.25.43-.65 0-.89zm-5.77 3.33c-.43-.25-1.12-.24-1.55 0l-1.6.92c-.43.25-.43.65 0 .89.43.25 1.12.24 1.55 0l1.6-.92c.43-.25.43-.65 0-.89zm-4 2.31c-.43-.25-1.12-.24-1.55 0l-1.6.92c-.43.25-.43.65 0 .89.43.25 1.12.24 1.55 0l1.6-.92c.43-.25.43-.65 0-.89zm-4 2.31c-.43-.25-1.12-.24-1.55 0l-1.6.92c-.43.25-.43.65 0 .89s1.12.24 1.55 0l1.6-.92c.43-.25.43-.65 0-.89zm-4 2.31c-.43-.25-1.12-.24-1.55 0l-1.6.92c-.43.25-.43.65 0 .89.43.25 1.12.24 1.55 0l1.6-.92c.43-.25.43-.65 0-.89zm-4 2.31c-.43-.25-1.12-.24-1.55 0l-1.6.92c-.43.25-.43.65 0 .89s1.12.24 1.55 0l1.6-.92c.43-.25.43-.65 0-.89zm-4 2.31c-.43-.25-1.12-.24-1.55 0l-1.6.92c-.43.25-.43.65 0 .89.43.25 1.12.24 1.55 0l1.6-.92c.43-.25.43-.65 0-.89zm-4 2.31c-.43-.25-1.12-.24-1.55 0l-1.6.92c-.43.25-.43.65 0 .89s1.12.24 1.55 0l1.6-.92c.43-.25.43-.65 0-.89zm-4 2.31c-.43-.25-1.12-.24-1.55 0l-1.6.92c-.43.25-.43.65 0 .89.43.25 1.12.24 1.55 0l1.6-.92c.43-.25.43-.65 0-.89zm-4 2.31c-.43-.25-1.12-.24-1.55 0l-1.6.92c-.43.25-.43.65 0 .89s1.12.24 1.55 0l1.6-.92c.43-.25.43-.65 0-.89zm-4 2.31c-.43-.25-1.12-.24-1.55 0l-1.6.92c-.43.25-.43.65 0 .89.43.25 1.12.24 1.55 0l1.6-.92c.43-.25.43-.65 0-.89zm-4 2.31c-.43-.25-1.12-.24-1.55 0l-1.6.92c-.43.25-.43.65 0 .89.43.25 1.12.24 1.55 0l1.6-.92c.43-.25.43-.65 0-.89zm-4.08 2.36c-.43-.25-1.12-.24-1.55 0l-1.6.92c-.43.25-.43.65 0 .89.43.25 1.12.24 1.55 0l1.6-.92c.43-.25.43-.65 0-.89zm53.45-26.7l-1.37-.79c-.48-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02l1.37.79c.48.28 1.27.28 1.76 0l1.38-.8c.49-.28.49-.74 0-1.02zm-5.39 4.12l1.38-.8c.49-.28.49-.74 0-1.02l-1.37-.79c-.48-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02l1.37.79c.48.28 1.27.28 1.76 0zm-2.61.49l-1.37-.79c-.48-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02l1.37.79c.48.28 1.27.28 1.76 0l1.38-.8c.49-.28.49-.74 0-1.02zm-4 2.31l-1.37-.79c-.48-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02l1.37.79c.49.28 1.27.28 1.76 0l1.38-.8c.49-.28.49-.74 0-1.02zm-8.52 3.33l1.37.79c.49.28 1.27.28 1.76 0l1.38-.8c.49-.28.49-.74 0-1.02l-1.37-.79c-.49-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02zm-4 2.31l1.37.79c.49.28 1.27.28 1.76 0l1.38-.8c.49-.28.49-.74 0-1.02l-1.37-.79c-.49-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02zm-4 2.31l1.37.79c.49.28 1.27.28 1.76 0l1.38-.8c.49-.28.49-.74 0-1.02l-1.37-.79c-.49-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02zm-4 2.31l1.37.79c.49.28 1.27.28 1.76 0l1.38-.8c.49-.28.49-.74 0-1.02l-1.37-.79c-.49-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02zm-4 2.31l1.37.79c.49.28 1.27.28 1.76 0l1.38-.8c.49-.28.49-.74 0-1.02l-1.37-.79c-.49-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02zm-4 2.31l1.37.79c.49.28 1.27.28 1.76 0l1.38-.8c.49-.28.49-.74 0-1.02l-1.37-.79c-.49-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02zm.53 1.28l-1.37-.79c-.49-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02l1.37.79c.49.28 1.27.28 1.76 0l1.38-.8c.49-.28.49-.74 0-1.02zm-8.52 3.33l1.37.79c.49.28 1.27.28 1.76 0l1.38-.8c.49-.28.49-.74 0-1.02l-1.37-.79c-.49-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02zm-5.86 3.38l1.37.79c.49.28 1.27.28 1.76 0l3.16-1.82c.49-.28.49-.74 0-1.02l-1.37-.79c-.49-.28-1.27-.28-1.76 0l-3.16 1.82c-.49.28-.49.74 0 1.02zm58.08-27.67l-1.37-.79c-.49-.28-1.27-.28-1.76 0l-3.16 1.82c-.49.28-.49.74 0 1.02l1.37.79c.49.28 1.27.28 1.76 0l3.16-1.82c.49-.28.49-.74 0-1.02zm-5.77 3.33l-1.37-.79c-.49-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02l1.37.79c.49.28 1.27.28 1.76 0l1.38-.8c.49-.28.49-.74 0-1.02zm-4 3.33c.49-.28.49-.74 0-1.02l-1.37-.79c-.48-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02l1.37.79c.49.28 1.27.28 1.76 0l1.38-.8zm-4 2.31c.49-.28.49-.74 0-1.02l-1.37-.79c-.48-.28-1.27-.28-1.76 0l-1.38.8c-.49.28-.49.74 0 1.02l1.37.79c.48.28 1.27.28 1.76 0l1.38-.8zm-7.13.5l-1.38.8c-.49.28-.49.74 0 1.02l1.37.79c.48.28 1.27.28 1.76 0l1.38-.8c.49-.28.49-.74 0-1.02l-1.37-.79c-.48-.28-1.27-.28-1.76 0zm-3.91 2.26l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0l1.55-.9c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0zm-4 2.31l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0l1.55-.9c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0zm-4 2.31l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0l1.55-.9c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0zm-4 2.31l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0l1.55-.9c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0zm-4 2.31l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0l1.55-.9c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0zm-2.42 5.01l1.55-.9c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0zm-4 2.31l1.55-.9c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0zm-7.22 1.47l1.54.89c.44.25 1.15.25 1.59 0l1.55-.9c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-1.55.9c-.44.25-.44.67 0 .92zm58.25-27.57l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-5.01 2.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0l5.01-2.9c.44-.25.44-.67 0-.92zm-7.46 4.31l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0l1.55-.9c.44-.25.44-.67 0-.92zm-4 2.31l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0l1.55-.9c.44-.25.44-.67 0-.92zm-4 2.31l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0l1.55-.9c.44-.25.44-.67 0-.92zm-5.56 4.13l1.55-.9c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0zm-4 2.31l1.55-.9c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0zm-4 2.31l1.55-.9c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0zm-4 2.31l1.55-.9c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0zm-4 2.31l1.55-.9c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0zm-4 2.31l1.55-.9c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0zm-2.44.49l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-1.55.9c-.44.25-.44.67 0 .92l1.54.89c.44.25 1.15.25 1.59 0l1.55-.9c.44-.25.44-.67 0-.92zm-11.09 4.62l1.54.89c.44.25 1.15.25 1.59 0l3.95-2.28c.44-.25.44-.67 0-.92l-1.54-.89c-.44-.25-1.15-.25-1.59 0l-3.95 2.28c-.44.25-.44.67 0 .92zm58.23-27.58l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-7.11 4.11c-.5.29-.5.75 0 1.04l1.34.77c.5.29 1.3.28 1.8 0l7.11-4.11c.5-.29.5-.75 0-1.04zm-9.77 5.64l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04zm-4 2.31l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04zm-4 2.31l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04zm-4 2.31l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04zm-4 2.31l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04zm-4 2.31l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04zm-4 2.31l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04zm-4 2.31l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04zm-4 2.31l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04zm-4 2.31l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04zm-8.58 3.41l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04zm51.78-25.62l1.34.77c.5.29 1.3.28 1.8 0l3.12-1.8c.5-.29.5-.75 0-1.04l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-3.12 1.8c-.5.29-.5.75 0 1.04zm-4 2.31l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04zm-4 2.31l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04zm-28 16.16l1.34.77c.5.29 1.3.28 1.8 0l25.34-14.63c.5-.29.5-.75 0-1.04l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-25.34 14.63c-.5.29-.5.75 0 1.04zm-4 2.31l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04zm-4 2.31l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04zm-4.08 2.36l1.34.77c.5.29 1.3.28 1.8 0l1.35-.78c.5-.29.5-.75 0-1.04l-1.34-.77c-.5-.29-1.3-.28-1.8 0l-1.35.78c-.5.29-.5.75 0 1.04z"
                style={{
                  mixBlendMode: "screen"
                }}
                opacity={0.3}
                fill="url(#linear-gradient-100)"
              />
              <path
                d="M270.2 374.79l62.45-36.07c2.42-1.4 4.38-5.14 4.38-8.36v-48.99c0-3.22-1.96-4.71-4.38-3.31l-62.45 36.07c-2.42 1.4-4.38 5.14-4.38 8.36v48.99c0 3.22 1.96 4.71 4.38 3.31z"
                fill="url(#New_Gradient_Swatch_copy_11)"
              />
              <path
                d="M269.64 372.28l61.78-35.69c1.95-1.24 3.15-3.71 3.15-6.24v-49.23c0-.6-.65-.97-1.17-.67-.06.04-.11.06-.14.08l-61.83 35.72c-2.32 1.34-3.15 3.71-3.15 6.24v49.11c0 .64.69 1.05 1.25.73.04-.03.08-.05.1-.06z"
                fill="url(#linear-gradient-101)"
              />
              <path
                className="cls-51"
                d="M268.28 322.5v49.11c0 .64.69 1.05 1.25.73.04-.03.08-.05.1-.06l61.78-35.69c1.95-1.24 3.15-3.71 3.15-6.24v-49.23c0-.6-.65-.97-1.17-.67-.06.04-.11.06-.14.08l-61.83 35.72c-2.32 1.34-3.15 3.71-3.15 6.24zm.49 0c0-1.89.5-4.43 2.9-5.81l61.97-35.8s.09-.04.14-.04c.14 0 .29.11.29.28v49.23c0 2.41-1.15 4.69-2.9 5.81l-61.88 35.74c-.05.03-.11.05-.17.05-.17 0-.35-.13-.35-.35V322.5z"
              />
              <path
                d="M268.96 313.47l62.45-36.07c.96-.55 1.84-.65 2.56-.38.09.04 1.31.68 1.4.73-.75-.36-1.69-.29-2.72.3l-62.45 36.07c-2.42 1.4-4.38 5.14-4.38 8.36v48.99c0 2.01.76 3.34 1.93 3.72-.09 0-.21-.03-.38-.13-.06-.03-1.38-.78-1.43-.82-.83-.58-1.35-1.78-1.35-3.44v-48.99c0-3.22 1.96-6.97 4.38-8.36z"
                fill="url(#linear-gradient-102)"
              />
              <path
                d="M269.99 314.03l62.45-36.07c.99-.57 1.9-.65 2.64-.34-.63-.1-1.35.05-2.11.49l-62.45 36.07c-2.42 1.4-4.38 5.14-4.38 8.36v48.99c0 1.9.69 3.19 1.74 3.65-1.35-.21-2.27-1.6-2.27-3.8v-48.99c0-3.22 1.96-6.97 4.38-8.36z"
                style={{
                  mixBlendMode: "screen"
                }}
                fill="url(#Radial_Gradient_2-5)"
              />
              <path
                d="M264.76 322.11c1.6.66 3.7-.76 4.69-3.17s.5-4.9-1.1-5.55c-1.6-.66-3.7.76-4.69 3.17-.99 2.41-.5 4.9 1.1 5.55z"
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#radial-gradient-11)"
              />
              <g className="cls-13">
                <path
                  d="M269.78 343.22l-.9-.44 6.85-14.18c.08-.16.23-.26.4-.28l7.75-.82 12.14-18.73a.48.48 0 01.36-.22.5.5 0 01.4.13l8.76 8.16 5.28-11.99c.11-.25.4-.37.66-.26l12.46 5.36 9.03-.05v1l-9.12.06c-.07.02-.14-.01-.2-.04l-12.1-5.21-5.36 12.18a.503.503 0 01-.8.17l-8.84-8.24-11.94 18.43a.47.47 0 01-.37.22l-7.71.81-6.73 13.93z"
                  fill="url(#linear-gradient-103)"
                />
              </g>
              <g className="cls-13">
                <path
                  d="M269.71 351.6l-.77-.64 10.84-12.99c.15-.18.4-.23.61-.13l5.26 2.67 10.04-19.48c.07-.14.2-.23.35-.26.15-.03.31.01.42.12l7.27 6.47 5.25-8.11c.12-.19.36-.27.58-.2l10.28 3.36 12.99-3 .23.97-13.12 3.04c-.09.02-.18.02-.27-.01l-10.05-3.29-5.35 8.27a.51.51 0 01-.35.22.494.494 0 01-.4-.12l-7.22-6.43-9.98 19.35a.5.5 0 01-.67.22l-5.35-2.72-10.59 12.68z"
                  fill="url(#linear-gradient-104)"
                />
              </g>
              <g className="cls-13">
                <path
                  d="M269.76 360.17l-.86-.51 4.56-7.75c.11-.19.33-.29.54-.23l7.68 1.78 11.22-14.41c.08-.1.19-.17.32-.19l11.2-1.71 3.87-5.63a.49.49 0 01.41-.22l11.88.08 12.17-5.23.39.92-12.27 5.27c-.06.03-.09.05-.2.04l-11.72-.08-3.84 5.59c-.08.11-.2.19-.34.21l-11.22 1.71-11.29 14.51a.52.52 0 01-.51.18l-7.63-1.76-4.38 7.43z"
                  fill="url(#linear-gradient-105)"
                />
              </g>
            </g>
            <g>
              <g className="cls-13">
                <path
                  className="cls-247"
                  d="M487.84 324.73c-.31 0-.64-.09-.96-.28l-50.9-29.39c-1.15-.66-2.05-2.36-2.05-3.87v-31.1c0-1.43.8-2.08 1.58-2.08.31 0 .64.1.96.28l50.9 29.39c1.15.66 2.05 2.36 2.05 3.87v31.1c0 1.43-.8 2.08-1.58 2.08zm-52.33-65.72c-.43 0-.58.58-.58 1.08v31.1c0 1.14.71 2.52 1.55 3l50.9 29.39c.17.1.33.15.46.15.43 0 .58-.58.58-1.08v-31.1c0-1.14-.71-2.52-1.55-3l-50.9-29.39a.949.949 0 00-.46-.15z"
                />
              </g>
              <path
                d="M487.84 323.6c-.11 0-.25-.05-.4-.13l-50.9-29.39c-.81-.47-1.49-1.79-1.49-2.9v-31.1c0-.47.14-.95.46-.95.11 0 .25.05.4.13l50.9 29.39c.81.47 1.49 1.79 1.49 2.9v31.1c0 .47-.14.95-.46.95z"
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#linear-gradient-106)"
              />
              <g className="cls-13">
                <path
                  d="M475.17 310.95c-5.8-3.35-10.53-11.5-10.53-18.16s4.72-9.35 10.53-6c5.8 3.35 10.53 11.5 10.53 18.16s-4.72 9.35-10.53 6zm0-23.27c-5.38-3.11-9.76-.61-9.76 5.56s4.38 13.72 9.76 16.83c5.38 3.11 9.76.61 9.76-5.56s-4.38-13.72-9.76-16.83z"
                  fill="url(#linear-gradient-107)"
                />
                <path
                  d="M475.17 305.57c-3.22-1.86-5.84-6.38-5.84-10.07 0-.36.03-.7.07-1.01l-2.42-1.88c-.26 1.56-.15 3.16.37 5.1 1.56 5.82 6.3 11.09 10.58 11.77l-.85-3.16c-.6-.11-1.25-.35-1.92-.74z"
                  opacity={0.7}
                  fill="url(#linear-gradient-108)"
                />
                <path
                  d="M480.42 294.74l-1.49 1.18c1.27 1.96 2.08 4.27 2.08 6.32 0 1.26-.31 2.27-.84 2.97l2.09 2.59c2.02-2.85 1.26-8.28-1.84-13.06z"
                  fill="url(#linear-gradient-109)"
                />
                <path
                  d="M475.17 292.17c1.43.83 2.75 2.18 3.76 3.75l1.49-1.18c-1.55-2.39-3.28-4.11-5.31-5.28v2.67s.04.02.05.03z"
                  fill="url(#linear-gradient-110)"
                />
                <path
                  d="M475.12 292.14v-2.67c-4.05-2.34-7.43-1.04-8.13 3.13l2.42 1.88c.44-2.92 2.83-3.98 5.71-2.35z"
                  fill="url(#linear-gradient-111)"
                />
                <path
                  d="M471.59 293.34l2.08 3.2c.36-.28.9-.28 1.5.07.4.23.76.58 1.07.99l1.36-1.91c-.71-.91-1.54-1.67-2.43-2.18-1.43-.83-2.72-.83-3.58-.16z"
                  fill="url(#linear-gradient-112)"
                />
                <path
                  d="M477.14 300.01c0 1.25-.88 1.75-1.97 1.13-.08-.05-.17-.1-.25-.16l-.47 2.8c.23.18.48.34.72.48 2.58 1.49 4.69.29 4.69-2.67 0-.61-.09-1.25-.26-1.9l-2.55-.41c.06.25.09.5.09.74z"
                  fill="url(#linear-gradient-113)"
                  opacity={0.7}
                />
                <path
                  d="M473.2 297.79l-2.71-1.57c.03 2.67 1.74 5.86 3.96 7.54l.47-2.8c-.95-.69-1.7-2.04-1.72-3.18z"
                  fill="url(#linear-gradient-114)"
                />
                <path
                  d="M473.2 297.73c0-.56.18-.97.47-1.2l-2.08-3.2c-.69.54-1.11 1.51-1.11 2.83v.06l2.71 1.57v-.06z"
                  fill="url(#linear-gradient-115)"
                />
              </g>
              <path
                d="M438.32 269.86v1.31l24.94 14.41v-1.31l-24.94-14.41zm16.13 12.35l-16.13-9.32v1.31l16.13 9.32v-1.31zm0-6.44l-16.13-9.32v1.31l16.13 9.32v-1.31zm-16.13 1.46l20.98 12.12v-1.31l-20.98-12.12v1.31zm0 12.15l20.98 12.12v-1.31l-20.98-12.12v1.31zm0-9.12l14.37 8.3v-1.31l-14.37-8.3v1.31zm9.09 6.97l-9.09-5.25v1.31l9.09 5.25v-1.31zm-9.09-.91l11.73 6.78v-1.31l-11.73-6.78v1.31z"
                style={{
                  mixBlendMode: "screen"
                }}
                fill="url(#linear-gradient-116)"
              />
            </g>
            <g>
              <g className="cls-13">
                <path
                  className="cls-247"
                  d="M378.45 324.9c-.79 0-1.58-.64-1.58-2.08v-31.1c0-1.51.9-3.21 2.05-3.87l50.9-29.39c.33-.19.65-.28.96-.28.79 0 1.58.64 1.58 2.08v31.1c0 1.51-.9 3.21-2.05 3.87l-50.9 29.39c-.33.19-.65.28-.96.28zm52.33-65.72c-.13 0-.3.05-.46.15l-50.9 29.39c-.84.48-1.55 1.86-1.55 3v31.1c0 .5.15 1.08.58 1.08.14 0 .3-.05.46-.15l50.9-29.39c.84-.48 1.55-1.86 1.55-3v-31.1c0-.5-.15-1.08-.58-1.08z"
                />
              </g>
              <path
                d="M378.45 323.78c.11 0 .25-.05.4-.13l50.9-29.39c.81-.47 1.49-1.79 1.49-2.9v-31.1c0-.47-.14-.95-.46-.95-.11 0-.25.05-.4.13l-50.9 29.39c-.81.47-1.49 1.79-1.49 2.9v31.1c0 .47.14.95.46.95z"
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#linear-gradient-117)"
              />
              <path
                style={{
                  mixBlendMode: "screen"
                }}
                fill="url(#linear-gradient-118)"
                d="M428.79 283.3L428.79 290.28 381.15 317.78 381.15 307.7 386.28 297.09 392.26 296.46 401.44 282.29 408.39 288.76 412.55 279.3 421.95 283.34 428.79 283.3z"
              />
              <path
                style={{
                  mixBlendMode: "screen"
                }}
                fill="url(#linear-gradient-119)"
                d="M428.79 286.62L428.79 290.28 381.15 317.78 381.15 310.12 389.27 300.4 393.54 302.57 401.23 287.65 407 292.78 411.16 286.35 418.96 288.9 428.79 286.62z"
              />
              <path
                style={{
                  mixBlendMode: "screen"
                }}
                fill="url(#linear-gradient-120)"
                d="M428.79 289.01L428.79 290.28 381.15 317.78 381.15 313.95 384.57 308.15 390.55 309.53 399.09 298.55 407.64 297.25 410.63 292.9 419.6 292.96 428.79 289.01z"
              />
            </g>
            <g>
              <path
                fill="url(#New_Gradient_Swatch_copy_5-18)"
                d="M433.18 436.02L433.18 494.36 489.35 461.6 489.35 403.26 433.18 436.02z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-19)"
                d="M433.21 436.02L433.21 494.36 376.84 461.5 376.84 403.2 433.21 436.02z"
              />
              <path
                fill="url(#linear-gradient-121)"
                d="M376.84 403.2L433.21 436.02 489.35 403.26 432.93 370.4 376.84 403.2z"
              />
            </g>
            <path
              fill="url(#linear-gradient-122)"
              d="M376.83 337.13L433.31 370.03 489.58 337.19 433.03 304.26 376.83 337.13z"
            />
            <g>
              <path
                fill="url(#New_Gradient_Swatch_copy_21)"
                d="M433.27 424.26L433.27 433.47 485.58 402.96 485.58 393.75 433.27 424.26z"
              />
              <path
                fill="url(#linear-gradient-123)"
                d="M433.3 424.26L433.3 433.47 380.82 402.87 380.82 393.7 433.3 424.26z"
              />
            </g>
            <g>
              <path
                fill="url(#New_Gradient_Swatch_copy_5-20)"
                d="M433.09 399.4L398.71 379.99 392.53 367.92 376.83 360.07 376.83 337 433.11 369.83 433.09 369.84 433.09 399.4z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-21)"
                d="M443.05 394.58L433.51 399.64 433.12 399.42 433.12 369.84 433.11 369.83 489.58 336.95 489.58 388.38 465.5 401.6 443.05 394.58z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-22)"
                d="M433.12 399.42L433.09 399.4 433.09 369.84 433.11 369.83 433.12 369.84 433.12 399.42z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-23)"
                d="M433.12 399.42L433.09 399.4 433.09 369.84 433.11 369.83 433.12 369.84 433.12 399.42z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-24)"
                d="M433.12 425.69L433.11 425.68 433.12 425.67 433.12 425.69z"
              />
              <path
                fill="url(#linear-gradient-124)"
                d="M433.12 425.69L433.11 425.68 433.12 425.67 433.12 425.69z"
              />
              <path
                fill="url(#linear-gradient-125)"
                d="M398.71 379.99L433.09 399.4 433.09 425.67 376.83 392.96 376.83 360.07 392.53 367.92 398.71 379.99z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-25)"
                d="M398.71 382.8L433.09 402.21 433.09 428.48 376.83 395.77 376.83 362.87 392.53 370.73 398.71 382.8z"
              />
              <path
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#radial-gradient-12)"
                d="M398.71 381.43L392.53 369.37 376.83 361.51 376.83 363.73 392.53 371.58 398.71 383.65 433.09 403.06 433.09 400.84 398.71 381.43z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-26)"
                d="M433.09 425.69L433.09 425.67 433.11 425.68 433.09 425.69z"
              />
              <path
                fill="url(#linear-gradient-126)"
                d="M433.09 425.69L433.09 425.67 433.11 425.68 433.09 425.69z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_21-2)"
                d="M433.12 425.67L433.12 399.42 433.51 399.64 443.05 394.58 465.5 401.6 489.58 388.38 489.58 392.87 433.12 425.67z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-27)"
                d="M433.12 428.48L433.12 402.22 433.51 402.44 443.05 397.39 465.5 404.41 489.58 391.19 489.58 395.68 433.12 428.48z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-28)"
                d="M433.12 399.42L433.12 425.67 433.11 425.68 433.09 425.67 433.09 399.4 433.12 399.42z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-29)"
                d="M433.12 399.42L433.12 425.67 433.11 425.68 433.09 425.67 433.09 399.4 433.12 399.42z"
              />
              <path
                fill="url(#linear-gradient-127)"
                d="M433.12 399.42L433.12 425.67 433.11 425.68 433.09 425.67 433.09 399.4 433.12 399.42z"
              />
            </g>
            <g>
              <path
                fill="url(#New_Gradient_Swatch_copy_5-30)"
                d="M433.17 369.24L433.17 339.63 407.22 354.76 407.22 384.37 433.17 369.24z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-31)"
                d="M433.15 369.24L433.15 339.63 459.18 354.8 459.18 384.39 433.15 369.24z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-32)"
                d="M459.18 384.39L433.15 369.24 407.22 384.37 433.28 399.54 459.18 384.39z"
              />
            </g>
            <g>
              <path
                className="cls-57"
                d="M398.75 342.62c3.77 1.77 5.35.74 7.76-.66 2.41-1.39 3.42-2.67.6-4.04-2.76-1.34-5.36-.32-7.77 1.07-2.41 1.39-2.64 2.66-.59 3.62z"
              />
              <path
                d="M407.96 316.02c-.05.94.05 4.29-.77 6.43-.82 2.14.11 3.49.29 4.65.3 1.82.13 3.55-.15 5.97s-.26 3.57.02 4.09.09 1.25-1.46 1.67c-1.55.42-3.37.44-3.2-.99.06-.47 1.39.61 1.84-.09.45-.7.96-1.83.7-4.39-.26-2.56-.56-4.13-.7-5.54s-.42-3.15-.7-5.03-.59-7.47-.59-7.47l4.72.71z"
                fill="url(#radial-gradient-13)"
              />
              <path
                d="M406.26 336.78c0-.77-.19-2.73-.19-4.04s-.92-5.82-.5-6.74c.61-1.33-.23-3.16-.23-3.85 0-.64.04-5.47.04-6.51l2.59.39c-.05.94.05 4.29-.77 6.43s.11 3.49.29 4.65c.3 1.82.13 3.55-.15 5.97s-.26 3.57.02 4.09.09 1.25-1.46 1.67c-.39.11-.79.19-1.18.22l.35-.19s1.19-1.31 1.19-2.08z"
                fill="url(#radial-gradient-14)"
              />
              <path
                className="cls-266"
                d="M407.5 337.13s.57.64.5 1.16-.49 1.17-.5 1.66c-.02.49.02.86 0 .88-.02.02-.35.04-.35.04l-.15-.12v-1.76s-.92-.1-1.42.26c-.49.36-1.9.64-2.49.39-.59-.25-1.01-2.03-.95-2.3.06-.27 1.49.49 1.73.59.23.1.32.12.32.12s-.74-.21-.92.06c-.18.27 0 .86.58.96.59.1 1.32-.72 1.93-.94.62-.22 1.56-.58 1.72-.98z"
              />
              <path
                fill="url(#linear-gradient-128)"
                d="M394.49 305.88L395.93 313.57 400.47 310.97 399.03 303.26 394.49 305.88z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_3-4)"
                d="M394.78 306.12L396.21 313.81 400.47 310.97 399.03 303.26 394.78 306.12z"
              />
              <path
                fill="url(#linear-gradient-129)"
                d="M395.3 305.93L396.74 313.62 400.47 310.97 399.03 303.26 395.3 305.93z"
              />
              <path
                d="M404.94 319.23c-.33.91-.78 2.7-1.17 3.97-.4 1.27-.89 2.62-.65 3.53.23.92.84 2.47.84 4.56s-.23 6.51.07 7.17.59 1.28.42 1.68c-.16.4-1.6.75-2.75 1.5-1.22.8-2.7-.85-2.11-1.2s.68.07 1.13-.21 1.46-1.15 1.41-2.21c-.05-1.06-1.22-7.99-1.55-9.51-.33-1.53-.49-2.51-.61-4.28s-.19-4.11 0-5.78 5.92-1.79 4.98.78z"
                fill="url(#radial-gradient-15)"
              />
              <path
                d="M401.57 341.71l1.1-1.39s-.23-.77-.12-1.19c.12-.42.39-.69.39-2s-1.08-7.13-1.31-8.05c-.23-.92.31-1.81.23-2.54-.08-.73-.81-2.85-.62-4.31.12-.88.5-3.22.78-4.95-.2.02-.39.05-.57.09 1.69-.38 4.12.13 3.48 1.86-.33.91-.78 2.7-1.17 3.97-.4 1.27-.89 2.62-.65 3.53.23.92.84 2.47.84 4.56s-.23 6.51.07 7.17.59 1.28.42 1.68c-.16.4-1.6.75-2.75 1.5-.34.22-.69.26-1.02.18.29.06.59.04.89-.11z"
                fill="url(#radial-gradient-16)"
              />
              <path
                d="M406.36 311.55l-6.02.25s-.38 4.32-.52 5.94-.15 6.83-.15 6.83 1.7.88 3.16.6 4.8-1.05 4.8-1.05.12-1.6.2-3.07c.09-1.52.4-4.79-.09-6.22-.49-1.43-1.38-3.27-1.38-3.27z"
                fill="url(#New_Gradient_Swatch_copy_14-2)"
              />
              <path
                d="M406.36 311.55l-6.02.25s-.38 4.32-.52 5.94-.15 6.83-.15 6.83 1.7.88 3.16.6 4.8-1.05 4.8-1.05.12-1.6.2-3.07c.09-1.52.4-4.79-.09-6.22-.49-1.43-1.38-3.27-1.38-3.27z"
                fill="url(#New_Gradient_Swatch_copy_14-3)"
              />
              <path
                className="cls-266"
                d="M404.27 338.94s.67.62.52 1.32c-.15.7-.55.75-.55 1.26v1.32l-.31.12-.34-.13v-2.01s-.81.22-1.57.79c-.77.57-1.72.63-2.27.34-.55-.28-1.57-1.71-1.31-1.99.27-.28 2.24.3 2.24.3s-.74.08-.86.45c-.12.38.53.86 1.04.63s1.08-.94 2.08-1.34 1.26-.92 1.32-1.06z"
              />
              <path
                d="M397.65 310.12l-1.28-.54s-.47-.72-.8-.82-.53-.13-.55-.24c-.03-.15-.06-.27-.06-.27s-.47-.07-.52.4c-.05.47.12.48.12.48s-.12.03-.15.18.04.28.11.36l.07.07s-.07.09-.02.26.22.27.22.27-.02.32.15.4c.17.07.32.09.57.18.25.09 1.67.56 1.67.56l.47-1.28z"
                fill="url(#radial-gradient-17)"
              />
              <path
                d="M396.35 309.69s-.01-.68-.21-1.04-.43-.74-.51-.88c-.07-.14-.27-.31-.42-.19-.1.09-.09.15.04.51.12.36 0 .57.14.86.14.3.96.73.96.73z"
                fill="url(#radial-gradient-18)"
              />
              <path
                className="cls-54"
                d="M399.82 317.75c.13-1.47.45-5.17.51-5.84l1.27.22s.12 4.66.15 6.78c.03 1.67-.18 4.94-.27 6.25-.99-.16-1.81-.59-1.81-.59s0-5.2.15-6.83z"
              />
              <path
                d="M407.46 301.49c.47 1.04 1.17 4.69.88 5.77-.19.71-1.86 4.82-1.86 4.82l-1.39-1.95 2.36-8.64z"
                fill="url(#New_Gradient_Swatch_copy_14-4)"
              />
              <path
                d="M402.59 302.5c-.61.52-2.56 1.97-2.91 3.05s-.03 1.59.16 2.42c.21.92.59 1.53.42 3.27-.16 1.74-.56 6.49-.63 7.06-.07.56.54.79 1.1.88.56.09 3.64.21 5.36-.45 1.71-.66 2.13-.92 2.13-1.32s-.03-2.26-.85-3.94c-.83-1.71-1.14-3.36-1.07-4.28.07-.92 1.55-4.79 1.48-6.25s-.7-2.75-1.74-2.42c-1.03.33-3.45 1.97-3.45 1.97z"
                fill="url(#linear-gradient-130)"
              />
              <path
                d="M403.26 319.22c-.32-.28-1.45-1.36-1.51-2.95-.08-1.85.27-3.58.69-3.64.42-.06.77-.77.77-1.31 0-2.51.75-6.93.13-7.57-.28-.29-1-.43-1.76-.43.41-.35.79-.65 1-.83 0 0 2.42-1.64 3.45-1.97 1.03-.33 1.67.96 1.74 2.42.07 1.46-1.41 5.33-1.48 6.25-.07.92.24 2.57 1.07 4.28.82 1.68.85 3.54.85 3.94s-.41.66-2.13 1.32c-1.31.5-3.4.55-4.57.51.47.02 1.09.02 1.74-.02z"
                fill="url(#New_Gradient_Swatch_copy_14-5)"
              />
              <path
                d="M404.85 294.13c-1.32-.31-3.03.28-3.36 1.88s.01 3.36.21 3.67c.29.45 1.15.38 1.39.75.23.38.4 1.2.21 1.48-.19.28-.49.56-.49.56l2.16-.26 1.22-.78s-.56-1.03-.31-1.48c.26-.45 1.71-1.77 1.25-3.78-.38-1.64-1.88-1.95-2.28-2.04z"
                fill="url(#radial-gradient-19)"
              />
              <path
                d="M406.07 300.81s-.39.41-1.22.55c-.83.14-1.27.02-1.55.22s-.68.79-.68.79.54-.42 1.13-.47c.59-.05 1.7-.06 2.09-.33.39-.27.32-.45.32-.52s-.08-.25-.08-.25z"
                fill="url(#New_Gradient_Swatch_copy_3-5)"
              />
              <path
                className="cls-54"
                d="M405.95 300.61s.73.64.64 1.23c-.09.58-.68 1.13-1.73 1.05-1.05-.08-1.64-.2-2.15.02-.47.21-1.37.65-1.37.65s.92-1.5 1.71-1.63c.79-.13 1.8-.03 2.27-.27.47-.24.76-.31.82-.6.06-.29-.2-.44-.2-.44z"
              />
              <path
                d="M405.95 300.61s.67.37.58.96c-.09.58-.68 1.13-1.73 1.05-1.05-.08-1.68-.11-2.18.12-.47.21-1.27.82-1.27.82s.92-1.5 1.71-1.63c.79-.13 1.8-.03 2.27-.27.47-.24.76-.31.82-.6.06-.29-.2-.44-.2-.44z"
                fill="url(#New_Gradient_Swatch_copy_14-6)"
              />
              <path
                d="M402.54 302.62c.51-.22 1.14-.2 2.18-.12 1.05.08 1.64-.47 1.73-1.05a.7.7 0 00-.1-.48c.12.16.21.36.17.6-.09.58-.68 1.13-1.73 1.05-1.05-.08-1.68-.11-2.18.12-.47.21-1.27.82-1.27.82s.09-.14.23-.34c.27-.2.68-.47.96-.59z"
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#Radial_Gradient_2-6)"
              />
              <path
                d="M402.65 296.37s-.51-.44-1.16-.35c-.88.12-.07-1.7 1.88-2.22 1.48-.4 3.6.16 3.95 1.86.49 2.36-.82 3.37-.94 4.24-.12.86-2.77.72-2.44-.66.17-.7.25-1.32-.31-1.28-.57.05-.58-1.16-.99-1.6z"
                fill="url(#linear-gradient-131)"
              />
              <path
                d="M404.04 305.47c0 1.22-.47 5.15-.56 6.19-.09 1.05-.79 1.89-1.53 1.75-.74-.14-3.28-1.1-3.92-1.32-.65-.21-1.76-.49-1.76-.49s-.09-.75.13-1.19.54-.79.54-.79.84.25 1.78.5c.83.22 2.55.6 2.55.6s0-2.55-.2-3.74c-.2-1.19-.52-2.54.16-3.21.81-.79 2.8-.47 2.81 1.68z"
                fill="url(#New_Gradient_Swatch_copy_14-7)"
              />
              <path
                d="M397.79 311.36c.65.21 3.18 1.17 3.92 1.32.74.14 1.43-.7 1.53-1.75.09-1.05.57-4.97.56-6.19 0-.15-.01-.29-.03-.42.16.3.26.68.26 1.15 0 1.22-.47 5.15-.56 6.19-.09 1.05-.79 1.89-1.53 1.75-.74-.14-3.28-1.1-3.92-1.32-.65-.21-1.76-.49-1.76-.49s-.04-.33 0-.67c.36.09 1.07.28 1.54.43z"
                style={{
                  mixBlendMode: "multiply"
                }}
                fill="#d0d4d4"
                opacity={0.5}
              />
              <path
                className="cls-54"
                d="M402.77 296.51c2.15 0 3.28-.35 4.33-1.45.1.18.17.38.22.59.49 2.36-.82 3.37-.94 4.24-.12.86-2.77.72-2.44-.66.17-.7.25-1.32-.31-1.28-.52.04-.57-.94-.88-1.45h.02z"
              />
              <path
                d="M407.76 296.41c-1.34-.82-1.97.38-2.35 1.48-.38 1.09-.7 2.07.71 2.31 1.98.34 3.07-2.9 1.64-3.78z"
                fill="url(#linear-gradient-132)"
              />
              <path
                className="cls-54"
                d="M405.41 297.89c.29-.82.72-1.71 1.48-1.75-.72.68-.69 1.62.34 1.68.5.03.88-.05 1.17-.2.07 1.24-.88 2.81-2.29 2.57-1.41-.24-1.09-1.21-.71-2.31z"
              />
            </g>
            <path
              className="cls-65"
              d="M514.2 479.97c-5.32 3.11-11.93 3.11-17.16.07l-26.43-15.68-25.48 14.65 38.96 23.1c13.28 7.72 29.76 7.7 43.04-.05l100.85-59.04 36.96-21.63-62.36-27.43-.09 34.32-88.28 51.68z"
            />
            <path
              fill="url(#New_Gradient_Swatch_copy_5-33)"
              d="M527.12 467.16L664.93 386.48 664.93 356.82 514.2 445.05 527.12 467.16z"
            />
            <path
              fill="url(#linear-gradient-133)"
              d="M527.12 463.32L664.93 382.65 664.93 352.98 514.2 441.22 527.12 463.32z"
            />
            <path
              d="M627.49 378.44v23.46l-23.69-13.3v-21.43c0-6.64 7.2-10.78 12.93-7.44a21.664 21.664 0 0110.76 18.71z"
              fill="url(#New_Gradient_Swatch_copy_21-3)"
            />
            <path
              d="M603.8 388.59l23.69 13.3v-23.46c0-1.15-.1-2.29-.28-3.4l-23.41 13.5v.05z"
              fill="url(#linear-gradient-134)"
              opacity={0.8}
            />
            <path
              className="cls-65"
              d="M339.12 529.32L415.75 484.2 415.79 466.12 389.75 469.86 326.2 507.22 339.12 529.32z"
            />
            <path
              fill="url(#New_Gradient_Swatch_copy_5-34)"
              d="M339.12 516.45L434.34 460.32 408.34 445.99 326.2 494.35 339.12 516.45z"
            />
            <path
              fill="url(#linear-gradient-135)"
              d="M339.12 513.45L434.34 457.32 408.34 442.99 326.2 491.35 339.12 513.45z"
            />
            <g>
              <path
                fill="url(#New_Gradient_Swatch_copy_5-35)"
                d="M649.33 475.67L698 447.69 698 322.82 649.33 350.8 649.33 475.67z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-36)"
                d="M627.08 462.91L649.36 475.67 649.36 350.8 627.08 338.07 627.08 462.91z"
              />
              <path
                fill="url(#linear-gradient-136)"
                d="M627.08 338.07L649.36 350.8 698 322.82 675.67 310.05 627.08 338.07z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-37)"
                d="M672.7 494.05L726.96 462.85 726.96 313.63 672.7 344.83 672.7 494.05z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-38)"
                d="M647.89 479.81L672.73 494.05 672.73 344.83 647.89 330.63 647.89 479.81z"
              />
              <path
                fill="url(#linear-gradient-137)"
                d="M647.89 330.63L672.73 344.83 726.96 313.63 702.07 299.39 647.89 330.63z"
              />
              <g>
                <path
                  fill="url(#linear-gradient-138)"
                  d="M687.34 351.26L684.85 352.7 684.85 349.85 687.34 348.41 687.34 351.26z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_21-4)"
                  d="M692.01 348.57L689.52 350 689.52 347.15 692.01 345.72 692.01 348.57z"
                />
                <path
                  fill="url(#linear-gradient-139)"
                  d="M696.67 345.87L694.19 347.31 694.19 344.46 696.67 343.02 696.67 345.87z"
                />
                <path
                  fill="url(#linear-gradient-140)"
                  d="M701.34 343.18L698.86 344.61 698.86 341.76 701.34 340.33 701.34 343.18z"
                />
                <path
                  fill="url(#linear-gradient-141)"
                  d="M706.01 340.48L703.52 341.92 703.52 339.07 706.01 337.63 706.01 340.48z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_21-5)"
                  d="M710.68 337.79L708.19 339.22 708.19 336.37 710.68 334.94 710.68 337.79z"
                />
                <path
                  fill="url(#linear-gradient-142)"
                  d="M715.35 335.09L712.86 336.53 712.86 333.68 715.35 332.24 715.35 335.09z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_21-6)"
                  d="M687.34 357.3L684.85 358.73 684.85 355.88 687.34 354.45 687.34 357.3z"
                />
                <path
                  fill="url(#linear-gradient-143)"
                  d="M692.01 354.6L689.52 356.04 689.52 353.19 692.01 351.75 692.01 354.6z"
                />
                <path
                  fill="url(#linear-gradient-144)"
                  d="M696.67 351.91L694.19 353.34 694.19 350.49 696.67 349.06 696.67 351.91z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_21-7)"
                  d="M701.34 349.21L698.86 350.65 698.86 347.8 701.34 346.36 701.34 349.21z"
                />
                <path
                  className="cls-527"
                  d="M706.01 346.52L703.52 347.95 703.52 345.1 706.01 343.67 706.01 346.52z"
                />
                <path
                  fill="url(#linear-gradient-145)"
                  d="M710.68 343.82L708.19 345.26 708.19 342.41 710.68 340.97 710.68 343.82z"
                />
                <path
                  fill="url(#linear-gradient-146)"
                  d="M715.35 341.13L712.86 342.56 712.86 339.71 715.35 338.28 715.35 341.13z"
                />
                <path
                  fill="url(#linear-gradient-147)"
                  d="M687.34 363.34L684.85 364.77 684.85 361.92 687.34 360.48 687.34 363.34z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_21-8)"
                  d="M692.01 360.64L689.52 362.07 689.52 359.22 692.01 357.79 692.01 360.64z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_21-9)"
                  d="M696.67 357.94L694.19 359.38 694.19 356.53 696.67 355.09 696.67 357.94z"
                />
                <path
                  fill="url(#linear-gradient-148)"
                  d="M701.34 355.25L698.86 356.68 698.86 353.83 701.34 352.4 701.34 355.25z"
                />
                <path
                  fill="url(#linear-gradient-149)"
                  d="M706.01 352.55L703.52 353.99 703.52 351.14 706.01 349.7 706.01 352.55z"
                />
                <path
                  fill="url(#linear-gradient-150)"
                  d="M710.68 349.86L708.19 351.29 708.19 348.44 710.68 347.01 710.68 349.86z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_21-10)"
                  d="M715.35 347.16L712.86 348.6 712.86 345.75 715.35 344.31 715.35 347.16z"
                />
                <g>
                  <path
                    fill="url(#linear-gradient-151)"
                    d="M687.34 369.37L684.85 370.81 684.85 367.95 687.34 366.52 687.34 369.37z"
                  />
                  <path
                    className="cls-527"
                    d="M692.01 366.68L689.52 368.11 689.52 365.26 692.01 363.82 692.01 366.68z"
                  />
                  <path
                    fill="url(#linear-gradient-152)"
                    d="M696.67 363.98L694.19 365.42 694.19 362.56 696.67 361.13 696.67 363.98z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-11)"
                    d="M701.34 361.29L698.86 362.72 698.86 359.87 701.34 358.43 701.34 361.29z"
                  />
                  <path
                    fill="url(#linear-gradient-153)"
                    d="M706.01 358.59L703.52 360.02 703.52 357.17 706.01 355.74 706.01 358.59z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-12)"
                    d="M710.68 355.9L708.19 357.33 708.19 354.48 710.68 353.04 710.68 355.9z"
                  />
                  <path
                    fill="url(#linear-gradient-154)"
                    d="M715.35 353.2L712.86 354.63 712.86 351.78 715.35 350.35 715.35 353.2z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-155)"
                    d="M687.34 375.41L684.85 376.84 684.85 373.99 687.34 372.55 687.34 375.41z"
                  />
                  <path
                    fill="url(#linear-gradient-156)"
                    d="M692.01 372.71L689.52 374.15 689.52 371.29 692.01 369.86 692.01 372.71z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-13)"
                    d="M696.67 370.02L694.19 371.45 694.19 368.6 696.67 367.16 696.67 370.02z"
                  />
                  <path
                    fill="url(#linear-gradient-157)"
                    d="M701.34 367.32L698.86 368.76 698.86 365.9 701.34 364.47 701.34 367.32z"
                  />
                  <path
                    fill="url(#linear-gradient-158)"
                    d="M706.01 364.63L703.52 366.06 703.52 363.21 706.01 361.77 706.01 364.63z"
                  />
                  <path
                    className="cls-527"
                    d="M710.68 361.93L708.19 363.37 708.19 360.51 710.68 359.08 710.68 361.93z"
                  />
                  <path
                    fill="url(#linear-gradient-159)"
                    d="M715.35 359.24L712.86 360.67 712.86 357.82 715.35 356.38 715.35 359.24z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-14)"
                    d="M687.34 381.44L684.85 382.88 684.85 380.02 687.34 378.59 687.34 381.44z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-15)"
                    d="M692.01 378.75L689.52 380.18 689.52 377.33 692.01 375.9 692.01 378.75z"
                  />
                  <path
                    fill="url(#linear-gradient-160)"
                    d="M696.67 376.05L694.19 377.49 694.19 374.63 696.67 373.2 696.67 376.05z"
                  />
                  <path
                    fill="url(#linear-gradient-161)"
                    d="M701.34 373.36L698.86 374.79 698.86 371.94 701.34 370.5 701.34 373.36z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-16)"
                    d="M706.01 370.66L703.52 372.1 703.52 369.24 706.01 367.81 706.01 370.66z"
                  />
                  <path
                    fill="url(#linear-gradient-162)"
                    d="M710.68 367.97L708.19 369.4 708.19 366.55 710.68 365.11 710.68 367.97z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-17)"
                    d="M715.35 365.27L712.86 366.71 712.86 363.85 715.35 362.42 715.35 365.27z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-18)"
                    d="M687.34 387.48L684.85 388.91 684.85 386.06 687.34 384.63 687.34 387.48z"
                  />
                  <path
                    fill="url(#linear-gradient-163)"
                    d="M692.01 384.78L689.52 386.22 689.52 383.37 692.01 381.93 692.01 384.78z"
                  />
                  <path
                    fill="url(#linear-gradient-164)"
                    d="M696.67 382.09L694.19 383.52 694.19 380.67 696.67 379.24 696.67 382.09z"
                  />
                  <path
                    fill="url(#linear-gradient-165)"
                    d="M701.34 379.39L698.86 380.83 698.86 377.98 701.34 376.54 701.34 379.39z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-19)"
                    d="M706.01 376.7L703.52 378.13 703.52 375.28 706.01 373.85 706.01 376.7z"
                  />
                  <path
                    fill="url(#linear-gradient-166)"
                    d="M710.68 374L708.19 375.44 708.19 372.58 710.68 371.15 710.68 374z"
                  />
                  <path
                    fill="url(#linear-gradient-167)"
                    d="M715.35 371.31L712.86 372.74 712.86 369.89 715.35 368.46 715.35 371.31z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-168)"
                    d="M687.34 393.51L684.85 394.95 684.85 392.1 687.34 390.66 687.34 393.51z"
                  />
                  <path
                    fill="url(#linear-gradient-169)"
                    d="M692.01 390.82L689.52 392.25 689.52 389.4 692.01 387.97 692.01 390.82z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-20)"
                    d="M696.67 388.12L694.19 389.56 694.19 386.71 696.67 385.27 696.67 388.12z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-21)"
                    d="M701.34 385.43L698.86 386.86 698.86 384.01 701.34 382.58 701.34 385.43z"
                  />
                  <path
                    fill="url(#linear-gradient-170)"
                    d="M706.01 382.73L703.52 384.17 703.52 381.32 706.01 379.88 706.01 382.73z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-22)"
                    d="M710.68 380.04L708.19 381.47 708.19 378.62 710.68 377.19 710.68 380.04z"
                  />
                  <path
                    fill="url(#linear-gradient-171)"
                    d="M715.35 377.34L712.86 378.78 712.86 375.93 715.35 374.49 715.35 377.34z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-23)"
                    d="M687.34 399.55L684.85 400.98 684.85 398.13 687.34 396.7 687.34 399.55z"
                  />
                  <path
                    fill="url(#linear-gradient-172)"
                    d="M692.01 396.85L689.52 398.29 689.52 395.44 692.01 394 692.01 396.85z"
                  />
                  <path
                    className="cls-527"
                    d="M696.67 394.16L694.19 395.59 694.19 392.74 696.67 391.31 696.67 394.16z"
                  />
                  <path
                    fill="url(#linear-gradient-173)"
                    d="M701.34 391.46L698.86 392.9 698.86 390.05 701.34 388.61 701.34 391.46z"
                  />
                  <path
                    fill="url(#linear-gradient-174)"
                    d="M706.01 388.77L703.52 390.2 703.52 387.35 706.01 385.92 706.01 388.77z"
                  />
                  <path
                    fill="url(#linear-gradient-175)"
                    d="M710.68 386.07L708.19 387.51 708.19 384.66 710.68 383.22 710.68 386.07z"
                  />
                  <path
                    fill="url(#linear-gradient-176)"
                    d="M715.35 383.38L712.86 384.81 712.86 381.96 715.35 380.53 715.35 383.38z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-24)"
                    d="M687.34 405.58L684.85 407.02 684.85 404.17 687.34 402.73 687.34 405.58z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-25)"
                    d="M692.01 402.89L689.52 404.32 689.52 401.47 692.01 400.04 692.01 402.89z"
                  />
                  <path
                    fill="url(#linear-gradient-177)"
                    d="M696.67 400.19L694.19 401.63 694.19 398.78 696.67 397.34 696.67 400.19z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-26)"
                    d="M701.34 397.5L698.86 398.93 698.86 396.08 701.34 394.65 701.34 397.5z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-27)"
                    d="M706.01 394.8L703.52 396.24 703.52 393.39 706.01 391.95 706.01 394.8z"
                  />
                  <path
                    fill="url(#linear-gradient-178)"
                    d="M710.68 392.11L708.19 393.54 708.19 390.69 710.68 389.26 710.68 392.11z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-28)"
                    d="M715.35 389.41L712.86 390.85 712.86 388 715.35 386.56 715.35 389.41z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-179)"
                    d="M687.34 411.62L684.85 413.05 684.85 410.2 687.34 408.77 687.34 411.62z"
                  />
                  <path
                    fill="url(#linear-gradient-180)"
                    d="M692.01 408.92L689.52 410.36 689.52 407.51 692.01 406.07 692.01 408.92z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-29)"
                    d="M696.67 406.23L694.19 407.66 694.19 404.81 696.67 403.38 696.67 406.23z"
                  />
                  <path
                    fill="url(#linear-gradient-181)"
                    d="M701.34 403.53L698.86 404.97 698.86 402.12 701.34 400.68 701.34 403.53z"
                  />
                  <path
                    fill="url(#linear-gradient-182)"
                    d="M706.01 400.84L703.52 402.27 703.52 399.42 706.01 397.99 706.01 400.84z"
                  />
                  <path
                    fill="url(#linear-gradient-183)"
                    d="M710.68 398.14L708.19 399.58 708.19 396.73 710.68 395.29 710.68 398.14z"
                  />
                  <path
                    fill="url(#linear-gradient-184)"
                    d="M715.35 395.45L712.86 396.88 712.86 394.03 715.35 392.6 715.35 395.45z"
                  />
                </g>
                <g>
                  <path
                    className="cls-527"
                    d="M687.34 417.65L684.85 419.09 684.85 416.24 687.34 414.8 687.34 417.65z"
                  />
                  <path
                    fill="url(#linear-gradient-185)"
                    d="M692.01 414.96L689.52 416.39 689.52 413.54 692.01 412.11 692.01 414.96z"
                  />
                  <path
                    fill="url(#linear-gradient-186)"
                    d="M696.67 412.26L694.19 413.7 694.19 410.85 696.67 409.41 696.67 412.26z"
                  />
                  <path
                    fill="url(#linear-gradient-187)"
                    d="M701.34 409.57L698.86 411 698.86 408.15 701.34 406.72 701.34 409.57z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-30)"
                    d="M706.01 406.87L703.52 408.31 703.52 405.46 706.01 404.02 706.01 406.87z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-31)"
                    d="M710.68 404.18L708.19 405.61 708.19 402.76 710.68 401.33 710.68 404.18z"
                  />
                  <path
                    fill="url(#linear-gradient-188)"
                    d="M715.35 401.48L712.86 402.92 712.86 400.07 715.35 398.63 715.35 401.48z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-32)"
                    d="M687.34 423.69L684.85 425.12 684.85 422.27 687.34 420.84 687.34 423.69z"
                  />
                  <path
                    fill="url(#linear-gradient-189)"
                    d="M692.01 421L689.52 422.43 689.52 419.58 692.01 418.14 692.01 421z"
                  />
                  <path
                    fill="url(#linear-gradient-190)"
                    d="M696.67 418.3L694.19 419.73 694.19 416.88 696.67 415.45 696.67 418.3z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-33)"
                    d="M701.34 415.6L698.86 417.04 698.86 414.19 701.34 412.75 701.34 415.6z"
                  />
                  <path
                    fill="url(#linear-gradient-191)"
                    d="M706.01 412.91L703.52 414.34 703.52 411.49 706.01 410.06 706.01 412.91z"
                  />
                  <path
                    className="cls-527"
                    d="M710.68 410.21L708.19 411.65 708.19 408.8 710.68 407.36 710.68 410.21z"
                  />
                  <path
                    fill="url(#linear-gradient-192)"
                    d="M715.35 407.52L712.86 408.95 712.86 406.1 715.35 404.67 715.35 407.52z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-193)"
                    d="M687.34 429.73L684.85 431.16 684.85 428.31 687.34 426.87 687.34 429.73z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-34)"
                    d="M692.01 427.03L689.52 428.47 689.52 425.61 692.01 424.18 692.01 427.03z"
                  />
                  <path
                    fill="url(#linear-gradient-194)"
                    d="M696.67 424.34L694.19 425.77 694.19 422.92 696.67 421.48 696.67 424.34z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-35)"
                    d="M701.34 421.64L698.86 423.08 698.86 420.22 701.34 418.79 701.34 421.64z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-36)"
                    d="M706.01 418.95L703.52 420.38 703.52 417.53 706.01 416.09 706.01 418.95z"
                  />
                  <path
                    fill="url(#linear-gradient-195)"
                    d="M710.68 416.25L708.19 417.69 708.19 414.83 710.68 413.4 710.68 416.25z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-37)"
                    d="M715.35 413.56L712.86 414.99 712.86 412.14 715.35 410.7 715.35 413.56z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-196)"
                    d="M687.34 435.76L684.85 437.2 684.85 434.34 687.34 432.91 687.34 435.76z"
                  />
                  <path
                    fill="url(#linear-gradient-197)"
                    d="M692.01 433.07L689.52 434.5 689.52 431.65 692.01 430.21 692.01 433.07z"
                  />
                  <path
                    className="cls-527"
                    d="M696.67 430.37L694.19 431.81 694.19 428.95 696.67 427.52 696.67 430.37z"
                  />
                  <path
                    fill="url(#linear-gradient-198)"
                    d="M701.34 427.68L698.86 429.11 698.86 426.26 701.34 424.82 701.34 427.68z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-38)"
                    d="M706.01 424.98L703.52 426.42 703.52 423.56 706.01 422.13 706.01 424.98z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-39)"
                    d="M710.68 422.29L708.19 423.72 708.19 420.87 710.68 419.43 710.68 422.29z"
                  />
                  <path
                    fill="url(#linear-gradient-199)"
                    d="M715.35 419.59L712.86 421.03 712.86 418.17 715.35 416.74 715.35 419.59z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-40)"
                    d="M687.34 441.8L684.85 443.23 684.85 440.38 687.34 438.95 687.34 441.8z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-41)"
                    d="M692.01 439.1L689.52 440.54 689.52 437.68 692.01 436.25 692.01 439.1z"
                  />
                  <path
                    fill="url(#linear-gradient-200)"
                    d="M696.67 436.41L694.19 437.84 694.19 434.99 696.67 433.56 696.67 436.41z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-42)"
                    d="M701.34 433.71L698.86 435.15 698.86 432.29 701.34 430.86 701.34 433.71z"
                  />
                  <path
                    fill="url(#linear-gradient-201)"
                    d="M706.01 431.02L703.52 432.45 703.52 429.6 706.01 428.16 706.01 431.02z"
                  />
                  <path
                    fill="url(#linear-gradient-202)"
                    d="M710.68 428.32L708.19 429.76 708.19 426.9 710.68 425.47 710.68 428.32z"
                  />
                  <path
                    className="cls-527"
                    d="M715.35 425.63L712.86 427.06 712.86 424.21 715.35 422.77 715.35 425.63z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-203)"
                    d="M687.34 447.83L684.85 449.27 684.85 446.42 687.34 444.98 687.34 447.83z"
                  />
                  <path
                    fill="url(#linear-gradient-204)"
                    d="M692.01 445.14L689.52 446.57 689.52 443.72 692.01 442.29 692.01 445.14z"
                  />
                  <path
                    fill="url(#linear-gradient-205)"
                    d="M696.67 442.44L694.19 443.88 694.19 441.03 696.67 439.59 696.67 442.44z"
                  />
                  <path
                    fill="url(#linear-gradient-206)"
                    d="M701.34 439.75L698.86 441.18 698.86 438.33 701.34 436.9 701.34 439.75z"
                  />
                  <path
                    fill="url(#linear-gradient-207)"
                    d="M706.01 437.05L703.52 438.49 703.52 435.64 706.01 434.2 706.01 437.05z"
                  />
                  <path
                    fill="url(#linear-gradient-208)"
                    d="M710.68 434.36L708.19 435.79 708.19 432.94 710.68 431.51 710.68 434.36z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-43)"
                    d="M715.35 431.66L712.86 433.1 712.86 430.24 715.35 428.81 715.35 431.66z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-209)"
                    d="M687.34 453.87L684.85 455.3 684.85 452.45 687.34 451.02 687.34 453.87z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-44)"
                    d="M692.01 451.17L689.52 452.61 689.52 449.76 692.01 448.32 692.01 451.17z"
                  />
                  <path
                    fill="url(#linear-gradient-210)"
                    d="M696.67 448.48L694.19 449.91 694.19 447.06 696.67 445.63 696.67 448.48z"
                  />
                  <path
                    fill="url(#linear-gradient-211)"
                    d="M701.34 445.78L698.86 447.22 698.86 444.37 701.34 442.93 701.34 445.78z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-45)"
                    d="M706.01 443.09L703.52 444.52 703.52 441.67 706.01 440.24 706.01 443.09z"
                  />
                  <path
                    fill="url(#linear-gradient-212)"
                    d="M710.68 440.39L708.19 441.83 708.19 438.98 710.68 437.54 710.68 440.39z"
                  />
                  <path
                    fill="url(#linear-gradient-213)"
                    d="M715.35 437.7L712.86 439.13 712.86 436.28 715.35 434.85 715.35 437.7z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-214)"
                    d="M687.34 459.9L684.85 461.34 684.85 458.49 687.34 457.05 687.34 459.9z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-46)"
                    d="M692.01 457.21L689.52 458.64 689.52 455.79 692.01 454.36 692.01 457.21z"
                  />
                  <path
                    fill="url(#linear-gradient-215)"
                    d="M696.67 454.51L694.19 455.95 694.19 453.1 696.67 451.66 696.67 454.51z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-47)"
                    d="M701.34 451.82L698.86 453.25 698.86 450.4 701.34 448.97 701.34 451.82z"
                  />
                  <path
                    fill="url(#linear-gradient-216)"
                    d="M706.01 449.12L703.52 450.56 703.52 447.71 706.01 446.27 706.01 449.12z"
                  />
                  <path
                    fill="url(#linear-gradient-217)"
                    d="M710.68 446.43L708.19 447.86 708.19 445.01 710.68 443.58 710.68 446.43z"
                  />
                  <path
                    fill="url(#linear-gradient-218)"
                    d="M715.35 443.73L712.86 445.17 712.86 442.32 715.35 440.88 715.35 443.73z"
                  />
                </g>
              </g>
              <g>
                <path
                  fill="url(#linear-gradient-219)"
                  d="M642.06 357.05L644.54 358.49 644.54 355.64 642.06 354.2 642.06 357.05z"
                />
                <path
                  className="cls-340"
                  d="M637.39 354.36L639.87 355.79 639.87 352.94 637.39 351.51 637.39 354.36z"
                />
                <path
                  fill="url(#linear-gradient-220)"
                  d="M632.72 351.66L635.2 353.1 635.2 350.25 632.72 348.81 632.72 351.66z"
                />
                <path
                  className="cls-107"
                  d="M642.06 363.09L644.54 364.52 644.54 361.67 642.06 360.24 642.06 363.09z"
                />
                <path
                  fill="url(#linear-gradient-221)"
                  d="M637.39 360.39L639.87 361.83 639.87 358.98 637.39 357.54 637.39 360.39z"
                />
                <path
                  fill="url(#linear-gradient-222)"
                  d="M632.72 357.7L635.2 359.13 635.2 356.28 632.72 354.85 632.72 357.7z"
                />
                <path
                  fill="url(#linear-gradient-223)"
                  d="M642.06 369.12L644.54 370.56 644.54 367.71 642.06 366.27 642.06 369.12z"
                />
                <path
                  fill="url(#linear-gradient-224)"
                  d="M637.39 366.43L639.87 367.86 639.87 365.01 637.39 363.58 637.39 366.43z"
                />
                <path
                  className="cls-340"
                  d="M632.72 363.73L635.2 365.17 635.2 362.32 632.72 360.88 632.72 363.73z"
                />
                <path
                  fill="url(#linear-gradient-225)"
                  d="M642.06 375.16L644.54 376.59 644.54 373.74 642.06 372.31 642.06 375.16z"
                />
                <path
                  className="cls-340"
                  d="M637.39 372.46L639.87 373.9 639.87 371.05 637.39 369.61 637.39 372.46z"
                />
                <path
                  fill="url(#linear-gradient-226)"
                  d="M632.72 369.77L635.2 371.2 635.2 368.35 632.72 366.92 632.72 369.77z"
                />
                <path
                  fill="url(#linear-gradient-227)"
                  d="M642.06 381.2L644.54 382.63 644.54 379.78 642.06 378.34 642.06 381.2z"
                />
                <path
                  className="cls-107"
                  d="M637.39 378.5L639.87 379.93 639.87 377.08 637.39 375.65 637.39 378.5z"
                />
                <path
                  fill="url(#linear-gradient-228)"
                  d="M632.72 375.8L635.2 377.24 635.2 374.39 632.72 372.95 632.72 375.8z"
                />
                <path
                  className="cls-340"
                  d="M642.06 387.23L644.54 388.67 644.54 385.81 642.06 384.38 642.06 387.23z"
                />
                <path
                  fill="url(#linear-gradient-229)"
                  d="M637.39 384.54L639.87 385.97 639.87 383.12 637.39 381.68 637.39 384.54z"
                />
                <path
                  className="cls-340"
                  d="M632.72 381.84L635.2 383.28 635.2 380.42 632.72 378.99 632.72 381.84z"
                />
                <path
                  className="cls-340"
                  d="M642.06 393.27L644.54 394.7 644.54 391.85 642.06 390.41 642.06 393.27z"
                />
                <path
                  fill="url(#linear-gradient-230)"
                  d="M637.39 390.57L639.87 392.01 639.87 389.15 637.39 387.72 637.39 390.57z"
                />
                <path
                  fill="url(#linear-gradient-231)"
                  d="M632.72 387.88L635.2 389.31 635.2 386.46 632.72 385.02 632.72 387.88z"
                />
                <g>
                  <path
                    fill="url(#linear-gradient-232)"
                    d="M642.06 399.3L644.54 400.74 644.54 397.88 642.06 396.45 642.06 399.3z"
                  />
                  <path
                    className="cls-340"
                    d="M637.39 396.61L639.87 398.04 639.87 395.19 637.39 393.76 637.39 396.61z"
                  />
                  <path
                    fill="url(#linear-gradient-233)"
                    d="M632.72 393.91L635.2 395.35 635.2 392.49 632.72 391.06 632.72 393.91z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-234)"
                    d="M642.06 405.34L644.54 406.77 644.54 403.92 642.06 402.49 642.06 405.34z"
                  />
                  <path
                    fill="url(#linear-gradient-235)"
                    d="M637.39 402.64L639.87 404.08 639.87 401.23 637.39 399.79 637.39 402.64z"
                  />
                  <path
                    fill="url(#linear-gradient-236)"
                    d="M632.72 399.95L635.2 401.38 635.2 398.53 632.72 397.1 632.72 399.95z"
                  />
                </g>
                <g>
                  <path
                    className="cls-340"
                    d="M642.06 411.37L644.54 412.81 644.54 409.96 642.06 408.52 642.06 411.37z"
                  />
                  <path
                    fill="url(#linear-gradient-237)"
                    d="M637.39 408.68L639.87 410.11 639.87 407.26 637.39 405.83 637.39 408.68z"
                  />
                  <path
                    className="cls-340"
                    d="M632.72 405.98L635.2 407.42 635.2 404.57 632.72 403.13 632.72 405.98z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-238)"
                    d="M642.06 417.41L644.54 418.84 644.54 415.99 642.06 414.56 642.06 417.41z"
                  />
                  <path
                    fill="url(#linear-gradient-239)"
                    d="M637.39 414.71L639.87 416.15 639.87 413.3 637.39 411.86 637.39 414.71z"
                  />
                  <path
                    fill="url(#linear-gradient-240)"
                    d="M632.72 412.02L635.2 413.45 635.2 410.6 632.72 409.17 632.72 412.02z"
                  />
                </g>
                <g>
                  <path
                    className="cls-340"
                    d="M642.06 423.44L644.54 424.88 644.54 422.03 642.06 420.59 642.06 423.44z"
                  />
                  <path
                    className="cls-340"
                    d="M637.39 420.75L639.87 422.18 639.87 419.33 637.39 417.9 637.39 420.75z"
                  />
                  <path
                    fill="url(#linear-gradient-241)"
                    d="M632.72 418.05L635.2 419.49 635.2 416.64 632.72 415.2 632.72 418.05z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-242)"
                    d="M642.06 429.48L644.54 430.91 644.54 428.06 642.06 426.63 642.06 429.48z"
                  />
                  <path
                    className="cls-107"
                    d="M637.39 426.78L639.87 428.22 639.87 425.37 637.39 423.93 637.39 426.78z"
                  />
                  <path
                    fill="url(#linear-gradient-243)"
                    d="M632.72 424.09L635.2 425.52 635.2 422.67 632.72 421.24 632.72 424.09z"
                  />
                </g>
                <g>
                  <path
                    className="cls-340"
                    d="M642.06 435.51L644.54 436.95 644.54 434.1 642.06 432.66 642.06 435.51z"
                  />
                  <path
                    fill="url(#linear-gradient-244)"
                    d="M637.39 432.82L639.87 434.25 639.87 431.4 637.39 429.97 637.39 432.82z"
                  />
                  <path
                    className="cls-340"
                    d="M632.72 430.12L635.2 431.56 635.2 428.71 632.72 427.27 632.72 430.12z"
                  />
                </g>
                <g>
                  <path
                    className="cls-340"
                    d="M642.06 441.55L644.54 442.98 644.54 440.13 642.06 438.7 642.06 441.55z"
                  />
                  <path
                    className="cls-340"
                    d="M637.39 438.86L639.87 440.29 639.87 437.44 637.39 436 637.39 438.86z"
                  />
                  <path
                    fill="url(#linear-gradient-245)"
                    d="M632.72 436.16L635.2 437.59 635.2 434.74 632.72 433.31 632.72 436.16z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-246)"
                    d="M642.06 447.59L644.54 449.02 644.54 446.17 642.06 444.73 642.06 447.59z"
                  />
                  <path
                    fill="url(#linear-gradient-247)"
                    d="M637.39 444.89L639.87 446.33 639.87 443.47 637.39 442.04 637.39 444.89z"
                  />
                  <path
                    className="cls-107"
                    d="M632.72 442.2L635.2 443.63 635.2 440.78 632.72 439.34 632.72 442.2z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-248)"
                    d="M642.06 453.62L644.54 455.06 644.54 452.2 642.06 450.77 642.06 453.62z"
                  />
                  <path
                    fill="url(#linear-gradient-249)"
                    d="M637.39 450.93L639.87 452.36 639.87 449.51 637.39 448.07 637.39 450.93z"
                  />
                  <path
                    className="cls-340"
                    d="M632.72 448.23L635.2 449.67 635.2 446.81 632.72 445.38 632.72 448.23z"
                  />
                </g>
                <g>
                  <path
                    className="cls-340"
                    d="M642.06 459.66L644.54 461.09 644.54 458.24 642.06 456.81 642.06 459.66z"
                  />
                  <path
                    fill="url(#linear-gradient-250)"
                    d="M637.39 456.96L639.87 458.4 639.87 455.54 637.39 454.11 637.39 456.96z"
                  />
                  <path
                    fill="url(#linear-gradient-251)"
                    d="M632.72 454.27L635.2 455.7 635.2 452.85 632.72 451.42 632.72 454.27z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-252)"
                    d="M642.06 465.69L644.54 467.13 644.54 464.28 642.06 462.84 642.06 465.69z"
                  />
                  <path
                    fill="url(#linear-gradient-253)"
                    d="M637.39 463L639.87 464.43 639.87 461.58 637.39 460.15 637.39 463z"
                  />
                  <path
                    fill="url(#linear-gradient-254)"
                    d="M632.72 460.3L635.2 461.74 635.2 458.89 632.72 457.45 632.72 460.3z"
                  />
                </g>
              </g>
              <g>
                <path
                  fill="url(#linear-gradient-255)"
                  d="M662.89 487.83L665.37 489.26 665.37 349.63 662.89 348.2 662.89 487.83z"
                />
                <path
                  fill="url(#linear-gradient-256)"
                  d="M658.22 485.13L660.7 486.57 660.7 346.94 658.22 345.5 658.22 485.13z"
                />
                <path
                  fill="url(#linear-gradient-257)"
                  d="M653.55 482.44L656.04 483.87 656.04 344.24 653.55 342.81 653.55 482.44z"
                />
              </g>
            </g>
            <g>
              <path
                fill="url(#New_Gradient_Swatch_copy_5-39)"
                d="M161.89 480.64L169.83 476.27 169.83 373.59 161.89 377.96 161.89 480.64z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-40)"
                d="M123.41 458.24L161.9 480.64 161.9 377.96 123.41 355.57 123.41 458.24z"
              />
              <path
                fill="url(#linear-gradient-258)"
                d="M123.41 355.57L161.9 377.96 169.83 373.59 131.31 351.19 123.41 355.57z"
              />
            </g>
            <path
              className="cls-65"
              d="M719.5 464.28l-65.39 39.36c-5.32 3.11-11.93 3.11-17.16.07l-56.37-33.43-13.01 22.05 56.42 33.46c13.28 7.72 29.76 7.7 43.04-.05l78.04-46.76-25.57-14.7z"
            />
            <path
              d="M673.34 482.88l-19.23 11.26c-5.32 3.11-11.93 3.11-17.16.07l-56.37-33.43-13.01 22.05 56.42 33.46c13.28 7.72 29.76 7.7 43.04-.05l31.87-18.66-25.57-14.7z"
              fill="url(#linear-gradient-259)"
            />
            <g>
              <path
                fill="url(#New_Gradient_Swatch_copy_5-41)"
                d="M322.41 538.75L359.32 517.72 359.32 483.92 322.41 504.95 322.41 538.75z"
              />
              <path
                fill="url(#linear-gradient-260)"
                d="M238.56 456.35L322.44 504.95 359.32 483.92 275.4 435.3 238.56 456.35z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-42)"
                d="M300.41 492.25L337.32 471.22 337.32 437.42 300.41 458.45 300.41 492.25z"
              />
              <path
                fill="url(#linear-gradient-261)"
                d="M244.45 426.23L300.44 458.45 337.32 437.42 281.3 405.17 244.45 426.23z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-43)"
                d="M278.58 445.79L315.49 424.77 315.49 390.96 278.58 411.99 278.58 445.79z"
              />
              <path
                fill="url(#linear-gradient-262)"
                d="M249.2 395.23L278.6 411.99 315.49 390.96 286.05 374.17 249.2 395.23z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-44)"
                d="M256.29 399.38L293.2 378.35 293.2 344.55 256.29 365.57 256.29 399.38z"
              />
              <path
                fill="url(#linear-gradient-263)"
                d="M226.91 348.81L256.31 365.57 293.2 344.55 263.76 327.76 226.91 348.81z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-45)"
                d="M233.91 352.88L270.82 331.85 270.82 298.05 233.91 319.07 233.91 352.88z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-46)"
                d="M300.44 492.2L300.44 458.45 278.6 445.79 278.6 411.99 256.31 399.28 256.31 365.57 233.94 352.82 233.94 319.07 204.54 302.31 204.54 470.53 322.44 538.75 322.44 504.95 300.44 492.2z"
              />
              <path
                fill="url(#linear-gradient-264)"
                d="M204.54 302.31L233.94 319.07 270.82 298.05 241.39 281.26 204.54 302.31z"
              />
              <path
                fill="url(#linear-gradient-265)"
                d="M314.14 504.11L322.45 508.89 350.66 492.45 350.66 495.44 322.45 511.88 314.14 507.1 314.14 504.11z"
              />
              <path
                fill="url(#linear-gradient-266)"
                d="M314.14 511.11L322.45 515.89 350.66 499.45 350.66 502.44 322.45 518.88 314.14 514.1 314.14 511.11z"
              />
              <path
                fill="url(#linear-gradient-267)"
                d="M314.14 518.12L322.45 522.89 350.66 506.45 350.66 509.44 322.45 525.88 314.14 521.1 314.14 518.12z"
              />
              <path
                fill="url(#linear-gradient-268)"
                d="M314.14 525.12L322.45 529.89 350.66 513.45 350.66 516.44 322.45 532.88 314.14 528.1 314.14 525.12z"
              />
              <path
                fill="url(#linear-gradient-269)"
                d="M291.98 457.78L300.28 462.55 328.49 446.12 328.49 449.11 300.28 465.54 291.98 460.77 291.98 457.78z"
              />
              <path
                fill="url(#linear-gradient-270)"
                d="M291.98 464.78L300.28 469.56 328.49 453.12 328.49 456.11 300.28 472.54 291.98 467.77 291.98 464.78z"
              />
              <path
                fill="url(#linear-gradient-271)"
                d="M291.98 471.78L300.28 476.56 328.49 460.12 328.49 463.11 300.28 479.54 291.98 474.77 291.98 471.78z"
              />
              <path
                fill="url(#linear-gradient-272)"
                d="M291.98 478.78L300.28 483.56 328.49 467.12 328.49 470.11 300.28 486.54 291.98 481.77 291.98 478.78z"
              />
              <g>
                <path
                  fill="url(#linear-gradient-273)"
                  d="M270.31 411.11L278.61 415.89 306.82 399.45 306.82 402.44 278.61 418.88 270.31 414.1 270.31 411.11z"
                />
                <path
                  fill="url(#linear-gradient-274)"
                  d="M270.31 418.11L278.61 422.89 306.82 406.45 306.82 409.44 278.61 425.88 270.31 421.1 270.31 418.11z"
                />
                <path
                  fill="url(#linear-gradient-275)"
                  d="M270.31 425.12L278.61 429.89 306.82 413.45 306.82 416.44 278.61 432.88 270.31 428.1 270.31 425.12z"
                />
                <path
                  fill="url(#linear-gradient-276)"
                  d="M270.31 432.12L278.61 436.89 306.82 420.45 306.82 423.44 278.61 439.88 270.31 435.1 270.31 432.12z"
                />
              </g>
              <g>
                <path
                  fill="url(#linear-gradient-277)"
                  d="M248.02 364.7L256.32 369.47 284.53 353.04 284.53 356.02 256.32 372.46 248.02 367.68 248.02 364.7z"
                />
                <path
                  fill="url(#linear-gradient-278)"
                  d="M248.02 371.7L256.32 376.47 284.53 360.04 284.53 363.02 256.32 379.46 248.02 374.69 248.02 371.7z"
                />
                <path
                  fill="url(#linear-gradient-279)"
                  d="M248.02 378.7L256.32 383.47 284.53 367.04 284.53 370.02 256.32 386.46 248.02 381.69 248.02 378.7z"
                />
                <path
                  fill="url(#linear-gradient-280)"
                  d="M248.02 385.7L256.32 390.47 284.53 374.04 284.53 377.03 256.32 393.46 248.02 388.69 248.02 385.7z"
                />
              </g>
              <g>
                <path
                  fill="url(#linear-gradient-281)"
                  d="M225.64 318.2L233.95 322.97 262.16 306.54 262.16 309.52 233.95 325.96 225.64 321.18 225.64 318.2z"
                />
                <path
                  fill="url(#linear-gradient-282)"
                  d="M225.64 325.2L233.95 329.97 262.16 313.54 262.16 316.52 233.95 332.96 225.64 328.19 225.64 325.2z"
                />
                <path
                  fill="url(#linear-gradient-283)"
                  d="M225.64 332.2L233.95 336.97 262.16 320.54 262.16 323.52 233.95 339.96 225.64 335.19 225.64 332.2z"
                />
                <path
                  fill="url(#linear-gradient-284)"
                  d="M225.64 339.2L233.95 343.97 262.16 327.54 262.16 330.53 233.95 346.96 225.64 342.19 225.64 339.2z"
                />
              </g>
            </g>
            <g>
              <path
                fill="url(#New_Gradient_Swatch_copy_5-47)"
                d="M209.77 526.55L255.6 500.2 255.6 412.36 209.77 438.71 209.77 526.55z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-48)"
                d="M164.59 500.2L209.79 526.55 209.79 438.71 164.59 412.39 164.59 500.2z"
              />
              <path
                fill="url(#linear-gradient-285)"
                d="M164.59 412.39L209.79 438.71 255.6 412.36 210.36 386.01 164.59 412.39z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-49)"
                d="M209.88 426.45L209.88 432.43 244.46 412.55 244.46 406.56 209.88 426.45z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-50)"
                d="M209.9 426.45L209.9 432.43 175.79 412.55 175.79 406.59 209.9 426.45z"
              />
              <path
                fill="url(#linear-gradient-286)"
                opacity={0.5}
                d="M209.88 426.45L209.88 427.93 244.46 408.05 244.46 406.56 209.88 426.45z"
              />
              <path
                fill="url(#linear-gradient-287)"
                opacity={0.5}
                d="M209.9 426.45L209.9 427.93 175.79 408.05 175.79 406.59 209.9 426.45z"
              />
              <path
                fill="url(#linear-gradient-288)"
                d="M175.79 406.59L209.9 426.45 244.46 406.56 210.32 386.68 175.79 406.59z"
              />
              <g>
                <path
                  fill="url(#linear-gradient-289)"
                  d="M219.82 445.84L217.33 447.27 217.33 444.42 219.82 442.99 219.82 445.84z"
                />
                <path
                  fill="url(#linear-gradient-290)"
                  d="M224.49 443.15L222 444.58 222 441.73 224.49 440.29 224.49 443.15z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_21-48)"
                  d="M229.15 440.45L226.67 441.88 226.67 439.03 229.15 437.6 229.15 440.45z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_21-49)"
                  d="M233.82 437.75L231.34 439.19 231.34 436.34 233.82 434.9 233.82 437.75z"
                />
                <path
                  fill="url(#linear-gradient-291)"
                  d="M238.49 435.06L236 436.49 236 433.64 238.49 432.21 238.49 435.06z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_21-50)"
                  d="M243.16 432.36L240.67 433.8 240.67 430.95 243.16 429.51 243.16 432.36z"
                />
                <path
                  fill="url(#linear-gradient-292)"
                  d="M247.83 429.67L245.34 431.1 245.34 428.25 247.83 426.82 247.83 429.67z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_21-51)"
                  d="M219.82 451.88L217.33 453.31 217.33 450.46 219.82 449.02 219.82 451.88z"
                />
                <path
                  fill="url(#linear-gradient-293)"
                  d="M224.49 449.18L222 450.62 222 447.76 224.49 446.33 224.49 449.18z"
                />
                <path
                  className="cls-527"
                  d="M229.15 446.49L226.67 447.92 226.67 445.07 229.15 443.63 229.15 446.49z"
                />
                <path
                  fill="url(#linear-gradient-294)"
                  d="M233.82 443.79L231.34 445.23 231.34 442.37 233.82 440.94 233.82 443.79z"
                />
                <path
                  fill="url(#linear-gradient-295)"
                  d="M238.49 441.1L236 442.53 236 439.68 238.49 438.24 238.49 441.1z"
                />
                <path
                  fill="url(#linear-gradient-296)"
                  d="M243.16 438.4L240.67 439.83 240.67 436.98 243.16 435.55 243.16 438.4z"
                />
                <path
                  fill="url(#linear-gradient-297)"
                  d="M247.83 435.71L245.34 437.14 245.34 434.29 247.83 432.85 247.83 435.71z"
                />
                <g>
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-52)"
                    d="M219.82 457.91L217.33 459.35 217.33 456.49 219.82 455.06 219.82 457.91z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-53)"
                    d="M224.49 455.22L222 456.65 222 453.8 224.49 452.36 224.49 455.22z"
                  />
                  <path
                    fill="url(#linear-gradient-298)"
                    d="M229.15 452.52L226.67 453.96 226.67 451.1 229.15 449.67 229.15 452.52z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-54)"
                    d="M233.82 449.83L231.34 451.26 231.34 448.41 233.82 446.97 233.82 449.83z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-55)"
                    d="M238.49 447.13L236 448.57 236 445.71 238.49 444.28 238.49 447.13z"
                  />
                  <path
                    fill="url(#linear-gradient-299)"
                    d="M243.16 444.44L240.67 445.87 240.67 443.02 243.16 441.58 243.16 444.44z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-56)"
                    d="M247.83 441.74L245.34 443.18 245.34 440.32 247.83 438.89 247.83 441.74z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-300)"
                    d="M219.82 463.95L217.33 465.38 217.33 462.53 219.82 461.1 219.82 463.95z"
                  />
                  <path
                    fill="url(#linear-gradient-301)"
                    d="M224.49 461.25L222 462.69 222 459.83 224.49 458.4 224.49 461.25z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-57)"
                    d="M229.15 458.56L226.67 459.99 226.67 457.14 229.15 455.71 229.15 458.56z"
                  />
                  <path
                    fill="url(#linear-gradient-302)"
                    d="M233.82 455.86L231.34 457.3 231.34 454.44 233.82 453.01 233.82 455.86z"
                  />
                  <path
                    fill="url(#linear-gradient-303)"
                    d="M238.49 453.17L236 454.6 236 451.75 238.49 450.31 238.49 453.17z"
                  />
                  <path
                    fill="url(#linear-gradient-304)"
                    d="M243.16 450.47L240.67 451.91 240.67 449.05 243.16 447.62 243.16 450.47z"
                  />
                  <path
                    fill="url(#linear-gradient-305)"
                    d="M247.83 447.78L245.34 449.21 245.34 446.36 247.83 444.92 247.83 447.78z"
                  />
                </g>
                <g>
                  <path
                    className="cls-527"
                    d="M219.82 469.98L217.33 471.42 217.33 468.57 219.82 467.13 219.82 469.98z"
                  />
                  <path
                    fill="url(#linear-gradient-306)"
                    d="M224.49 467.29L222 468.72 222 465.87 224.49 464.44 224.49 467.29z"
                  />
                  <path
                    fill="url(#linear-gradient-307)"
                    d="M229.15 464.59L226.67 466.03 226.67 463.18 229.15 461.74 229.15 464.59z"
                  />
                  <path
                    fill="url(#linear-gradient-308)"
                    d="M233.82 461.9L231.34 463.33 231.34 460.48 233.82 459.05 233.82 461.9z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-58)"
                    d="M238.49 459.2L236 460.64 236 457.79 238.49 456.35 238.49 459.2z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-59)"
                    d="M243.16 456.51L240.67 457.94 240.67 455.09 243.16 453.66 243.16 456.51z"
                  />
                  <path
                    fill="url(#linear-gradient-309)"
                    d="M247.83 453.81L245.34 455.25 245.34 452.39 247.83 450.96 247.83 453.81z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-60)"
                    d="M219.82 476.02L217.33 477.45 217.33 474.6 219.82 473.17 219.82 476.02z"
                  />
                  <path
                    fill="url(#linear-gradient-310)"
                    d="M224.49 473.32L222 474.76 222 471.91 224.49 470.47 224.49 473.32z"
                  />
                  <path
                    fill="url(#linear-gradient-311)"
                    d="M229.15 470.63L226.67 472.06 226.67 469.21 229.15 467.78 229.15 470.63z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-61)"
                    d="M233.82 467.93L231.34 469.37 231.34 466.52 233.82 465.08 233.82 467.93z"
                  />
                  <path
                    fill="url(#linear-gradient-312)"
                    d="M238.49 465.24L236 466.67 236 463.82 238.49 462.39 238.49 465.24z"
                  />
                  <path
                    className="cls-527"
                    d="M243.16 462.54L240.67 463.98 240.67 461.13 243.16 459.69 243.16 462.54z"
                  />
                  <path
                    fill="url(#linear-gradient-313)"
                    d="M247.83 459.85L245.34 461.28 245.34 458.43 247.83 457 247.83 459.85z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-314)"
                    d="M219.82 482.05L217.33 483.49 217.33 480.64 219.82 479.2 219.82 482.05z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-62)"
                    d="M224.49 479.36L222 480.79 222 477.94 224.49 476.51 224.49 479.36z"
                  />
                  <path
                    fill="url(#linear-gradient-315)"
                    d="M229.15 476.66L226.67 478.1 226.67 475.25 229.15 473.81 229.15 476.66z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-63)"
                    d="M233.82 473.97L231.34 475.4 231.34 472.55 233.82 471.12 233.82 473.97z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-64)"
                    d="M238.49 471.27L236 472.71 236 469.86 238.49 468.42 238.49 471.27z"
                  />
                  <path
                    fill="url(#linear-gradient-316)"
                    d="M243.16 468.58L240.67 470.01 240.67 467.16 243.16 465.73 243.16 468.58z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-65)"
                    d="M247.83 465.88L245.34 467.32 245.34 464.47 247.83 463.03 247.83 465.88z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-317)"
                    d="M219.82 488.09L217.33 489.52 217.33 486.67 219.82 485.24 219.82 488.09z"
                  />
                  <path
                    fill="url(#linear-gradient-318)"
                    d="M224.49 485.39L222 486.83 222 483.98 224.49 482.54 224.49 485.39z"
                  />
                  <path
                    className="cls-527"
                    d="M229.15 482.7L226.67 484.13 226.67 481.28 229.15 479.85 229.15 482.7z"
                  />
                  <path
                    fill="url(#linear-gradient-319)"
                    d="M233.82 480L231.34 481.44 231.34 478.59 233.82 477.15 233.82 480z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-66)"
                    d="M238.49 477.31L236 478.74 236 475.89 238.49 474.46 238.49 477.31z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-67)"
                    d="M243.16 474.61L240.67 476.05 240.67 473.2 243.16 471.76 243.16 474.61z"
                  />
                  <path
                    fill="url(#linear-gradient-320)"
                    d="M247.83 471.92L245.34 473.35 245.34 470.5 247.83 469.07 247.83 471.92z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-68)"
                    d="M219.82 494.12L217.33 495.56 217.33 492.71 219.82 491.27 219.82 494.12z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-69)"
                    d="M224.49 491.43L222 492.86 222 490.01 224.49 488.58 224.49 491.43z"
                  />
                  <path
                    fill="url(#linear-gradient-321)"
                    d="M229.15 488.73L226.67 490.17 226.67 487.32 229.15 485.88 229.15 488.73z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-70)"
                    d="M233.82 486.04L231.34 487.47 231.34 484.62 233.82 483.19 233.82 486.04z"
                  />
                  <path
                    fill="url(#linear-gradient-322)"
                    d="M238.49 483.34L236 484.78 236 481.93 238.49 480.49 238.49 483.34z"
                  />
                  <path
                    fill="url(#linear-gradient-323)"
                    d="M243.16 480.65L240.67 482.08 240.67 479.23 243.16 477.8 243.16 480.65z"
                  />
                  <path
                    className="cls-527"
                    d="M247.83 477.95L245.34 479.39 245.34 476.54 247.83 475.1 247.83 477.95z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-324)"
                    d="M219.82 500.16L217.33 501.59 217.33 498.74 219.82 497.31 219.82 500.16z"
                  />
                  <path
                    fill="url(#linear-gradient-325)"
                    d="M224.49 497.46L222 498.9 222 496.05 224.49 494.61 224.49 497.46z"
                  />
                  <path
                    fill="url(#linear-gradient-326)"
                    d="M229.15 494.77L226.67 496.2 226.67 493.35 229.15 491.92 229.15 494.77z"
                  />
                  <path
                    fill="url(#linear-gradient-327)"
                    d="M233.82 492.07L231.34 493.51 231.34 490.66 233.82 489.22 233.82 492.07z"
                  />
                  <path
                    fill="url(#linear-gradient-328)"
                    d="M238.49 489.38L236 490.81 236 487.96 238.49 486.53 238.49 489.38z"
                  />
                  <path
                    fill="url(#linear-gradient-329)"
                    d="M243.16 486.68L240.67 488.12 240.67 485.27 243.16 483.83 243.16 486.68z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-71)"
                    d="M247.83 483.99L245.34 485.42 245.34 482.57 247.83 481.14 247.83 483.99z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-330)"
                    d="M219.82 506.2L217.33 507.63 217.33 504.78 219.82 503.34 219.82 506.2z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-72)"
                    d="M224.49 503.5L222 504.93 222 502.08 224.49 500.65 224.49 503.5z"
                  />
                  <path
                    fill="url(#linear-gradient-331)"
                    d="M229.15 500.81L226.67 502.24 226.67 499.39 229.15 497.95 229.15 500.81z"
                  />
                  <path
                    fill="url(#linear-gradient-332)"
                    d="M233.82 498.11L231.34 499.54 231.34 496.69 233.82 495.26 233.82 498.11z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-73)"
                    d="M238.49 495.41L236 496.85 236 494 238.49 492.56 238.49 495.41z"
                  />
                  <path
                    fill="url(#linear-gradient-333)"
                    d="M243.16 492.72L240.67 494.15 240.67 491.3 243.16 489.87 243.16 492.72z"
                  />
                  <path
                    fill="url(#linear-gradient-334)"
                    d="M247.83 490.02L245.34 491.46 245.34 488.61 247.83 487.17 247.83 490.02z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-335)"
                    d="M219.82 512.23L217.33 513.67 217.33 510.81 219.82 509.38 219.82 512.23z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-74)"
                    d="M224.49 509.54L222 510.97 222 508.12 224.49 506.68 224.49 509.54z"
                  />
                  <path
                    fill="url(#linear-gradient-336)"
                    d="M229.15 506.84L226.67 508.28 226.67 505.42 229.15 503.99 229.15 506.84z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_21-75)"
                    d="M233.82 504.15L231.34 505.58 231.34 502.73 233.82 501.29 233.82 504.15z"
                  />
                  <path
                    fill="url(#linear-gradient-337)"
                    d="M238.49 501.45L236 502.89 236 500.03 238.49 498.6 238.49 501.45z"
                  />
                  <path
                    fill="url(#linear-gradient-338)"
                    d="M243.16 498.76L240.67 500.19 240.67 497.34 243.16 495.9 243.16 498.76z"
                  />
                  <path
                    fill="url(#linear-gradient-339)"
                    d="M247.83 496.06L245.34 497.5 245.34 494.64 247.83 493.21 247.83 496.06z"
                  />
                </g>
              </g>
              <g>
                <path
                  fill="url(#linear-gradient-340)"
                  d="M200.44 445.86L202.92 447.3 202.92 444.45 200.44 443.01 200.44 445.86z"
                />
                <path
                  fill="url(#linear-gradient-341)"
                  d="M195.77 443.17L198.25 444.6 198.25 441.75 195.77 440.32 195.77 443.17z"
                />
                <path
                  className="cls-340"
                  d="M191.1 440.47L193.59 441.91 193.59 439.06 191.1 437.62 191.1 440.47z"
                />
                <path
                  className="cls-340"
                  d="M186.43 437.78L188.92 439.21 188.92 436.36 186.43 434.93 186.43 437.78z"
                />
                <path
                  fill="url(#linear-gradient-342)"
                  d="M181.77 435.08L184.25 436.52 184.25 433.67 181.77 432.23 181.77 435.08z"
                />
                <path
                  className="cls-340"
                  d="M177.1 432.39L179.58 433.82 179.58 430.97 177.1 429.54 177.1 432.39z"
                />
                <path
                  fill="url(#linear-gradient-343)"
                  d="M172.43 429.69L174.91 431.13 174.91 428.28 172.43 426.84 172.43 429.69z"
                />
                <path
                  className="cls-340"
                  d="M200.44 451.9L202.92 453.34 202.92 450.48 200.44 449.05 200.44 451.9z"
                />
                <path
                  fill="url(#linear-gradient-344)"
                  d="M195.77 449.21L198.25 450.64 198.25 447.79 195.77 446.35 195.77 449.21z"
                />
                <path
                  fill="url(#linear-gradient-345)"
                  d="M191.1 446.51L193.59 447.94 193.59 445.09 191.1 443.66 191.1 446.51z"
                />
                <path
                  fill="url(#linear-gradient-346)"
                  d="M186.43 443.82L188.92 445.25 188.92 442.4 186.43 440.96 186.43 443.82z"
                />
                <path
                  fill="url(#linear-gradient-347)"
                  d="M181.77 441.12L184.25 442.55 184.25 439.7 181.77 438.27 181.77 441.12z"
                />
                <path
                  fill="url(#linear-gradient-348)"
                  d="M177.1 438.42L179.58 439.86 179.58 437.01 177.1 435.57 177.1 438.42z"
                />
                <path
                  fill="url(#linear-gradient-349)"
                  d="M172.43 435.73L174.91 437.16 174.91 434.31 172.43 432.88 172.43 435.73z"
                />
                <g>
                  <path
                    className="cls-340"
                    d="M200.44 457.94L202.92 459.37 202.92 456.52 200.44 455.08 200.44 457.94z"
                  />
                  <path
                    className="cls-340"
                    d="M195.77 455.24L198.25 456.68 198.25 453.82 195.77 452.39 195.77 455.24z"
                  />
                  <path
                    fill="url(#linear-gradient-350)"
                    d="M191.1 452.55L193.59 453.98 193.59 451.13 191.1 449.69 191.1 452.55z"
                  />
                  <path
                    className="cls-340"
                    d="M186.43 449.85L188.92 451.29 188.92 448.43 186.43 447 186.43 449.85z"
                  />
                  <path
                    className="cls-340"
                    d="M181.77 447.16L184.25 448.59 184.25 445.74 181.77 444.3 181.77 447.16z"
                  />
                  <path
                    fill="url(#linear-gradient-351)"
                    d="M177.1 444.46L179.58 445.9 179.58 443.04 177.1 441.61 177.1 444.46z"
                  />
                  <path
                    className="cls-340"
                    d="M172.43 441.77L174.91 443.2 174.91 440.35 172.43 438.91 172.43 441.77z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-352)"
                    d="M200.44 463.97L202.92 465.41 202.92 462.55 200.44 461.12 200.44 463.97z"
                  />
                  <path
                    fill="url(#linear-gradient-353)"
                    d="M195.77 461.28L198.25 462.71 198.25 459.86 195.77 458.42 195.77 461.28z"
                  />
                  <path
                    className="cls-340"
                    d="M191.1 458.58L193.59 460.02 193.59 457.16 191.1 455.73 191.1 458.58z"
                  />
                  <path
                    fill="url(#linear-gradient-354)"
                    d="M186.43 455.89L188.92 457.32 188.92 454.47 186.43 453.03 186.43 455.89z"
                  />
                  <path
                    fill="url(#linear-gradient-355)"
                    d="M181.77 453.19L184.25 454.63 184.25 451.77 181.77 450.34 181.77 453.19z"
                  />
                  <path
                    fill="url(#linear-gradient-356)"
                    d="M177.1 450.5L179.58 451.93 179.58 449.08 177.1 447.64 177.1 450.5z"
                  />
                  <path
                    fill="url(#linear-gradient-357)"
                    d="M172.43 447.8L174.91 449.24 174.91 446.38 172.43 444.95 172.43 447.8z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-358)"
                    d="M200.44 470.01L202.92 471.44 202.92 468.59 200.44 467.16 200.44 470.01z"
                  />
                  <path
                    fill="url(#linear-gradient-359)"
                    d="M195.77 467.31L198.25 468.75 198.25 465.9 195.77 464.46 195.77 467.31z"
                  />
                  <path
                    fill="url(#linear-gradient-360)"
                    d="M191.1 464.62L193.59 466.05 193.59 463.2 191.1 461.77 191.1 464.62z"
                  />
                  <path
                    fill="url(#linear-gradient-361)"
                    d="M186.43 461.92L188.92 463.36 188.92 460.5 186.43 459.07 186.43 461.92z"
                  />
                  <path
                    className="cls-340"
                    d="M181.77 459.23L184.25 460.66 184.25 457.81 181.77 456.38 181.77 459.23z"
                  />
                  <path
                    className="cls-340"
                    d="M177.1 456.53L179.58 457.97 179.58 455.11 177.1 453.68 177.1 456.53z"
                  />
                  <path
                    fill="url(#linear-gradient-362)"
                    d="M172.43 453.84L174.91 455.27 174.91 452.42 172.43 450.98 172.43 453.84z"
                  />
                </g>
                <g>
                  <path
                    className="cls-340"
                    d="M200.44 476.04L202.92 477.48 202.92 474.63 200.44 473.19 200.44 476.04z"
                  />
                  <path
                    fill="url(#linear-gradient-363)"
                    d="M195.77 473.35L198.25 474.78 198.25 471.93 195.77 470.5 195.77 473.35z"
                  />
                  <path
                    fill="url(#linear-gradient-364)"
                    d="M191.1 470.65L193.59 472.09 193.59 469.24 191.1 467.8 191.1 470.65z"
                  />
                  <path
                    className="cls-340"
                    d="M186.43 467.96L188.92 469.39 188.92 466.54 186.43 465.11 186.43 467.96z"
                  />
                  <path
                    fill="url(#linear-gradient-365)"
                    d="M181.77 465.26L184.25 466.7 184.25 463.85 181.77 462.41 181.77 465.26z"
                  />
                  <path
                    fill="url(#linear-gradient-366)"
                    d="M177.1 462.57L179.58 464 179.58 461.15 177.1 459.72 177.1 462.57z"
                  />
                  <path
                    fill="url(#linear-gradient-367)"
                    d="M172.43 459.87L174.91 461.31 174.91 458.46 172.43 457.02 172.43 459.87z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-368)"
                    d="M200.44 482.08L202.92 483.51 202.92 480.66 200.44 479.23 200.44 482.08z"
                  />
                  <path
                    className="cls-340"
                    d="M195.77 479.38L198.25 480.82 198.25 477.97 195.77 476.53 195.77 479.38z"
                  />
                  <path
                    fill="url(#linear-gradient-369)"
                    d="M191.1 476.69L193.59 478.12 193.59 475.27 191.1 473.84 191.1 476.69z"
                  />
                  <path
                    className="cls-340"
                    d="M186.43 473.99L188.92 475.43 188.92 472.58 186.43 471.14 186.43 473.99z"
                  />
                  <path
                    className="cls-340"
                    d="M181.77 471.3L184.25 472.73 184.25 469.88 181.77 468.45 181.77 471.3z"
                  />
                  <path
                    fill="url(#linear-gradient-370)"
                    d="M177.1 468.6L179.58 470.04 179.58 467.19 177.1 465.75 177.1 468.6z"
                  />
                  <path
                    className="cls-340"
                    d="M172.43 465.91L174.91 467.34 174.91 464.49 172.43 463.06 172.43 465.91z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-371)"
                    d="M200.44 488.11L202.92 489.55 202.92 486.7 200.44 485.26 200.44 488.11z"
                  />
                  <path
                    fill="url(#linear-gradient-372)"
                    d="M195.77 485.42L198.25 486.85 198.25 484 195.77 482.57 195.77 485.42z"
                  />
                  <path
                    fill="url(#linear-gradient-373)"
                    d="M191.1 482.72L193.59 484.16 193.59 481.31 191.1 479.87 191.1 482.72z"
                  />
                  <path
                    fill="url(#linear-gradient-374)"
                    d="M186.43 480.03L188.92 481.46 188.92 478.61 186.43 477.18 186.43 480.03z"
                  />
                  <path
                    className="cls-340"
                    d="M181.77 477.33L184.25 478.77 184.25 475.92 181.77 474.48 181.77 477.33z"
                  />
                  <path
                    className="cls-340"
                    d="M177.1 474.64L179.58 476.07 179.58 473.22 177.1 471.79 177.1 474.64z"
                  />
                  <path
                    fill="url(#linear-gradient-375)"
                    d="M172.43 471.94L174.91 473.38 174.91 470.53 172.43 469.09 172.43 471.94z"
                  />
                </g>
                <g>
                  <path
                    className="cls-340"
                    d="M200.44 494.15L202.92 495.58 202.92 492.73 200.44 491.3 200.44 494.15z"
                  />
                  <path
                    className="cls-340"
                    d="M195.77 491.45L198.25 492.89 198.25 490.04 195.77 488.6 195.77 491.45z"
                  />
                  <path
                    fill="url(#linear-gradient-376)"
                    d="M191.1 488.76L193.59 490.19 193.59 487.34 191.1 485.91 191.1 488.76z"
                  />
                  <path
                    className="cls-340"
                    d="M186.43 486.06L188.92 487.5 188.92 484.65 186.43 483.21 186.43 486.06z"
                  />
                  <path
                    fill="url(#linear-gradient-377)"
                    d="M181.77 483.37L184.25 484.8 184.25 481.95 181.77 480.52 181.77 483.37z"
                  />
                  <path
                    fill="url(#linear-gradient-378)"
                    d="M177.1 480.67L179.58 482.11 179.58 479.26 177.1 477.82 177.1 480.67z"
                  />
                  <path
                    fill="url(#linear-gradient-379)"
                    d="M172.43 477.98L174.91 479.41 174.91 476.56 172.43 475.13 172.43 477.98z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-380)"
                    d="M200.44 500.18L202.92 501.62 202.92 498.77 200.44 497.33 200.44 500.18z"
                  />
                  <path
                    fill="url(#linear-gradient-381)"
                    d="M195.77 497.49L198.25 498.92 198.25 496.07 195.77 494.64 195.77 497.49z"
                  />
                  <path
                    fill="url(#linear-gradient-382)"
                    d="M191.1 494.79L193.59 496.23 193.59 493.38 191.1 491.94 191.1 494.79z"
                  />
                  <path
                    fill="url(#linear-gradient-383)"
                    d="M186.43 492.1L188.92 493.53 188.92 490.68 186.43 489.25 186.43 492.1z"
                  />
                  <path
                    fill="url(#linear-gradient-384)"
                    d="M181.77 489.4L184.25 490.84 184.25 487.99 181.77 486.55 181.77 489.4z"
                  />
                  <path
                    fill="url(#linear-gradient-385)"
                    d="M177.1 486.71L179.58 488.14 179.58 485.29 177.1 483.86 177.1 486.71z"
                  />
                  <path
                    className="cls-340"
                    d="M172.43 484.01L174.91 485.45 174.91 482.6 172.43 481.16 172.43 484.01z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-386)"
                    d="M200.44 506.22L202.92 507.65 202.92 504.8 200.44 503.37 200.44 506.22z"
                  />
                  <path
                    className="cls-340"
                    d="M195.77 503.52L198.25 504.96 198.25 502.11 195.77 500.67 195.77 503.52z"
                  />
                  <path
                    fill="url(#linear-gradient-387)"
                    d="M191.1 500.83L193.59 502.26 193.59 499.41 191.1 497.98 191.1 500.83z"
                  />
                  <path
                    fill="url(#linear-gradient-388)"
                    d="M186.43 498.13L188.92 499.57 188.92 496.72 186.43 495.28 186.43 498.13z"
                  />
                  <path
                    className="cls-340"
                    d="M181.77 495.44L184.25 496.87 184.25 494.02 181.77 492.59 181.77 495.44z"
                  />
                  <path
                    fill="url(#linear-gradient-389)"
                    d="M177.1 492.74L179.58 494.18 179.58 491.33 177.1 489.89 177.1 492.74z"
                  />
                  <path
                    fill="url(#linear-gradient-390)"
                    d="M172.43 490.05L174.91 491.48 174.91 488.63 172.43 487.2 172.43 490.05z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#linear-gradient-391)"
                    d="M200.44 512.26L202.92 513.69 202.92 510.84 200.44 509.4 200.44 512.26z"
                  />
                  <path
                    className="cls-340"
                    d="M195.77 509.56L198.25 511 198.25 508.14 195.77 506.71 195.77 509.56z"
                  />
                  <path
                    fill="url(#linear-gradient-392)"
                    d="M191.1 506.87L193.59 508.3 193.59 505.45 191.1 504.01 191.1 506.87z"
                  />
                  <path
                    className="cls-340"
                    d="M186.43 504.17L188.92 505.6 188.92 502.75 186.43 501.32 186.43 504.17z"
                  />
                  <path
                    fill="url(#linear-gradient-393)"
                    d="M181.77 501.48L184.25 502.91 184.25 500.06 181.77 498.62 181.77 501.48z"
                  />
                  <path
                    fill="url(#linear-gradient-394)"
                    d="M177.1 498.78L179.58 500.21 179.58 497.36 177.1 495.93 177.1 498.78z"
                  />
                  <path
                    fill="url(#linear-gradient-395)"
                    d="M172.43 496.08L174.91 497.52 174.91 494.67 172.43 493.23 172.43 496.08z"
                  />
                </g>
              </g>
            </g>
            <g>
              <path
                fill="url(#New_Gradient_Swatch_copy_21-76)"
                d="M226.38 398.73L236.85 409.63 201.52 389.39 191.06 378.49 226.38 398.73z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_21-77)"
                d="M226.36 398.73L236.82 409.63 241.52 406.83 241.52 389.86 226.36 398.73z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_21-78)"
                d="M241.52 389.86L226.36 398.73 191.06 378.49 206.26 369.59 241.52 389.86z"
              />
              <path
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#Radial_Gradient_2-7)"
                d="M231.16 403.96L226.94 398.58 240.83 390.44 226.39 398.27 191.99 379.19 225.94 398.95 231.16 403.96z"
              />
              <path
                d="M220 392.08l-16.9-9.76c-.34-.2-.3-.54.09-.76l6.34-3.66c.39-.23.98-.25 1.32-.05l16.9 9.76c.34.2.3.54-.09.76l-6.34 3.66c-.39.23-.98.25-1.32.05z"
                fill="url(#linear-gradient-396)"
              />
              <path
                d="M209.91 378.61l1.08.63c.14.08.36.08.5 0s.14-.21 0-.29l-1.08-.63a.55.55 0 00-.5 0c-.14.08-.14.21 0 .29zm1.85 1.07l.51.3c.14.08.36.08.5 0s.14-.21 0-.29l-.51-.3a.55.55 0 00-.5 0c-.14.08-.14.21 0 .29zm1.28.74l.51.3c.14.08.36.08.5 0s.14-.21 0-.29l-.51-.3a.55.55 0 00-.5 0c-.14.08-.14.21 0 .29zm1.28.74l.51.3c.14.08.36.08.5 0s.14-.21 0-.29l-.51-.3a.55.55 0 00-.5 0c-.14.08-.14.21 0 .29zm1.28.74l.51.3c.14.08.36.08.5 0s.14-.21 0-.29l-.51-.3a.55.55 0 00-.5 0c-.14.08-.14.21 0 .29zm1.28.74l.51.3c.14.08.36.08.5 0s.14-.21 0-.29l-.51-.3a.55.55 0 00-.5 0c-.14.08-.14.21 0 .29zm1.28.74l.51.3c.14.08.36.08.5 0s.14-.21 0-.29l-.51-.3a.55.55 0 00-.5 0c-.14.08-.14.21 0 .29zm1.28.74l.51.3c.14.08.36.08.5 0s.14-.21 0-.29l-.51-.3a.55.55 0 00-.5 0c-.14.08-.14.21 0 .29zm1.28.74l.51.3c.14.08.36.08.5 0s.14-.21 0-.29l-.51-.3a.55.55 0 00-.5 0c-.14.08-.14.21 0 .29zm1.28.74l.51.3c.14.08.36.08.5 0s.14-.21 0-.29l-.51-.3a.55.55 0 00-.5 0c-.14.08-.14.21 0 .29zm1.28.74l.51.3c.14.08.36.08.5 0s.14-.21 0-.29l-.51-.3a.55.55 0 00-.5 0c-.14.08-.14.21 0 .29zm1.28.74l.51.3c.14.08.36.08.5 0s.14-.21 0-.29l-.51-.3a.55.55 0 00-.5 0c-.14.08-.14.21 0 .29zm1.31.76l.51.3c.14.08.36.08.5 0s.14-.21 0-.29l-.51-.3a.55.55 0 00-.5 0c-.14.08-.14.21 0 .29zm-17.16-8.53l.44.26c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33zm2.29 1l.44-.25c.16-.09.15-.24 0-.33l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33l.44.26c.16.09.41.09.57 0zm.27.48l.44.26c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33zm1.28.74l.44.26c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33zm2.73.42l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33l.44.26c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33zm1.28.74l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33l.44.26c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33zm1.28.74l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33l.44.26c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33zm1.28.74l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33l.44.26c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33zm1.28.74l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33l.44.26c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33zm1.28.74l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33l.44.26c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33zm-.17 1.07l.44.26c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33zm2.73.42l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33l.44.26c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33zm1.88 1.09l-1.01-.59a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33l1.01.59c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33zM207.48 380l1.01.59c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33l-1.01-.59a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33zm1.85 1.07l.44.26c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33zm1.73 1c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33l.44.26zm1.28.74c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33l-.44-.26a.635.635 0 00-.57 0l-.44.25c-.16.09-.15.24 0 .33l.44.26zm1.28-.1l-.44.25c-.16.09-.15.24 0 .33l.44.26c.16.09.41.09.57 0l.44-.25c.16-.09.15-.24 0-.33l-.44-.26a.635.635 0 00-.57 0zm1.31.73l-.5.29c-.14.08-.14.21 0 .3l.5.29c.14.08.37.08.51 0l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0zm1.28.74l-.5.29c-.14.08-.14.21 0 .3l.5.29c.14.08.37.08.51 0l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0zm1.28.74l-.5.29c-.14.08-.14.21 0 .3l.5.29c.14.08.37.08.51 0l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0zm1.28.74l-.5.29c-.14.08-.14.21 0 .3l.5.29c.14.08.37.08.51 0l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0zm1.28.74l-.5.29c-.14.08-.14.21 0 .3l.5.29c.14.08.37.08.51 0l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0zm1.8 1.61l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3l.5.29c.14.08.37.08.51 0zm1.28.74l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3l.5.29c.14.08.37.08.51 0zm1.8.18l-.5-.29a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3l.5.29c.14.08.37.08.51 0l.5-.29c.14-.08.14-.21 0-.3zm-18.7-8.26l1.61.93c.14.08.37.08.51 0l.5-.29c.14-.08.14-.21 0-.3l-1.61-.93a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3zm2.4 1.38l.5.29c.14.08.37.08.51 0l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3zm1.28.74l.5.29c.14.08.37.08.51 0l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3zm1.28.74l.5.29c.14.08.37.08.51 0l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3zm2.29 1.03l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3l.5.29c.14.08.37.08.51 0zm1.28.74l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3l.5.29c.14.08.37.08.51 0zm1.28.74l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3l.5.29c.14.08.37.08.51 0zm1.28.74l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3l.5.29c.14.08.37.08.51 0zm1.28.74l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3l.5.29c.14.08.37.08.51 0zm1.28.74l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3l.5.29c.14.08.37.08.51 0zm.27.45l.5.29c.14.08.37.08.51 0l.5-.29c.14-.08.14-.21 0-.3l-.5-.29a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3zm3.56.89l-1.27-.73a.572.572 0 00-.51 0l-.5.29c-.14.08-.14.21 0 .3l1.27.73c.14.08.37.08.51 0l.5-.29c.14-.08.14-.21 0-.3zm-18.69-8.23l2.28 1.32c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33l-2.28-1.32a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33zm3.14 1.81l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33zm1.28.74l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33zm1.28.74l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33zm1.28.74l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33zm1.28.74l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33zm1.28.74l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33zm1.28.74l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33zm1.28.74l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33zm1.28.74l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33zm1.28.74l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33zm2.75.43l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33zm-16.63-8.23l-1-.58a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33l1 .58c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33zm1.28.74l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33zm1.28.74l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33zm8.99 5.19l-8.14-4.7a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33l8.14 4.7c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33zm1.28.74l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33zm1.28.74l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33zm1.31.76l-.43-.25a.657.657 0 00-.58 0l-.43.25c-.16.09-.16.24 0 .33l.43.25c.16.09.42.09.58 0l.43-.25c.16-.09.16-.24 0-.33z"
                style={{
                  mixBlendMode: "screen"
                }}
                fill="url(#linear-gradient-397)"
                opacity={0.3}
              />
            </g>
            <g>
              <path
                className="cls-61"
                d="M189.06 410.16L199.93 416.51 212.67 409.12 201.79 402.78 189.06 410.16z"
              />
              <path
                className="cls-52"
                d="M189.31 410.18L199.9 416.37 212.31 409.16 201.71 402.99 189.31 410.18z"
              />
              <path
                className="cls-64"
                d="M189.55 410.21L199.87 416.23 211.95 409.21 201.63 403.2 189.55 410.21z"
              />
              <path
                className="cls-58"
                d="M189.79 410.23L199.84 416.09 211.6 409.26 201.55 403.41 189.79 410.23z"
              />
              <path
                className="cls-56"
                d="M190.04 410.25L199.8 415.95 211.24 409.31 201.47 403.62 190.04 410.25z"
              />
              <path
                className="cls-59"
                d="M190.28 410.27L199.77 415.81 210.88 409.36 201.39 403.83 190.28 410.27z"
              />
              <path
                className="cls-48"
                d="M190.53 410.29L199.74 415.67 210.53 409.41 201.31 404.04 190.53 410.29z"
              />
              <path
                className="cls-50"
                d="M190.77 410.31L199.71 415.53 210.17 409.46 201.23 404.25 190.77 410.31z"
              />
              <path
                className="cls-62"
                d="M191.01 410.34L199.67 415.39 209.81 409.5 201.15 404.46 191.01 410.34z"
              />
              <path
                className="cls-60"
                d="M191.26 410.36L199.64 415.25 209.46 409.55 201.07 404.67 191.26 410.36z"
              />
              <path
                className="cls-63"
                d="M191.5 410.38L199.61 415.11 209.1 409.6 200.99 404.88 191.5 410.38z"
              />
              <path
                className="cls-51"
                d="M191.75 410.4L199.58 414.97 208.74 409.65 200.91 405.09 191.75 410.4z"
              />
              <path
                className="cls-57"
                d="M212.76 409.36c-4.51 1.72-6.54.41-9.63-1.38-3.09-1.78-4.43-3.32-1.06-4.66 3.29-1.31 6.58.07 9.67 1.85s3.47 3.24 1.02 4.18z"
              />
              <path
                className="cls-266"
                d="M201.61 405.23s-.23.87-.05 1.23c.17.36.97.66 1.62.35.64-.31.92-.97 1.16-1.15.24-.17 1.62-.33 2.64-1.2 1.03-.87.89-1.82-.14-1.84-1.03-.02-2.88.45-3.54.89-.66.43-1.69 1.72-1.69 1.72z"
              />
              <path
                d="M202.1 406.17c.73.15 1.67-.49 2.1-.85.43-.36 1.2-.17 2.19-.96s1.34-1.32.89-1.58-2.1-.19-3.38.51c-1.29.69-2.14 1.19-2.14 1.19s-.31.96-.16 1.16.09.43.5.52z"
                fill="url(#linear-gradient-398)"
              />
              <path
                d="M202.09 390.09s-.55 2.35-.18 5.32c.36 2.97-.21 3.11-.34 5.22s-.86 4.7.21 5.24c.62.31 1.72.13 2.58-.86s1.04-1.95.94-2.14c-.1-.18-.26-.99.08-2.74.34-1.75 1.02-5.99.96-7.38s-.55-2.04-.55-2.04l-3.7-.63z"
                fill="url(#New_Gradient_Swatch_copy_4-2)"
              />
              <path
                className="cls-266"
                d="M207.07 408.33s-.38 1.13.09 1.37c.47.24 1.2.38 1.79.12s.83-.52 1.46-.52 3.06-1.2 3.53-1.79 0-1.27-1.16-1.18-2.83.23-3.13.33c-.3.1-2.57 1.67-2.57 1.67z"
              />
              <path
                d="M207.59 409.16c1.09.13 1.44-.17 2.45-.38s3.87-1.37 3.82-2.01c-.05-.64-.71-.51-1.27-.45-.56.05-2.33.17-2.47.17s-3.02 1.3-3.02 1.3-.21.94-.02 1.08c.19.14.21.26.5.3z"
                fill="url(#linear-gradient-399)"
              />
              <path
                d="M204.28 392.27s2.52 1.89 2.55 4.97c.03 3.08-.34 11.02.13 11.47s2.12.59 2.79.1c1.09-.8 1.67-1.93 1.56-2.32-.1-.39-.94-1.8-.65-3.05.29-1.25 1.25-5.58 1.07-8.52-.18-2.94-2.61-3.32-3.72-3.28-1.11.04-3.73.63-3.73.63z"
                fill="url(#New_Gradient_Swatch_copy_4-3)"
              />
              <path
                d="M199.28 416.6c-.34 0-.69-.09-1-.27l-8.02-4.65c-.36-.21-.57-.58-.56-.99 0-.41.22-.78.58-.98l7.81-4.37v-4.33c0-.23.19-.42.42-.42s.42.19.42.42v4.58c0 .15-.08.3-.22.37l-8.02 4.49a.26.26 0 00-.14.24c0 .05.01.17.14.24l8.02 4.65c.35.21.79.2 1.14 0l6.94-4.06v-11.68c0-.23.19-.42.42-.42s.42.19.42.42v11.93c0 .15-.08.29-.21.37l-7.15 4.18c-.31.18-.66.27-1 .27z"
                fill="url(#New_Gradient_Swatch_copy_15-7)"
              />
              <path
                className="cls-16"
                d="M199.21 416.25c-.3 0-.59-.08-.85-.23l-8.02-4.65a.828.828 0 01-.42-.74c0-.31.17-.58.43-.73l7.95-4.45v-4.49c0-.08.06-.14.14-.14s.14.06.14.14v4.58c0 .05-.03.1-.07.12l-8.02 4.49c-.18.1-.29.28-.29.49s.1.39.28.49l8.02 4.65c.22.12.46.19.71.19s.5-.07.72-.19l7.08-4.14v-11.85c0-.08.06-.14.14-.14s.14.06.14.14v11.93c0 .05-.03.1-.07.12l-7.15 4.18c-.26.15-.56.23-.86.23z"
              />
              <path
                d="M199.18 416.09c-.28 0-.56-.07-.8-.21l-8.02-4.65a.699.699 0 01-.36-.64c0-.27.14-.5.38-.63l8.01-4.48v-4.56s.01-.03.03-.03.03.01.03.03v4.58s0 .02-.01.02l-8.02 4.49c-.22.12-.35.34-.35.58 0 .25.12.47.34.59l8.02 4.65c.23.14.5.21.77.21s.54-.07.77-.21l7.14-4.17v-11.91s.01-.03.03-.03.03.01.03.03v11.93l-7.16 4.2c-.24.14-.52.22-.8.22z"
                fill="#fff"
                opacity={0.5}
              />
              <g>
                <path
                  fill="url(#New_Gradient_Swatch_copy_15-8)"
                  d="M198.73 404.49L198.73 405.35 208.38 399.78 208.38 398.88 198.73 404.49z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_15-9)"
                  d="M198.74 404.49L198.74 405.35 189.29 399.87 189.29 398.97 198.74 404.49z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_14-8)"
                  d="M198.73 403.96L198.73 404.82 208.38 399.25 208.38 398.35 198.73 403.96z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_14-9)"
                  d="M198.74 403.96L198.74 404.82 189.29 399.34 189.29 398.44 198.74 403.96z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_14-10)"
                  d="M189.29 398.44L198.74 403.96 208.38 398.35 198.92 392.85 189.29 398.44z"
                />
              </g>
              <g>
                <path
                  d="M204.97 384.66c.67.28 1.58.23 2.09.3.55.07 1.1.08 1.12-.2.03-.55-2.27-.79-2.27-.79l-.94.68z"
                  fill="url(#radial-gradient-20)"
                />
                <path
                  d="M203.51 382.48s1.75-.71 2.8-.92c.56-.12.94-.14 1.89.27.44.19.75.39.71.64-.02.12-.27-.04-.27-.04s.52.26.5.58c-.02.32-.33.05-.33.05s.57.29.53.6c-.04.32-.37.03-.37.03s.48.26.49.52c.01.27-.15.26-.5.15-.41-.12-1.38-.39-2.14-.22-.82.18-1.27.72-1.92.48-.65-.24-1.48.06-1.48.06l.12-2.22z"
                  fill="url(#radial-gradient-21)"
                />
                <path
                  d="M203.98 381.98s.57.37.52 1.14c-.06.76-.71 1.96-.71 1.96h-7.57s-5.3.39-4.37-1.81c.94-2.21 1.09-2.71 3.76-2.08 3.39.81 4.73.76 5.84.8 1.1.04 2.54 0 2.54 0z"
                  fill="url(#New_Gradient_Swatch_copy_15-10)"
                />
                <path
                  className="cls-54"
                  d="M204.21 384.17c-.26.58-.42.9-.42.9h-7.57s-4.48.57-4.37-1.8c1.41.27 3.66.99 6.87.99 2.93 0 4.73-.06 5.49-.09z"
                />
                <path
                  d="M194.36 392.4c.78-.32 5.06-2.64 6.35-2.27 2.01.58 5.9 4.41 5.9 4.41s-10.11 7.26-13.74 4.6 1.49-6.74 1.49-6.74z"
                  fill="url(#New_Gradient_Swatch_copy_4-4)"
                />
                <path
                  d="M198.38 394.48c.78-.32 5.24-2.22 6.58-2.11 3.1.24 4.94 4.4 4.94 4.4s-9.13 6.6-13.02 4.45c-4.55-2.52 1.49-6.74 1.49-6.74z"
                  fill="url(#New_Gradient_Swatch_copy_4-5)"
                />
                <path
                  d="M200.8 374.51c.72.5 1.42 1.27 1.15 3.25s-.39 2.93-.83 3.12c-.43.2-.69-.11-.85.43-.16.54-.15 1.47-.15 1.47l-4.15-1.63s.4-.64.24-1.4c-.17-.75-1.19-2.32.06-4.21 1.26-1.88 3.66-1.63 4.52-1.04z"
                  fill="url(#radial-gradient-22)"
                />
                <path
                  d="M202.19 376.44c-.04.38-.37.95-.91.91-.54-.04-.89.55-.82.86s-.02.38-.02.38-.37-.22-.6.07c-.23.29-.09.99-.01 1.27s-.93.93-1.67.87-1.71-.28-1.97-.71c-.26-.42-1.23-1.86-.5-3.81s2.76-2.86 4.43-2.26 2.13 1.88 2.07 2.42z"
                  fill="url(#linear-gradient-400)"
                />
                <path
                  className="cls-54"
                  d="M195.65 376.45c.31.35.88.8 1.9 1.16 1.06.37 2.16.37 2.96.28-.05.12-.06.23-.04.32.07.31-.02.38-.02.38s-.37-.22-.6.07c-.23.29-.09.99-.01 1.27.08.27-.93.93-1.67.87-.74-.05-1.71-.28-1.97-.71-.25-.41-1.17-1.79-.55-3.65z"
                />
                <path
                  d="M197.31 381.92c-.84-.43-1.56-1.13-1.56-1.13h-1.59c-.81 0-1.92.57-2.27 2.03-.33 1.39-.26 3.5-.38 5.65-.42 7.24-1.75 7.63.44 8.8 2.2 1.17 5.39 1.91 7.23.36 1.84-1.55 1.54-1.69 1.96-5.05.42-3.37 1.63-4.86.48-6.81-1.15-1.95-2.36-2.97-3.23-3.34s-1.07-.51-1.07-.51z"
                  fill="url(#New_Gradient_Swatch_copy_15-11)"
                />
                <path
                  d="M200.99 383.87c-.18-.97-1-1.17-1.61-1.39-.68-.25-2.24-.83-2.83-1.25-.48-.34-.43-.82-.43-.82l-.43.37s-.13.94 1.15 1.56 2.82.89 3.52 1.71c.53.62.72.75.72.75s.08.06-.1-.92z"
                  fill="url(#New_Gradient_Swatch_copy_3-6)"
                />
                <path
                  className="cls-54"
                  d="M198.49 386.78c1.36-1.48 2.76.09 3.73 1.38-.19 1.11-.83 2.36-1.09 4.42-.42 3.37-.12 3.5-1.96 5.05-.89.75-1.59 1.01-3 .88.23-.67.55-9.82 2.32-11.74z"
                />
              </g>
              <g>
                <path
                  d="M213.11 388.71c.58-.62 1.02-1.09 1.33-1.5.33-.44.7-.85.92-.67.42.35-1 2.18-1 2.18h-1.24z"
                  fill="url(#radial-gradient-23)"
                />
                <path
                  d="M212.76 391.15s1.89-.05 2.93-.26c.56-.11.92-.24 1.63-1 .33-.35.54-.65.39-.87-.07-.1-.23.14-.23.14s.37-.44.23-.73c-.14-.29-.33.08-.33.08s.41-.49.25-.76c-.16-.28-.35.12-.35.12s.34-.43.25-.67-.24-.18-.52.06c-.33.28-1.11.9-1.88 1.05-.82.16-1.46-.16-1.95.32-.5.48-1.39.53-1.39.53l.99 1.99z"
                  fill="url(#radial-gradient-24)"
                />
                <path
                  d="M198.91 385.81c-1.18.74-1.35 2.25-.48 3.36.87 1.11 5.66 3.9 7.19 4.11 1.53.21 8-1.64 8-1.64s.08-1.15-.1-1.92c-.17-.76-.67-.93-.67-.93s-4.52 1.17-5.87.94c-1.35-.23-3.39-1.98-4.72-2.93-1.45-1.04-2.22-1.71-3.36-.99z"
                  fill="url(#New_Gradient_Swatch_copy_15-12)"
                />
              </g>
              <g>
                <path
                  d="M198.76 394.66l-.94-3.83-.71.41.94 3.81c.46 1.85.69 3.75.69 5.66v3.25l.71-.39v-3.3c0-1.89-.24-3.78-.69-5.62z"
                  fill="url(#New_Gradient_Swatch_copy_14-11)"
                />
                <path
                  d="M197.11 391.24l-9.46-5.54.95 3.85c.46 1.85.69 3.74.69 5.64v3.26l9.46 5.52v-3.25c0-1.91-.23-3.81-.69-5.66l-.94-3.8z"
                  fill="url(#New_Gradient_Swatch_copy_14-12)"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_14-13)"
                  d="M187.65 385.7L197.11 391.24 197.81 390.83 188.34 385.29 187.65 385.7z"
                />
              </g>
            </g>
            <g>
              <path
                d="M241.06 384.23c-.23 0-.47-.07-.71-.21l-32.82-18.95c-.79-.46-1.41-1.62-1.41-2.65v-20.06c0-1.05.6-1.52 1.2-1.52.23 0 .47.07.71.21L240.85 360c.79.46 1.41 1.62 1.41 2.65v20.06c0 1.05-.6 1.52-1.2 1.52zm-33.75-42.38c-.11 0-.2.22-.2.52v20.06c0 .67.43 1.5.91 1.78l32.82 18.95c.11.06.18.07.21.07.11 0 .2-.22.2-.52v-20.06c0-.67-.43-1.5-.91-1.78l-32.82-18.95a.47.47 0 00-.21-.07z"
                fill="#a6abac"
              />
              <path
                d="M241.06 383.33c-.07 0-.16-.03-.26-.09l-32.82-18.95c-.52-.3-.96-1.16-.96-1.87v-20.06c0-.31.09-.61.3-.61.07 0 .16.03.26.09l32.82 18.95c.52.3.96 1.16.96 1.87v20.06c0 .31-.09.61-.3.61z"
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#linear-gradient-401)"
              />
              <path
                className="cls-102"
                d="M223.76 358.17L226.9 359.97 226.9 359.04 223.76 357.25 223.76 358.17z"
              />
              <path
                className="cls-102"
                d="M225.08 365.77L221.96 363.97 221.96 364.89 225.08 366.69 225.08 365.77z"
              />
              <path
                className="cls-102"
                d="M224.91 360.83L224.91 359.9 221.42 357.93 221.42 358.85 224.91 360.83z"
              />
              <path
                className="cls-102"
                d="M221.25 361.59L221.25 362.51 223.02 363.54 223.02 362.61 221.25 361.59z"
              />
              <path
                className="cls-102"
                d="M218.57 362.97L218.57 362.04 215.69 360.41 215.69 361.34 218.57 362.97z"
              />
              <path
                className="cls-102"
                d="M226.41 364.57L223.94 363.14 223.94 364.07 226.41 365.5 226.41 364.57z"
              />
              <path
                className="cls-102"
                d="M222.86 360.65L222.86 361.57 224.33 362.41 224.33 361.48 222.86 360.65z"
              />
              <path
                className="cls-102"
                d="M227.83 359.57L227.83 360.5 228.62 360.96 228.62 360.04 227.83 359.57z"
              />
              <path
                className="cls-102"
                d="M221.94 361.05L221.94 360.12 218.96 358.42 218.96 359.35 221.94 361.05z"
              />
              <path
                className="cls-102"
                d="M225.83 360.43L225.83 361.36 230.23 363.87 230.23 362.95 225.83 360.43z"
              />
              <path
                className="cls-102"
                d="M220.34 361.99L220.34 361.06 216.59 358.97 216.59 359.89 220.34 361.99z"
              />
              <path
                className="cls-102"
                d="M217.49 353.66L217.49 354.58 220.42 356.26 220.42 355.34 217.49 353.66z"
              />
              <path
                className="cls-102"
                d="M222.84 356.72L221.35 355.87 221.35 356.79 222.84 357.64 222.84 356.72z"
              />
              <path
                className="cls-102"
                d="M221.04 363.44L219.5 362.57 219.5 363.49 221.04 364.37 221.04 363.44z"
              />
              <path
                className="cls-102"
                d="M229.41 367.23L233.4 369.55 233.4 368.62 229.41 366.3 229.41 367.23z"
              />
              <path
                className="cls-102"
                d="M214.77 359.89L213.35 359.08 213.35 360 214.77 360.82 214.77 359.89z"
              />
              <path
                className="cls-102"
                d="M210.46 349.77L210.46 350.69 216.75 354.28 216.75 353.35 210.46 349.77z"
              />
              <path
                className="cls-102"
                d="M230.33 365.83L231.81 366.7 231.81 365.77 230.33 364.91 230.33 365.83z"
              />
              <path
                className="cls-102"
                d="M231.16 364.4L238.06 368.37 238.06 367.44 231.16 363.48 231.16 364.4z"
              />
              <path
                className="cls-102"
                d="M225.26 362.94L229.42 365.31 229.42 364.38 225.26 362.01 225.26 362.94z"
              />
              <path
                className="cls-102"
                d="M229.55 360.57L229.55 361.49 232.86 363.39 232.86 362.47 229.55 360.57z"
              />
              <path
                className="cls-102"
                d="M215.67 358.45L213.35 357.15 213.35 358.08 215.67 359.37 215.67 358.45z"
              />
              <path
                className="cls-102"
                d="M228.49 365.77L227.34 365.1 227.34 366.03 228.49 366.7 228.49 365.77z"
              />
              <path
                className="cls-102"
                d="M218.03 357.89L213.35 355.23 213.35 356.15 218.03 358.82 218.03 357.89z"
              />
              <path
                className="cls-102"
                d="M220.74 365.13L220.74 366.06 222.21 366.89 222.21 365.97 220.74 365.13z"
              />
              <path
                className="cls-102"
                d="M219.82 365.53L219.82 364.61 216.84 362.91 216.84 363.83 219.82 365.53z"
              />
              <path
                className="cls-102"
                d="M228.21 370.32L229.69 371.18 229.69 370.26 228.21 369.39 228.21 370.32z"
              />
              <path
                className="cls-102"
                d="M223.13 367.42L227.3 369.79 227.3 368.87 223.13 366.5 223.13 367.42z"
              />
              <path
                className="cls-102"
                d="M215.91 362.38L211.23 359.71 211.23 360.64 215.91 363.31 215.91 362.38z"
              />
              <path
                className="cls-102"
                d="M220.5 357.4L213.35 353.3 213.35 354.23 220.5 358.32 220.5 357.4z"
              />
            </g>
            <path
              className="cls-65"
              d="M262.03 508.78L246.76 518c-4.47 2.62-10.09 2.64-14.62.02l-95.8-55.49 23.01-13.45-25.38-14.79-14.57 8.52c-7.98 4.63-12.55 11.82-12.55 19.73 0 7.96 4.64 15.21 12.72 19.87l99.77 57.79c12.5 7.21 27.99 7.15 40.43-.15l27.57-16.52-25.31-14.75z"
            />
            <g>
              <path
                fill="url(#New_Gradient_Swatch_copy_5-51)"
                d="M704.67 487.38L704.67 491.01 678.45 475.98 678.45 472.34 704.67 487.38z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-52)"
                d="M704.65 487.38L704.65 491.01 709.72 487.96 709.72 484.35 704.65 487.38z"
              />
              <path
                fill="url(#linear-gradient-402)"
                d="M709.72 484.35L704.65 487.38 678.45 472.34 683.57 469.29 709.72 484.35z"
              />
              <g>
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-53)"
                  d="M709.62 480.78L709.62 484.42 683.4 469.38 683.4 465.74 709.62 480.78z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-54)"
                  d="M709.6 480.78L709.6 484.42 746.4 462.67 746.4 459.06 709.6 480.78z"
                />
                <path
                  fill="url(#linear-gradient-403)"
                  d="M746.4 459.06L709.6 480.78 683.4 465.74 720.24 444 746.4 459.06z"
                />
              </g>
            </g>
            <g>
              <path
                className="cls-57"
                d="M698.3 463.47c3.82 1.8 5.41.75 7.86-.66 2.44-1.41 3.46-2.7.61-4.09-2.79-1.36-5.43-.32-7.87 1.09-2.44 1.41-2.67 2.69-.59 3.67z"
              />
              <path
                d="M718.25 449.87c-1.27.29-4.81-.56-6.42-.69-1.7-.14-4.07-.4-4.07-.4s-.39 5.94-.46 6.89c-.07.95.1 2.01.13 2.34.03.33-.7.66-1.73 1.25-.43.25-2.01.79-2.67.65-.74-.16-.49-1.03.35-1.19.4-.07 1.34-.66 1.62-1.65.09-.3.65-1.23.07-3.72-.58-2.48-.79-5.58-.79-6.16s0-1.61 1.19-1.83 12.4-1.27 12.4-1.27l.37 5.77z"
                fill="url(#linear-gradient-404)"
              />
              <path
                className="cls-266"
                d="M707.38 457.32s.67.63.52 1.34c-.15.71-.55.76-.55 1.28v1.33l-.31.12-.34-.13v-2.04s-.82.22-1.59.8c-.78.58-1.74.63-2.3.35-.56-.29-1.59-1.73-1.32-2.01.27-.29 2.27.3 2.27.3s-.75.08-.87.46.54.87 1.06.64c.52-.23 1.09-.95 2.11-1.36s1.28-.93 1.34-1.08z"
              />
              <path
                className="cls-266"
                d="M707.16 457.91s.58.65.51 1.18c-.07.53-.49 1.19-.51 1.68s.02.87 0 .89-.36.04-.36.04l-.15-.12v-1.79s-.94-.1-1.44.27-1.92.65-2.52.39c-.6-.26-1.02-2.06-.96-2.33.06-.27 1.51.49 1.75.59.23.1.32.12.32.12s-.75-.21-.93.06c-.18.27 0 .87.59.97s1.33-.73 1.96-.95c.62-.22 1.58-.59 1.74-.99z"
              />
              <path
                d="M701.06 434.98a2.45 2.45 0 00-.7-.41c-.72-.23-2.13-.95-2.13-1.36s.51-1.41.51-1.41-1.39-1.28-1.44-1.41c-.05-.13.18-.31.57-.03s1.62 1.1 1.8 1.13c.18.03.51.08.51.08s-.44-.51-.51-.69c-.08-.18-.03-.49.18-.46.21.03.85 1 1.1 1.18.26.18.67 1.05.75 1.28.08.23.36.72.36.72s-.49 1.79-1 1.38z"
                fill="url(#linear-gradient-405)"
              />
              <path
                fill="url(#linear-gradient-406)"
                d="M702.25 433.6L701.93 433.24 700.59 434.72 700.99 434.98 702.25 433.6z"
              />
              <path
                d="M714.43 468.92c.35 0 .69-.09 1.01-.27l8.1-4.7c.36-.21.57-.58.57-1s-.22-.78-.59-.99l-7.88-4.41v-4.37c0-.24-.19-.43-.43-.43s-.43.19-.43.43v4.62c0 .16.08.3.22.37l8.1 4.53c.13.07.14.19.14.24 0 .05-.01.17-.14.25l-8.1 4.7c-.36.21-.8.21-1.15 0l-7.01-4.1v-11.8c0-.24-.19-.43-.43-.43s-.43.19-.43.43v12.04c0 .15.08.29.21.37l7.22 4.22c.31.18.66.28 1.01.28z"
                fill="url(#New_Gradient_Swatch_copy_15-13)"
              />
              <path
                className="cls-16"
                d="M714.5 468.56c.3 0 .6-.08.86-.23l8.1-4.7c.27-.16.43-.44.43-.75s-.17-.59-.44-.74l-8.03-4.49v-4.54c0-.08-.06-.14-.14-.14s-.14.06-.14.14v4.62c0 .05.03.1.07.12l8.1 4.53c.18.1.29.28.29.49 0 .21-.1.39-.28.5l-8.1 4.7c-.22.13-.47.19-.72.19s-.51-.07-.72-.2l-7.15-4.18v-11.96c0-.08-.06-.14-.14-.14s-.14.06-.14.14v12.04c0 .05.03.1.07.12l7.22 4.22c.26.15.56.24.87.24z"
              />
              <path
                d="M714.53 468.4c.28 0 .56-.07.8-.22l8.1-4.7c.23-.14.37-.38.37-.65s-.14-.51-.38-.64l-8.09-4.53v-4.6s-.01-.03-.03-.03-.03.01-.03.03v4.62s0 .02.01.02l8.1 4.53c.22.12.35.34.35.59 0 .25-.12.47-.34.6l-8.1 4.7c-.24.14-.5.21-.78.21s-.55-.07-.78-.21l-7.21-4.21v-12.03s-.01-.03-.03-.03-.03.01-.03.03v12.04l7.23 4.25c.25.14.53.22.81.22z"
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#Radial_Gradient_2-8)"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_15-14)"
                d="M714.98 456.69L714.98 457.56 705.24 451.93 705.24 451.03 714.98 456.69z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_15-15)"
                d="M714.98 456.69L714.98 457.56 724.52 452.02 724.52 451.12 714.98 456.69z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_14-14)"
                d="M714.98 456.15L714.98 457.03 705.24 451.4 705.24 450.49 714.98 456.15z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_14-15)"
                d="M714.98 456.15L714.98 457.03 724.52 451.49 724.52 450.58 714.98 456.15z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_14-16)"
                d="M724.52 450.58L714.98 456.15 705.24 450.49 714.79 444.94 724.52 450.58z"
              />
              <path
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#Radial_Gradient_2-9)"
                d="M715.04 455.9L713.82 455.62 705.24 450.49 715.04 455.9z"
              />
              <path
                d="M714.75 452.29c-1.27.29-4.81-.56-6.42-.69-1.7-.14-4.07-.4-4.07-.4s-.39 5.94-.46 6.89c-.07.95.1 2.01.13 2.34.03.33-.7.66-1.73 1.25-.43.25-2.01.79-2.67.65-.74-.16-.49-1.03.35-1.19.4-.07 1.34-.66 1.62-1.65.09-.3.65-1.23.07-3.72-.58-2.48-.79-5.58-.79-6.16s0-1.61 1.19-1.83 12.4-1.27 12.4-1.27l.37 5.77z"
                fill="url(#linear-gradient-407)"
              />
              <path
                d="M719.94 442.63s-2.04.98-3.28 1.11c-1.24.13-3.81.25-3.81.25s-3.25.61-3.7.77c-.41.15-2.87 2.06-3.19 2.35-.32.29-.37 1.8-.34 2.96.03 1.16-.11 1.46 1.01 1.85 1.11.4 6.24 1.65 10.29 0 4.31-1.74 4.55-3.76 4.55-4.76 0-1.96-1.53-4.55-1.53-4.55z"
                fill="url(#linear-gradient-408)"
              />
              <path
                d="M720.76 431.07c.77.79 1.77 4.76 2.17 5.5.4.74 1.69 2.75.26 3.63s-4.42 1.14-4.42 1.14.95-2.22 1.03-2.22 1.32-.61 1.32-.61l-1.51-3.6 1.14-3.84z"
                fill="url(#New_Gradient_Swatch_copy_20-10)"
              />
              <path
                d="M713.4 423.13c-.79.63-1.32 2.88-.82 4.42.5 1.53 1.16 1.67 1.43 1.8.26.13 1.08 1.48.77 2.09-.32.61 2.14.26 2.75-.24.61-.5.64-.71.64-.71s-.64-.98-.34-1.69 1.53-3.33 0-5.13c-1.53-1.8-3.65-1.14-4.42-.53z"
                fill="url(#linear-gradient-409)"
              />
              <path
                d="M717.95 430.35s1.53-.66 2.54.24.79 1.83.66 3.57c-.2 2.65-1.32 5.37-1.43 6.56-.11 1.19.9 2.67.9 2.67s-.48.74-3.15 1.01c-2.67.26-4.74-.4-4.74-.4s.26-2.99.23-3.79c-.03-.79-.82-1.98-.89-3.36-.08-1.38-.11-3.44.93-4.1a15.55 15.55 0 001.77-1.32s.87.19 1.93-.08c1.06-.26 1.24-1.01 1.24-1.01z"
                fill="url(#New_Gradient_Swatch_copy_20-11)"
              />
              <path
                className="cls-57"
                d="M712.97 440.22c-.03-.79-.82-1.98-.89-3.36-.07-1.23-.1-3 .63-3.84 1.08.07 2.54.37 2.65 1.28.14 1.22.16 5.71-.11 7.98-.1.85-.21 1.56-.31 2.12-1.33-.12-2.19-.4-2.19-.4s.26-2.99.23-3.79z"
              />
              <path
                d="M713 432.76c.83-.41 2-.12 2.3.95.32 1.14-.21 2.43-1.67 3.07-1.46.64-4.87 3.1-5.37 3.41-.5.32-1.32.9-2.36 0-1.03-.9-5.16-5.27-5.16-5.27l1.4-1.51s2.91 3.04 3.57 3.47c.66.42 1.3.82 1.3.82s5.03-4.47 5.98-4.95z"
                fill="url(#New_Gradient_Swatch_copy_20-12)"
              />
              <path
                d="M712.31 425.06s.74.66 1.24.87.37.61.32.93c0 0 .61.16.74.37s.4.61.11.98c-.29.37-1.09 1.23-.74 2.28.49 1.46-1.58 2.53-1.58 2.53s3.55 1.57 5.94.46c2.17-1.01 2.75-2.88 2.14-3.25-.61-.37-1.69-.56-1.46-3.94.15-2.2-1.64-4.08-4.1-3.92-3.18.21-2.62 2.7-2.62 2.7z"
                fill="url(#radial-gradient-25)"
              />
              <g>
                <path
                  d="M714.96 446.76l.95-3.87.71.42-.95 3.85c-.46 1.87-.7 3.79-.7 5.72v3.28l-.71-.39v-3.33c0-1.91.24-3.82.7-5.67z"
                  fill="url(#New_Gradient_Swatch_copy_14-17)"
                />
                <path
                  d="M716.62 443.31l9.55-5.6-.96 3.88c-.46 1.86-.69 3.78-.69 5.69v3.29l-9.55 5.57v-3.29c0-1.93.23-3.85.7-5.72l.95-3.84z"
                  fill="url(#New_Gradient_Swatch_copy_14-18)"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_14-19)"
                  d="M726.17 437.72L716.62 443.31 715.91 442.9 725.47 437.31 726.17 437.72z"
                />
                <path
                  style={{
                    mixBlendMode: "color-dodge"
                  }}
                  fill="url(#Radial_Gradient_2-10)"
                  d="M726.17 437.72L716.42 443.15 715.34 448.6 716.76 443.32 726.17 437.72z"
                />
              </g>
              <g>
                <path
                  className="cls-61"
                  d="M724.91 462.84L714.04 469.19 701.3 461.8 712.19 455.46 724.91 462.84z"
                />
                <path
                  className="cls-52"
                  d="M724.67 462.86L714.07 469.05 701.66 461.84 712.27 455.67 724.67 462.86z"
                />
                <path
                  className="cls-64"
                  d="M724.42 462.89L714.1 468.91 702.02 461.89 712.34 455.88 724.42 462.89z"
                />
                <path
                  className="cls-58"
                  d="M724.18 462.91L714.13 468.77 702.37 461.94 712.42 456.09 724.18 462.91z"
                />
                <path
                  className="cls-56"
                  d="M723.93 462.93L714.17 468.63 702.73 461.99 712.5 456.3 723.93 462.93z"
                />
                <path
                  className="cls-59"
                  d="M723.69 462.95L714.2 468.49 703.09 462.04 712.58 456.51 723.69 462.95z"
                />
                <path
                  className="cls-48"
                  d="M723.44 462.97L714.23 468.35 703.44 462.09 712.66 456.72 723.44 462.97z"
                />
                <path
                  className="cls-50"
                  d="M723.2 462.99L714.26 468.21 703.8 462.14 712.74 456.93 723.2 462.99z"
                />
                <path
                  className="cls-62"
                  d="M722.96 463.02L714.3 468.07 704.16 462.18 712.82 457.14 722.96 463.02z"
                />
                <path
                  className="cls-60"
                  d="M722.71 463.04L714.33 467.93 704.51 462.23 712.9 457.35 722.71 463.04z"
                />
                <path
                  className="cls-63"
                  d="M722.47 463.06L714.36 467.79 704.87 462.28 712.98 457.56 722.47 463.06z"
                />
                <path
                  className="cls-51"
                  d="M722.22 463.08L714.39 467.65 705.23 462.33 713.06 457.77 722.22 463.08z"
                />
              </g>
              <path
                className="cls-266"
                d="M703.88 459.74s.67.63.52 1.34c-.15.71-.55.76-.55 1.28v1.33l-.31.12-.34-.13v-2.04s-.82.22-1.59.8c-.78.58-1.74.63-2.3.35-.56-.29-1.59-1.73-1.32-2.01.27-.29 2.27.3 2.27.3s-.75.08-.87.46.54.87 1.06.64c.52-.23 1.09-.95 2.11-1.36 1.01-.41 1.28-.93 1.34-1.08z"
              />
            </g>
            <path
              d="M678.5 479.56l-24.57 14.43c-5.32 3.11-11.93 3.11-17.16.07l-56.37-33.43-13.01 22.05 56.42 33.46c13.28 7.72 29.76 7.7 43.04-.05l37.78-21.46v-3.6l-26.13-11.47z"
              fill="url(#linear-gradient-410)"
            />
            <path
              d="M678.5 475.89l-24.57 14.43c-5.32 3.11-11.93 3.11-17.16.07l-56.37-33.43-13.01 22.05 56.42 33.46c13.28 7.72 29.76 7.7 43.04-.05l37.78-21.46-26.13-15.07z"
              fill="url(#linear-gradient-411)"
            />
            <g>
              <path
                fill="url(#New_Gradient_Swatch_copy_5-55)"
                d="M533.99 529.38L582.67 501.39 582.67 357.4 533.99 385.39 533.99 529.38z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-56)"
                d="M486.01 501.39L534.01 529.38 534.01 385.39 486.01 357.44 486.01 501.39z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-57)"
                d="M486.01 501.39L534.01 529.38 534.01 385.39 486.01 357.44 486.01 501.39z"
              />
              <path
                fill="url(#linear-gradient-412)"
                d="M486.01 357.44L534.01 385.39 582.67 357.4 534.61 329.42 486.01 357.44z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-58)"
                d="M534.07 379.38L571.66 357.77 571.66 346.39 534.07 368 534.07 379.38z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-59)"
                d="M497.02 357.77L534.09 379.38 534.09 368 497.02 346.41 497.02 357.77z"
              />
              <path
                fill="url(#linear-gradient-413)"
                d="M497.02 346.41L534.09 368 571.66 346.39 534.55 324.78 497.02 346.41z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-60)"
                d="M534.15 361.88L560.59 346.68 560.59 335.68 534.15 350.88 534.15 361.88z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-61)"
                d="M508.09 346.68L534.16 361.88 534.16 350.88 508.09 335.7 508.09 346.68z"
              />
              <path
                fill="url(#linear-gradient-414)"
                d="M508.09 335.7L534.16 350.88 560.59 335.68 534.49 320.48 508.09 335.7z"
              />
              <g>
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-62)"
                  d="M534.22 344.88L550.75 335.38 550.75 324.5 534.22 334 534.22 344.88z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-63)"
                  d="M517.93 335.38L534.23 344.88 534.23 334 517.93 324.51 517.93 335.38z"
                />
                <path
                  fill="url(#linear-gradient-415)"
                  d="M517.93 324.51L534.23 334 550.75 324.5 534.43 315 517.93 324.51z"
                />
              </g>
              <g>
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-64)"
                  d="M512.49 537.36L530.17 527.73 530.17 468.2 512.49 477.83 512.49 537.36z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-65)"
                  d="M470.33 512.78L512.5 537.36 512.5 477.83 470.33 453.27 470.33 512.78z"
                />
                <path
                  fill="url(#linear-gradient-416)"
                  d="M470.33 453.27L512.5 477.83 530.17 468.2 487.98 443.62 470.33 453.27z"
                />
                <g>
                  <path
                    fill="url(#New_Gradient_Swatch_copy_5-66)"
                    d="M554.84 528.56L545.66 523.51 545.66 392.65 554.84 397.7 554.84 528.56z"
                  />
                  <path
                    fill="url(#New_Gradient_Swatch_copy_5-67)"
                    d="M578.21 514.92L554.82 528.56 554.82 397.7 578.21 384.08 578.21 514.92z"
                  />
                  <path
                    fill="url(#linear-gradient-417)"
                    d="M578.21 384.08L554.82 397.7 545.66 392.65 569.07 379.02 578.21 384.08z"
                  />
                </g>
              </g>
              <g>
                <path
                  fill="url(#linear-gradient-418)"
                  d="M572.13 393.15L575.28 391.31 575.28 516.54 572.13 518.38 572.13 393.15z"
                />
                <path
                  fill="url(#linear-gradient-419)"
                  d="M565.44 397.09L568.59 395.25 568.59 520.48 565.44 522.32 565.44 397.09z"
                />
                <path
                  fill="url(#linear-gradient-420)"
                  d="M558.75 401.02L561.9 399.19 561.9 524.42 558.75 526.26 558.75 401.02z"
                />
              </g>
              <path
                fill="url(#New_Gradient_Swatch_copy_5-68)"
                d="M534.25 310.25L534.25 327.48 539.6 324.4 534.25 310.25z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-69)"
                d="M534.25 310.25L534.25 327.48 528.97 324.4 534.25 310.25z"
              />
            </g>
            <g>
              <g className="cls-254">
                <path
                  className="cls-267"
                  d="M523.45 471.42c-2.06 0-3.92-.45-5.39-1.3l-16.29-9.41-16.29-9.41c-1.97-1.14-3.09-2.93-3.09-4.93 0-2.19 1.36-4.23 3.73-5.6l4.05-2.4c1.86-1.07 4.19-1.66 6.55-1.66 2.06 0 3.92.45 5.39 1.3l16.29 9.41 16.29 9.41c1.97 1.14 3.09 2.93 3.09 4.93 0 2.19-1.36 4.23-3.73 5.6l-4.05 2.4c-1.86 1.07-4.19 1.67-6.55 1.67z"
                />
                <path
                  className="cls-244"
                  d="M486.25 441.03l.84-.48c.07-.04 3.07-1.8 3.17-1.82 1.86-1.01 4.16-1.54 6.44-1.48.3 0 .6.03.89.06 1.54.13 3.22.67 4.36 1.32l16 9.24 15.98 9.23c1.43.82 2.63 2.22 3 3.59.1.37.17.74.19 1.12.12 2.11-1.16 4.14-3.51 5.5l-.84.48c-.07.04-3.07 1.8-3.17 1.82-1.86 1.01-4.16 1.54-6.44 1.48-.3 0-.6-.03-.89-.06-1.54-.13-3.22-.67-4.36-1.32l-16-9.24-15.98-9.23c-1.43-.82-2.63-2.22-3-3.59-.1-.37-.17-.74-.19-1.12-.11-2.11 1.16-4.14 3.51-5.5z"
                />
                <path
                  className="cls-237"
                  d="M486.4 441.27l.83-.45c.15-.09 2.95-1.7 3.13-1.74 1.86-.95 4.13-1.42 6.34-1.3.3.02.59.05.87.08 1.38.14 3.22.78 4.24 1.38l15.7 9.07 15.68 9.06c1.29.74 2.66 2.2 3.03 3.42.11.35.21.7.25 1.07.23 2.03-.95 4.04-3.3 5.4l-.83.45c-.15.09-2.95 1.7-3.13 1.74-1.86.95-4.13 1.41-6.34 1.3-.3-.02-.59-.05-.87-.08-1.38-.14-3.22-.78-4.24-1.38l-15.7-9.07-15.68-9.06c-1.29-.74-2.66-2.2-3.03-3.42-.11-.35-.21-.7-.25-1.07-.23-2.03.95-4.04 3.3-5.4z"
                />
                <path
                  className="cls-752"
                  d="M486.54 441.52l.82-.43c.22-.13 2.82-1.6 3.09-1.66 1.86-.89 4.1-1.3 6.23-1.12.29.02.57.08.85.11 1.22.15 3.22.9 4.13 1.43l15.41 8.9 15.37 8.88c1.14.66 2.7 2.18 3.07 3.26.11.34.24.66.31 1.01.35 1.96-.75 3.95-3.09 5.3l-.82.43c-.22.13-2.82 1.6-3.09 1.66-1.86.89-4.1 1.29-6.23 1.12-.29-.03-.57-.08-.85-.11-1.22-.15-3.22-.9-4.13-1.43l-15.41-8.9-15.37-8.88c-1.14-.66-2.7-2.18-3.07-3.26-.11-.34-.24-.66-.31-1.01-.35-1.96.75-3.95 3.09-5.3z"
                />
                <path
                  className="cls-319"
                  d="M486.68 441.77l.81-.4c.3-.17 2.69-1.51 3.05-1.58a12.18 12.18 0 016.12-.94c.28.03.55.1.82.14 1.07.15 3.22 1.02 4.01 1.48l15.12 8.74 15.07 8.7c1 .58 2.75 2.17 3.1 3.09.12.33.28.63.36.96.47 1.88-.55 3.86-2.88 5.2l-.81.4c-.3.17-2.69 1.51-3.05 1.58-1.86.82-4.07 1.16-6.12.94-.28-.03-.55-.1-.82-.14-1.07-.15-3.22-1.02-4.01-1.48l-15.12-8.74-15.07-8.7c-1-.58-2.75-2.17-3.1-3.09-.12-.33-.28-.63-.36-.96-.47-1.88.55-3.86 2.88-5.2z"
                />
                <path
                  className="cls-225"
                  d="M486.83 442.02l.81-.38c.37-.22 2.56-1.41 3.01-1.5 1.86-.76 4.04-1.05 6.01-.76.28.04.54.12.8.16.91.14 3.21 1.14 3.9 1.53l14.83 8.57 14.76 8.53c.86.49 2.81 2.14 3.14 2.93.13.31.32.59.42.9.59 1.81-.35 3.77-2.67 5.1l-.81.38c-.37.22-2.56 1.41-3.01 1.5-1.86.76-4.04 1.04-6.01.76-.27-.04-.54-.12-.8-.16-.91-.15-3.22-1.14-3.9-1.53l-14.83-8.57-14.76-8.53c-.86-.49-2.81-2.14-3.14-2.93-.13-.31-.32-.59-.42-.9-.59-1.81.35-3.77 2.67-5.1z"
                />
                <path
                  className="cls-698"
                  d="M486.97 442.26l.8-.35c.45-.26 2.43-1.31 2.97-1.42 1.86-.7 4.01-.92 5.91-.57.27.05.52.14.78.19.76.14 3.21 1.26 3.78 1.59l14.54 8.4 14.46 8.35c.71.41 3.01 2.07 3.17 2.76.2.27.36.55.48.84.72 1.73-.15 3.67-2.46 5.01l-.8.35c-.45.26-2.43 1.31-2.97 1.42-1.86.7-4.01.91-5.91.57-.27-.05-.52-.14-.78-.19-.76-.14-3.21-1.26-3.78-1.59l-14.54-8.4-14.46-8.35c-.71-.41-3.01-2.07-3.17-2.76-.2-.27-.36-.55-.48-.84-.72-1.73.15-3.67 2.46-5.01z"
                />
                <path
                  className="cls-474"
                  d="M487.11 442.51l.79-.32c.52-.3 2.3-1.21 2.93-1.34 1.86-.63 3.99-.8 5.8-.39.26.06.5.16.75.21.6.12 3.21 1.38 3.67 1.64l14.25 8.23 14.15 8.18c.57.33 3.08 2.04 3.21 2.6.22.25.4.52.54.79.84 1.66.05 3.58-2.24 4.91l-.79.32c-.52.3-2.3 1.21-2.93 1.34-1.86.63-3.98.78-5.8.39-.26-.06-.5-.16-.75-.21-.6-.12-3.21-1.38-3.67-1.64l-14.25-8.23-14.15-8.18c-.57-.33-3.08-2.04-3.21-2.6-.22-.25-.4-.52-.54-.79-.84-1.66-.05-3.58 2.24-4.91z"
                />
                <path
                  className="cls-624"
                  d="M487.25 442.76l.78-.3c.6-.35 2.17-1.11 2.89-1.26 1.86-.57 3.96-.67 5.69-.21.25.07.49.19.73.24.45.1 3.21 1.5 3.55 1.69l13.96 8.06 13.85 8c.43.25 3.15 2.02 3.24 2.43.24.23.44.48.59.73.97 1.58.26 3.49-2.03 4.81l-.78.3c-.6.35-2.17 1.11-2.89 1.26-1.86.57-3.95.66-5.69.21-.25-.07-.49-.19-.73-.24-.45-.1-3.21-1.5-3.55-1.69l-13.96-8.06-13.85-8c-.43-.25-3.15-2.02-3.24-2.43-.24-.23-.44-.48-.59-.73-.97-1.58-.26-3.49 2.03-4.81z"
                />
                <path
                  className="cls-1"
                  d="M487.4 443.01l.77-.27c.67-.39 2.04-1.01 2.85-1.18 1.86-.51 3.93-.54 5.59-.03.25.08.48.17.7.27.31.02 3.21 1.61 3.43 1.74l13.67 7.89 13.55 7.83c.29.16 3.22 1.99 3.28 2.27.26.21.48.44.65.68 1.11 1.5.46 3.4-1.82 4.71l-.77.27c-.67.39-2.04 1.01-2.85 1.18-1.86.51-3.92.53-5.59.03-.25-.08-.48-.17-.7-.27-.31-.02-3.21-1.61-3.43-1.74l-13.67-7.89-13.55-7.82c-.29-.16-3.22-1.99-3.28-2.27a3.45 3.45 0 01-.65-.68c-1.11-1.5-.46-3.4 1.82-4.71z"
                />
                <path
                  className="cls-744"
                  d="M487.54 443.25l.76-.25c.75-.43 1.91-.91 2.81-1.1 1.87-.45 3.9-.41 5.48.15.24.09.47.18.68.29.15.01 3.21 1.73 3.32 1.8l13.37 7.73 13.24 7.65c.14.08 3.28 1.96 3.31 2.1.28.19.51.4.71.62 1.24 1.41.66 3.3-1.61 4.61l-.76.25c-.75.43-1.91.91-2.81 1.1-1.87.45-3.9.41-5.48-.15-.24-.09-.47-.18-.68-.29-.15-.01-3.21-1.73-3.32-1.8l-13.37-7.73-13.24-7.65c-.14-.08-3.28-1.96-3.32-2.1-.28-.19-.51-.4-.71-.62-1.24-1.41-.66-3.3 1.61-4.61z"
                />
                <path d="M519.62 467.4l-16.29-9.41-16.29-9.41c-2.26-1.3-1.97-3.58.63-5.08l.75-.22c2.6-1.5 6.54-1.67 8.8-.36l16.29 9.41 16.29 9.41c2.26 1.3 1.97 3.58-.63 5.08l-.75.22c-2.6 1.5-6.54 1.67-8.8.36z" />
              </g>
              <path
                d="M522.93 466.43l-30.09-17.5c-2.76-1.59-4.99-5.86-4.99-9.54v-65.1c0-1.87-1.54-2.28-.61-2.95.04-.03 2.18-1 2.22-1.02 1-.38 2.07-.55 3.38.2l30.09 17.5c2.76 1.59 4.99 5.86 4.99 9.54v65.1c0 1.95-.63 3.35-1.64 3.98-.06.04-2.65 1.27-2.71 1.29-.89.3.56-.8-.64-1.5z"
                fill="url(#linear-gradient-421)"
              />
              <path
                d="M521.03 467.3l-30.09-17.5c-2.76-1.59-4.99-5.86-4.99-9.54v-65.1c0-3.68 2.24-5.37 4.99-3.77l30.09 17.5c2.76 1.59 4.99 5.86 4.99 9.54v65.1c0 3.68-2.24 5.37-4.99 3.77z"
                style={{
                  mixBlendMode: "screen"
                }}
                fill="url(#radial-gradient-26)"
                opacity={0.6}
              />
              <path
                className="cls-102"
                d="M520.59 467.54l-30.09-17.5c-2.76-1.59-4.99-5.86-4.99-9.54v-65.1c0-3.68 2.24-5.37 4.99-3.77l30.09 17.5c2.76 1.59 4.99 5.86 4.99 9.54v65.1c0 3.68-2.24 5.37-4.99 3.77z"
              />
              <path
                d="M486.19 440.93v-65.18c0-3.22 1.96-4.7 4.38-3.31l29.96 17.42c2.42 1.4 4.38 5.14 4.38 8.36v65.18c0 3.22-1.96 4.7-4.38 3.31l-29.96-17.42c-2.42-1.4-4.38-5.14-4.38-8.36z"
                fill="url(#New_Gradient_Swatch_copy_11-2)"
              />
              <path
                d="M487.16 434.69v-58.21c0-2.7 1.64-3.94 3.66-2.77l29.45 17.12c2.02 1.17 3.66 4.3 3.66 7v58.21c0 2.7-1.64 3.94-3.66 2.77l-29.45-17.12c-2.02-1.17-3.66-4.3-3.66-7z"
                fill="url(#New_Gradient_Swatch_copy_5-70)"
              />
              <path
                d="M491.1 374.43c-1.91-1.1-3.45-.22-3.45 1.97v58.94c0 2.19 1.55 4.85 3.45 5.96l28.9 16.8c1.91 1.1 3.45.22 3.45-1.97v-58.94c0-2.19-1.55-4.85-3.45-5.96l-28.9-16.8z"
                fill="url(#linear-gradient-422)"
              />
              <path
                className="cls-51"
                d="M519.99 391.24l-28.9-16.8c-1.91-1.1-3.45-.22-3.45 1.97v58.94c0 2.19 1.55 4.85 3.45 5.96l28.9 16.8c1.91 1.1 3.45.22 3.45-1.97V397.2c0-2.19-1.55-4.85-3.45-5.96zm3.15 64.89c0 .68-.16 1.24-.46 1.61-.28.35-.67.53-1.14.53-.42 0-.91-.15-1.4-.43l-28.9-16.8c-1.82-1.05-3.3-3.61-3.3-5.69v-58.94c0-1.32.61-2.14 1.6-2.14.42 0 .91.15 1.4.43l28.9 16.8c1.82 1.05 3.3 3.61 3.3 5.69v58.94z"
              />
              <path
                d="M507.34 455.3c0 1.28-.9 1.8-2.02 1.15-1.12-.64-2.02-2.2-2.02-3.49s.9-1.8 2.02-1.15 2.02 2.21 2.02 3.49z"
                style={{
                  mixBlendMode: "multiply"
                }}
                fill="#716dc7"
              />
              <path
                className="cls-102"
                d="M504.41 451.54c.27 0 .58.09.91.28 1.12.64 2.02 2.21 2.02 3.49 0 .91-.45 1.43-1.11 1.43-.27 0-.58-.09-.91-.28-1.12-.64-2.02-2.21-2.02-3.49 0-.91.45-1.43 1.11-1.43zm0-.44c-.93 0-1.56.75-1.56 1.87 0 1.44.98 3.14 2.24 3.87.39.22.77.34 1.13.34.93 0 1.56-.75 1.56-1.87 0-1.44-.98-3.14-2.24-3.87-.39-.22-.77-.34-1.13-.34z"
              />
              <path
                d="M490.46 415.76l2.85 1.64v-6.54l-2.85-1.64v6.54zm27.07 11.81v3.81l2.85 1.65v-3.81l-2.85-1.65zm-22.56-9.21l2.85 1.64v-11.99l-2.85-1.65v11.99zm4.51 2.6l2.85 1.64v-17.44l-2.85-1.65v17.44zm4.51 2.6l2.85 1.65v-8.17l-2.85-1.64v8.17zm4.51 2.6l2.85 1.64v-14.26l-2.85-1.64v14.26zm4.51 2.6l2.85 1.64v-10.72l-2.85-1.65v10.72z"
                style={{
                  mixBlendMode: "screen"
                }}
                fill="url(#linear-gradient-423)"
              />
            </g>
            <path
              className="cls-65"
              d="M335.75 405.78l4.8 48.33 120.99 72.13c10.94 6.31 24.16 7.05 35.63 2.25 1.64-.69 8.83-55.29 8.83-55.29s-31.13 12.28-35.67 9.67l.08 18.85-104.12-62.34-5.31-48.65-25.24 15.06z"
            />
            <path
              d="M392.27 457.56l54.53 31.9c12.5 7.21 27.99 7.15 40.43-.15l18.78-11.23-.03-4.02-25.28-10.73-6.48 3.93c-4.47 2.62-10.09 2.64-14.62.02l-42.09-24.78-25.22 11.16-.02 3.9z"
              fill="url(#linear-gradient-424)"
            />
            <path
              d="M392.27 453.56l54.53 31.9c12.5 7.21 27.99 7.15 40.43-.15l18.78-11.23-25.31-14.76-6.48 3.93c-4.47 2.62-10.09 2.64-14.62.02l-42.09-24.78-25.24 15.06z"
              fill="url(#linear-gradient-425)"
            />
            <path
              d="M300.55 496.07l-14.58 8.11c-4.08 2.39-9.21 2.41-13.35.02l-129.48-75.15 11.36-6.86.02-3.6-23.18-9.9-3.66 2.35c-7.28 4.23-11.45 10.79-11.46 18.01 0 7.27 4.23 13.88 11.61 18.14l133.11 77.25c11.41 6.58 25.54 6.53 36.89-.13l24.66-15.45-.03-3.93-21.93-8.86z"
              fill="url(#linear-gradient-426)"
            />
            <path
              d="M300.55 492.16l-14.58 8.11c-4.08 2.39-9.21 2.41-13.35.02l-129.48-75.15 11.36-6.86-23.16-13.5-3.66 2.35c-7.28 4.23-11.45 10.79-11.46 18.01 0 7.27 4.23 13.88 11.61 18.14l133.11 77.25c11.41 6.58 25.54 6.53 36.89-.13l24.66-15.45-21.96-12.79z"
              fill="url(#linear-gradient-427)"
            />
            <path
              d="M154.38 395.03v23.26l-23.5-13.19v-21.26c0-6.58 7.14-10.69 12.83-7.37a21.48 21.48 0 0110.67 18.56z"
              fill="url(#New_Gradient_Swatch_copy_21-79)"
            />
            <path
              d="M130.88 405.09l23.5 13.19v-23.26c0-1.14-.1-2.27-.28-3.37l-23.22 13.39v.05z"
              opacity={0.8}
              fill="url(#linear-gradient-428)"
            />
            <g>
              <path
                fill="url(#linear-gradient-429)"
                d="M383.65 402.42L380.6 400.65 380.6 420.28 383.65 422.06 383.65 402.42z"
              />
              <path
                fill="url(#linear-gradient-430)"
                d="M390.13 406.24L387.08 404.46 387.08 424.09 390.13 425.87 390.13 406.24z"
              />
              <path
                fill="url(#linear-gradient-431)"
                d="M396.61 410.05L393.56 408.28 393.56 427.91 396.61 429.69 396.61 410.05z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-71)"
                d="M377.03 430.22L377.03 433.83 403.01 418.92 403.01 415.32 377.03 430.22z"
              />
              <path
                fill="url(#New_Gradient_Swatch_copy_5-72)"
                d="M377.05 430.22L377.05 433.83 372.02 430.8 372.02 427.22 377.05 430.22z"
              />
              <path
                fill="url(#linear-gradient-432)"
                d="M372.02 427.22L377.05 430.22 403.01 415.32 397.94 412.3 372.02 427.22z"
              />
              <g>
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-73)"
                  d="M382.11 436.82L382.11 440.43 408.09 425.52 408.09 421.92 382.11 436.82z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-74)"
                  d="M382.14 436.82L382.14 440.43 377.11 437.4 377.11 433.82 382.14 436.82z"
                />
                <path
                  fill="url(#linear-gradient-433)"
                  d="M377.11 433.82L382.14 436.82 408.09 421.92 403.02 418.89 377.11 433.82z"
                />
              </g>
              <g>
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-75)"
                  d="M387.17 443.44L387.17 447.04 413.15 432.14 413.15 428.54 387.17 443.44z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-76)"
                  d="M387.19 443.44L387.19 447.04 382.16 444.02 382.16 440.44 387.19 443.44z"
                />
                <path
                  fill="url(#linear-gradient-434)"
                  d="M382.16 440.44L387.19 443.44 413.15 428.54 408.08 425.51 382.16 440.44z"
                />
              </g>
              <g>
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-77)"
                  d="M392.25 450.04L392.25 453.64 418.23 438.74 418.23 435.14 392.25 450.04z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-78)"
                  d="M392.27 450.04L392.27 453.64 387.25 450.62 387.25 447.04 392.27 450.04z"
                />
                <path
                  fill="url(#linear-gradient-435)"
                  d="M387.25 447.04L392.27 450.04 418.23 435.14 413.16 432.11 387.25 447.04z"
                />
              </g>
              <g>
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-79)"
                  d="M372.12 423.69L372.12 427.29 398.1 412.39 398.1 408.78 372.12 423.69z"
                />
                <path
                  fill="url(#New_Gradient_Swatch_copy_5-80)"
                  d="M372.15 423.69L372.15 427.29 335.68 405.74 335.68 402.16 372.15 423.69z"
                />
                <path
                  fill="url(#linear-gradient-436)"
                  d="M335.68 402.16L372.15 423.69 398.1 408.78 361.6 387.24 335.68 402.16z"
                />
              </g>
            </g>
            <g>
              <path
                d="M273.84 472.92c.61 1.22 2.32 4.56 1.99 5.56-.33 1-1.88 1.36-2.63 1.36s.64-6.91.64-6.91z"
                fill="url(#New_Gradient_Swatch_copy_20-13)"
              />
              <path
                className="cls-254"
                d="M278.48 514.42c-1.58.93-3.77.5-5.97-.79-2.2-1.29-4.73-2.86-6.55-3.44-1.83-.58-3.11-1.33-2.61-1.95.5-.62 3.65-1.24 7.63.41 3.98 1.66 10.45 4.02 7.51 5.77z"
              />
              <path
                className="cls-266"
                d="M277.64 512.9s.24.92.06 1.31-1.03.7-1.72.37-.98-1.03-1.24-1.22c-.26-.18-1.72-.35-2.8-1.27s-.94-1.94.15-1.96c1.09-.02 3.06.48 3.76.94.7.46 1.79 1.83 1.79 1.83z"
              />
              <path
                d="M277.13 513.9c-.78.16-1.77-.52-2.23-.9-.46-.39-1.27-.18-2.32-1.01-1.05-.83-1.42-1.4-.94-1.68s2.23-.2 3.59.54c1.36.74 2.28 1.27 2.28 1.27s.33 1.01.17 1.24c-.17.22-.09.46-.53.55z"
                fill="url(#linear-gradient-437)"
              />
              <path
                d="M275.83 489.94s.32 4.06.87 7.14c.57 3.13.85 8.69.99 10.93s.92 4.99-.22 5.56c-.65.33-1.83.14-2.74-.91s-1.11-2.08-1-2.27c.11-.19.28-1.05-.08-2.91s-1.01-5.21-1.86-7.71c-.62-1.83-1.94-8.79-1.94-8.79l5.97-1.04z"
                fill="url(#New_Gradient_Swatch_copy_20-14)"
              />
              <path
                className="cls-266"
                d="M269.78 505.52s.79.99.4 1.4c-.38.41-1.06.81-1.75.76-.68-.05-1.02-.22-1.65 0s-3.49-.1-4.17-.53c-.68-.42-.45-1.27.74-1.6 1.19-.33 2.91-.79 3.24-.79s3.17.75 3.17.75z"
              />
              <path
                d="M269.56 506.54c-1.05.52-1.5.34-2.59.49-1.08.15-4.36.02-4.54-.65-.18-.66.53-.76 1.1-.91s2.39-.66 2.53-.71c.14-.05 3.49.22 3.49.22s.54.86.4 1.07c-.14.21-.12.34-.4.48z"
                fill="url(#linear-gradient-438)"
              />
              <path
                d="M269.85 493.8l-4.26 1.94s1.88 3.18 2.43 4.51c.55 1.33 2.16 5.31 1.55 5.78-.61.47-3.54.19-3.93-.11-.39-.3-.69-.97-.66-1.36.03-.39-.8-2.82-1.99-4.29-1.19-1.47-3.62-4.45-2.96-6.66.66-2.21 6.5-5.56 6.5-5.56l3.32 5.75z"
                fill="url(#New_Gradient_Swatch_copy_20-15)"
              />
              <path
                className="cls-54"
                d="M272.17 490.58c.17 2.81 1.02 8.7 1.59 11.35.62 2.9 1.86 7.29 1.47 8.91-.17.7-.24 1.43-.27 2.05a2.39 2.39 0 01-.22-.23c-.91-1.05-1.11-2.08-1-2.27.11-.19.28-1.05-.08-2.91s-1.01-5.21-1.86-7.71c-.62-1.83-1.94-8.79-1.94-8.79l2.31-.4zM269.85 493.8l-4.26 1.94s1.88 3.18 2.43 4.51c.55 1.33 2.16 5.31 1.55 5.78-.23.18-.81.25-1.45.25-.07-1.48-.29-3.89-1.01-5.22-1.08-1.99-3.94-5.23-3.94-5.23l5.39-4.27 1.29 2.24z"
              />
              <path
                d="M264.68 494.2c-.06.73-.33 1.41-.52 1.81-.22.46-.29.99-.54.9-.24-.09.07-2.22.07-2.22l.99-.49z"
                fill="url(#radial-gradient-27)"
              />
              <path
                d="M265.07 465.63c-.67.46-1.32 1.17-1.08 3 .23 1.83.35 2.71.75 2.89.4.18.64-.09.79.41.15.5.13 1.36.13 1.36l3.84-1.48s-.37-.6-.21-1.29c.16-.69 1.12-2.14-.04-3.89-1.15-1.75-3.38-1.53-4.17-.98z"
                fill="url(#radial-gradient-28)"
              />
              <path
                d="M263.77 467.41c.04.35.34.88.83.85.5-.04.82.51.75.8-.07.29.01.35.01.35s.34-.2.55.07c.21.27.08.92 0 1.17-.07.25.86.86 1.54.82.68-.05 1.58-.25 1.83-.64.24-.39 1.14-1.72.48-3.52-.66-1.8-2.54-2.66-4.08-2.12-1.54.55-1.98 1.73-1.93 2.23z"
                fill="url(#linear-gradient-439)"
              />
              <path
                d="M265.15 474.4s.21-1.56 1.08-1.88c.87-.32 1.67-.32 2.23-.69.56-.36.81-.92.81-.92s.72.09.3.78c-.42.7-4.42 2.71-4.42 2.71z"
                fill="url(#New_Gradient_Swatch_copy_3-7)"
              />
              <path
                d="M268.25 472.5c.78-.4 1.56-1.03 1.56-1.03s1.26-.21 2.01-.21 1.96.51 2.09 1.89c.13 1.38.09 3.18-.08 5.16-.17 1.98.05 3.37.68 5.23.63 1.86 2.46 5.88 2.43 6.35-.02.47-.82 2.25-3.09 3.44s-6.21 1.98-8.09.38-.74-8.26-1.11-11.38c-.37-3.12-1.69-4.25-.62-6.05 1.08-1.8 2.41-2.99 3.22-3.33.81-.34.99-.46.99-.46z"
                fill="url(#New_Gradient_Swatch_copy_20-16)"
              />
              <path
                className="cls-54"
                d="M265.05 474.53c.31-.57.97-1.37 1.67-1.57.7-.2 2.03-.68 2.44-1.08.47-.46.48-.8.48-.8l1.13.24s.28 1.26-1.15 1.94c-1.43.68-3.12.91-4.11 1.7-.94.75-1.48 1.43-1.48 1.43l1.03-1.85z"
              />
              <path
                d="M265.05 474.53c.31-.57.97-1.37 1.67-1.57.7-.2 2.03-.68 2.44-1.08.47-.46.48-.8.48-.8l1.13.24s.14 1.04-1.29 1.72c-1.43.68-3.36 1.1-4.21 1.95s-1.25 1.4-1.25 1.4l1.03-1.85z"
                fill="url(#New_Gradient_Swatch_copy_20-17)"
              />
              <path
                d="M270.64 471.29c0 .21-.05 1.08-1.29 1.67-1.43.68-3.36 1.1-4.21 1.95-.32.32-.57.6-.77.82l-.36.65s.4-.54 1.25-1.4c.84-.85 2.78-1.27 4.21-1.95 1.43-.68 1.29-1.72 1.29-1.72l-.11-.02z"
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#Radial_Gradient_2-11)"
              />
              <path
                className="cls-54"
                d="M267.13 476.99c-1.25-1.37-2.55.07-3.46 1.26.17 1.03.75 2.19.98 4.1.37 3.12-.77 9.77 1.11 11.38.91.77 2.3.99 3.75.87-.23-.69-.47-1.53-.65-2.47-.51-2.65.07-4.25-.14-7.89-.21-3.64.04-5.46-1.59-7.25zM269.82 467.45c-.29.33-.82.74-1.76 1.06-.98.34-2 .33-2.74.25.04.11.06.22.04.3-.07.29.01.35.01.35s.34-.2.55.07.08.92 0 1.17c-.07.25.86.86 1.54.82.68-.05 1.58-.25 1.83-.64.23-.38 1.09-1.65.53-3.37z"
              />
              <path
                fill="url(#linear-gradient-440)"
                d="M267.05 499.93L267.05 507.52 267.96 506.99 267.96 499.38 267.05 499.93z"
              />
              <path
                fill="url(#linear-gradient-441)"
                d="M267.06 499.93L267.06 507.52 257.83 502.22 257.83 494.61 267.06 499.93z"
              />
              <path
                d="M262.87 502.62v.51c0 .19-.21.31-.37.22l-.7-.4a.463.463 0 01-.24-.41v-.38c0-.19.21-.31.37-.22l.82.47c.08.04.12.13.12.22z"
                fill="url(#New_Gradient_Swatch_copy_4-6)"
              />
              <path
                d="M267.06 499.93v2.31c0 .29-.24.53-.53.53h-3.75c-.41 0-.8-.19-1.06-.51l-3.43-4.3c-.29-.37-.46-.83-.46-1.3v-2.06l9.22 5.33z"
                fill="url(#linear-gradient-442)"
              />
              <path
                d="M267.06 499.93v2.31c0 .29-.24.53-.53.53h-3.75c-.41 0-.8-.19-1.06-.51l-3.43-4.3c-.29-.37-.46-.83-.46-1.3v-2.06l9.22 5.33z"
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#Radial_Gradient_2-12)"
              />
              <path
                fill="url(#linear-gradient-443)"
                d="M257.83 494.61L267.06 499.93 267.96 499.38 258.73 494.06 257.83 494.61z"
              />
              <path
                d="M263.59 495.3l-1.19-.69c-.29-.17-.56-.18-.75-.06l-.3.15.04.22c-.02.08-.03.18-.03.28v.77l.27.15.07.37.31-.16v-.7c0-.33.23-.46.52-.29l.94.54c.29.16.52.56.52.89v.7l.29.17.05.36.31-.16v-.77c0-.66-.46-1.45-1.03-1.78z"
                fill="url(#linear-gradient-444)"
              />
              <path
                d="M261.06 495.36v.77l.64.37v-.7c0-.33.23-.46.52-.29l.94.54c.29.16.52.56.52.89v.7l.64.37v-.77c0-.66-.46-1.45-1.03-1.78l-1.19-.69c-.57-.33-1.03-.07-1.03.59z"
                fill="url(#linear-gradient-445)"
              />
              <path
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#Radial_Gradient_2-13)"
                d="M267.08 502.5L267.15 499.98 267.96 499.38 267.03 499.79 260.72 496.28 266.95 499.94 267.08 502.5z"
              />
              <path
                d="M263.14 492.11s-1.03 1.27-1.5 2.13c-.25.46-.24.55-.13 1.5.05.45.14.77.38.8.11.01.04-.25.04-.25s.04.44.33.51c.29.07.14-.28.14-.28s.08.47.37.52.13-.32.13-.32.1.49.33.58c.23.08.27-.07.27-.41 0-.4.17-.75.53-1.38.38-.67.7-.98.66-1.61-.04-.64.48-1.17.48-1.17l-2.03-.62z"
                fill="url(#radial-gradient-29)"
              />
              <path
                d="M264.63 476.45c1.21-.63 2.58-.03 3.08 1.26.51 1.29.6 6.44.3 7.92-.3 1.48-2.54 8.25-2.54 8.25s-1.13.02-1.87-.19c-.74-.21-1.16-.8-1.16-.8s1.39-5.74 1.62-7.07c.23-1.32-.39-4.49-.47-5.93-.09-1.75-.12-2.82 1.05-3.44z"
                fill="url(#New_Gradient_Swatch_copy_20-18)"
              />
            </g>
            <g>
              <path
                className="cls-57"
                d="M496.21 469.67c-4.73 1.8-6.86.43-10.1-1.44-3.24-1.87-4.65-3.48-1.12-4.89 3.46-1.37 6.91.07 10.15 1.94 3.24 1.87 3.64 3.4 1.07 4.38z"
              />
              <path
                d="M495.69 446.73c.06.72.33 1.39.52 1.79.22.45.29.97.53.89.24-.09-.07-2.19-.07-2.19l-.98-.49z"
                fill="url(#radial-gradient-30)"
              />
              <path
                className="cls-266"
                d="M484.51 465.34s-.24.91-.05 1.29c.18.38 1.02.69 1.7.36.67-.33.97-1.02 1.22-1.2.26-.18 1.7-.35 2.77-1.26 1.08-.91.93-1.91-.15-1.93-1.08-.02-3.03.47-3.72.93s-1.77 1.8-1.77 1.8z"
              />
              <path
                d="M485.02 466.33c.77.16 1.75-.51 2.21-.89.46-.38 1.26-.18 2.3-1 1.04-.82 1.4-1.39.93-1.66-.47-.27-2.2-.2-3.55.53-1.35.73-2.25 1.25-2.25 1.25s-.33 1-.16 1.22.09.46.53.55z"
                fill="url(#linear-gradient-446)"
              />
              <path
                d="M485.01 443.33s-.57 2.46-.19 5.58c.38 3.12-.22 9.38-.36 11.6-.14 2.22-.91 4.94.22 5.5.65.32 1.8.14 2.71-.9.9-1.04 1.09-2.05.98-2.24-.11-.19-.27-1.04.08-2.87.36-1.83 1.07-6.29 1.01-7.74s-.57-8.26-.57-8.26l-3.88-.66z"
                fill="url(#New_Gradient_Swatch_copy_20-19)"
              />
              <path
                className="cls-54"
                d="M489.47 452.24c.05 1.45-.66 5.91-1.01 7.74-.36 1.83-.19 2.68-.08 2.87.11.19-.08 1.2-.98 2.24-.35.41-.75.68-1.13.85.39-.74.97-2.25.97-4.76 0-3.77.78-8.58.89-11.21.06-1.54-.3-4.44-.3-6.31l1.07.32s.52 6.81.57 8.26z"
              />
              <path
                className="cls-266"
                d="M490.23 468.59s-.4 1.19.09 1.44c.49.26 1.26.4 1.88.13s.88-.55 1.53-.55 3.21-1.26 3.7-1.88c.49-.62 0-1.33-1.22-1.24s-2.97.24-3.28.35c-.31.11-2.7 1.75-2.7 1.75z"
              />
              <path
                d="M490.78 469.46c1.15.13 1.51-.18 2.57-.4 1.06-.22 4.06-1.44 4.01-2.11-.05-.67-.75-.53-1.33-.48s-2.44.18-2.59.18-3.17 1.37-3.17 1.37-.22.98-.02 1.13c.2.15.22.27.53.31z"
                fill="url(#linear-gradient-447)"
              />
              <path
                d="M488.57 444.15s-.68 1.48-.03 4.02c.66 2.54 1.42 5.55 1.45 8.78.03 3.23-.36 11.57.14 12.03s2.22.62 2.93.11c1.14-.84 1.75-2.02 1.64-2.43s-.98-1.89-.68-3.2c.3-1.31 1.31-5.85 1.12-8.94-.19-3.09-.71-11.16-.71-11.16l-5.85.79z"
                fill="url(#New_Gradient_Swatch_copy_20-20)"
              />
              <path
                d="M491.36 418.63c.73.35 1.46.95 1.49 2.77.04 1.82.05 2.7-.31 2.94s-.64 0-.71.51c-.07.51.07 1.35.07 1.35l-3.97-.89s.27-.64.02-1.29c-.26-.66-1.4-1.93-.53-3.81.88-1.88 3.08-1.99 3.94-1.57z"
                fill="url(#radial-gradient-31)"
              />
              <path
                d="M492.9 420.18c.01.35-.2.91-.69.95-.49.04-.73.62-.62.89.11.27.04.35.04.35s-.36-.15-.53.15c-.16.29.05.91.16 1.15.11.24-.71.97-1.39 1.02-.67.05-1.59-.02-1.88-.36-.29-.35-1.37-1.51-.98-3.37.38-1.86 2.1-2.97 3.68-2.66 1.59.31 2.19 1.4 2.21 1.9z"
                fill="url(#linear-gradient-448)"
              />
              <path
                d="M492.56 427.23s-.43-1.5-1.33-1.68c-.89-.18-1.68-.07-2.28-.35-.6-.27-.93-.79-.93-.79s-.69.19-.18.81c.51.62 4.71 2 4.71 2z"
                fill="url(#New_Gradient_Swatch_copy_3-8)"
              />
              <path
                className="cls-54"
                d="M492.36 443.63l2.06-.28s.52 8.07.71 11.16c.19 3.09-.82 7.63-1.12 8.94-.3 1.31.57 2.79.68 3.2.1.37-.4 1.39-1.35 2.2.15-1.73 0-3.53-.1-4.75-.12-1.42.95-6.58.65-9.66-.26-2.68-1.28-9.17-1.54-10.81z"
              />
              <path
                d="M489.25 425.82c-.82-.27-1.68-.78-1.68-.78s-1.26-.02-1.99.09-1.84.78-1.77 2.15c.07 1.37.37 3.12.82 5.03.46 1.91.44 3.3.09 5.21-.35 1.91-1.55 6.11-1.46 6.56.09.46 1.13 2.08 3.52 2.92 2.39.84 6.36 1.04 7.97-.8 1.6-1.84-.47-8.18-.56-11.28-.09-3.1 1.04-4.4-.27-6-1.31-1.6-2.79-2.57-3.63-2.79-.84-.22-1.04-.31-1.04-.31z"
                fill="url(#New_Gradient_Swatch_copy_20-21)"
              />
              <path
                className="cls-54"
                d="M492.68 427.33c-.38-.51-1.15-1.2-1.86-1.29-.71-.09-2.08-.37-2.54-.71-.52-.39-.58-.71-.58-.71l-1.07.4s-.09 1.27 1.4 1.73c1.49.46 3.18.43 4.27 1.07 1.02.6 1.66 1.18 1.66 1.18l-1.28-1.66z"
              />
              <path
                d="M492.68 427.33c-.38-.51-1.15-1.2-1.86-1.29-.71-.09-2.08-.37-2.54-.71-.52-.39-.58-.71-.58-.71l-1.07.4s.01 1.04 1.51 1.5 3.45.58 4.39 1.29c.95.71 1.42 1.19 1.42 1.19l-1.28-1.66z"
                fill="url(#New_Gradient_Swatch_copy_20-22)"
              />
              <path
                d="M486.74 424.97c.02.21.2 1.05 1.51 1.45 1.49.46 3.45.58 4.39 1.29.36.27.65.5.87.69l.45.58s-.47-.47-1.42-1.19c-.95-.71-2.9-.84-4.39-1.29-1.49-.46-1.51-1.5-1.51-1.5l.11-.04z"
                style={{
                  mixBlendMode: "color-dodge"
                }}
                fill="url(#Radial_Gradient_2-14)"
              />
              <path
                className="cls-54"
                d="M490.99 430.04c1.02-1.52 2.5-.3 3.56.73-.02 1.03-.42 2.25-.36 4.15.09 3.1 2.17 9.44.56 11.28-.77.89-2.1 1.3-3.54 1.4.12-.71.23-1.56.28-2.51.12-2.67-.68-4.15-1.01-7.73-.33-3.58-.83-5.33.5-7.32zM486.98 421.1c.33.28.91.6 1.88.78 1.01.19 2 .03 2.72-.16-.03.11-.03.22 0 .3.11.27.04.35.04.35s-.36-.15-.53.15.05.91.16 1.15c.11.24-.71.97-1.39 1.02-.67.05-1.59-.02-1.88-.36-.28-.34-1.3-1.45-1.01-3.22z"
              />
              <path
                d="M497.21 444.67s1.02 1.25 1.49 2.11c.25.46.24.54.13 1.49-.05.44-.14.76-.38.79-.11.01-.04-.25-.04-.25s-.04.43-.33.5c-.29.07-.14-.28-.14-.28s-.08.46-.37.52c-.29.05-.13-.32-.13-.32s-.1.49-.33.57c-.23.08-.27-.07-.27-.4 0-.39-.17-.74-.52-1.37-.38-.67-.69-.96-.65-1.59.04-.63-.48-1.16-.48-1.16l2-.61z"
                fill="url(#radial-gradient-32)"
              />
              <path
                d="M493.36 429.15c-1.27-.44-2.52.34-2.83 1.68-.31 1.33.35 6.38.86 7.78.51 1.4 3.68 7.69 3.68 7.69s1.11-.15 1.8-.46c.69-.31 1.02-.95 1.02-.95s-2.19-5.41-2.61-6.67c-.42-1.26-.27-4.45-.4-5.87-.16-1.73-.29-2.78-1.52-3.21z"
                fill="url(#New_Gradient_Swatch_copy_20-23)"
              />
            </g>
            <g>
              <path
                fill="url(#linear-gradient-449)"
                d="M433.23 369.74L433.23 394.4 454.84 381.8 454.84 357.14 433.23 369.74z"
              />
              <path
                fill="url(#linear-gradient-450)"
                d="M433.24 369.74L433.24 394.4 411.57 381.76 411.57 357.12 433.24 369.74z"
              />
              <path
                fill="url(#linear-gradient-451)"
                d="M411.57 357.12L433.24 369.74 454.84 357.14 433.14 344.5 411.57 357.12z"
              />
            </g>
          </g>
          <g id="flash">
            <path
              fill="#ffd9ad"
              d="M422.52 357.06L433.12 363.23 443.86 357.05 433.25 350.87 422.52 357.06z"
            />
            <path
              style={{
                mixBlendMode: "screen"
              }}
              fill="url(#linear-gradient-452)"
              d="M0 0L413.77 357.28 435.04 369.67 456.6 357.26 866 0"
            />
            <path
              style={{
                mixBlendMode: "screen"
              }}
              opacity={0.5}
              fill="url(#linear-gradient-453)"
              d="M35 0L422.23 356.99 433.11 363.33 444.14 356.98 831 0"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)
}

export default SvgComponent
