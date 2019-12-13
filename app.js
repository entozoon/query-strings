var urlParams = new URLSearchParams(window.location.search);
var params = [];
urlParams.forEach(function (value, key) {
    params.push({ key: key, value: value });
});
console.log(params);
