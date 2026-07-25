"use strict";

let productName = document.querySelector("#productName");
let productPrice = document.querySelector("#productPrice");
let productCategory = document.querySelector("#productCategory");
let productDescription = document.querySelector("#productDescription");
let addBtn = document.querySelector("#addBtn");
let searchInput = document.querySelector("#searchInput");
let productContainer = document.querySelector("#productContainer");
let updateIdx = -1;
let products = JSON.parse(localStorage.getItem("products")) || [];
displayProducts(products);
addBtn.addEventListener("click", function () {

    if (
        productName.value == "" ||
        productPrice.value == "" ||
        productCategory.value == "" ||
        productDescription.value == ""
    ) {
        alert("Please fill in all fields.");
        return;
    }
    let product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        description: productDescription.value
    };
    if (updateIdx == -1) {
        products.push(product);
    } else {
        products[updateIdx] = product;
        updateIdx = -1;
        addBtn.innerHTML = "Add Product";
    }
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts(products);
    clearForm();
});

function displayProducts(products) {
  let cardData = "";
  for (let product of products) {
    cardData += `
        <div class="col-md-4">
            <div class="card shadow h-100">
                <div class="card-body">
                    <h4>Name: ${product.name}</h4>
                    <p>Price: $${product.price}</p>
                    <p>Category: ${product.category}</p>
                    <p>${product.description}</p>
                    <button class="btn btn-outline-warning w-100 mb-2"
                    onclick="editProduct(${products})">
                    Edit
                    </button>
                    <button class="btn btn-outline-danger w-100"
                    onclick="deleteProduct(${products})">
                    Delete
                    </button>
                </div>
            </div>
        </div>
        `;
  }
  productContainer.innerHTML = cardData;
}

function deleteProduct(idx) {
  products.splice(idx, 1);
  localStorage.setItem("products", JSON.stringify(products));
  displayProducts(products);
}

function editProduct(idx) {
  productName.value = products[idx].name;
  productPrice.value = products[idx].price;
  productCategory.value = products[idx].category;
  productDescription.value = products[idx].description;
  updateIdx = idx;
  addBtn.innerHTML = "Update Data";
}
searchInput.addEventListener("input", function () {
  let searchProduct = [];

  for (let product of products) {
    if (product.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
      searchProduct.push(product);
    }
  }

  displayProducts(searchProduct);
});

function clearForm() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDescription.value = "";
}
