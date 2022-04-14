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
          <button class="inline-flex items-center bg-blue-700 text-white border-0 focus:outline-none hover:bg-blue-500 px-5 py-3 rounded text-base mt-4 md:mt-0">
            Regsiter Account
          </button>
        </div>
      </header>
      <div className="flex ...">
      <div class="grid grid-rows-3 grid-flow-col gap-4 w-4/5 px-auto">
        <div class="col-span-2 ...">02</div>
        <div class="row-span-2 col-span-2 ...">03</div>
        <div class="row-span-3 ...">01</div>
      </div>
      </div>
    </div>
  );
}

export default Landing;
