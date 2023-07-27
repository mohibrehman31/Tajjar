import { motion, inView } from "framer-motion";
import { JSX, useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  width: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  useEffect(() => {
    console.log(inView);
  }, [inView]);
  return (
    <div ref={ref} style={{ overflow: "hidden", width, position: "relative" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 80 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
