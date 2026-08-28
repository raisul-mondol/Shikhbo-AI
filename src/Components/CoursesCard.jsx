
import React from "react";
import {
  Clock,
  BookOpen,
  Users,
  BadgeCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function CoursesCard({ course }) {
  const navigate = useNavigate();

  const Fprice = course.discount
    ? Math.round(
        course.price -
          (course.price * course.discount) / 100
      )
    : course.price;

  return (
    <div className="h-full">
      {/* Outer Glass Card */}
      <div
        className="
          h-full
          rounded-lg
          border
          border-white/15
          bg-white/10
          p-3
          shadow-md
          shadow-black/30
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-emerald-400/30
          hover:shadow-xl
          hover:shadow-emerald-950/40
          sm:mx-auto
          sm:w-3/4
          md:mx-0
          md:w-full
        "
      >
        {/* Inner Emerald Card */}
        <div
          className="
            flex
            h-full
            flex-col
            overflow-hidden
            rounded-lg
            border
            border-emerald-600/70
            bg-emerald-900
          "
        >
          {/* ================= IMAGE ================= */}

          <div className="relative overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="
                h-44
                w-full
                shrink-0
                rounded-t-lg
                object-cover
                transition-transform
                duration-500
                hover:scale-[1.03]
              "
            />

            {/* Discount Badge */}

            {course.discount && (
              <div
                className="
                  absolute
                  right-3
                  top-3
                  rounded-lg
                  border
                  border-emerald-300/30
                  bg-emerald-950/85
                  px-2
                  py-1
                  text-xs
                  font-semibold
                  text-yellow-400
                  shadow-lg
                  backdrop-blur-md
                "
              >
                {course.discount}% OFF
              </div>
            )}
          </div>

          {/* ================= CATEGORY + LEVEL ================= */}

          <div
            className="
              mt-2
              flex
              items-center
              justify-between
              px-1
              pr-2
            "
          >
            <p
              className="
                text-base
                font-semibold
                text-emerald-300
                sm:text-lg
              "
            >
              {course.category}
            </p>

            <p
              className="
                rounded-md
                border
                border-white/15
                bg-black/10
                px-2
                py-1
                text-xs
                font-medium
                text-yellow-400
                backdrop-blur-2xl
                sm:text-sm
              "
            >
              {course.level}
            </p>
          </div>

          {/* ================= CONTENT ================= */}

          {/* flex-1 keeps all cards equal height */}
          <div
            className="
              flex
              flex-1
              flex-col
              px-1
              py-2
            "
          >
            {/* Title */}

            <h1
              className="
                mt-1
                text-lg
                font-bold
                leading-tight
                text-white
                sm:text-xl
              "
            >
              {course.title}
            </h1>

            {/* Description */}

            <p
              className="
                mt-2
                line-clamp-2
                text-sm
                leading-5
                text-white/75
                sm:text-base
              "
            >
              {course.description}
            </p>

            {/* ================= COURSE INFO ================= */}

            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                gap-2
                text-xs
                sm:text-sm
                lg:text-xs
                xl:text-sm
              "
            >
              {/* Duration */}

              <span
                className="
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-2.5
                  py-1.5
                  text-white/70
                "
              >
                <Clock
                  className="
                    h-4
                    w-4
                    shrink-0
                    text-emerald-300
                  "
                />

                <span>{course.duration}</span>
              </span>

              {/* Lessons */}

              <span
                className="
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-2.5
                  py-1.5
                  text-white/70
                "
              >
                <BookOpen
                  className="
                    h-4
                    w-4
                    shrink-0
                    text-emerald-300
                  "
                />

                <span>
                  {course.lessons} Lessons
                </span>
              </span>

              {/* Students */}

              <span
                className="
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-2.5
                  py-1.5
                  text-white/70
                "
              >
                <Users
                  className="
                    h-4
                    w-4
                    shrink-0
                    text-emerald-300
                  "
                />

                <span>{course.students}</span>
              </span>

              {/* Certificate */}

              <span
                className="
                  group
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-amber-400/25
                  bg-linear-to-r
                  from-amber-400/15
                  to-yellow-300/5
                  px-2.5
                  py-1.5
                  text-amber-200
                  shadow-sm
                  shadow-amber-500/10
                "
              >
                <BadgeCheck
                  className="
                    h-4
                    w-4
                    shrink-0
                    text-amber-400
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span className="font-medium">
                  Certificate
                </span>
              </span>
            </div>

            {/* ================= DIVIDER ================= */}

            <div
              className="
                my-2
                h-px
                bg-linear-to-r
                from-transparent
                via-white/15
                to-transparent
              "
            />

            {/* ================= INSTRUCTOR ================= */}

            <div className="flex items-center gap-3">
              <img
                src={course.instructorImage}
                alt={course.instructor}
                className="
                  h-10
                  w-10
                  shrink-0
                  rounded-full
                  border
                  border-emerald-400/20
                  object-cover
                  sm:h-11
                  sm:w-11
                  md:h-12
                  md:w-12
                "
              />

              <div className="min-w-0">
                <p
                  className="
                    truncate
                    text-sm
                    font-medium
                    text-white
                    sm:text-base
                  "
                >
                  {course.instructor}
                </p>

                <p
                  className="
                    text-xs
                    text-white/50
                    sm:text-sm
                  "
                >
                  Instructor
                </p>
              </div>
            </div>

            {/* ================= DIVIDER ================= */}

            <div
              className="
                my-2
                h-px
                bg-linear-to-r
                from-transparent
                via-white/15
                to-transparent
              "
            />

            {/* ================= PRICE ================= */}

            <div
              className="
                mt-1
                flex
                items-center
                justify-between
                gap-2
                pr-1
              "
            >
              <div className="flex items-baseline gap-2">
                <p
                  className="
                    text-xl
                    font-bold
                    text-white
                    lg:text-2xl
                  "
                >
                  <span className="text-2xl lg:text-3xl">
                    ৳
                  </span>
                  {Fprice}
                </p>

                {course.discount && (
                  <p
                    className="
                      text-xs
                      text-yellow-500
                      line-through
                      sm:text-sm
                    "
                  >
                    ৳{course.price}
                  </p>
                )}
              </div>
            </div>

            {/* ================= BUTTONS ================= */}

            {/* mt-auto stays here */}
            <div
              className="
                mt-auto
                flex
                w-full
                flex-col
                gap-2
                pt-2
                sm:flex-row
                sm:gap-3
              "
            >
              {/* View Details */}

              <button
                onClick={() =>
                  navigate(`/courses/${course.id}`)
                }
                className="
                  flex-1
                  cursor-pointer
                  rounded-md
                  border
                  border-emerald-300/20
                  bg-white/5
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:border-emerald-300/40
                  hover:bg-emerald-800/50
                  hover:text-emerald-100
                  active:scale-[0.98]
                  sm:text-base
                "
              >
                View Details
              </button>

              {/* Enroll Now */}

              <button
                onClick={() =>
                  navigate(`/payment/${course.id}`)
                }
                className="
                  flex-1
                  cursor-pointer
                  rounded-md
                  border
                  border-emerald-300/30
                  bg-emerald-500
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-emerald-950
                  shadow-sm
                  shadow-emerald-400/10
                  transition-all
                  duration-300
                  hover:bg-emerald-400
                  hover:shadow-lg
                  hover:shadow-emerald-400/20
                  active:scale-[0.98]
                  sm:text-base
                "
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;



