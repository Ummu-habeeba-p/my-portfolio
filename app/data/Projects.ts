export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "Full Stack E-Commerce Platform",

    description:
      "A responsive full-stack e-commerce application where users can browse products, view product details, select variants, manage their cart, and place orders.",

    technologies: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Axios",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
    ],

    features: [
      "User authentication",
      "Product listing and filtering",
      "Product details and variants",
      "Shopping cart",
      "Order management",
      "REST API integration",
    ],

    image: "image/ecom.png",

  
    github:"https://github.com/Ummu-habeeba-p/ecommerce",

    demo: "#",
  },

  {
    title: "CRM Management System",

    description:
      "A full-stack CRM application designed to manage companies, leads, deals, tickets, products, activities, tasks, meetings, and customer communication.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "MUI",
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
    ],

    features: [
      "Company management",
      "Lead management",
      "Deal management",
      "Ticket management",
      "Product management",
      "Activities and tasks",
      "Email functionality",
      "REST API integration",
    ],

    image: "image/crm.png",

    github: "https://github.com/Ummu-habeeba-p/crm-team-project",

    demo: "#",
  },
];