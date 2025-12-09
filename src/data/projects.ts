export type Project = {
  id: number
  title: string
  company: string
  images: string[]
  description: string[]
  technologies: string[]
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'CRM System',
    company: '',
    images: ['/projects/1/1.png', '/projects/1/2.png', '/projects/1/3.png'],
    description: [
      'Developed a custom CRM system to manage customer relationships and sales pipelines',
      'Integrated with third-party services for email marketing, analytics, and customer support',
      'Implemented role-based access control and data security measures to protect sensitive information'
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'Redis', 'Docker', 'AWS'],
    link: ''
  },
  {
    id: 2,
    title: 'SaaS E-Learning Platform',
    company: 'EdNuva',
    images: ['/projects/2/1.png', '/projects/2/2.png', '/projects/2/3.png', '/projects/2/4.png', '/projects/2/5.png'],
    description: [
        'Led the development of a scalable e-learning platform supporting thousands of concurrent users',
        'Implemented interactive course content, quizzes, and progress tracking features',
        'Set up monitoring and alerting systems to ensure high availability and performance'
    ],
    technologies: ['Prometheus', 'Grafana', 'Linux', 'Bash', 'Docker'],
    link: 'https://ednuva.com'
  }
]

export default projects
