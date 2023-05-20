import Landing from "@/components/sections/Landing";
import WorkProgress from "@/components/sections/WorkProgress";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start  text-white">
      <Landing />
      <WorkProgress />
    </div>
  );
}
