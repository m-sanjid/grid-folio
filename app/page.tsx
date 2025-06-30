import TechStack from "@/components/TechStack";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import SocialShare from "@/components/SocialShare";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import About from "@/components/About";
import Macbook from "@/components/Macbook";
import Resources from "@/components/Resources";
import Image1 from "@/components/Image1";
import ProfileImage from "@/components/ProfileImage";
import Intro from "@/components/Intro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gridfolio",
  description: "Gridfolio is a portfolio template for developers",
  openGraph: {
    title: "Gridfolio",
    description: "Gridfolio is a portfolio template for developers",
    images: ["/og-image.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gridfolio",
    description: "Gridfolio is a portfolio template for developers",
    images: ["/og-image.jpeg"],
  },
  keywords: ["Gridfolio", "portfolio", "template", "developer", "web", "design"],
  authors: [{ name: "Sanjid", url: "https://sanjid.in" }],
  creator: "Sanjid",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-200 p-4 text-primary dark:bg-zinc-900 md:p-6">
      <div className="mx-auto mb-20 grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Intro />
        <ProfileImage />
        <Image1 />
        <SocialShare />
        <TechStack />
        <About />
        <Macbook />
        <div className="w-full md:col-span-3 md:flex md:gap-4">
          <Newsletter />
          <Resources />
        </div>
        <Contact />
        <ProjectCard />
      </div>
    </div>
  );
}
