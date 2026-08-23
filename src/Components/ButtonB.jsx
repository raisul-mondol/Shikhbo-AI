import React from "react";
import { motion } from "motion/react";

function ButtonB({ children, className = "", onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className={`
        group
        relative
        overflow-hidden
        px-5
        py-3
        md:px-6
        md:py-3
        rounded-lg
        bg-emerald-600
        text-white
        font-semibold
        shadow-lg
        shadow-emerald-500/40
        hover:bg-emerald-500
        focus:outline-none
        ${className}
      `}
    >
      <span className="relative z-10">
        {children}
      </span>

      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-linear-to-r
          from-transparent
          via-white/40
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />
    </motion.button>
  );
}

export default ButtonB;