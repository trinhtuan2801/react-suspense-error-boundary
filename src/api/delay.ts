export const delay = (time = 800) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("hehe");
    }, time);
  });
