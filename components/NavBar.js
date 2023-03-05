export default function NavBar(props) {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 md:justify-start md:flex-nowrap">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div class="md:grid md:grid-cols-2 md:divide-x flex">
          <a href="/" className="flex flex-end">
            <img
              src="/assets/thinking-north-smart-cities-hackathon-logo.png"
              width="180"
              alt="Thinking North Smart Cities Hackathon Logo"
            />
          </a>
          <div className="hidden md:block mx-1 px-1 md:mx-4 md:px-4 border-l-2">
            <div className="md:relative md:top-2 ">
              <span className=" mb-0 text-xs">hosted by</span>
              <a href="https://www.senecacollege.ca" target={"_blank"} className="flex flex-end">
                <img
                  src="https://www.senecacollege.ca/content/dam/projects/seneca/seneca-logo.svg"
                  width="85"
                  alt="Seneca Logo"
                />
              </a>
            </div>
          </div>
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li> */}
            <li className="my-2 md:flex items-center w-auto">
              <a
                href="/about"
                className="text-lg text-center hover:text-red-700 font-medium"
              >
                About Us
              </a>
            </li>
            <li className="my-2 md:flex items-center w-auto">
              <a
                href="/challengesets"
                className="text-lg text-center hover:text-red-700 font-medium"
              >
                Challenge Sets
              </a>
            </li>
            {/*  */}
            <li className="my-2 md:flex items-center w-auto">
              <a
                href="/history"
                className="text-lg text-center hover:text-red-700 font-medium"
              >
                History
              </a>
            </li>
            <li className="my-2">
              <a
                href="#"
                className="block px-5 py-3 text-sm bg-black hover:bg-black text-white font-semibold border border-black hover:border-black rounded-full transition duration-200"
              >
                {" "}
                Event Date: May 5th - 6th, 2023
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
