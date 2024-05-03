// Fetch all the accordions elements.
const accordions = document.querySelectorAll(".accordion");

// Add the onclick listeners.
accordions.forEach((targetAccordion) => {
  targetAccordion.addEventListener("click", () => {

    // Close all the accordions that are not targetAccordion.
    accordions.forEach((accordion) => {
      if (accordion !== targetAccordion) {
        accordion.open = false;
      }
    });
    window.scrollBy(0, targetAccordion.getBoundingClientRect().top - 100);
  });
});