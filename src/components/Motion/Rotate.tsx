import { motion, useAnimation, useInView } from "framer-motion";
import { JSX, useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
}

export const Rotate = ({ children }: Props) => {
  const ref = useRef(null);
  const maincontrol = useAnimation();
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      maincontrol.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0.5, rotate: -90 },
          visible: { opacity: 1, rotate: 0 },
        }}
        initial="hidden"
        animate={maincontrol}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
