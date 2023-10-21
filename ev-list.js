//console.log("ev lists");
//variables for list items
const listItems = document.querySelectorAll(".ev_list-item");
const listImages = document.querySelectorAll(".ev_list-image");
const listHeadings = document.querySelectorAll(".ev_list-heading");
//on load
listItems[0].classList.add("is--active");
listImages[0].classList.add("is--active");
listHeadings[0].classList.add("is--active");
//adds and removes active class function
function changeFocus(trigger, i) {
  const active = document.querySelectorAll(".is--active");
  active.forEach(function (el) {
    el.classList.remove("is--active");
  });
  trigger.classList.add("is--active");
  listImages[i].classList.add("is--active");
  listHeadings[i].classList.add("is--active");
}
//listener for mouseenter on each item
for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("mouseenter", function () {
    changeFocus(this, i);
  });
  //   listItems[i].addEventListener("mouseleave", function () {
  //     changeFocus(this, i);
  //   });
}
//moves image with cursor function
const listImageWrap = document.querySelector(".ev_list-image-wrapper");
const listItemWrap = document.querySelector(".ev_list-item-wrapper");
//listener for mousemove on list wrapper
// listItemWrap.addEventListener("mousemove", (e) => {
//   const y = e.clientY;
//   listImages.forEach(function (image) {
//     image.style.transform = `translate(0px,${y / 10}px)`;
//   });
// });

//Copied top function 4 later...
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       console.log("???", entry);
//     });
//   },
//   {
//     threshold: 1,
//   }
// );
// listItems.forEach((item, i) => {
//   observer.observe(item, listItems.length);
// });
