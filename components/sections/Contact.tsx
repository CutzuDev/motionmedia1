function Contact() {
  return (
    <section
      id="contact"
      className="my-10 flex w-full select-none flex-col items-center justify-center p-5 pb-[120px]"
    >
      <div className="border-opacity-30px-5 flex w-full max-w-[800px] flex-col items-center justify-between gap-[60px] rounded-lg border border-gray-300 border-opacity-30 bg-black bg-opacity-20 py-10 backdrop-blur-md transition-all hover:bg-opacity-40 sm:p-10">
        <span className="text-6xl font-black">Contact</span>
        <div className="flex flex-col items-center justify-center gap-10">
          <a
            href="https://calendly.com/motionmediaagency/30min"
            target="_blank"
            className="flex w-full items-center justify-center gap-4 rounded-lg bg-gradient-to-tl from-blue-800 to-blue-400 px-8 py-4"
          >
            <span className="text-3xl font-black ">Callendly</span>
            <div className="rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
            </div>
          </a>
          <a
            href="mailto:motionmediaagencysrl@gmail.com"
            className=" x-8 flex w-full items-center justify-center gap-4 rounded-lg bg-gradient-to-tl from-blue-800 to-blue-400 py-4"
          >
            <span className="text-3xl font-black ">Email</span>
            <div className="rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
