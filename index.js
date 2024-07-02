var windowWidth = window.innerWidth;
console.log(windowWidth);
document
  .querySelector(".ct-icon-search")
  .addEventListener("click", function () {
    if (
      document.querySelector(".ct-search").classList[1] === "ct-search-open"
    ) {
      document.querySelector(".ct-search").classList.remove("ct-search-open");
    } else {
      document.querySelector(".ct-search").classList.add("ct-search-open");
    }
  });
