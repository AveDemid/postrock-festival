const isElementInViewport = el => {
  const rect = el.getBoundingClientRect();
  const viewportHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );

  return Math.floor(rect.top - viewportHeight + rect.height < 0);
};

const timeLineItems = document.querySelectorAll(".time-line__item");

const checkItems = () => {
  timeLineItems.forEach(stage => {
    if (stage.classList.contains("time-line__item--view")) return false;

    if (isElementInViewport(stage)) {
      stage.classList.add("time-line__item--view");
    }
  });
};

setTimeout(() => {
  checkItems();
  document.addEventListener("scroll", checkItems);
}, 1000);
