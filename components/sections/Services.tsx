import { ReactNode } from "react";
import { motion } from "framer-motion";
interface ServicesItemProps {
  name: string;
  description: string;
  icon: ReactNode;
  features: string[];
}

type ServicesListItem = {
  name: string;
  description: string;
  features: string[];
  icon: ReactNode;
};

const ServicesList: ServicesListItem[] = [
  {
    name: "Service Name",
    description:
      "Lorem ipsum, dolor sitamet consectetur adipisicing elit. Dolorum similique adipisci officiiset voluptate itaque deserunt magnam, temporibus ullam quis?",
    features: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-10 w-10 object-contain"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
  },
  {
    name: "Service Name",
    description:
      "Lorem ipsum, dolor sitamet consectetur adipisicing elit. Dolorum similique adipisci officiiset voluptate itaque deserunt magnam, temporibus ullam quis?",
    features: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-10 w-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
  },
  {
    name: "Service Name",
    description:
      "Lorem ipsum, dolor sitamet consectetur adipisicing elit. Dolorum similique adipisci officiiset voluptate itaque deserunt magnam, temporibus ullam quis?",
    features: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-10 w-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
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
        you can see below what website services we offer
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

function ServicesItem({
  description,
  icon,
  name,
  features,
}: ServicesItemProps) {
  return (
    <div className="flex min-h-[600px] w-full flex-col items-center justify-start gap-5 rounded-lg border border-gray-300 border-opacity-30 bg-black bg-opacity-20 p-5 pt-10 backdrop-blur-sm transition-all hover:bg-opacity-40 sm:p-10 md:w-[40%] lg:w-[27%]">
      <div className="flex items-center justify-center gap-3">
        {icon}
        <span className="text-3xl font-black sm:text-4xl">{name}</span>
      </div>
      <span className="w-[75%] text-left leading-snug">{description}</span>
      <div className="mt-10 flex flex-col items-center justify-start">
        <span className="text-3xl font-black sm:text-4xl">Features</span>
        <ul className="mt-5 flex w-[75%] flex-col items-center justify-start gap-4">
          {features.map((item, index) => (
            <li
              key={index}
              className="relative flex items-center justify-center text-left leading-snug"
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
