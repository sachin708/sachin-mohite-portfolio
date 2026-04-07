import { DELAY } from "../tokens/delays";
import { DURATION } from "../tokens/durations";
import { EASE } from "../tokens/easings";

export const makeScaleReveal = ({
  from = 0.96,
  to = 1,
  duration = DURATION.lg,
  fromY,
  toY,
  blur = false,
  entryTransition = {},
} = {}) => ({
  hidden: {
    opacity: 0,
    scale: from,
    ...(fromY !== undefined ? { y: fromY } : {}),
    ...(blur ? { filter: "blur(10px)" } : {}),
  },
  show: {
    opacity: 1,
    scale: to,
    ...(toY !== undefined ? { y: toY } : {}),
    ...(blur ? { filter: "blur(0px)" } : {}),
    transition: { duration, ease: EASE.inOut, ...entryTransition },
  },
  exit: {
    opacity: 0,
    scale: from,
    ...(fromY !== undefined ? { y: fromY } : {}),
    ...(blur ? { filter: "blur(10px)" } : {}),
    transition: { duration, ease: EASE.inOut },
  },
});

export const makeStaggerParent = ({
  staggerChildren = 0.2,
  delayChildren = 0,
} = {}) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Smoother stagger with tighter timing
export const makeSmoothStaggerParent = ({
  staggerChildren = 0.15,
  delayChildren = 0.05,
} = {}) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});
export const makeFadeYReveal = ({
  yInitial = 20,
  yFinal = 0,
  duration = DURATION.lg,
  ease = EASE.inOut,
  delay = DELAY.xs,
  extraHiddenAttrs = {},
  extraShowAttrs = {},
} = {}) => ({
  hidden: {
    opacity: 0,
    y: yInitial,
    filter: "blur(10px)",
    ...extraHiddenAttrs,
  },
  show: {
    opacity: 1,
    y: yFinal,
    filter: "blur(0px)",
    ...extraShowAttrs,
    transition: { duration, ease, ...(delay ? { delay } : {}) },
  },
});
export const makeSmoothYReveal = ({
  yInitial = 20,
  yFinal = 0,
  duration = 1.2,
  delay = 0,
  extraHiddenAttrs = {},
  extraShowAttrs = {},
} = {}) => ({
  hidden: {
    opacity: 0,
    y: yInitial,
    willChange: "opacity, transform",
    ...extraHiddenAttrs,
  },
  show: {
    opacity: 1,
    y: yFinal,
    ...extraShowAttrs,
    transition: {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      ...(delay ? { delay } : {}),
    },
  },
});

// Bouncy spring config
const SPRING_BOUNCE = {
  // for slower animation
  type: "spring",
  stiffness: 40, // decrese
  damping: 20, // increase
  mass: 4, // increase
};

// Drop from top with bounce
export const imageDropEffect = {
  hidden: {
    y: "-150%",
    opacity: 0,
  },
  show: (group) => ({
    y: "0%",
    opacity: 1,
    transition: {
      ...SPRING_BOUNCE,
      delay: group * 0.3,
      duration: 1,
    },
  }),
};

// Lift from bottom with bounce
export const imageLiftEffect = {
  hidden: {
    y: "150%",
    opacity: 0,
  },
  show: (group) => ({
    y: "0%",
    opacity: 1,
    transition: {
      ...SPRING_BOUNCE,
      delay: group * 0.3,
      duration: 1,
    },
  }),
};

export const buttonReveal = makeSmoothYReveal({
  yInitial: 40,
  ease: EASE.inOut,
  duration: 0.9,
  delay: 0.4,
});

export const leftCardReveal = makeSmoothYReveal({
  yInitial: 50,
  ease: EASE.inOut,
  duration: 1,
});

export const rightCardReveal = makeSmoothYReveal({
  yInitial: 80,
  ease: EASE.inOut,
  duration: 1.4,
});
