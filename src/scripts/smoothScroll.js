import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const btnToTickets = document.querySelector("#to-book-tickets");
const bookTicketsPosition = document.querySelector("#book-tickets").getBoundingClientRect().top;

btnToTickets.addEventListener("click", () => {
  window.scroll({top: bookTicketsPosition, left: 0, behavior: "smooth"})
});
