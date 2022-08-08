const lineSelectedVariants = {
  start: {
    y: 200,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const staggerVariants = {
  start: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 }
  },
  end: {
    transition: { staggerChildren: 0.05, staggerDirection: 1 }
  }
};

export { lineSelectedVariants, staggerVariants };