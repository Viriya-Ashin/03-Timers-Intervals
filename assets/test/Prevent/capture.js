const div = document.querySelector("div");
const ul = document.querySelector("ul");
const li = document.querySelector("li");

li.addEventListener("click", () => {
    console.log("li capture");
},true);
ul.addEventListener("click", () => {
    console.log("ul was clicked!");
},true);
div.addEventListener("click", () => {
    console.log("div capture");
},true);
document.addEventListener("click", () => {
    console.log("document was clicked!");
},true);

li.addEventListener("click", () => {
    console.log("li bubble");
});
ul.addEventListener("click", () => {
    console.log("ul bubble");
});
div.addEventListener("click", () => {
    console.log("div bubble");
});
document.addEventListener("click", () => {
    console.log("document bubble");
});