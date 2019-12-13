const urlParams = new URLSearchParams(window.location.search);

const params = [];
urlParams.forEach((value, key) => {
  params.push({ key, value });
});

console.log(params);
