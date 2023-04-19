import React from "react";

function Examination() {
  return (
    <div>
      <section>
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-20">
          <div class="flex flex-wrap items-center mx-auto max-w-7xl">
            <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div class="relative w-full max-w-lg">
                  <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div class="relative">
                    <img
                      class="object-cover object-center mx-auto rounded-lg shadow-2xl"
                      alt="hero"
                      src="/img/_DSC0430.JPG"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span class="mb-8 text-sm font-bold tracking-widest text-blue-600 uppercase">
                {" "}
                Examination Procedure{" "}
              </span>
              <h1 class="mb-8 text-4xl font-bold leading-none tracking-wide text-neutral-600 md:text-7xl lg:text-2xl">
                What Students and Admins will do :
              </h1>
              <p class="mb-4 text-base leading-relaxed text-left text-gray-500">
                1. Admins to set the entire exam including exam questions,ans
                and exam timing,and they an also invigilate online if they want.
              </p>
              <p class="mb-4 text-base leading-relaxed text-left text-gray-500">
                2. For admins ,there are two section in the navbar, Exam and
                result management.They can edit the results also.
              </p>
              <p class="mb-4 text-base leading-relaxed text-left text-gray-500">
                3. For Students ,they will be logging into the server and see
                the list of available exams and can attempt the exams.
              </p>
              <p class="mb-4 text-base leading-relaxed text-left text-gray-500">
                4. For the result and certiicates purpose ,students will go to
                the result portal and enter their roll number to get there
                certificate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Examination;
