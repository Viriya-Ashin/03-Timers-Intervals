const div = document.querySelector("div");
const ul = document.querySelector("ul");
const li = document.querySelector("li");

li.addEventListener("click", () => {
    console.log("li was clicked!");
});
ul.addEventListener("click", () => {
    console.log("ul was clicked!");
});
div.addEventListener("click", () => {
    console.log("div was clicked!");
});
document.addEventListener("click", () => {
    console.log("document was clicked!");
});