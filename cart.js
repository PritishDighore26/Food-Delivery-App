// function loadCart() {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     let table = document.getElementById("cart-table");
//     let grandTotal = 0;

//     cart.forEach((item, index) => {
//         let row = table.insertRow(-1);
//         row.insertCell(0).innerText = item.name;
//         row.insertCell(1).innerText = "₹" + item.price;
//         row.insertCell(2).innerText = item.quantity;

//         let total = item.price * item.quantity;
//         row.insertCell(3).innerText = "₹" + total;
//         grandTotal += total;

//         let removeCell = row.insertCell(4);
//         let btn = document.createElement("button");
//         btn.innerText = "Remove";
//         btn.classList.add("btn", "btn-danger", "btn-sm");
//         btn.onclick = () => removeItem(index);
//         removeCell.appendChild(btn);
//     });

//     document.getElementById("grand-total").innerText = "₹" + grandTotal;
// }
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let table = document.getElementById("cart-table");
    let grandTotal = 0;

    cart.forEach((item, index) => {
        let row = table.insertRow(-1);
        row.insertCell(0).innerText = item.name;
        row.insertCell(1).innerText = "₹" + item.price;
        row.insertCell(2).innerText = item.quantity;

        let total = item.price * item.quantity;
        row.insertCell(3).innerText = "₹" + total;
        grandTotal += total;

        // remove cell with "X"
        let removeCell = row.insertCell(4);
        let cross = document.createElement("span");
        cross.innerHTML = "&times;";  // "×" cross symbol
        cross.style.cursor = "pointer";
        cross.style.color = "red";
        cross.style.fontWeight = "bold";
        cross.onclick = () => removeItem(index);
        removeCell.appendChild(cross);
    });
    document.getElementById("grand-total").innerText = "₹" + grandTotal;
}


function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // reload to refresh cart
}
loadCart();
