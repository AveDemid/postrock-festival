import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const btnToTickets = document.querySelector("#to-book-tickets");

btnToTickets.addEventListener("click", () => {
  const bookTicketsPosition = document
    .querySelector("#book-tickets")
    .getBoundingClientRect().top;

  window.scroll({ top: bookTicketsPosition, left: 0, behavior: "smooth" });
});
