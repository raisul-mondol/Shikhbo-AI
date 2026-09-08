import React, { useState } from "react";
import CoursesCard from "../CoursesCard";
import useCoursesHook from "../../Hooks/useCoursesHook";
import { Search } from "lucide-react";

function Mcourses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const {
    courses: allCourses,
    loading,
    error,
  } = useCoursesHook();

  // Category list
  const categories = [
    ...new Set(allCourses.map((course) => course.category)),
  ];

  // Search + Category filter
  const courses = allCourses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  if (loading) {
    return <p>Loading courses...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="min-h-screen bg-[linear-gradient(135deg,#042f2e_0%,#064e3b_35%,#115e59_65%,#0f766e_100%)] px-4 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Learn & Grow
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Explore Our{" "}
            <span className="text-emerald-300">
              All Courses
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
            Discover courses designed to build practical skills and help you
            become job-ready.
          </p>
        </div>

        {/* Search + Category */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

          {/* Search */}
          <div className="relative mx-auto w-2/3 lg:flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
            />

            <input
              type="text"
              value={search}
              onChange={handleInput}
              placeholder="Search courses..."
              className="w-full rounded-lg border border-white/10 bg-white/10 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-emerald-300/50 focus:bg-white/15"
            />
          </div>

          {/* Category */}
          <div className="mx-auto w-2/3 lg:w-1/3">
            <select
              value={category}
              onChange={handleCategory}
              className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-300/50 focus:bg-white/15"
            >
              <option
                value=""
                className="bg-emerald-950"
              >
                All Categories
              </option>

              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="bg-emerald-950"
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result count */}
        <div className="mt-8">
          <p className="text-sm text-white/60">
            Showing{" "}
            <span className="font-semibold text-emerald-300">
              {courses.length}
            </span>{" "}
            courses
          </p>
        </div>

        {/* Courses */}
        {courses.length > 0 ? (
          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CoursesCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-white/60">
            No courses found.
          </p>
        )}

      </div>
    </section>
  );
}

export default Mcourses;