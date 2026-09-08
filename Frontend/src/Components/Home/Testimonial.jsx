
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get("/db.json");

        setTestimonials(res.data.testimonials);
      } catch (error) {
        console.log(error);
        setError("Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <p>Loading testimonials...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section
      className="
        overflow-hidden
        bg-gradient-to-br
        from-emerald-950
        via-emerald-900
        to-teal-800
        px-4
        py-10
        sm:px-6
        sm:py-14
        lg:py-16
      "
    >
      <div className="mx-auto max-w-7xl">

     

        <div className="mb-10 text-center sm:mb-14">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-emerald-300
              sm:text-sm
            "
          >
            Testimonials
          </p>

          <h1
            className="
              mt-3
              text-3xl
              font-bold
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            What Our Students Say
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-relaxed
              text-emerald-200
              sm:text-base
            "
          >
            Discover what our students say about their learning experience.
          </p>
        </div>


        <div className="relative w-full overflow-hidden">

          {/* Left Gradient */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-10
              bg-gradient-to-r
              from-emerald-950
              to-transparent
              sm:w-16
              lg:w-24
            "
          />

          
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-10
              bg-gradient-to-l
              from-teal-800
              to-transparent
              sm:w-16
              lg:w-24
            "
          />

          <motion.div
            className="flex w-max gap-4 sm:gap-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            

            {testimonials.map((student) => (
              <div
                key={`first-${student.id}`}
                className="
                  w-[280px]
                  shrink-0
                  rounded-2xl
                  border
                  border-emerald-400/20
                  bg-emerald-900/50
                  p-5
                  shadow-xl
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-emerald-800/60
                  sm:w-[340px]
                  sm:p-7
                  lg:w-[380px]
                  lg:p-8
                "
              >
               

                <FaQuoteLeft
                  className="
                    mb-4
                    text-3xl
                    text-emerald-300
                    sm:text-4xl
                  "
                />


                <p
                  className="
                    min-h-[100px]
                    text-sm
                    leading-relaxed
                    text-emerald-50
                    sm:min-h-[120px]
                    sm:text-base
                  "
                >
                  "{student.message}"
                </p>

                

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-3
                    border-t
                    border-emerald-400/20
                    pt-5
                    sm:gap-4
                  "
                >
                  <img
                    src={student.image}
                    alt={student.name}
                    loading="lazy"
                    decoding="async"
                    className="
                      h-12
                      w-12
                      shrink-0
                      rounded-full
                      object-cover
                      ring-4
                      ring-emerald-400/30
                      sm:h-14
                      sm:w-14
                    "
                  />

                  <div className="min-w-0">
                    <h2
                      className="
                        truncate
                        text-base
                        font-bold
                        text-white
                        sm:text-lg
                      "
                    >
                      {student.name}
                    </h2>

                    <p
                      className="
                        mt-1
                        truncate
                        text-xs
                        font-medium
                        text-emerald-300
                        sm:text-sm
                      "
                    >
                      {student.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}


            {testimonials.map((student) => (
              <div
                key={`second-${student.id}`}
                className="
                  w-[280px]
                  shrink-0
                  rounded-2xl
                  border
                  border-emerald-400/20
                  bg-emerald-900/50
                  p-5
                  shadow-xl
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-emerald-800/60
                  sm:w-[340px]
                  sm:p-7
                  lg:w-[380px]
                  lg:p-8
                "
              >
                

                <FaQuoteLeft
                  className="
                    mb-4
                    text-3xl
                    text-emerald-300
                    sm:text-4xl
                  "
                />

                

                <p
                  className="
                    min-h-[100px]
                    text-sm
                    leading-relaxed
                    text-emerald-50
                    sm:min-h-[120px]
                    sm:text-base
                  "
                >
                  "{student.message}"
                </p>

               

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-3
                    border-t
                    border-emerald-400/20
                    pt-5
                    sm:gap-4
                  "
                >
                  <img
                    src={student.image}
                    alt={student.name}
                    loading="lazy"
                    decoding="async"
                    className="
                      h-12
                      w-12
                      shrink-0
                      rounded-full
                      object-cover
                      ring-4
                      ring-emerald-400/30
                      sm:h-14
                      sm:w-14
                    "
                  />

                  <div className="min-w-0">
                    <h2
                      className="
                        truncate
                        text-base
                        font-bold
                        text-white
                        sm:text-lg
                      "
                    >
                      {student.name}
                    </h2>

                    <p
                      className="
                        mt-1
                        truncate
                        text-xs
                        font-medium
                        text-emerald-300
                        sm:text-sm
                      "
                    >
                      {student.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

