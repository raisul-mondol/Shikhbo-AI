import { useEffect, useState } from "react";
import axios from "axios";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/testimonials"
        );

        setTestimonials(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getTestimonials();
  }, []);

  return (
    <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 pt-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

       
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-emerald-300 text-xs sm:text-sm font-semibold uppercase tracking-[3px]">
            Testimonials
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            What Our Students Say
          </h1>

          <p className="text-sm sm:text-base text-emerald-200 mt-4 max-w-xl mx-auto leading-relaxed">
            Discover what our students say about their learning experience.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((student) => (
            <div
              key={student.id}
              className="
                bg-emerald-900/50
                backdrop-blur-md
                border border-emerald-400/20
                rounded-2xl
                p-5 sm:p-7 md:p-8
                shadow-xl
                hover:bg-emerald-800/60
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              
              <FaQuoteLeft className="text-3xl sm:text-4xl text-emerald-300 mb-4" />

             
              <p className="text-emerald-50 text-sm sm:text-base leading-relaxed">
                "{student.message}"
              </p>

              
              <div className="flex items-center gap-3 sm:gap-4 mt-5 pt-5 border-t border-emerald-400/20">

               
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-4 ring-emerald-400/30 flex-shrink-0"
                />

                
                <div className="min-w-0">
                  <h2 className="font-bold text-white text-base sm:text-lg">
                    {student.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-emerald-300 font-medium mt-1">
                    {student.role}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;