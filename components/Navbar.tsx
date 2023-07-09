import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";

type NavLink = {
  linkName: string;
  route: string;
};

const navLinks: NavLink[] = [
  {
    linkName: "Home",
    route: "/",
  },
  {
    linkName: "Services",
    route: "#services",
  },
  {
    linkName: "Contact",
    route: "#contact",
  },
];

function Navbar() {
  const router = useRouter();
  const path = router.asPath;
  const [navMenu, setnavMenu] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: "-80px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className="fixed top-0 z-[999] flex h-20 w-full items-center justify-center border-b border-gray-300 border-opacity-30 bg-black/30 text-white backdrop-blur-sm"
    >
      <div className="relative flex h-full w-full max-w-[1800px] items-center justify-between  px-5 sm:px-10 ">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={"/assets/MMLOGO.webp"}
            width={50}
            height={50}
            draggable={false}
            alt=""
          />
          <span className="select-none text-2xl font-semibold sm:text-3xl">
            Motion Media
          </span>
        </div>
        <ul className="hidden items-center justify-center gap-4 md:flex">
          {navLinks.map((item, index) => (
            <li>
              <Link
                scroll={false}
                key={index}
                href={item.route}
                className="select-none rounded-lg border border-gray-300 border-opacity-30 bg-gray-300 bg-opacity-[3%] px-3 py-[6px] text-xl transition-all hover:bg-opacity-10 active:scale-95 "
              >
                {item.linkName}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setnavMenu(!navMenu)}
          className={` ${
            navMenu ? "hidden" : ""
          } rounded-full border border-opacity-30 bg-gray-300 bg-opacity-[3%] p-2 md:hidden`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <button
          onClick={() => setnavMenu(!navMenu)}
          className={`${
            !navMenu ? "hidden" : ""
          } rounded-full border border-opacity-30 bg-gray-300 bg-opacity-[3%] p-2 md:hidden`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {navMenu && (
          <ul className="absolute left-0 top-[80px] flex h-screen w-full flex-col justify-start gap-6 bg-black bg-opacity-50 p-4 backdrop-blur-xl md:hidden">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.route}
                onClick={() => {
                  setnavMenu(!navMenu);
                }}
                className="select-none rounded-lg border border-gray-300 border-opacity-30 bg-gray-300 bg-opacity-[3%] py-3 text-center  transition-all hover:bg-opacity-10 "
              >
                {item.linkName}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
