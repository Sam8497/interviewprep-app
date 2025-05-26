export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product listing, cart functionality, and secure checkout process.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web App',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe API'],
    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/example/ecommerce',
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description: 'A productivity app for managing tasks, setting deadlines, and tracking progress with collaborative features.',
    image: 'https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web App',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://example.com/taskmanager',
    githubUrl: 'https://github.com/example/taskmanager',
  },
  {
    id: 3,
    title: 'Financial Portfolio Tracker',
    description: 'An application for tracking investments, analyzing performance, and visualizing financial data.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Data Visualization',
    technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    liveUrl: 'https://example.com/finance',
    githubUrl: 'https://github.com/example/finance',
  },
  {
    id: 4,
    title: 'Creative Agency Website',
    description: 'A modern, responsive website for a creative agency showcasing their services, portfolio, and team.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Website',
    technologies: ['Next.js', 'GSAP', 'Tailwind CSS', 'Contentful CMS'],
    liveUrl: 'https://example.com/agency',
    githubUrl: 'https://github.com/example/agency',
  },
  {
    id: 5,
    title: 'Health & Fitness App',
    description: 'A mobile-first application for tracking workouts, nutrition, and setting fitness goals with progress monitoring.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Mobile App',
    technologies: ['React Native', 'Redux', 'Firebase', 'Chart.js'],
    liveUrl: 'https://example.com/fitness',
    githubUrl: 'https://github.com/example/fitness',
  },
  {
    id: 6,
    title: 'Real Estate Listing Platform',
    description: 'A property listing website with search functionality, map integration, and virtual tour features.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web App',
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    liveUrl: 'https://example.com/realestate',
    githubUrl: 'https://github.com/example/realestate',
  },
];