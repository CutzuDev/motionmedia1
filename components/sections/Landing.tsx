import Image from "next/image";
import Link from "next/link";

function Landing() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <div className="h-20 w-full"></div>
      <div className="flex w-full flex-1 flex-col items-center justify-center p-5 sm:p-20 xl:flex-row">
        <div className="flex h-full w-full select-none flex-col justify-start gap-10 rounded-xl border border-gray-200 border-opacity-30 p-5 backdrop-blur-sm sm:p-20 md:items-start xl:w-3/5">
          <span className="text-6xl font-black uppercase  leading-tight lg:text-8xl xl:leading-none">
            Let's get things in motion.
          </span>
          <span className="text-2xl sm:text-3xl">
            Book your FREE call and let's get things MOVING!
          </span>
          <Link href={"#contact"} className="select-none rounded-lg border border-gray-300 border-opacity-30 bg-gray-300 bg-opacity-[3%] px-3 py-[6px] font-[100] transition-all hover:bg-opacity-10">
            Book now!
          </Link>
        </div>

        <Image
          src={"/assets/UNDRAWNR1.svg"}
          width={1000}
          height={1000}
          draggable={false}
          className=" hidden h-full w-full animate-testAnimation1 p-10 drop-shadow-[0px_0px_5px__rgba(0,0,0,1)] sm:p-20 xl:block xl:w-2/5 "
          alt="1"
        />
      </div>
    </section>
  );
}

export default Landing;
