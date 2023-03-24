const elements = document.querySelectorAll(".element");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleClick() {
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("visible");
      console.log(element);
      console.log("above is visible element");
    } else {
      element.classList.remove("visible");
    }
  });
}

window.addEventListener("click", handleClick);
