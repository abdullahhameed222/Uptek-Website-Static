let faqsItem = document.querySelectorAll(".faqs__item");

if (faqsItem) {
  faqsItem.forEach(item => {
    item.addEventListener("click", function() {
      this.classList.toggle("faqs__item--active");
    });
  });
}