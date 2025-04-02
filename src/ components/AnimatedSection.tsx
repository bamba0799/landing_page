// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// type Props = {
//   children: React.ReactNode;
//   delay?: number;
// };

// const AnimatedSection = ({ children, delay = 0 }: Props) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default AnimatedSection;

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

const AnimatedSection = ({ children, delay = 0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" }); // on déclenche plus tôt
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldAnimate = isMobile && isInView;

  return (
    <motion.div
      ref={ref}
      initial={isMobile ? { opacity: 0, y: 50 } : false}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.6, delay }}
      style={{ opacity: isMobile ? 0 : 1 }} // s’assure que le contenu est visible même si useInView bug
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

