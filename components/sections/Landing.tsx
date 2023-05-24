import Image from "next/image";
import Link from "next/link";

function Landing() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <div className="h-20 w-full"></div>
      <div className="flex w-full flex-1 flex-col items-center justify-center p-5 lg:p-20 xl:flex-row">
        <div className="flex h-full w-full select-none flex-col items-center gap-10 rounded-xl border border-gray-200 border-opacity-30 p-5 text-center backdrop-blur-sm sm:items-start sm:justify-start sm:text-left lg:gap-[60px] xl:w-3/5 xl:p-10">
          <div className="flex flex-col text-4xl font-black uppercase leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl xl:leading-none">
            <span>Harness the Energy of</span>
            <span>Motion for Impactful</span>
            <span>outcomes.</span>
          </div>
          <span className="text-xl opacity-50 sm:text-2xl  lg:text-4xl">
            Remove Barriers, Embrace Velocity
          </span>
          <div className=" flex sm:pl-4">
            <Link
              href={"https://calendly.com/motionmediaagency/30min"}
              target="_blank"
              style={{ textShadow: "0px 0px 5px white, 0px 0px 8px #5da5f9 " }}
              className="hover: animate-testAnimation1 select-none rounded-lg bg-white bg-opacity-90 px-6 py-3  text-2xl font-black text-blue-400 mix-blend-screen transition-all duration-200 hover:bg-opacity-80"
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
          className=" hidden h-full w-full p-10 drop-shadow-[0px_0px_5px__rgba(0,0,0,1)] saturate-50 sm:p-20 xl:block xl:w-2/5 "
          alt="1"
        />
      </div>
    </section>
  );
}

export default Landing;
