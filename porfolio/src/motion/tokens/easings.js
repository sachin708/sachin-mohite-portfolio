export const EASE = {
  in: [0.5, 0, 0.7, 0.2],
  out: [0.25, 1, 0.5, 1],
  inOut: [0.45, 0, 0.55, 1],
  softOut: [0.22, 1, 0.36, 1],
};

export const SPRING = {
  gentle: { type: "spring", stiffness: 220, damping: 26, mass: 1 },
  bouncy: { type: "spring", stiffness: 380, damping: 20, mass: 0.9 },
  snug: { type: "spring", stiffness: 500, damping: 35, mass: 1 },
};
