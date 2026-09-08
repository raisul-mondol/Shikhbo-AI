import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-emerald-900 text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">

       
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">

          <p className="text-emerald-300 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] mb-3">
            About Shikhbo AI
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Learn Today.{" "}
            <span className="text-emerald-300">
              Build Tomorrow.
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-emerald-100 leading-7">
            Shikhbo AI is a modern learning platform designed to help students
            learn technology, build real-world projects, and develop the skills
            they need for their future careers.
          </p>

        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div className="space-y-5 sm:space-y-6">

            <div>
              <p className="text-emerald-300 font-semibold text-sm sm:text-base mb-2">
                OUR MISSION
              </p>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Why Choose Shikhbo AI?
              </h3>
            </div>

            <p className="text-sm sm:text-base text-emerald-100 leading-7">
              We believe learning technology should be simple, practical and
              accessible to everyone. Our courses are carefully designed with
              step-by-step lessons, practical examples and real-world projects.
            </p>

            <p className="text-sm sm:text-base text-emerald-100 leading-7">
              From frontend development to backend, full-stack development and
              UI/UX design, Shikhbo AI helps learners gain practical skills and
              become confident developers and designers.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-700 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <h4 className="font-semibold">
                    Practical Learning
                  </h4>

                  <p className="text-sm text-emerald-200 mt-1">
                    Learn by building real projects.
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-700 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <h4 className="font-semibold">
                    Expert Instructors
                  </h4>

                  <p className="text-sm text-emerald-200 mt-1">
                    Learn from experienced developers.
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-700 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <h4 className="font-semibold">
                    Step-by-Step
                  </h4>

                  <p className="text-sm text-emerald-200 mt-1">
                    Easy lessons for every learner.
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-700 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <h4 className="font-semibold">
                    Career Focused
                  </h4>

                  <p className="text-sm text-emerald-200 mt-1">
                    Skills that prepare you for jobs.
                  </p>
                </div>
              </div>

            </div>


            <a
              href="#courses"
              className="inline-block mt-3 px-6 sm:px-7 py-3 rounded-full
              bg-white text-emerald-900 text-sm sm:text-base font-semibold
              hover:bg-emerald-100 hover:scale-105
              transition-all duration-300"
            >
              Explore Courses
            </a>

          </div>


          
          <div className="grid grid-cols-2 gap-3 sm:gap-5">

            <div
              className="bg-emerald-800 border border-emerald-700
              rounded-xl sm:rounded-2xl p-5 sm:p-7
              text-center hover:-translate-y-2
              transition-transform duration-300"
            >
              <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                10+
              </h4>

              <p className="text-xs sm:text-sm md:text-base text-emerald-200 mt-2">
                Professional Courses
              </p>
            </div>


            <div
              className="bg-emerald-800 border border-emerald-700
              rounded-xl sm:rounded-2xl p-5 sm:p-7
              text-center hover:-translate-y-2
              transition-transform duration-300"
            >
              <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                10K+
              </h4>

              <p className="text-xs sm:text-sm md:text-base text-emerald-200 mt-2">
                Happy Learners
              </p>
            </div>


            <div
              className="bg-emerald-800 border border-emerald-700
              rounded-xl sm:rounded-2xl p-5 sm:p-7
              text-center hover:-translate-y-2
              transition-transform duration-300"
            >
              <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                50+
              </h4>

              <p className="text-xs sm:text-sm md:text-base text-emerald-200 mt-2">
                Practical Lessons
              </p>
            </div>


            {/* Card 4 */}
            <div
              className="bg-emerald-800 border border-emerald-700
              rounded-xl sm:rounded-2xl p-5 sm:p-7
              text-center hover:-translate-y-2
              transition-transform duration-300"
            >
              <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                100%
              </h4>

              <p className="text-xs sm:text-sm md:text-base text-emerald-200 mt-2">
                Practical Learning
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;