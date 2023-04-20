import React from "react";

function Event() {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
            Our Latest Event
          </h2>

          <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            <div>
              <a
                href="!#"
                class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
              >
                <img
                  src="./img/9.JPG?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-gray-500">CA4 Examination for</span>
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">
                    CIEM (IT,CSE)
                  </span>
                </div>
              </a>
            </div>

            <div>
              <a
                href="!#"
                class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
              >
                <img
                  src="https://pbs.twimg.com/ext_tw_video_thumb/1417824940510826498/pu/img/TZxhUJ9FRkbMKvOx.jpg?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-gray-500">Campus Hiring for</span>
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">
                    Tata Consultancy Services
                  </span>
                </div>
              </a>
            </div>

            <div>
              <a
                href="!#"
                class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
              >
                <img
                  src="https://editorial01.shutterstock.com/preview-440/13698620j/0acae197/Shutterstock_13698620j.jpg?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-gray-500">Off Campus Hiring for</span>
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">
                    Deloitte
                  </span>
                </div>
              </a>
            </div>

            <div>
              <a
                href="#"
                class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
              >
                <img
                  src="./img/8.JPG?auto=format&q=75&fit=crop&w=600&h=700"
                  loading="lazy"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-gray-500">Campus Placement Exam for</span>
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">
                    CISM (BBA,BCA)
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
