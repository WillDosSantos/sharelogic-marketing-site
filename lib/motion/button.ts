export const BUTTON_MOTION = {
  whileHover: {
    y: -2,
    boxShadow: "0 10px 24px rgba(15, 23, 42, 0.14)",
  },
  whileTap: {
    y: 0,
    scale: 0.985,
    boxShadow: "0 3px 10px rgba(15, 23, 42, 0.12)",
  },
  transition: {
    type: "spring",
    stiffness: 420,
    damping: 28,
    mass: 0.5,
  },
} as const;
