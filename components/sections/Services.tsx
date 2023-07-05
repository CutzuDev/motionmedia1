import { ReactElement, ReactNode } from "react";
import { motion } from "framer-motion";

type ServicesListItem = {
  name: string;
  description: string;
  features: string[];
  icon: ReactElement;
};

const ServicesList: ServicesListItem[] = [
  {
    name: "Video Editing",
    description:
      "Video editing involves manipulating and arranging video footage it includes trimming, merging, adding effects, and adjusting color and sound.",
    features: [
      "Professional Editing Tools: We use high-quality software for professional video edits.",
      "Creative Effects and Transitions: Diverse range of visually appealing effects and transitions.",
      "Collaboration and Feedback: We offer acces to feedback and revisions for improvements.",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-12 w-12 object-contain"
      >
        <path
          strokeLinecap="round"
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    name: "Marketing",
    description:
      "Marketing promotes products or brands to influence buying decisions. It includes strategies like digital marketing and social media marketing.",
    features: [
      "Target Audience Analysis: Analyzing the audience to create targeted campaigns.",
      "Multichannel Marketing: Leveraging multiple platforms for broader reach and exposure.",
      "Data-driven Insights: Utilizing data analysis to optimize campaigns and enhance ROI.",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-12 w-12 object-contain"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
  },
  {
    name: "Websites",
    description:
      "Web development involves designing and building websites and web applications. It includes coding, implementing functionality, and ensuring a seamless user experience.",
    features: [
      "Customized Web Solutions: Tailored web development for a unique online presence.",
      "Responsive Design: Optimal user experience across devices.",
      "Seamless Integration: Smooth integration of features and functionalities.",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-12 w-12 object-contain"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section
      id="services"
      className="flex min-h-screen w-full select-none flex-col items-center justify-center gap-4 p-5"
    >
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.25, delay: 0.2, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="text-6xl font-black capitalize"
      >
        services
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.25, delay: 0.4, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="text-center capitalize"
      >
        you can see below what services we offer
      </motion.span>
      <div className="flex w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.25, delay: 0.6, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className="mt-8 flex w-full max-w-[1800px] flex-wrap items-center justify-center gap-8"
        >
          {ServicesList.map((item, index) => (
            <ServicesItem
              key={index}
              description={item.description}
              features={item.features}
              icon={item.icon}
              name={item.name}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServicesItem({ description, icon, name, features }: ServicesListItem) {
  return (
    <div className="flex min-h-[600px] w-full flex-col items-center justify-start gap-5 rounded-lg border border-gray-300 border-opacity-30 bg-black bg-opacity-20 p-5 pt-10 backdrop-blur-sm transition-all hover:bg-opacity-40 sm:p-10 md:w-[40%] lg:w-[27%]">
      <div className="flex items-center justify-center gap-3">
        {icon}
        <span className="text-3xl font-black sm:text-5xl">{name}</span>
      </div>
      <span className="w-[95%] text-left leading-snug">{description}</span>
      <div className="mt-10 flex flex-col items-center justify-start">
        <span className="text-3xl font-black sm:text-4xl">Features</span>
        <ul className="mt-5 flex w-[90%] flex-col items-center justify-start gap-4">
          {features.map((item, index) => (
            <li
              key={index}
              className="relative flex w-full items-center justify-center text-left leading-snug"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Services;
