import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/domino_laying.gif';
import porfolioImage2 from '../images/portfolio/bank_sim.gif';
import porfolioImage3 from '../images/portfolio/cuteness_classifier.gif';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Daniel Augustin | Portfolio',
  description: 'Personal portfolio of Daniel Augustin — Engineer, Computer Scientist, and Robotics enthusiast.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Daniel Augustin.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Boston-based <strong className="text-stone-100">Software & Robotics Engineer</strong>, currently pursuing
        a <strong className="text-stone-100">Masters in Robotics at Northwestern University</strong> and formerly an SDE
        at <strong className="text-stone-100">Amazon (AWS Redshift)</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I hold a triple degree in <strong className="text-stone-100">Computer Science, Mechanical Engineering, and Applied Mathematics</strong>{' '}
        from UMass Amherst. I'm passionate about leveraging technology to create{' '}
        <strong className="text-stone-100">meaningful and impactful change</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As an enthusiastic Engineer, whenever I look at something I find myself thinking about how it can be improved 
  to make the user's life easier and better. Being both an engineer and a computer scientist allows me to think more freely 
  and evaluate whether a hardware or software change is the right path forward. My goal is to push the boundaries of technology 
  through collaboration with like-minded professionals.`,
  aboutItems: [
    {label: 'Location', text: 'Boston, MA', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American / African', Icon: FlagIcon},
    {label: 'Interests', text: 'Robotics, Machine Learning, Cloud Computing', Icon: SparklesIcon},
    {label: 'Study', text: 'Northwestern University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Amazon (formerly)', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken Languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 9,
      },
      {
        name: 'French',
        level: 9,
      },
      {
        name: 'Creole',
        level: 9,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'C / C++',
        level: 8,
      },
      {
        name: 'JavaScript / TypeScript',
        level: 7,
      },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      {
        name: 'AWS (EC2, S3, Lambda, EMR)',
        level: 9,
      },
      {
        name: 'CloudWatch / CloudFormation',
        level: 8,
      },
      {
        name: 'Databases & SQL',
        level: 8,
      },
      {
        name: 'Agile / DevOps',
        level: 7,
      },
    ],
  },
  {
    name: 'Engineering & Robotics',
    skills: [
      {
        name: 'ROS2',
        level: 8,
      },
      {
        name: 'MATLAB',
        level: 7,
      },
      {
        name: 'SOLIDWORKS',
        level: 6,
      },
      {
        name: 'ANSYS',
        level: 5,
      },
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Domino Hands',
    description: 'A robotics project using computer vision and ROS2 to autonomously stack and lay dominos using a robot arm.',
    url: 'https://github.com/AfricanDaniel/final-project-africanpanda',
    image: porfolioImage1,
  },
  {
    title: 'Bank Simulator',
    description: 'A distributed bank server allowing users worldwide to open accounts, withdraw, and deposit money with full transaction history stored in a database. Built in C++.',
    url: 'https://github.com/AfricanDaniel',
    image: porfolioImage2,
  },
  {
    title: 'Cuteness Classifier',
    description: 'A machine learning model trained to classify dog and cat images and rank their cuteness, comparing AI ratings against human rankings. Built in Python.',
    url: 'https://github.com/AfricanDaniel',
    image: porfolioImage3,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2025 – 2026',
    location: 'Northwestern University — Evanston, IL',
    title: 'Master of Science in Robotics',
    content: (
      <p>
        Focused on robotics systems, control theory, and intelligent autonomous agents. Building on a strong
        foundation in mechanical engineering and computer science to push the boundaries of modern robotics.
      </p>
    ),
  },
  {
    date: '2019 – 2023',
    location: 'University of Massachusetts Amherst — Amherst, MA',
    title: 'B.S. Triple Degree: Computer Science, Mechanical Engineering & Applied Mathematics',
    content: (
      <p>
        Minor in Business. Coursework included Algorithm Design & Analysis, Natural Language Processing, AI & Machine
        Learning, DBMS Querying, Robotics, Information Retrieval, and Algorithms in Data Science.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2023 – August 2024',
    location: 'Amazon — California',
    title: 'Software Development Engineer — AWS Redshift',
    content: (
      <p>
        Worked with Databases, EC2s, Clusters, and DevOps pipelines to add new functionalities to AWS Redshift.
        Created and integrated APIs with Step Functions to process customer requests. Used CloudWatch to monitor
        EC2, CPU memory, RDS, and EBS volumes. Operated in a large-scale Agile environment delivering impactful
        features for AWS customers.
      </p>
    ),
  },
  {
    date: 'June 2022 – September 2022',
    location: 'Amazon — Virginia',
    title: 'SDE Intern — AWS',
    content: (
      <p>
        Worked with a multitude of AWS tools including EMR/EC2, S3, Lambda, CloudFormation, EventBridge, CloudWatch,
        and DevTools. Developed new data partitioning strategies for customer databases to improve query performance,
        and provided technical insights through developer tooling.
      </p>
    ),
  },
  {
    date: 'July 2018 – August 2019',
    location: 'YMCA — Massachusetts',
    title: 'Zero Robotics Coach',
    content: (
      <p>
        Organized and mentored a student robotics team competing in MIT's Zero Robotics competition. Served as
        technical lead and support for the full competition season, guiding programming strategy to help the team
        succeed.
      </p>
    ),
  },
];

/**
 * Stats section
 */
export const statData = [
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

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out whether you have a project in mind, a question, or just want to connect!',
  items: [
    {
      type: ContactType.Email,
      text: 'danielaugustin300@gmail.com',
      href: 'mailto:danielaugustin300@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Boston, MA / Evanston, IL',
      href: 'https://www.google.com/maps/place/Evanston,+IL',
    },
    {
      type: ContactType.Github,
      text: 'AfricanDaniel',
      href: 'https://github.com/AfricanDaniel',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/AfricanDaniel'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/danielaugustin300/'},
];
