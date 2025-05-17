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

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-200 dark:bg-zinc-900 text-primary p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        <Intro />
        <ProfileImage />
        <Image1 />
        <SocialShare />
        <TechStack />
        <About />
        <Macbook />
        <div className="md:col-span-3 gap-4 flex">
          <Newsletter />
          <Resources />
        </div>
        <Contact />
        <ProjectCard />
      </div>
      <Navigation />
    </div>
  );
}
