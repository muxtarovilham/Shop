const btn = document.getElementById("btn");
const myDiv = document.getElementById("myDiv");

btn.addEventListener("click", function () {
  if (myDiv.style.display === "none" || myDiv.style.display === "") {
    myDiv.style.display = "block";
  } else {
    myDiv.style.display = "none";
  }
});

const product = document.getElementById("product");

async function getProducts() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
product.innerHTML = ''
  cart.map((item, index) => {
    const box = document.createElement("div");
    box.className = "box col-12 col-sm-4 col-lg-2";
    box.innerHTML = `
        <div class="boxes">
        <img src="${item.image}" alt="">
        <p>${item.name}</p>
        <p>$ ${item.price}</p>
        <p>Count: ${item.count}</p>
        <div class="buttons">
            <button class="add" onclick="removeCart(${index})">Remove</button>
        </div>
    </div>
        `
    product.appendChild(box)
    function name(params) {
        
    }
  })
}

function removeCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1)
  localStorage.setItem("cart", JSON.stringify(cart));
  getProducts();
}
getProducts();
