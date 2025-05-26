interface Achievement {
  title: string;
  description: string;
}

interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  responsibilities: string[];
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    company: 'TechInnovate Solutions',
    role: 'Senior Frontend Developer',
    type: 'Full-time',
    period: 'Jan 2023 - Present',
    location: 'San Francisco, CA (Remote)',
    responsibilities: [
      'Lead the development of a complex SaaS dashboard application using React, TypeScript, and Redux',
      'Collaborate with UX/UI designers to implement responsive, accessible interfaces',
      'Mentor junior developers and conduct code reviews',
      'Optimize application performance resulting in 40% faster load times',
      'Implement automated testing and CI/CD pipelines',
    ],
    achievements: [
      'Successfully led the migration from legacy codebase to modern React architecture',
      'Reduced bundle size by 35% through code splitting and lazy loading',
      'Implemented new design system that improved development velocity by 25%',
    ],
  },
  {
    company: 'DataViz Corp',
    role: 'Frontend Developer',
    type: 'Full-time',
    period: 'Mar 2021 - Dec 2022',
    location: 'Boston, MA (Hybrid)',
    responsibilities: [
      'Developed interactive data visualization dashboards using D3.js and React',
      'Built responsive web applications with complex UI requirements',
      'Collaborated with backend developers to design and implement RESTful APIs',
      'Participated in agile development processes with 2-week sprint cycles',
      'Conducted user testing and implemented feedback',
    ],
    achievements: [
      'Created a custom charting library that reduced development time for new visualizations by 60%',
      'Implemented accessibility improvements that brought the application to WCAG AA compliance',
    ],
  },
  {
    company: 'WebCreate Studio',
    role: 'Junior Web Developer',
    type: 'Full-time',
    period: 'Jul 2019 - Feb 2021',
    location: 'New York, NY (On-site)',
    responsibilities: [
      'Developed responsive websites for various clients using HTML, CSS, and JavaScript',
      'Implemented designs from Figma and Adobe XD into functional websites',
      'Maintained and updated existing client websites',
      'Assisted in troubleshooting cross-browser compatibility issues',
      'Collaborated with the design team to ensure pixel-perfect implementations',
    ],
    achievements: [
      'Completed over 30 client projects with consistently positive feedback',
      'Introduced modern CSS techniques that improved team efficiency',
    ],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    type: 'Self-employed',
    period: 'Jan 2018 - Jun 2019',
    location: 'Remote',
    responsibilities: [
      'Designed and developed websites for small businesses and startups',
      'Built e-commerce solutions using Shopify and WooCommerce',
      'Provided ongoing maintenance and support for clients',
      'Managed multiple projects simultaneously while meeting deadlines',
      'Implemented SEO best practices and Google Analytics tracking',
    ],
  },
];