
import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-emerald-950 text-white">
     

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

         

          <div>
            <h2 className="text-2xl font-bold text-emerald-300">
              Shikhbo <span className="text-white">AI</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-emerald-100/60">
              Learn practical skills, build real-world projects,
              and become job-ready with modern technology.
            </p>

            <Link
              to="/courses"
              className="
                group mt-5 inline-flex items-center gap-2
                rounded-full border border-emerald-400/30
                bg-emerald-500/10 px-5 py-2.5
                text-sm font-semibold text-emerald-300
                transition-all duration-300
                hover:border-emerald-300
                hover:bg-emerald-500
                hover:text-emerald-950
              "
            >
              Explore Courses

              <ArrowRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                className="
                  w-fit text-sm text-emerald-100/60
                  transition-colors duration-200
                  hover:text-emerald-300
                "
              >
                Home
              </Link>

              <Link
                to="/courses"
                className="
                  w-fit text-sm text-emerald-100/60
                  transition-colors duration-200
                  hover:text-emerald-300
                "
              >
                Courses
              </Link>

              <Link
                to="/instructor"
                className="
                  w-fit text-sm text-emerald-100/60
                  transition-colors duration-200
                  hover:text-emerald-300
                "
              >
                Instructor
              </Link>

              <Link
                to="/about"
                className="
                  w-fit text-sm text-emerald-100/60
                  transition-colors duration-200
                  hover:text-emerald-300
                "
              >
                About
              </Link>

              <Link
                to="/contact"
                className="
                  w-fit text-sm text-emerald-100/60
                  transition-colors duration-200
                  hover:text-emerald-300
                "
              >
                Contact
              </Link>
            </div>
          </div>

         

          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-5">

              {/* Email */}

              <div className="flex items-start gap-3">
                <div
                  className="
                    flex h-9 w-9 shrink-0 items-center
                    justify-center rounded-full
                    border border-emerald-400/20
                    bg-emerald-400/10
                  "
                >
                  <Mail
                    size={17}
                    className="text-emerald-300"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-emerald-100/40">
                    Email
                  </p>

                  <a
                    href="mailto:codetreebd@gmail.com"
                    className="
                      break-all text-sm text-emerald-100/70
                      transition-colors hover:text-emerald-300
                    "
                  >
                    codetreebd@gmail.com
                  </a>

                  <a
                    href="mailto:razi@codetreebd.com"
                    className="
                      mt-1 block break-all text-sm
                      text-emerald-100/70
                      transition-colors hover:text-emerald-300
                    "
                  >
                    razi@codetreebd.com
                  </a>
                </div>
              </div>

              {/* Phone */}

              <div className="flex items-start gap-3">
                <div
                  className="
                    flex h-9 w-9 shrink-0 items-center
                    justify-center rounded-full
                    border border-emerald-400/20
                    bg-emerald-400/10
                  "
                >
                  <Phone
                    size={17}
                    className="text-emerald-300"
                  />
                </div>

                <div>
                  <p className="text-xs text-emerald-100/40">
                    Phone
                  </p>

                  <a
                    href="tel:+8801710070606"
                    className="
                      text-sm text-emerald-100/70
                      transition-colors hover:text-emerald-300
                    "
                  >
                    +88 0171-007-0606
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-white">
              Our Location
            </h3>

            <div className="mt-5 flex items-start gap-3">
              <div
                className="
                  flex h-9 w-9 shrink-0 items-center
                  justify-center rounded-full
                  border border-emerald-400/20
                  bg-emerald-400/10
                "
              >
                <MapPin
                  size={17}
                  className="text-emerald-300"
                />
              </div>

              <p className="text-sm leading-6 text-emerald-100/60">
                Flat-3A, House 73/F,
                <br />
                Road 12/B, Sector 10,
                <br />
                Uttara Model Town,
                <br />
                Dhaka-1230, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="border-t border-emerald-400/10">
        <div
          className="
            mx-auto flex max-w-7xl
            flex-col items-center justify-between
            gap-3 px-5 py-5
            text-center sm:px-6
            md:flex-row md:text-left
            lg:px-8
          "
        >
          <p className="text-xs text-emerald-100/40 sm:text-sm">
            © {new Date().getFullYear()} Shikhbo AI. All rights reserved.
          </p>

          <p className="text-xs text-emerald-100/40 sm:text-sm">
            Learn. Build. Grow.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

