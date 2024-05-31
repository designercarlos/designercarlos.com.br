// Fetch all the accordions elements.
const accordions = document.querySelectorAll(".accordion");

// Add the onclick listeners.
accordions.forEach((targetAccordion) => {
  targetAccordion.addEventListener("toggle", () => {
    //If opening the accordion
    if (targetAccordion.open){

      // Close all the accordions that are not targetAccordion.
      accordions.forEach((accordion) => {
        if (accordion !== targetAccordion) {
            accordion.open = false;
        }
      });

      window.scrollBy(0, targetAccordion.getBoundingClientRect().top - 100);// scroll to the target accordion and leave space for header (100)
    }
  });
});