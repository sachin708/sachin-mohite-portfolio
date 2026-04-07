import { DURATION } from "../tokens/durations";
import { EASE, SPRING } from "../tokens/easings";

export const makeFadeTransition = ({ speed = "md" } = {}) => ({
  duration: DURATION[speed],
  ease: EASE.out,
});

export const makeSlideTransition = ({ speed = "md", spring = false } = {}) =>
  spring ? SPRING.gentle : { duration: DURATION[speed], ease: EASE.out };
