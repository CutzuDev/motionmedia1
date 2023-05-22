import Image from "next/image";
import Link from "next/link";

function Landing() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <div className="h-20 w-full"></div>
      <div className="flex w-full flex-1 flex-col items-center justify-center p-5 lg:p-20 xl:flex-row">
        <div className="flex h-full w-full select-none flex-col justify-start gap-10 rounded-xl border border-gray-200 border-opacity-30 p-5 backdrop-blur-sm  md:items-start xl:w-3/5 xl:p-10">
          <span className="text-[26px] font-black uppercase leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl xl:leading-none">
            Harness the Energy of Motion for Impactful outcomes.
          </span>
          <span className="text-xl sm:text-2xl">
            Remove Barriers, Embrace Velocity
          </span>
          <div className=" flex pl-4">
            <Link
              href={"https://calendly.com/motionmediaagency/30min"}
              target="_blank"
              className="animate-testAnimation1 select-none rounded-lg border border-gray-300 border-opacity-30 bg-gray-300 bg-opacity-[3%] px-6 py-3 text-2xl font-[100] transition-all hover:bg-opacity-10"
            >
              Book Now!
            </Link>
          </div>
        </div>

        <Image
          src={"/assets/UNDRAWNR1.svg"}
          width={1000}
          height={1000}
          draggable={false}
          className=" hidden h-full w-full p-10 drop-shadow-[0px_0px_5px__rgba(0,0,0,1)] sm:p-20 xl:block xl:w-2/5 "
          alt="1"
        />
      </div>
    </section>
  );
}

export default Landing;
