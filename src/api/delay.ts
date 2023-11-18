export const delay = (time = 800) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hehe");
    }, time);
  });
};
