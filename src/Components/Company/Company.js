import React from "react";

function Company() {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-24">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="mb-8 md:mb-12">
            <h2 class="mb-4 text-center text-2xl font-bold text-neutral-600 md:mb-6 lg:text-3xl">
              Companies,Colleges We've Dealt With :
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              We conduct college examinations and placement drives as well,Check
              out our latest engagements.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
            <div class="flex flex-col items-center hover:shadow-sm hover:shadow-blue-500 justify-center rounded-lg bg-gray-100 p-4 lg:p-8">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                CIEM
              </div>
              <div class="text-sm font-semibold sm:text-base">
                CA4 examination
              </div>
            </div>

            <div class="flex flex-col items-center background img hover:shadow-sm hover:shadow-orange-500 justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                CISM
              </div>
              <div class="text-sm font-semibold sm:text-base">
                Placement Drive for BBA,BCA
              </div>
            </div>

            <div class="flex flex-col items-center  hover:shadow-sm hover:shadow-green-500 justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                TCS
              </div>
              <div class="text-sm font-semibold sm:text-base">
                On Campus Placement Drive
              </div>
            </div>

            <div class="flex flex-col items-center hover:shadow-sm hover:shadow-neutral-500 justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                Deloitte
              </div>
              <div class="text-sm font-semibold sm:text-base">
                Off campus Placement Drive
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
