console.log("Event Delegation");

// document.querySelector("#category").addEventListener('click', (e) => {
//     console.log(e.target);
//     if (e.target.tagName == 'LI') {
//       window.location.href = "/" + e.target.id;
//     }
//   });

// document.querySelector("#category").addEventListener('click', (e) => {
//     console.log(e.target);
// })

// document.querySelector("#category").addEventListener('click', (e) => {
//     // console.log(e.target.id);
//     if (e.target.tagName == 'LI') {
//         window.location.href = "/" + e.target.id;
//     }
// })

// 2. Event Delegation

// document.querySelector("#form").addEventListener('keyup', (e) => {
//     console.log(e);
//     if (e.target.dataset.uppercase != undefined) {
//       e.target.value = e.target.value.toUpperCase();
//     }
//   })

document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e);
    if (e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }

});
