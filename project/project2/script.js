// function changeName() {
//   let name = prompt("Enter your name:");

//   if (name)
//      {
//           document.getElementById("username").innerHTML = name;
//   }
// }

let container = document.getElementById("cardContainer");

for (let i = 1; i <= 10; i++) {
  container.innerHTML += `<div class="card">Card ${i}</div>`;
}