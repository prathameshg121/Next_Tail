function Landing() {
  return (
    <div>
      {/* <h1>Landing</h1> */}
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Pedamelan</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">Home</a>
            <a class="mr-5 hover:text-gray-900">Job Category</a>
            <a class="mr-5 hover:text-gray-900">Company</a>
            <a class="mr-5 hover:text-gray-900">About Us</a>
          </nav>
          <button class="inline-flex items-center bg-red-500 text-white border-0 focus:outline-none hover:bg-red-400 px-5 py-3 rounded text-base mt-4 md:mt-0">
            Regsiter account
          </button>
        </div>
      </header>
      <div className="flex ...">
        <div class="grid grid-rows-3 grid-flow-col gap-4 w-4/5 mx-auto py-4">
          <div class="col-span-2 ... text-6xl break-normal">
            Get most exciting
            <br /> job from all around
            <br /> the world here
          </div>
          <div class="row-span-2 col-span-2 ...">
            Work with the largest network independent professionals and get
            <br /> things done - from quick turnarounds to big transformations.
          </div>
          <div class="row-span-3 ... bg-gray-100 p-4">
            <button class="inline-flex items-center bg-cyan-600 text-white text-center border-0 focus:outline-none hover:bg-cyan-500 px-5 py-3 rounded text-base mt-4 md:mt-0 w-full">
              Polpular Job
            </button>
            <div>
              <div class="h-full bg-white bg-opacity-75 px-2 py-2 my-2 rounded-lg overflow-hidden text-center relative">
                <div class="text-lg text-left">Senior Website Developer</div>
                <div class="text-md text-left text-gray-400">Discord Inc.</div>
                <div class="grid grid-flow-col gap-1 mx-auto py-2">
                  <div class="col-span-2 text-left">55 people applied</div>
                  <div class="col-span-1">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 float-right">Opened</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="h-full bg-white bg-opacity-75 px-2 py-2 my-2 rounded-lg overflow-hidden text-center relative">
                <div class="text-lg text-left">Senior Website Developer</div>
                <div class="text-md text-left text-gray-400">Discord Inc.</div>
                <div class="grid grid-flow-col gap-1 mx-auto py-2">
                  <div class="col-span-2 text-left">55 people applied</div>
                  <div class="col-span-1">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 float-right">Opened</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="h-full bg-white bg-opacity-75 px-2 py-2 my-2 rounded-lg overflow-hidden text-center relative">
                <div class="text-lg text-left">Senior Website Developer</div>
                <div class="text-md text-left text-gray-400">Discord Inc.</div>
                <div class="grid grid-flow-col gap-1 mx-auto py-2">
                  <div class="col-span-2 text-left">55 people applied</div>
                  <div class="col-span-1">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 float-right">Opened</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
