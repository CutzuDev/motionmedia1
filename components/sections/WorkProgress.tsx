interface WorkProgressItemProps {
  index: number;
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

const WorkProgressList: WorkProgressListItem[] = [
  {
    title: "Sedinta",
    description:
      "incepe cu o intalnire la care discutam ce website doriti si in ce profesie va aflati.",
    descriptionBold: "Motion Media",
    color: "0091ff",
  },
  {
    title: "Sedinta",
    description:
      "incepe cu o intalnire la care discutam ce website doriti si in ce profesie va aflati.",
    descriptionBold: "Motion Media",
    color: "ae00ff",
  },
  {
    title: "Sedinta",
    description:
      "incepe cu o intalnire la care discutam ce website doriti si in ce profesie va aflati.",
    descriptionBold: "Motion Media",
    color: "00ffae",
  },
  {
    title: "Sedinta",
    description:
      "incepe cu o intalnire la care discutam ce website doriti si in ce profesie va aflati.",
    descriptionBold: "Motion Media",
    color: "2a26ff",
  },
];

function WorkProgress() {
  return (
    <section className="flex min-h-screen w-full select-none flex-col items-center justify-center gap-4 p-5">
      <span className="text-5xl font-black capitalize">work steps</span>
      <span className="capitalize">our work in progress</span>
      <span className="text-center">
        This is how building your website looks like. We want to be transparent
        with the work so you can know how it looks like.
      </span>
      <div className="mt-8 flex w-full max-w-[1600px] flex-col flex-wrap items-center justify-start gap-8 md:flex-row md:gap-0 md:gap-y-8 ">
        {WorkProgressList.map((item, index) => (
          <div className="flex w-full items-center justify-center  md:w-[50%] xl:w-[25%]">
            <WorkProgressItem
              key={index}
              index={index + 1}
              title={item.title}
              description={item.description}
              color={item.color}
              descriptionBold={item.descriptionBold}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkProgressItem({
  index,
  title,
  description,
  descriptionBold,
  color,
}: WorkProgressItemProps) {
  return (
    <div className="flex h-80 w-80 flex-col items-start justify-start rounded-lg border border-gray-300 border-opacity-30 bg-black bg-opacity-20 p-8 backdrop-blur-sm transition-all hover:bg-opacity-40">
      <div className="relative flex aspect-square items-center justify-center rounded-lg border border-gray-300 border-opacity-30 bg-black bg-opacity-25 p-2">
        <span className="text-2xl font-black">{index}</span>
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
