// Datos de productos y usuarios
const products = [
    { id: 1, name: "Smartphone", price: 500 },
    { id: 2, name: "Laptop", price: 1000 },
    { id: 3, name: "SmartWatch", price: 200 },
    { id: 4, name: "Tablet", price: 300 },
    { id: 5, name: "Headphones", price: 50 },
    { id: 6, name: "Camera", price: 600 },
    { id: 7, name: "Bluetooth Speaker", price: 70 },
    { id: 8, name: "External Hard Drive", price: 120 },
    { id: 9, name: "Wireless Charger", price: 25 },
    { id: 10, name: "Gaming Console", price: 400 },
    { id: 11, name: "Mouse", price: 50 },
    { id: 12, name: "teclado", price: 600 },
    { id: 13, name: "Bluetooth parlante", price: 70 },
    { id: 14, name: "Disco Duro", price: 120 },
    { id: 15, name: "Cargador", price: 25 },
    { id: 16, name: "Juego volante", price: 670 },
];

const productoferta = [
    { id: 1, name: "ofSmartphone", price: 500 },
    { id: 2, name: "ofLaptop", price: 1000 },
    { id: 3, name: "ofSmartWatch", price: 200 },
    { id: 4, name: "ofTablet", price: 300 },
    { id: 5, name: "ofHeadphones", price: 50 },
    { id: 6, name: "ofCamera", price: 600 },
    { id: 7, name: "ofBluetooth Speaker", price: 70 },
    { id: 8, name: "ofExternal Hard Drive", price: 120 },
    { id: 9, name: "ofWireless Charger", price: 25 },
    { id: 10, name: "ofGaming Console", price: 400 },
    { id: 11, name: "ofMouse", price: 50 },
    { id: 12, name: "ofteclado", price: 600 },
    { id: 13, name: "ofBluetooth parlante", price: 70 },
    { id: 14, name: "ofDisco Duro", price: 120 },
    { id: 15, name: "ofCargador", price: 25 },
    { id: 16, name: "ofJuego volante", price: 670 },
];

const users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "user3", password: "pass3" },
    { username: "user4", password: "pass4" },
    { username: "user5", password: "pass5" },
    { username: "user6", password: "pass6" },
    { username: "user7", password: "pass7" },
    { username: "user8", password: "pass8" },
    { username: "user9", password: "pass9" },
    { username: "user10", password: "pass10" },
];

// Variables globales para el carrito
let cart = [];
let cartTotal = 0;
let loggedIn = false;

// Función para agregar productos al carrito
function addToCart(id, name, price) {
    const product = { id, name, price };
    cart.push(product);
    cartTotal += price;
    updateCartCount();
    displayCartItems();
    alert(`${name} lo haz añadido al Carrito!`);
}


// Función para actualizar el contador del carrito
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Función para mostrar u ocultar el modal del carrito
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal.style.display === 'none' || cartModal.style.display === '') {
        cartModal.style.display = 'block';
        displayCartItems();
    } else {
        cartModal.style.display = 'none';
    }
}

// Función para mostrar los elementos del carrito
function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Limpiar la lista antes de mostrar
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remover</button>`;
        cartItemsList.appendChild(listItem);
    });
    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
   
}

// Función para eliminar productos del carrito
function removeFromCart(index) {
    const item = cart[index];
    cartTotal -= item.price;
    cart.splice(index, 1);
    updateCartCount();
    displayCartItems();
}

// Función de búsqueda
function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Función para mostrar/ocultar el formulario de login
function toggleLoginForm() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
}

// Función de login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = user;
        loggedIn = true;
        document.getElementById('loginStatus').innerText = 'Login successful!';
        
        //toggleLoginForm();
        
    } else {
        loggedIn = false;
        document.getElementById('loginStatus').innerText = 'Invalid username or password.';
    }
    login12();
}


// Inicializar el carrito al cargar la página
//updateCartUI();

// Función de checkout


// Función para finalizar compra
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }else if (!loggedIn) {
        alert("Please login to proceed with checkout.");
    } else {
        alert(`Checkout complete! Total: $${cartTotal.toFixed(2)}`);
        cart = [];
        cartTotal = 0;
        //updateCartUI();
        updateCartCount();
        toggleCart();
    }
}



// Función para buscar productos
function searchProducts() {
    // Obtener el término de búsqueda del input
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // Filtrar los productos que coinciden con el término de búsqueda
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));

    // Mostrar los productos filtrados
    displayProducts(filteredProducts);
}
function searchProductsoferta() {
    // Obtener el término de búsqueda del input
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // Filtrar los productos que coinciden con el término de búsqueda
    const filteredProducts = productoferta.filter(product1 => product1.name.toLowerCase().includes(searchTerm));

    // Mostrar los productos filtrados
    displayProducts1(filteredProducts);
}

// Función para mostrar los productos filtrados
function displayProducts(productList) {
    const productGrid = document.querySelector('.product-grid');
    
    // Limpiar los productos actuales en la cuadrícula
    productGrid.innerHTML = '';

    // Mostrar los productos filtrados
    if (productList.length > 0) {
        productList.forEach(product => {
            const productItem = `
                <div class="product-item" data-id="${product.id}">
                    <img src="https://via.placeholder.com/150" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <button onclick="addToCart(${product.id},'${product.name}', ${product.price.toFixed(2)})">Add to Cart</button>
                </div>
            `;
            productGrid.innerHTML += productItem;
        });
    } else {
        productGrid.innerHTML = '<p>ningun producto encontrado.</p>';
    }
}

function displayProducts1(productList) {
    const productGrid = document.querySelector('.product-grid1');
    
    // Limpiar los productos actuales en la cuadrícula
    productGrid.innerHTML = '';

    // Mostrar los productos filtrados
    if (productList.length > 0 ) {
        productList.forEach(product1 => {
            const productItem = `
                <div class="product-item" data-id="${product1.id}">
                    <img src="https://via.placeholder.com/150" alt="${product1.name}">
                    <h3>${product1.name}</h3>
                    <p>$${product1.price.toFixed(2)}</p>
                    <button onclick="addToCart(${product1.id},'${product1.name}', ${product1.price.toFixed(2)})">Add to Cart</button>
                </div>
            `;
            productGrid.innerHTML += productItem;
        });
    } else {
        productGrid.innerHTML = '<p>ningun producto encontrado.</p>';
    }
}

var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");
var button = document.getElementById("btn");

function register() {
   loginForm.style.left = "-400px";
   registerForm.style.left = "50px";
    button.style.left = "110px";
}

function login1() {

    
    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    button.style.left = "0";
}
function login12() {
    if (loggedIn == true) {
        alert("login iniciado");
        location.href = "index.html";
    } else {
        alert('no se pudo iniciar seccion');
        //location.href = "index.html";
        //<a href="index.html">
        //</a>
    }
}