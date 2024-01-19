const btn = document.getElementById('btn')
const myDiv = document.getElementById('myDiv')

btn.addEventListener("click", function() {
    if (myDiv.style.display === "none" || myDiv.style.display === "") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
});

const product = document.getElementById('product')



async function getProducts() {
    const res = await axios.get(`https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4`)
    const data = res.data
    db = data
    db.map(item => {
        const box = document.createElement('div')
        box.className = 'box col-12 col-sm-4 col-lg-2'
        box.innerHTML = `
        <div class="boxes">
        <img src="${item.image}" alt="">
        <p>${item.name}</p>
        <p>$ ${item.price}</p>
        <div class="buttons">
            <button class="add" onclick="addToCart(${item.id})">Add to cart</button>
            <button class="wishlist" onclick="addToWishlist(${item.id})"><i class="fa-regular fa-heart"></i></button>
        </div>
    </div>
        `
        product.appendChild(box)
    })
}

function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    let productItem = cart.find(item => item.id == id)
    if (productItem) {
        productItem.count = (productItem.count || 1) +1
    } else {
        cart.push(db.find(item => item.id == id))
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}
function addToWishlist(id) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let productItem = wishlist.find(item => item.id == id)
    if (productItem) {
        alert('Only 1 product')
    } else {
        wishlist.push(db.find(item => item.id == id))
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }
}
getProducts()