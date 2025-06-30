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
    link: "#",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Real-time weather data visualization with a clean, intuitive interface.",
    category: "Mobile App",
    image: "/weather.png",
    size: "small", // 1x1
    icon: <PenTool className="h-6 w-6" />,
    link: "#",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "Real-time weather data visualization with a clean, intuitive interface.",
    category: "Mobile App",
    image: "/weather.png",
    size: "small", // 1x1
    icon: <PenTool className="h-6 w-6" />,
    link: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A sleek, responsive portfolio for a photographer with gallery functionality.",
    category: "UI/UX Design",
    image: "/portfolio.png",
    size: "medium", // 1x2
    icon: <Monitor className="h-6 w-6" />,
    link: "#",
  },
  {
    id: 5,
    title: "ML Recommendation Engine",
    description:
      "Content recommendation system using machine learning algorithms.",
    category: "Machine Learning",
    image: "/ml.png",
    size: "medium", // 2x1
    icon: <Cpu className="h-6 w-6" />,
    link: "#",
  },
  {
    id: 6,
    title: "RESTful API",
    description: "Scalable backend API for a social networking application.",
    category: "Backend",
    image: "/api.png",
    size: "small", // 1x1
    icon: <Server className="h-6 w-6" />,
    link: "#",
  },
  {
    id: 7,
    title: "Productivity Dashboard",
    description:
      "Custom analytics dashboard with task management and goal tracking.",
    category: "Web App",
    image: "/dashboard.png",
    size: "medium", // 1x2
    icon: <Lightbulb className="h-6 w-6" />,
    link: "#",
  },
  {
    id: 8,
    title: "Component Library",
    description:
      "Reusable UI component library with documentation and examples.",
    category: "Frontend",
    image: "/component.png",
    size: "small", // 1x1
    icon: <Layers className="h-6 w-6" />,
    link: "#",
  },
  {
    id: 9,
    title: "Code Editor",
    description:
      "Browser-based code editor with syntax highlighting and live preview.",
    category: "Developer Tools",
    image: "/code.png",
    size: "small", // 1x1
    icon: <Code className="h-6 w-6" />,
    link: "#",
  },
];
