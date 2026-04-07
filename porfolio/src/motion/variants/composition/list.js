import { STAGGER } from "../../tokens/delays";
import { DURATION } from "../../tokens/durations";

export const staggerContainer = (gap = "normal") => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: STAGGER[gap],
      when: "beforeChildren",
    },
  },
});

export const childRise = {
  hidden: { opacity: 0, y: 8 },
  show:   { opacity: 1, y: 0, transition: { duration: DURATION.sm } },
  exit:   { opacity: 0, y: 8, transition: { duration: DURATION.sm } },
};
