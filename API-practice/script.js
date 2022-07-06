// Simple fetch request
// function getData() {
//   fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// }

// getData();

// Asynchronous
async function getData() {
  try {
    const API = "https://fakestoreapi.com/products";
    var res = await fetch(API);
    var data = await res.json();
    console.log("Data:", data);
  } catch (err) {
    console.log("Error:", err);
  }
}

getData();
