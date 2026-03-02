/* eslint-disable react/jsx-sort-props */
import {FC, memo, useEffect, useRef, useState} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const statData = [
  {
    title: 'Degrees Earned',
    value: 3,
    description: 'CS, Mechanical Engineering, and Applied Math',
  },
  {
    title: 'Years of Cloud/AWS Experience',
    value: 2,
    description: 'EC2, Redshift, S3, CloudWatch',
  },
  {
    title: 'Robotics Projects',
    value: 12,
    description: 'ROS2, Computer Vision, Autonomous Navigation',
  },
  {
    title: 'Lines of Code Written',
    value: 500000,
    description: 'Python, C++, Java, TypeScript',
  },
];

const useCountUp = (target: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
};

const StatItem: FC<{title: string; value: number; description: string; animate: boolean}> = memo(
  ({title, value, description, animate}) => {
    const count = useCountUp(value, 2000, animate);
    return (
      <div className="flex flex-col items-center gap-y-2 text-center">
        <span className="text-4xl font-bold text-orange-500">
          {count.toLocaleString()}
          {value >= 100000 ? '+' : ''}
        </span>
        <span className="text-lg font-semibold text-white">{title}</span>
        <span className="text-sm text-neutral-400">{description}</span>
      </div>
    );
  },
);

StatItem.displayName = 'StatItem';

const Stats: FC = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {threshold: 0.3},
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section className="bg-neutral-900" sectionId={SectionId.Stats}>
      <div ref={ref} className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">By the Numbers</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {statData.map(stat => (
            <StatItem
              key={stat.title}
              animate={animate}
              description={stat.description}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>
      </div>
    </Section>
  );
});

Stats.displayName = 'Stats';
export default Stats;
