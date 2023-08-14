export const variantsOpacity = {
  offscreen: {
    opacity: 0,
  },
  onscreen: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
    },
  }),
};

export const variantsUp = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      ease: "easeOut",
      duration: 0.5,
    },
  }),
};

export const variantsDown = {
  offscreen: {
    opacity: 0,
    y: -50,
  },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      ease: "easeOut",
      duration: 0.5,
    },
  }),
};

export const variantsSideLeft = {
  offscreen: {
    opacity: 0,
    x: -150,
  },
  onscreen: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.5,
      ease: "easeOut",
      duration: 0.8,
    },
  }),
};

export const variantsSideRight = {
  offscreen: {
    opacity: 0,
    x: 150,
  },
  onscreen: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.5,
      ease: "easeOut",
      duration: 0.8,
    },
  }),
};

export const imgScale = {
  offscreen: {
    opacity: 0,
    scale: 0.2,
    x: -60,
  },
  onscreen: (i) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      delay: i * 0.5,
      ease: "easeOut",
      duration: 0.5,
    },
  }),
};
