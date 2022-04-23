const faqCont = document.querySelectorAll(".faq-ask-container");

for (const i of faqCont) {
  i.addEventListener("click", () => {
    //   console.dir(i)
    if (i.lastElementChild.classList.contains("faq__arrow-down")) {
      i.lastElementChild.classList.remove("faq__arrow-down");
      i.lastElementChild.classList.add("faq__arrow-up");
      i.children[0].children[0].classList.toggle("faq-bold");
      i.children[0].children[1].classList.toggle("hidden");
      i.lastElementChild.classList.add("transition1");
    } else {
      i.lastElementChild.classList.remove("faq__arrow-up");
      i.lastElementChild.classList.add("faq__arrow-down");
      i.children[0].children[0].classList.toggle("faq-bold");
      i.children[0].children[1].classList.toggle("hidden");
      i.lastElementChild.classList.add("transition1");
    }
  });
}
 


 
