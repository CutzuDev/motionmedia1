import { motion } from "framer-motion";

function Landing() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <div className="h-20 w-full"></div>
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-10 p-5 lg:p-20 xl:flex-row">
        <div className="flex h-full select-none items-center justify-center rounded-xl p-5 sm:p-10 2xl:w-1/2">
          <div className="flex h-full w-full flex-col items-start justify-center gap-10 2xl:px-5">
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <div className="flex w-full justify-start">
                <motion.span
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, type: "spring" }}
                  className="bg-gradient-to-l from-blue-700 to-blue-400 bg-clip-text pl-1 text-2xl uppercase text-transparent"
                >
                  We are motion media
                </motion.span>
              </div>
              <motion.span
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15, type: "spring" }}
                className="w-full text-5xl font-bold md:text-7xl xl:text-8xl "
              >
                Harness
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, type: "spring" }}
                className="w-full text-5xl font-bold md:text-7xl xl:text-8xl "
              >
                the power
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.25, type: "spring" }}
                className="w-full text-5xl font-bold md:text-7xl xl:text-8xl "
              >
                of motion
              </motion.span>
            </div>
            <motion.span
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
              className="w-full text-xl text-neutral-200 md:text-3xl"
            >
              Schedule a meeting for impactful outcomes.
            </motion.span>
            <motion.a
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.2, delay: 0.01, type: "spring" },
              }}
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, type: "spring" }}
              href="#"
              className="select-none rounded-lg bg-gradient-to-tl from-blue-800 to-blue-400 px-6 py-4 text-3xl font-bold "
            >
              Book Now
            </motion.a>
          </div>
        </div>
        <div className="hidden h-full w-1/2 items-center justify-center  p-10 2xl:flex">
          <div className="relative flex h-full w-full items-center justify-center ">
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              className="absolute bottom-20 left-10 z-10 flex items-center justify-center gap-5 rounded-lg bg-white px-7 py-5 shadow-2xl shadow-black/50"
            >
              <span className="bg-gradient-to-br from-blue-800 to-blue-400 bg-clip-text text-6xl font-bold text-transparent">
                4
              </span>
              <span className="text-lg font-semibold text-black ">
                Years of <br /> experience
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              className="absolute right-10 top-10 z-10 flex flex-col items-center justify-center gap-1 rounded-lg bg-white px-7 py-5 shadow-2xl shadow-black/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-h-20 h-20 text-yellow-400"
              >
                <path
                  fillRule="evenodd"
                  d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 10H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-center text-lg font-semibold text-black">
                Award Winning <br /> Agency
              </span>
            </motion.div>
            <div className="absolute left-1/2 top-1/2 aspect-square h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-fadeInBG overflow-hidden rounded-lg border border-white border-opacity-30 bg-black bg-opacity-10 backdrop-blur-sm transition-all delay-100 hover:bg-opacity-20 ">
              <motion.svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="864"
                height="645"
                viewBox="0 0 864 645"
                className="w-full"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
              >
                <polygon
                  points="165.74 630.543 179.675 630.542 182.261 576.504 165.737 576.794 165.74 630.543"
                  fill="#ffb6b6"
                />
                <path
                  d="M330.18516,753.49344l27.44293-.00111h.00111a17.4897,17.4897,0,0,1,17.48878,17.4885v.56832l-44.932.00166Z"
                  transform="translate(-168 -127.5)"
                  fill="#2f2e41"
                />
                <polygon
                  points="109.407 630.543 123.342 630.542 126.104 576.504 109.404 576.794 109.407 630.543"
                  fill="#ffb6b6"
                />
                <path
                  d="M273.85218,753.49344l27.44294-.00111h.00111a17.48972,17.48972,0,0,1,17.48878,17.4885v.56832l-44.932.00166Z"
                  transform="translate(-168 -127.5)"
                  fill="#2f2e41"
                />
                <path
                  d="M413.14987,526.5379a11.04758,11.04758,0,0,0-13.35281-10.42456L379.451,482.5375l-8.74513,18.43186,20.66174,29.05839a11.10746,11.10746,0,0,0,21.78231-3.48985Z"
                  transform="translate(-168 -127.5)"
                  fill="#ffb6b6"
                />
                <path
                  d="M243.13163,561.65794a11.0476,11.0476,0,0,0-4.11311-16.43323l4.61713-38.987-18.234,9.15041-1.589,35.61983a11.10746,11.10746,0,0,0,19.31907,10.65Z"
                  transform="translate(-168 -127.5)"
                  fill="#ffb6b6"
                />
                <path
                  d="M341.91062,522.16437l9.8681,5.84557s8.01821,5.10395,5.32182,40.6056-5.91853,177.7366-5.91853,177.7366H333.69033l-28.329-169.90775-10.33677,171.749-18.41229-.92062s-37.61834-195.53635-21.34086-216.7576Z"
                  transform="translate(-168 -127.5)"
                  fill="#2f2e41"
                />
                <path
                  d="M249.31573,396.52776s47.98833-15.42735,86.70653-1.04379l-3.16976,74.68381,23.88287,58.25642s-75.92658,29.452-101.229,4.70056l7.37942-58.35391Z"
                  transform="translate(-168 -127.5)"
                  fill="#5c9efe"
                />
                <path
                  d="M323.12139,404.25512l10.05624-8.77115s6.708-.07937,12.48069,10.24079,16.2311,43.63227,16.2311,43.63227l33.48208,56.71471L380.64167,516.1985l-53.10275-74.266Z"
                  transform="translate(-168 -127.5)"
                  fill="#5c9efe"
                />
                <path
                  d="M251.096,400.21022l.68585-4.67919s-18.698,1.38335-20.27971,19.39987-7.36492,119.67989-7.36492,119.67989l18.49508,3.68246L261.031,433.95072Z"
                  transform="translate(-168 -127.5)"
                  fill="#5c9efe"
                />
                <path
                  d="M315.9176,369.53567l-56.09711,11.04639a4.441,4.441,0,0,1-5.20941-3.49532L249.84971,352.907a33.02313,33.02313,0,0,1,64.80183-12.76049l4.76138,24.17979A4.441,4.441,0,0,1,315.9176,369.53567Z"
                  transform="translate(-168 -127.5)"
                  fill="#2f2e41"
                />
                <circle
                  cx="121.7385"
                  cy="221.92969"
                  r="24.2114"
                  fill="#ffb6b6"
                />
                <path
                  d="M322.793,341.055l-34.302,6.7546-1.32159-4.85547-.78894,5.27106-5.28178,1.04007-2.61909-9.62344-1.56373,10.4471-10.22,2.01247-.09523-.4836a26.1521,26.1521,0,0,1,20.58328-30.67758l4.8362-.95233a26.15232,26.15232,0,0,1,30.67763,20.58352Z"
                  transform="translate(-168 -127.5)"
                  fill="#2f2e41"
                />
                <path
                  d="M294.24131,378.49273a4.53027,4.53027,0,0,1-.78365.08367l-25.99014.51432-8.17431-41.51179,27.6495-5.44461-.52738.93292c-7.33685,12.983,3.38513,29.58121,10.4293,38.31955a4.37026,4.37026,0,0,1,.55574,4.61969A4.4181,4.4181,0,0,1,294.24131,378.49273Z"
                  transform="translate(-168 -127.5)"
                  fill="#2f2e41"
                />
                <rect
                  id="b0371f3f-df42-4d60-b6c1-6000de199dd5"
                  data-name="Rectangle 246"
                  x="160.34726"
                  y="0.27183"
                  width="334.98147"
                  height="175.88954"
                  fill="#f2f2f2"
                />
                <rect
                  id="a5ec3362-5fc6-49dd-bbc1-e584c03fc30b"
                  data-name="Rectangle 264"
                  x="160.14263"
                  width="334.98147"
                  height="20.39046"
                  fill="#e6e6e6"
                />
                <rect
                  id="edb19af0-e7ad-43aa-9651-c68038fb40c2"
                  data-name="Rectangle 247"
                  x="167.92263"
                  y="28.65783"
                  width="321.13629"
                  height="138.23189"
                  fill="#fff"
                />
                <circle
                  id="fcfbd1c3-546b-4aa9-92d2-19035f23e7a3"
                  data-name="Ellipse 194"
                  cx="191.88588"
                  cy="10.14313"
                  r="3.37299"
                  fill="#fff"
                />
                <circle
                  id="fcf1e260-d16a-4b37-91b5-eb72ad8ee2c7"
                  data-name="Ellipse 195"
                  cx="204.68919"
                  cy="10.14313"
                  r="3.37299"
                  fill="#fff"
                />
                <circle
                  id="ae552ed4-f0ed-4b8a-a24a-450e5f71adc4"
                  data-name="Ellipse 246"
                  cx="179.04934"
                  cy="10.14313"
                  r="3.37299"
                  fill="#fff"
                />
                <circle
                  cx="222.63328"
                  cy="127.20928"
                  r="5.92621"
                  fill="#e4e4e4"
                />
                <circle
                  cx="274.98142"
                  cy="111.68894"
                  r="5.92621"
                  fill="#e4e4e4"
                />
                <circle
                  cx="327.32956"
                  cy="127.20928"
                  r="5.92621"
                  fill="#e4e4e4"
                />
                <circle
                  cx="379.67771"
                  cy="48.92263"
                  r="5.92621"
                  fill="#e4e4e4"
                />
                <circle
                  cx="432.02585"
                  cy="48.19321"
                  r="5.92621"
                  fill="#e4e4e4"
                />
                <polygon
                  points="327.454 128.537 274.981 112.234 223.226 128 222.041 126.419 274.981 109.766 327.205 125.882 379.1 48.091 379.309 48.006 431.657 47.914 432.395 49.747 380.255 49.755 327.454 128.537"
                  fill="#e4e4e4"
                />
                <rect
                  id="a979eff9-2035-45aa-8fad-490bbaa22894"
                  data-name="Rectangle 246"
                  x="236.19416"
                  y="230.62976"
                  width="315.23768"
                  height="165.52262"
                  fill="#f2f2f2"
                />
                <rect
                  id="b5344e31-85e8-4079-8f4b-e609523654c2"
                  data-name="Rectangle 264"
                  x="236.0016"
                  y="230.37394"
                  width="315.23768"
                  height="19.18865"
                  fill="#e6e6e6"
                />
                <rect
                  id="a6983896-3ceb-4bf9-866b-7e40cad74d1b"
                  data-name="Rectangle 247"
                  x="242.84117"
                  y="256.23473"
                  width="302.69053"
                  height="131.48887"
                  fill="#fff"
                />
                <circle
                  id="f96e66fe-9216-4da2-bba4-b63d176988a9"
                  data-name="Ellipse 194"
                  cx="265.8739"
                  cy="239.91924"
                  r="3.17418"
                  fill="#fff"
                />
                <circle
                  id="e3ffbb79-e13a-4bd7-b23c-45510780cb2f"
                  data-name="Ellipse 195"
                  cx="277.92258"
                  cy="239.91924"
                  r="3.17418"
                  fill="#fff"
                />
                <circle
                  id="ec6ea03b-7290-43d8-8b25-59bf30f1f0ee"
                  data-name="Ellipse 246"
                  cx="253.79395"
                  cy="239.91924"
                  r="3.17418"
                  fill="#fff"
                />
                <rect
                  id="e9e5cf6b-8f55-43bf-8281-302b4fb1e9d5"
                  data-name="Rectangle 246"
                  x="387.94795"
                  y="72.53937"
                  width="373.92653"
                  height="196.33852"
                  fill="#e6e6e6"
                />
                <rect
                  id="e4e8a65e-8422-4898-a810-30d755c7dafc"
                  data-name="Rectangle 264"
                  x="387.71953"
                  y="72.23593"
                  width="373.92653"
                  height="22.76106"
                  fill="#5c9efe"
                />
                <rect
                  id="b6acd298-89f8-46a0-ab3e-c2f0533bc288"
                  data-name="Rectangle 247"
                  x="396.3424"
                  y="101.98817"
                  width="356.53714"
                  height="155.93232"
                  fill="#fff"
                />
                <circle
                  id="a2e6f9e4-3ad4-420f-8fe3-197d901d1e70"
                  data-name="Ellipse 194"
                  cx="423.15326"
                  cy="83.55831"
                  r="3.76513"
                  fill="#fff"
                />
                <circle
                  id="b303a717-eadc-4672-a419-54a1feb6afd8"
                  data-name="Ellipse 195"
                  cx="437.44508"
                  cy="83.55831"
                  r="3.76513"
                  fill="#fff"
                />
                <circle
                  id="b1ff2c46-8045-41fc-afe2-76f8fb520d89"
                  data-name="Ellipse 246"
                  cx="408.82434"
                  cy="83.55831"
                  r="3.76513"
                  fill="#fff"
                />
                <path
                  d="M745.15661,263.656a3.08356,3.08356,0,0,0,0,6.11358H871.40974a3.08356,3.08356,0,0,0,0-6.11358Z"
                  transform="translate(-168 -127.5)"
                  fill="#e6e6e6"
                />
                <path
                  d="M745.15661,335.75166a3.08356,3.08356,0,0,0,0,6.11358H871.40974a3.08356,3.08356,0,0,0,0-6.11358Z"
                  transform="translate(-168 -127.5)"
                  fill="#e6e6e6"
                />
                <path
                  d="M745.15661,281.99672a3.08356,3.08356,0,0,0,0,6.11358h54.3271a3.08356,3.08356,0,0,0,0-6.11358Z"
                  transform="translate(-168 -127.5)"
                  fill="#e6e6e6"
                />
                <path
                  d="M745.15661,299.479a3.08357,3.08357,0,0,0,0,6.11359H871.40974a3.08357,3.08357,0,0,0,0-6.11359Z"
                  transform="translate(-168 -127.5)"
                  fill="#e6e6e6"
                />
                <path
                  d="M745.15661,317.81974a3.08356,3.08356,0,0,0,0,6.11358h54.3271a3.08356,3.08356,0,0,0,0-6.11358Z"
                  transform="translate(-168 -127.5)"
                  fill="#e6e6e6"
                />
                <path
                  d="M671.576,338.5163a2.90959,2.90959,0,1,0,.00283-5.81917H612.5531a2.90959,2.90959,0,1,0-.00283,5.81917H671.576Z"
                  transform="translate(-168 -127.5)"
                  fill="#e4e4e4"
                />
                <path
                  d="M671.576,321.37368a2.90959,2.90959,0,0,0,0-5.81917H612.5531a2.90959,2.90959,0,1,0-.00283,5.81917H671.576Z"
                  transform="translate(-168 -127.5)"
                  fill="#e4e4e4"
                />
                <path
                  d="M642.06435,267.00489a18.31449,18.31449,0,1,1-18.31447,18.3145v0A18.33521,18.33521,0,0,1,642.06435,267.00489Z"
                  transform="translate(-168 -127.5)"
                  fill="#5c9efe"
                />
                <circle
                  cx="325.95202"
                  cy="294.30697"
                  r="7.16563"
                  fill="#e4e4e4"
                />
                <path
                  d="M609.08471,416.23084a4.85961,4.85961,0,1,1,0,9.71921H533.72106a4.85961,4.85961,0,1,1,0-9.71921h75.36365m0-1.1902H533.72106a6.04981,6.04981,0,1,0,0,12.09962h75.36365a6.04981,6.04981,0,1,0,0-12.09962Z"
                  transform="translate(-168 -127.5)"
                  fill="#e4e4e4"
                />
                <path
                  d="M579.34757,427.14024h-56.733a6.0498,6.0498,0,1,1,0-12.0996h56.733a6.0498,6.0498,0,0,1,0,12.0996Z"
                  transform="translate(-168 -127.5)"
                  fill="#e4e4e4"
                />
                <circle
                  cx="325.95202"
                  cy="324.06213"
                  r="7.16563"
                  fill="#e4e4e4"
                />
                <path
                  d="M609.08471,445.986a4.85961,4.85961,0,1,1,0,9.71921H533.72106a4.85961,4.85961,0,1,1,0-9.71921h75.36365m0-1.19021H533.72106a6.04981,6.04981,0,1,0,0,12.09962h75.36365a6.04981,6.04981,0,1,0,0-12.09962Z"
                  transform="translate(-168 -127.5)"
                  fill="#e4e4e4"
                />
                <path
                  d="M600.77128,456.8954H522.61454a6.0498,6.0498,0,0,1,0-12.09961h78.15674a6.04981,6.04981,0,0,1,0,12.09961Z"
                  transform="translate(-168 -127.5)"
                  fill="#e4e4e4"
                />
                <circle
                  cx="325.95202"
                  cy="353.81729"
                  r="7.16563"
                  fill="#e4e4e4"
                />
                <path
                  d="M609.08471,475.74116a4.8596,4.8596,0,1,1,0,9.7192H533.72106a4.8596,4.8596,0,1,1,0-9.7192h75.36365m0-1.19021H533.72106a6.04981,6.04981,0,1,0,0,12.09962h75.36365a6.04981,6.04981,0,1,0,0-12.09962Z"
                  transform="translate(-168 -127.5)"
                  fill="#e4e4e4"
                />
                <path
                  d="M609.35324,486.65055h-86.7387a6.0498,6.0498,0,1,1,0-12.0996h86.7387a6.0498,6.0498,0,0,1,0,12.0996Z"
                  transform="translate(-168 -127.5)"
                  fill="#e4e4e4"
                />
                <path
                  d="M834.869,559.069a9.31107,9.31107,0,0,0-2.48578-14.05934l6.18842-32.50452-15.87138,6.61427-3.44338,29.8528A9.36152,9.36152,0,0,0,834.869,559.069Z"
                  transform="translate(-168 -127.5)"
                  fill="#ffb7b7"
                />
                <polygon
                  points="746.005 631.024 732.566 631.023 726.173 579.187 746.008 579.188 746.005 631.024"
                  fill="#ffb7b7"
                />
                <path
                  d="M917.43255,771.55081l-43.33277-.0016v-.54809a16.86724,16.86724,0,0,1,16.86633-16.866h.00107l26.46618.00107Z"
                  transform="translate(-168 -127.5)"
                  fill="#2f2e41"
                />
                <polygon
                  points="672.561 631.024 659.122 631.023 652.729 579.187 672.564 579.188 672.561 631.024"
                  fill="#ffb7b7"
                />
                <path
                  d="M840.70006,771.55081l-43.33277-.0016v-.54809a16.86722,16.86722,0,0,1,16.86633-16.866h.00107l26.46618.00107Z"
                  transform="translate(-168 -127.5)"
                  fill="#2f2e41"
                />
                <polygon
                  points="671.46 412.093 658.306 442.398 647.455 616.58 674.86 615.484 682.344 532.451 705.433 458.495 718.707 540.944 724.188 613.291 746.863 614.273 755.9 412.093 671.46 412.093"
                  fill="#2f2e41"
                />
                <path
                  d="M905.21362,390.05686l-38.12506.95367-22.38329,11.49068-1.22837,84.77572-13.96,58.5306s87.22383,6.003,99.2818-2.76638l-14.25032-66.86688,19.11285-72.264Z"
                  transform="translate(-168 -127.5)"
                  fill="#3f3d56"
                />
                <path
                  d="M848.77763,403.82649l-4.07236-1.32528S831.78686,410.792,833.016,430.8364c0,0-.48417,10.37227-.02185,17.27532.53028,7.91777-15.3465,86.5981-15.3465,86.5981h23.01975l9.86561-71.2516Z"
                  transform="translate(-168 -127.5)"
                  fill="#3f3d56"
                />
                <path
                  d="M933.0639,560.1652a9.31107,9.31107,0,0,1,2.48578-14.05934l-6.18842-32.50452,15.87138,6.61426,3.44338,29.85281A9.36152,9.36152,0,0,1,933.0639,560.1652Z"
                  transform="translate(-168 -127.5)"
                  fill="#ffb7b7"
                />
                <path
                  d="M927.92474,404.92267l4.07236-1.32528s12.9184,8.29076,11.68924,28.33519c0,0,.48418,10.37227.02185,17.27532-.53028,7.91777,6.57708,86.59809,6.57708,86.59809H927.26552l-9.86561-71.2516Z"
                  transform="translate(-168 -127.5)"
                  fill="#3f3d56"
                />
                <path
                  d="M914.57247,354.48983A26.42886,26.42886,0,1,1,888.14359,328.061h0a26.36309,26.36309,0,0,1,26.42885,26.29718Q914.57262,354.424,914.57247,354.48983Z"
                  transform="translate(-168 -127.5)"
                  fill="#ffb7b7"
                />
                <path
                  d="M861.80256,318.99109c3.096-6.65745,9.08738-5.34121,14.32725-3.08453,6.63549-1.47185,12.94628-5.87836,20.09563-3.27237,7.04243,10.2428,30.687,7.22922,25.65667,23.90457-.00658,3.99577,7.5188,1.67,6.205,8.21413,3.98647,12.59416-14.38938,36.44561-24.93854,31.42289,2.60895-4.78153,8.56881-15.642-.47064-16.71917-19.44523,18.09309-2.00625-34.45333-26.43873-19.172C868.14949,347.688,857.07439,326.39637,861.80256,318.99109Z"
                  transform="translate(-168 -127.5)"
                  fill="#2f2e41"
                />
              </motion.svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
