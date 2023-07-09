import Image from "next/image";

function Footer() {
  return (
    <section className="flex h-40 w-full select-none flex-col items-center justify-center border-t border-gray-300 border-opacity-25 bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="relative flex items-center justify-center gap-2 before:absolute before:bottom-1 before:left-1/2 before:h-[1px] before:w-[90%] before:translate-x-[-50%] before:bg-gray-300 before:bg-opacity-30">
        <Image
          src={"/assets/MMLOGO.webp"}
          width={50}
          height={50}
          draggable={false}
          alt=""
        />
        <span className="select-none text-2xl mt-1 font-semibold">Motion Media</span>
      </div>
      <span>Copyright © 2023</span>
    </section>
  );
}

export default Footer;
