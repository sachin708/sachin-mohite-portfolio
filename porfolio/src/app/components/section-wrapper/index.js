import { motion } from "framer-motion";
export function SectionWrapper({ id, children, className, ...rest }) {
  return (
   <motion.section id={id} className={`xl:p-10 scroll-mt-18 xl:scroll-mt-22 ${className}`}
   {...rest}
   >
      {children}
    </motion.section>
  );
}
