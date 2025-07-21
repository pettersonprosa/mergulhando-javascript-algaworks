const interval = setInterval(() => {
  console.log("executou");
}, 5000);

setTimeout(() => {
  clearTimeout(interval);
}, 22000);
