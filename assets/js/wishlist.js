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
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    product.innerHTML = ''
    wishlist.map((item, index) => {
    const box = document.createElement("div");
    box.className = "box col-12 col-sm-4 col-lg-2";
    box.innerHTML = `
        <div class="boxes">
        <img src="${item.image}" alt="">
        <p>${item.name}</p>
        <p>$ ${item.price}</p>
        <div class="buttons">
            <button class="add" onclick="removeWishlist(${index})">Remove</button>
        </div>
    </div>
        `
    product.appendChild(box)
  })
}

function removeWishlist(index) {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.splice(index, 1)
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  getProducts();
}
getProducts();
