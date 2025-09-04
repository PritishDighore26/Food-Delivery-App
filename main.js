// let cart=[];
// function addToCart(ItemId){
//     alert("Item added to cart!");
//     var Item=document.getElementById(ItemId).value;
//     cart.push(Item);
//     console.log(cart);
// }

let productList=[]
const initApp =() =>{
    fetch('products.json').then(response => response.json())
    .then(data => {
        productList=data;
    });
}
initApp();

// Add product to localStorage cart
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = productList.find(p => p.id === id);

    if (!product) return;

    let existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product.name + " added to cart!");
}

function ordered() {
    alert("Your order has been placed!");
    localStorage.removeItem("cart");
    location.reload();
    window.location.href = "index.html"; // redirect to home page
}