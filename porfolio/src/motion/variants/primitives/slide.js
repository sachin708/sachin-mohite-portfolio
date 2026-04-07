import { DURATION } from "../../tokens/durations";
import { EASE } from "../../tokens/easings";

export const slideInFrom = (dir = "bottom", dist = 16) => {
  const delta = { top: { y: -dist }, bottom: { y: dist }, left: { x: -dist }, right: { x: dist } }[dir];
  return {
    hidden: { opacity: 0, ...delta },
    show:   { opacity: 1, x: 0, y: 0, transition: { duration: DURATION.md, ease: EASE.out } },
    exit:   { opacity: 0, ...delta, transition: { duration: DURATION.sm, ease: EASE.in } },
  };
};
