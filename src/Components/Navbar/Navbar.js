import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  function toggledown() {
    setIsShow(!isShow);
  }

  return (
    <div>
      <div class="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <svg
              class="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              LEARNERS
            </span>
          </a>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                About Us
              </Link>
            </li>

            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <span className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                  Students
                </span>
                <svg
                  className={`transition-transform duration-200 transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a.75.75 0 01.75.75v12.5L14.251 13a.75.75 0 11.498 1.379l-4.501 3.25a.75.75 0 01-.748 0l-4.501-3.25a.75.75 0 01.498-1.379l3.5 2.5V2.75A.75.75 0 0110 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <ul
                className={`${
                  isOpen ? "" : "hidden"
                } absolute bg-white py-2 w-32 mt-4 shadow-neutral-500 rounded-md shadow-md`}
              >
                 <a href="https://learnersexamportal.000webhostapp.com/">
                <li className="px-4 py-2  hover:bg-gray-100 cursor-pointer">
                  Take Exam
                </li></a>
                <hr />
                <a href="https://learnersresult.000webhostapp.com/find-result.php">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Check Result
                </li></a>
              </ul>
            </div>

            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggledown}
              >
                <span className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                  Admins
                </span>
                <svg
                  className={`transition-transform duration-200 transform ${
                    isShow ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a.75.75 0 01.75.75v12.5L14.251 13a.75.75 0 11.498 1.379l-4.501 3.25a.75.75 0 01-.748 0l-4.501-3.25a.75.75 0 01.498-1.379l3.5 2.5V2.75A.75.75 0 0110 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <ul
                className={`${
                  isShow ? "" : "hidden"
                } absolute bg-white py-2 w-44 mt-4 shadow-neutral-500 rounded-md shadow-md`}
              >
                <a href="https://learnersexamportal.000webhostapp.com/adminpanel/admin/">
                <li className="px-4 py-2  hover:bg-gray-100 cursor-pointer">
                  Exam Management
                </li></a>
                <hr />
                <a href="https://learnersresult.000webhostapp.com/">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Result Management
                </li></a>
              </ul>
            </div>

            <li>
              <Link
                to="/course"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <a
                href="/"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Contact us
              </a>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <svg
                          class="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About Us
                        </Link>
                      </li>
                      <div className="relative">
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={toggleDropdown}
                        >
                          <span className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                            Students
                          </span>
                        </div>
                        <ul
                          className={`${
                            isOpen ? "" : "hidden"
                          } absolute bg-white py-2 w-32 mt-4 shadow-neutral-500 rounded-md shadow-md`}
                        >
                          <li className="px-4 py-2  hover:bg-gray-100 cursor-pointer">
                            Take Exam
                          </li>
                          <hr />
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Check Result
                          </li>
                        </ul>
                      </div>

                      <div className="relative">
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={toggledown}
                        >
                          <span className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                            Admins
                          </span>
                        </div>
                        <ul
                          className={`${
                            isShow ? "" : "hidden"
                          } absolute bg-white py-2 w-44 mt-4 shadow-neutral-500 rounded-md shadow-md`}
                        >
                          <li className="px-4 py-2  hover:bg-gray-100 cursor-pointer">
                            Exam Management
                          </li>
                          <hr />
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Result Management
                          </li>
                        </ul>
                      </div>
                      <li>
                        <Link
                          to="/course"
                          aria-label="About us"
                          title="About us"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <a
                          href="/Contact"
                          aria-label="About us"
                          title="About us"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
