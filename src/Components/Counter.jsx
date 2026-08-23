import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";

const Counter = ({
  from = 0,
  to,
  duration = 4,
  decimals = 0,
  className = "",
}) => {
  const count = useMotionValue(from);

  const displayValue = useTransform(count, (latest) =>
    latest.toFixed(decimals)
  );

  const startCount = () => {
    animate(count, to, {
      duration,
      ease: "easeOut",
    });
  };

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.8, once: true }}
      onViewportEnter={startCount}
      className={className}
    >
      {displayValue}
    </motion.span>
  );
};

export default Counter;