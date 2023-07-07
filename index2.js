let catalog = [
    {
        id: 1,
        name: "White Shirt",
        price: 190000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2022/10/light-blue1-247x296.jpg",
        quantity: 0,
        rating: 4.7,
    },
    {
        id: 2,
        name: "Flanel jedar",
        price: 150000,
        image: "https://oxfoord.id/wp-content/uploads/2023/04/Shirt-lapalmas-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2023/04/Shirt-lapalmas-4b-247x296.jpg",
        quantity: 0,
        rating: 5,
    },
    {
        id: 3,
        name: "Black Jeans",
        price: 259000,
        image: "https://oxfoord.id/wp-content/uploads/2021/09/jeans-black-1-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2021/09/jeans-black-2-247x296.jpg",
        quantity: 0,
        rating: 4.9,
    },
    {
        id: 4,
        name: "Navy Jeans",
        price: 185000,
        image: "https://oxfoord.id/wp-content/uploads/2022/08/jeans-navy-1-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2022/08/jeans-navy-3-247x296.jpg",
        quantity: 0,
        rating: 5,
    },
    {
        id: 5,
        name: "Casual T-Shirt",
        price: 195000,
        image: "https://oxfoord.id/wp-content/uploads/2023/05/POLO-1A-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2023/05/POLO-1B-247x296.jpg",
        quantity: 0,
        rating: 4.6,
    },
    {
        id: 6,
        name: "Black Elegant Shirt",
        price: 190000,
        image: "https://oxfoord.id/wp-content/uploads/2023/04/Shirt-7a-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2023/04/Shirt-7b-247x296.jpg",
        quantity: 0,
        rating: 4.4,
    },
    {
        id: 7,
        name: "Simple Pant",
        price: 190000,
        image: "https://oxfoord.id/wp-content/uploads/2023/03/Pants-3a-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2023/03/Pants-3c-247x296.jpg",
        quantity: 0,
        rating: 4.8,
    },
    {
        id: 8,
        name: "Why Jeans",
        price: 450000,
        image: "https://oxfoord.id/wp-content/uploads/2023/05/jeans-bluefade1-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2023/05/jeans-bluefade2-247x296.jpg",
        quantity: 0,
        rating: 4.9,
    },
    {
        id: 9,
        name: "Flanel Zeus",
        price: 380000,
        image: "https://oxfoord.id/wp-content/uploads/2023/03/pine-green-1-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2023/03/pine-green-2-247x296.jpg",
        quantity: 0,
        rating: 4.8,
    },
];

const parentElement = document.getElementById("container");
// let cart = [
//     {
//         name: "baju5",
//         price: 45000,
//         image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
//         hover: "",
//         quantity: 0,
//     },
//     {
//         name: "baju5",
//         price: 45000,
//         image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
//         hover: "",
//         quantity: 0,
//     },
//     {
//         name: "baju5",
//         price: 45000,
//         image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
//         hover: "",
//         quantity: 0,
//     },
//     {
//         name: "baju5",
//         price: 45000,
//         image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
//         hover: "",
//         quantity: 0,
//     },
//     {
//         name: "baju5",
//         price: 45000,
//         image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
//         hover: "",
//         quantity: 0,
//     },
// ];


// ngambil elemen container dari products
const productsContainer = document.querySelector("#products .container");

// bikin template html
function createProductTemplate(product) {
    return `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rp ${product.price}</p>
            <button class="btn" style="color: white; border-radius: 50px;background: #808080;box-shadow: inset 20px 20px 60px #6d6d6d,
            inset -20px -20px 60px #939393;" onclick="deleteProduct('${product.id}')">Delete</button>
        </div>
    `;
}

function deleteProduct(id) {
    console.log(id);
    catalog = catalog.filter((item) => item.id !== Number(id));
    console.log(catalog);
    displayProducts();
}

// ngerender products
function displayProducts() {
    //reset products
    productsContainer.innerHTML = "";

    // akses katalog dan create produk
    for (let i = 0; i < catalog.length; i++) {
        const product = catalog[i];
        const productTemplate = createProductTemplate(product);
        productsContainer.innerHTML += productTemplate;
    }
}

displayProducts();


// const windowPop = document.getElementById("cartdiv");
// windowPop.style.display = "none";

// function toggleCart() {
//     windowPop.style.display = "";
// }

// function clickClose() {
//     windowPop.style.display = "none";
// }

//----------function form----------

function handleSubmit(event) {
    event.preventDefault(); 

    // ambil value
    const nameInput = document.getElementById("name");
    const priceInput = document.getElementById("price");
    const linkInput = document.getElementById("link");

    // bikin obj baru utk database

    const newObj = {
        id: catalog.length - 1,
        name: nameInput.value,
        price: parseInt(priceInput.value),
        image: linkInput.value,
        hover: linkInput.value,
        quantity: 0,
        rating: 5,
    };

    catalog.unshift(newObj);

    document.getElementById("myForm").reset();

    console.log(catalog);

    displayProducts();
}