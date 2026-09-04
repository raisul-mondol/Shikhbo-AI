import React from "react";
import Stepper, { Step } from "../../Motion/Stepper";

function LearnigPath() {
  return (
    <section
      className="
        w-full
        bg-emerald-900
        px-4
        py-6
        sm:px-6
        md:px-8
        
      "
    >
      

      <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          How Shikhbo AI Works
        </p>

        <h2
          className="
            mt-3
            text-3xl
            font-bold
            tracking-tight
            text-white
            sm:text-4xl
            lg:text-5xl
          "
        >
          Your Journey From{" "}
          <span className="text-emerald-400">
            Learning to Building
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-sm
            leading-6
            text-emerald-100/60
            sm:text-base
          "
        >
          Follow a structured learning path designed to
          help you learn practical skills, build real
          projects, and become career-ready.
        </p>
      </div>

     

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          items-stretch
          gap-6
          md:flex-row
          md:items-center
          md:gap-8
          lg:gap-10
        "
      >
    

        <div className="w-full md:flex-1">
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log(step);
            }}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            
            <Step>
              <div className="py-2">
                <span className="text-sm font-medium text-emerald-400">
                  Step 01
                </span>

                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Choose Your Course
                </h2>

                <p className="mt-2 text-sm leading-6 text-emerald-100/70">
                  Explore our courses and choose the learning
                  path that matches your goals and interests.
                </p>
              </div>
            </Step>

            <Step>
              <div className="py-2">
                <span className="text-sm font-medium text-emerald-400">
                  Step 02
                </span>

                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Learn with AI
                </h2>

                <p className="mt-2 text-sm leading-6 text-emerald-100/70">
                  Learn through structured lessons, practical examples, and real-world AI tools. Build programming skills while learning how to use AI effectively in your development workflow.

                </p>
              </div>
            </Step>

           
            <Step>
              <div className="py-2">
                <span className="text-sm font-medium text-emerald-400">
                  Step 03
                </span>

                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Practice Your Skills
                </h2>

                <p className="mt-2 text-sm leading-6 text-emerald-100/70">
                  Strengthen your knowledge with coding
                  exercises, quizzes, challenges, and hands-on
                  practice.
                </p>
              </div>
            </Step>

           
            <Step>
              <div className="py-2">
                <span className="text-sm font-medium text-emerald-400">
                  Step 04
                </span>

                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Build Real Projects
                </h2>

                <p className="mt-2 text-sm leading-6 text-emerald-100/70">
                  Turn your knowledge into real-world projects
                  and build a portfolio that showcases your
                  skills.
                </p>
              </div>
            </Step>

          
            <Step>
              <div className="py-2">
                <span className="text-sm font-medium text-emerald-400">
                  Step 05
                </span>

                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Earn Your Certificate
                </h2>

                <p className="mt-2 text-sm leading-6 text-emerald-100/70">
                  Complete your course and final assessment
                  to earn a certificate and move forward in
                  your career journey.
                </p>
              </div>
            </Step>
          </Stepper>
        </div>

       

        <div
          className="
            w-full
            rounded-2xl
            border
            border-emerald-400/15
            bg-emerald-900/30
            p-6
            shadow-xl
            shadow-emerald-950/30
            backdrop-blur-sm
            md:flex-1
            lg:p-8
          "
        >
        

          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-emerald-500/10
                text-emerald-400
                ring-1
                ring-emerald-400/20
              "
            >
              ✦
            </div>

            <div>
              <p className="text-sm font-semibold text-emerald-400">
                Your Outcome
              </p>

              <p className="text-xs text-emerald-100/50">
                What you'll gain
              </p>
            </div>
          </div>

         

          <h3
            className="
              mt-6
              text-2xl
              font-bold
              leading-tight
              text-white
              sm:text-3xl
            "
          >
            Learn Skills That
            <span className="text-emerald-400">
              {" "}
              Actually Matter.
            </span>
          </h3>

          <p className="mt-3 text-sm leading-6 text-emerald-100/60">
            Shikhbo AI focuses on practical learning so
            you don't just finish a course — you build
            skills you can actually use.
          </p>

         

          <div className="mt-7 space-y-4">
            <OutcomeItem
              title="Practical Skills"
              description="Learn skills through real examples and practice."
            />

            <OutcomeItem
              title="Real-World Projects"
              description="Build projects that strengthen your portfolio."
            />

            <OutcomeItem
              title="AI-Powered Guidance"
              description="Get personalized help throughout your journey."
            />

            <OutcomeItem
              title="Course Certificate"
              description="Earn a certificate after completing your course."
            />
          </div>

          

          <div
            className="
              mt-7
              rounded-xl
              border
              border-emerald-400/10
              bg-emerald-950/50
              px-4
              py-4
            "
          >
            <p className="text-xs uppercase tracking-wider text-emerald-400">
              Final Goal
            </p>

            <p className="mt-1 text-sm font-semibold text-white">
              Become confident. Build projects. Get career-ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



function OutcomeItem({ title, description }) {
  return (
    <div className="flex gap-3">
      <div
        className="
          mt-0.5
          flex
          h-6
          w-6
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-emerald-400/10
          text-emerald-400
          ring-1
          ring-emerald-400/20
        "
      >
        ✓
      </div>

      <div>
        <h4 className="text-sm md:text-base font-semibold text-white">
          {title}
        </h4>

        <p className="mt-1 text-xs md:text-sm leading-5 text-emerald-100">
          {description}
        </p>
      </div>
    </div>
  );
}

export default LearnigPath;