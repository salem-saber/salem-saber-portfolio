export type Project = {
    id: number
    title: string
    images: string[]
    description: string[]
    technologies: string[]
    link: string
}

const projects: Project[] = [
    {
        id: 1,
        title: 'SaaS E-Learning Platform',
        images: ['/projects/1/1.png', '/projects/1/2.png', '/projects/1/3.png', '/projects/1/4.png', '/projects/1/5.png'],
        description: [
            'Led the development of a scalable e-learning platform supporting thousands of concurrent users',
            'Implemented interactive course content, quizzes, and progress tracking features',
            'Set up monitoring and alerting systems to ensure high availability and performance'
        ],
        technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Redis'],
        link: 'https://ednuva.com'
    }, {
        id: 2,
        title: 'Modular CRM Backend System',
        images: ['/projects/2/1.png', '/projects/2/2.png', '/projects/2/3.png'],
        description: [
            'Developed a modular CRM backend system using PHP and Laravel, enabling easy integration of new features and services',
            'Optimized database queries and implemented caching strategies to enhance system performance and scalability',
            'Collaborated with front-end developers to design RESTful APIs for seamless data exchange'
        ],
        technologies: ['PHP', 'Laravel', 'MySQL', 'Redis', 'Docker', 'AWS'],
        link: ''
    },
    {
        id: 3,
        title: 'High-Traffic REST API for E-Commerce System',
        images: [],
        description: [
            'Designed and implemented a high-traffic REST API for an e-commerce platform using PHP and Laravel',
            'Optimized API endpoints for performance, reducing response times by 40%',
            'Integrated third-party payment gateways and shipping services to enhance user experience'
        ],
        technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Redis', 'Stripe', 'PayPal'],
        link: ''
    }, {
        id: 4,
        title: 'Admin Dashboard & Reporting API',
        images: [],
        description: [
            'Developed an admin dashboard and reporting API for a SaaS application using PHP and Laravel',
            'Implemented data visualization features to provide insights into user behavior and system performance',
            'Collaborated with cross-functional teams to gather requirements and deliver solutions on time'
        ],
        technologies: ['PHP', 'Laravel', 'MySQL', 'Redis', 'Docker', 'AWS'],
        link: ''
    }, {
        id: 5,
        title: 'Real-Time Fleet Tracking & Telemetry Backend',
        images: [],
        description: [
            'Built a real-time fleet tracking and telemetry backend system using PHP and Laravel',
            'Implemented WebSocket communication for real-time data updates and notifications',
            'Optimized data storage and retrieval processes to handle large volumes of telemetry data efficiently'
        ],
        technologies: ['PHP', 'Laravel', 'MySQL','MongoDB', 'Kafka', 'Docker','Websockets', 'AWS'],
        link: ''
    }, {
        id: 6,
        title: 'Subscription & Billing Management Service',
        images: [],
        description: [
            'Created a subscription and billing management service for a SaaS platform using PHP and Laravel',
            'Integrated with payment gateways to handle recurring billing and invoicing',
            'Implemented robust error handling and logging mechanisms to ensure system reliability'
        ],
        technologies: ['PHP', 'Laravel', 'MySQL', 'Redis', 'Stripe','PayPal', 'Docker', 'AWS'],
        link: ''
    }
]

export default projects
