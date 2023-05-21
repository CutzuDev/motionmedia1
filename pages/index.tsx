import Landing from "@/components/sections/Landing";

import Services from "@/components/sections/Services";
import WorkProgress from "@/components/sections/WorkProgress";
import { InlineWidget } from "react-calendly";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start  text-white">
      <Landing />
      <WorkProgress />
      <Services />
      <div
        id="contact"
        className="flex w-full flex-col items-center justify-center gap-4 p-5"
      >
        <div className="hidden w-full lg:inline">
          <InlineWidget
            url="https://calendly.com/motionmediaagency/30min"
            styles={{
              width: "100%",
              height: "84vh",
              borderRadius: "10px",
              overflow: "hidden",
            }}
            pageSettings={{
              backgroundColor: "black",
            }}
          />
        </div>
        <a
          href="https://calendly.com/motionmediaagency/30min"
          target="_blank"
          className="lg:hidden flex items-center justify-center gap-4"
        >
          <span className="text-4xl sm:text-5xl font-black">Via callendly</span>
          <div className="rounded-full border border-gray-300 border-opacity-30 bg-white bg-opacity-5 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
        </a>
        <span className="text-lg">or</span>
        <a
          href="mailto:motionmediaagencysrl@gmail.com"
          className="mb-20 flex items-center justify-center gap-4"
        >
          <span className="text-4xl sm:text-5xl font-black">Via email</span>
          <div className="rounded-full border border-gray-300 border-opacity-30 bg-white bg-opacity-5 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
