import { motion } from "framer-motion";

interface WorkProgressItemProps {
  indexNumber: number;
  title: string;
  description: string;
  descriptionBold?: string;
  color: string;
}

type WorkProgressListItem = {
  title: string;
  description: string;
  descriptionBold: string;
  color: string;
};

// const WorkProgressList: WorkProgressListItem[] = [
//   {
//     title: "Sedinta",
//     descriptionBold: "Motion Media",
//     description:
//       "incepe cu o intalnire la care discutam ce website doriti si in ce profesie va aflati.",
//     color: "0091ff",
//   },
//   {
//     title: "Design",
//     descriptionBold: "Creăm un design",
//     description:
//       " pentru site care să reprezinte scopul său, axându-vă pe aspectul vizual, culori și tipografie.",
//     color: "ae00ff",
//   },
//   {
//     title: "Develop",
//     descriptionBold: "Transformăm designul",
//     description:
//       " într-un site funcțional utilizând HTML, Tailwind CSS și TypeScript, optimizând performanța și adăugând interactivitate.",
//     color: "00ffae",
//   },
//   {
//     title: "Deploy",
//     descriptionBold: "Lansam site-ul",
//     description:
//       "utilizand platforma de hostare Vercel impreuna cu domain-ul dumneavoastra si adaugand SSL.",
//     color: "2a26ff",
//   },
// ];
const WorkProgressList: WorkProgressListItem[] = [
  {
    title: "Meeting",
    descriptionBold: "Motion Media",
    description:
      " starts with a meeting where we discuss what website you want and what profession you are in.",
    color: "0091ff",
  },
  {
    title: "Design",
    descriptionBold: "We create a design",
    description:
      " for the website that represents your purpose, focusing on visual aspects, colors, and typography.",
    color: "d06bff",
  },
  {
    title: "Development",
    descriptionBold: "We transform the design",
    description:
      " into a functional website using HTML, Tailwind CSS, and TypeScript, optimizing performance and adding interactivity.",
    color: "00ffae",
  },
  {
    title: "Deploying",
    descriptionBold: "We launch the website",
    description:
      " using the Vercel hosting platform, along with your domain, and adding SSL.",
    color: "879bff",
  },
];

function WorkProgress() {
  return (
    <section className="flex min-h-screen w-full select-none  flex-col items-center justify-center gap-4 p-5">
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.25, delay: 0.2, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="text-7xl font-black capitalize"
      >
        work steps
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.25, delay: 0.6, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="text-center"
      >
        These are the steps for building your website.
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.25, delay: 0.8, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="mt-8 flex w-full max-w-[1600px] flex-col flex-wrap items-center justify-start gap-8 md:flex-row md:gap-0 md:gap-y-8 "
      >
        {WorkProgressList.map((item, index) => (
          <div
            key={index}
            className="flex w-full items-center justify-center  md:w-[50%] xl:w-[25%]"
          >
            <WorkProgressItem
              indexNumber={index + 1}
              title={item.title}
              description={item.description}
              color={item.color}
              descriptionBold={item.descriptionBold}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function WorkProgressItem({
  indexNumber,
  title,
  description,
  descriptionBold,
  color,
}: WorkProgressItemProps) {
  return (
    <div className="flex h-80 w-80 flex-col items-start justify-start rounded-lg border border-gray-300 border-opacity-30 bg-black bg-opacity-20 p-8 backdrop-blur-sm  transition-all hover:bg-opacity-40">
      <div className="relative flex aspect-square items-center justify-center rounded-lg border border-gray-300 border-opacity-30 bg-black bg-opacity-25 p-2">
        <span className="text-2xl font-black">{indexNumber}</span>
        <div
          className="absolute -left-[25%] -top-[30%] -z-10 h-[150%] w-[150%] rounded-full opacity-80 blur-2xl"
          style={{ backgroundColor: `#${color}` }}
        ></div>
      </div>
      <span className="mt-4 text-2xl font-black">{title}</span>
      <span className="mt-2 pr-2 text-left text-white text-opacity-70">
        <span className="font-bold">{descriptionBold}</span> {description}
      </span>
    </div>
  );
}

export default WorkProgress;
