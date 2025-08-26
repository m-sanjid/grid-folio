import {
  Code,
  Cpu,
  Globe,
  Layers,
  Lightbulb,
  Monitor,
  PenTool,
  Server,
} from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "F.R.I.D.A.Y",
    description: "AI assistant for daily tasks.",
    category: "AI",
    image: "/friday.jpeg",
    size: "large", // 2x2
    icon: <Globe className="h-6 w-6" />,
    link: "https://friday-ai.vercel.app",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Real-time weather data visualization with a clean, intuitive interface.",
    category: "Web App",
    image: "/project_weather.webp",
    size: "small", // 1x1
    icon: <PenTool className="h-6 w-6" />,
    link: "https://weather-app-ten.vercel.app",
  },
  {
    id: 3,
    title: "CMS",
    description:
      "A headless CMS with a user-friendly admin interface, content modeling, and API endpoints.",
    image: "/project_cms.webp",
    category: "Web App",
    size: "small", // 1x1
    icon: <PenTool className="h-6 w-6" />,
    link: "https://cms-sanjid.vercel.app",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A sleek, responsive portfolio website. with blog and components",
    category: "UI/UX Design",
    image: "/portfolio.png",
    size: "medium", // 1x2
    icon: <Monitor className="h-6 w-6" />,
    link: "https://sanjid.in",
  },
  {
    id: 5,
    title: "ML Recommendation Engine",
    description:
      "Content recommendation system using machine learning algorithms.",
    category: "Machine Learning",
    image: "/project_task.png",
    size: "medium", // 2x1
    icon: <Cpu className="h-6 w-6" />,
    link: "#",
  },
  {
    id: 6,
    title: "Personal Finance Tracker",
    description:
      "A financial management tool for tracking expenses, setting budgets, and visualizing spending patterns.",
    image: "/project_finance.webp",
    category: "Web App",
    size: "small", // 1x1
    icon: <Server className="h-6 w-6" />,
    link: "https://finance-tracker.vercel.app",
  },
  {
    id: 7,
    title: "Task Manager",
    description:
      "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    image: "/project_task.png",
    category: "Web App",
    size: "medium", // 1x2
    icon: <Lightbulb className="h-6 w-6" />,
    link: "https://task-manager.vercel.app",
  },
  {
    id: 8,
    title: "Component Library",
    description:
      "Reusable UI component library with documentation and examples.",
    category: "Frontend",
    image: "/project_comp.png",
    size: "small", // 1x1
    icon: <Layers className="h-6 w-6" />,
    link: "https://ui.sanjid.shop",
  },
  {
    id: 9,
    title: "Code Editor",
    description:
      "Browser-based code editor with syntax highlighting and live preview.",
    category: "Developer Tools",
    image: "/project_task.png",
    size: "small", // 1x1
    icon: <Code className="h-6 w-6" />,
    link: "#",
  },
];
