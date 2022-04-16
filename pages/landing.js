import Logo from "./logo.png";
import DiscordLogo from "./discord.png";
import lineapp from "./lineapp.png"
import logo3 from "./logo3.jpeg"

function Landing() {
  return (
    <div className="bg-sky-50">
      {/* <h1>Landing</h1> */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={Logo.src} className="w-6" />
            <span className="ml-3 text-xl">Pedamelan</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">Job Category</a>
            <a className="mr-5 hover:text-gray-900">Company</a>
            <a className="mr-5 hover:text-gray-900">About Us</a>
          </nav>
          <button className="inline-flex items-center bg-red-500 text-white border-0 focus:outline-none hover:bg-red-400 px-5 py-3 rounded text-base mt-4 md:mt-0">
            Regsiter account
          </button>
        </div>
      </header>
      <div classNameName="flex ...">
        <div className="grid grid-rows-3 grid-flow-col gap-4 w-4/5 mx-auto py-4">
          <div className="col-span-2 ... text-6xl break-normal">
            Get most exciting
            <br /> job from all around
            <br /> the world here
          </div>
          <div className="row-span-2 col-span-2 ...">
            Work with the largest network independent professionals and get
            <br /> things done - from quick turnarounds to big transformations.
            <div className="bg-white px-8 py-4 rounded-lg my-4">
              <div className="text-xl mb-4">Search Job</div>
              <div className="flex lg:w-3/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    placeholder="eg. UI Designer"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative flex-grow w-full">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Location"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-8 my-2 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg w-full">
                Searcg Job
              </button>
            </div>
          </div>

          <div className="row-span-3 ... bg-gray-100 p-4">
            <button className="inline-flex items-center bg-cyan-600 text-white text-center border-0 focus:outline-none hover:bg-cyan-500 px-5 py-3 rounded text-base mt-4 md:mt-0 w-full">
              Polpular Job
            </button>
            <div>
              <div className="h-full bg-white bg-opacity-75 px-2 py-2 my-2 rounded-lg overflow-hidden text-center relative">
                <div className="flex">
                  <div className="flex items-center pr-1">
                    <img
                      src={DiscordLogo.src}
                      className="h-auto"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                  <div>
                    <div className="text-lg text-left">
                      Senior Website Developer
                    </div>
                    <div className="text-md text-left text-gray-400">
                      Discord Inc.
                    </div>
                  </div>
                </div>
                <div className="grid grid-flow-col gap-1 mx-auto py-2">
                  <div className="col-span-2 text-left">55 people applied</div>
                  <div className="col-span-1">
                    <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 float-right">
                      Opened
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="h-full bg-white bg-opacity-75 px-2 py-2 my-2 rounded-lg overflow-hidden text-center relative">
                <div className="flex">
                  <div className="flex items-center pr-1">
                    <img
                      src={lineapp.src}
                      className="h-auto"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                  <div>
                    <div className="text-lg text-left">
                      Fullstack Website Developer
                    </div>
                    <div className="text-md text-left text-gray-400">
                      LINE Corporation
                    </div>
                  </div>
                </div>
                <div className="grid grid-flow-col gap-1 mx-auto py-2">
                  <div className="col-span-2 text-left">33 people applied</div>
                  <div className="col-span-1">
                    <span className="inline-block py-1 px-2 rounded bg-red-50 text-red-500 float-right">
                      Shortlistened
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="h-full bg-white bg-opacity-75 px-2 py-2 my-2 rounded-lg overflow-hidden text-center relative">
                <div className="flex">
                  <div className="flex items-center pr-1">
                    <img
                      src={logo3.src}
                      className="h-auto"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                  <div>
                    <div className="text-lg text-left">
                      Frontend Website Developer
                    </div>
                    <div className="text-md text-left text-gray-400">
                      Patreon, Inc.
                    </div>
                  </div>
                </div>
                <div className="grid grid-flow-col gap-1 mx-auto py-2">
                  <div className="col-span-2 text-left">55 people applied</div>
                  <div className="col-span-1">
                    <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 float-right">
                      Opened
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              East step to get your dream job
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              WE ensure your next step is a step forward. That's why we built a
              jobs marketplace that cut off the boring proccesses
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Regsiter your account
                </h2>
                <p className="leading-relaxed text-base">
                  By registering on account, you can user our basic features for
                  find hundreds of exciting jobs
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Select your preference
                </h2>
                <p className="leading-relaxed text-base">
                  Discover jobs most relevant to you by Experience level,
                  salary, location job type, etc.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Do the Interview
                </h2>
                <p className="leading-relaxed text-base">
                  Almost done from quick turnarounds to big transformations with
                  your dream job
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </section>
    </div>
  );
}

export default Landing;
