import { Code, Layout, Figma, Database, Server, Globe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: LucideIcon;
  colorClass: string;
  items: Skill[];
}

interface Tool {
  name: string;
  icon: LucideIcon;
}

interface SkillsData {
  categories: SkillCategory[];
  tools: Tool[];
}

export const skills: SkillsData = {
  categories: [
    {
      name: 'Frontend Development',
      icon: Layout,
      colorClass: 'bg-blue-600',
      items: [
        { name: 'HTML & CSS', level: 98 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'React.js', level: 92 },
        { name: 'Next.js', level: 85 },
      ],
    },
    {
      name: 'UI/UX Design',
      icon: Figma,
      colorClass: 'bg-purple-600',
      items: [
        { name: 'Figma', level: 88 },
        { name: 'Adobe XD', level: 80 },
        { name: 'UI Design', level: 85 },
        { name: 'Prototyping', level: 82 },
        { name: 'Wireframing', level: 90 },
      ],
    },
    {
      name: 'Backend Development',
      icon: Server,
      colorClass: 'bg-green-600',
      items: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'GraphQL', level: 78 },
      ],
    },
    {
      name: 'Programming Languages',
      icon: Code,
      colorClass: 'bg-red-600',
      items: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Python', level: 70 },
        { name: 'PHP', level: 65 },
        { name: 'Java', level: 60 },
      ],
    },
    {
      name: 'Databases',
      icon: Database,
      colorClass: 'bg-yellow-600',
      items: [
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'MySQL', level: 68 },
        { name: 'Firebase', level: 80 },
        { name: 'Redis', level: 60 },
      ],
    },
    {
      name: 'Other Skills',
      icon: Globe,
      colorClass: 'bg-teal-600',
      items: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 78 },
        { name: 'Testing', level: 82 },
      ],
    },
  ],
  tools: [
    { name: 'VS Code', icon: Code },
    { name: 'Git', icon: Code },
    { name: 'npm', icon: Code },
    { name: 'Webpack', icon: Code },
    { name: 'Figma', icon: Figma },
    { name: 'Redux', icon: Code },
    { name: 'GraphQL', icon: Database },
    { name: 'Docker', icon: Server },
    { name: 'Jest', icon: Code },
    { name: 'Tailwind CSS', icon: Layout },
    { name: 'SASS', icon: Layout },
    { name: 'Netlify', icon: Server },
  ],
};