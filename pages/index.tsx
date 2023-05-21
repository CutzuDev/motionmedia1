import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Landing from "@/components/sections/Landing";

import Services from "@/components/sections/Services";
import WorkProgress from "@/components/sections/WorkProgress";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start  text-white">
      <Landing />
      <WorkProgress />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
