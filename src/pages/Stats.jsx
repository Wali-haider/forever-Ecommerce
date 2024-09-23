import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import Title from '../component/Title';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once it’s in view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div ref={statsRef} className="my-20 text-center">
      <div className="text-xl mb-6">
        <Title text1="OUR" text2="STATS" />
      </div>
      <div className="flex flex-col md:flex-row justify-around gap-10">
        <div className="animate-fadeUp">
          <h2 className="text-3xl text-gray-800 font-bold">
            {isVisible && <CountUp end={10} duration={2} />}+
          </h2>
          <p className="text-gray-600">Years of Experience</p>
        </div>
        <div className="animate-fadeUp">
          <h2 className="text-3xl text-gray-800 font-bold">
            {isVisible && <CountUp end={500} duration={2} />}+
          </h2>
          <p className="text-gray-600">Satisfied Customers</p>
        </div>
        <div className="animate-fadeUp">
          <h2 className="text-3xl text-gray-800 font-bold">
            {isVisible && <CountUp end={1000} duration={2} />}+
          </h2>
          <p className="text-gray-600">Products Sold</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
