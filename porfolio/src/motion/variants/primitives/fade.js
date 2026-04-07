import { DURATION } from "../../tokens/durations";
import { EASE } from "../../tokens/easings";

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DURATION.md, ease: EASE.out } },
  exit: { opacity: 0, transition: { duration: DURATION.sm, ease: EASE.in } },
};

export const fadeOut = {
  initial: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: DURATION.sm, ease: EASE.in } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.lg, ease: EASE.inOut },
  },
  exit: {
    opacity: 0,
    y: 20,
    filter: "blur(6px)",
    transition: { duration: DURATION.md, ease: EASE.inOut },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.lg, ease: EASE.inOut },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(6px)",
    transition: { duration: DURATION.md, ease: EASE.inOut },
  },
};
