// document.querySelector("#grandparent")
//   .addEventListener('click', (e) => {
//     console.log("Grandparent Clicked!");
//     // e.stopPropagation();
//   }, true);

//   document.querySelector("#parent")
//   .addEventListener('click', (e) => {
//     console.log("Parent Clicked!");
//   }, true);

//   document.querySelector("#child")
//   .addEventListener('click', (e) => {
//     console.log("Child Clicked!");
//   }, true);     // true mode it will be capturing mode and false mode it will be bubbling mode






// false mode it will be bubbling mode  and true mode it will be capturing mode
  document.querySelector("#grandparent")
  .addEventListener('click', (e) => {
    console.log("Grandparent Clicked!");
    e.stopPropagation();
  }, false);

  document.querySelector("#parent")
  .addEventListener('click', (e) => {
    console.log("Parent Clicked!");
  }, false);

  document.querySelector("#child")
  .addEventListener('click', (e) => {
    console.log("Child Clicked!");
    e.stopPropagation();
  }, false);