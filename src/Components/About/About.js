import React from "react";

function About() {
  return (
    <div>
      <hr />
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src="./img/9.JPG?auto=format&q=75&fit=crop&w=600&h=750"
                  loading="lazy"
                  alt="Photo by Shuvam"
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div class="md:pt-8">
              <p class="text-center font-bold text-indigo-500 md:text-left">
                Who we are
              </p>

              <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                About Us
              </h1>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
              Passion: We are passionate to deliver what we commit across all stakeholders. <br /><br />
Mindset: For us learning is a continuous process. As we execute our projects, we simultaneously learn to deliver better and more relevant services.<br /><br />
Integrity: We believe in delivering more than what we commit. Integrity, for us, is more than just a word. We stand firm on our committed goals and endeavor to surpass our set standard, every time. <br /><br />
Accountability: We are accountable to all the hopeful, aspiring talents who are waiting to make it big in the real world. On the other hand, we are accountable to all the corporates to help them identify the best talents to suit their requirements. <br /><br />
Customer Focus: Steadfast customer focus is an obsession for us. Be it the aspiring students, their alma mater, or the corporates<br /><br />
Learn & Grow: We believe that one cannot grow unless one has a learning attitude.<br /><br />
Teamwork: We believe that one can achieve more as a team.<br />
                
              </p>


             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
