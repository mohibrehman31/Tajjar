import { motion, useAnimation, useInView } from "framer-motion";
import { JSX, useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  motionType: string;
}

export const Reveal = ({ children, motionType }: Props) => {
  const ref = useRef(null);
  const maincontrol = useAnimation();
  const verticalcontrol = useAnimation();
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView && motionType === "Horizontal") {
      maincontrol.start("visible");
    }
    if (isInView && motionType === "Vertical") {
      verticalcontrol.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative" }}>
      {motionType !== "Vertical" ? (
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={maincontrol}
          transition={{ duration: 1, delay: 0.25 }}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={verticalcontrol}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};
