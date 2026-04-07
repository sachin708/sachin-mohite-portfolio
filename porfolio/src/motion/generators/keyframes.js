import { DURATION } from "../tokens/durations";
import { EASE } from "../tokens/easings";

export const wiggle = (amplitude = 3, loops = 1) => ({
  rotate: [0, -amplitude, amplitude, -amplitude, amplitude, 0],
  transition: {
    duration: DURATION.lg,
    ease: EASE.inOut,
    repeat: loops - 1,
  },
});