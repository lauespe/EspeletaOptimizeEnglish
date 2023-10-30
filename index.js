// CREO CLASE PRODUCTOS
class Product {
    constructor(name, cost) {
        this.name = name;
        this.cost = parseFloat(cost);
    }
}

//CREO UN ARRAY VACÍO Y CARGO LOS PRODUCTOS DISPONIBLES
const products = [];

products.push(new Product('IELTS Course', 100));
products.push(new Product('IELTS COURSE X 2', 170));
products.push(new Product('Writing Correction', 80));
products.push(new Product('Speaking Session', 80));
products.push(new Product('Consultancy', 100));

//CREO UN ARRAY VACÍO PARA EL CARRITO - INICIALIZO EL TOTAL EN 0

let cart = [];
let total = 0;

// AL CLICKEAR "ADD TO CART" SE SUMA UN PRODUCTO AL CARRITO, CON SU VALOR, EN EL DOM

// BUSCO EL PRODUCTO EN EL ARRAY DE PRODUCTOS Y LO SUMO AL ARRAY DEL CARRITO CON SU PRECIO
function addToCart(productName) {
    const product = products.find((p) => p.name === productName);
    if (product) {
        cart.push(product);
        total += product.cost;
        updateCart();
    } else {
        alert(`${productName} not found in the products list.`);
    }
}

// MUESTRO EL CARRITO - CREO UN NUEVO TEXTO POR CADA PRODUCTO AGREGADO - MUESTRO LA SUMA DE LOS PRODUCTOS

function updateCart() {
    cartProducts.innerHTML = "<h5 id='cartArea'>YOUR CART:</h5>";
    for (const product of cart) {
        let newProduct = document.createElement('p');
        newProduct.innerText = `* ${product.name} - $${product.cost}`;
        cartProducts.appendChild(newProduct);
    }
    totalElement.innerText = `Total: $${total}`;
}

// AL CLICKEAR "ADD TO CART" SE SUMA UN PRODUCTO AL CARRITO, CON SU VALOR, EN EL DOM

let addCourse = document.getElementById("add-course");
addCourse.addEventListener('click', () => {
    addToCart('IELTS Course');
});

let addCoursex2 = document.getElementById("add-coursex2");
addCoursex2.addEventListener('click', () => {
    addToCart('IELTS COURSE X 2');
});

let addWriting = document.getElementById("add-writing");
addWriting.addEventListener('click', () => {
    addToCart('Writing Correction');
});

let addSpeaking = document.getElementById("add-speaking");
addSpeaking.addEventListener('click', () => {
    addToCart('Speaking Session');
});

let addConsultancy = document.getElementById("add-consultancy");
addConsultancy.addEventListener('click', () => {
    addToCart('Consultancy');
});

// CREO LAS SECCIONES DONDE SE VA A MOSTRAR LO COMPRADO (va a apareer cuando se se cliquée en add...)

const cartArea = document.getElementById("cart-area");
const cartProducts = document.createElement('div');
const totalElement = document.createElement('div');
cartArea.appendChild(cartProducts);
cartArea.appendChild(totalElement);
updateCart();

// EL USUARIO INGRESA SUS DATOS EN UN FORMULARIO 

let formContainer = document.createElement('div');
formContainer.innerHTML = `
    <h5 id="form">SIGN IN</h5>
    <form id="form">
    <div class="form-group">
    <label for="username">USERNAME</label>
    <input type="text" class="form-control" id="form-username">
    <label for="email">EMAIL</label>
    <input type="email" class="form-control" id="form-email">
    <label for="password">PASSWORD</label>
    <input type="password" class="form-control" id="form-password">
    </div><br>
    <button type="submit" class="btn btn-info">Submit</button>
    </form>
`;
cartArea.appendChild(formContainer);

let userForm = document.getElementById("form"); 
userForm.addEventListener('submit', submitForm);

// EVITO QUE LOS DATOS DESAPAREZCA ANTE UN REFRESH

function validateForm(e) {
    e.preventDefault();
}

let username = document.getElementById("form-username").value;
let email = document.getElementById("form-email").value;
let password = document.getElementById("form-password").value;


//LOS BOTONES DE INFO ABREN UNA NUEVA PÁGINA CON TEXTO EXPLICATIVO

document.getElementById("info-course").addEventListener("click", function() {
    let infoCourseTab = "http://127.0.0.1:5500/pages/courses.html";  
    window.open(infoCourseTab, "_blank");
});

document.getElementById("info-coursex2").addEventListener("click", function() {
    let infoCoursex2Tab = "http://127.0.0.1:5500/pages/infoCoursex2.html";  
    window.open(infoCoursex2Tab, "_blank");
});

document.getElementById("info-writing").addEventListener("click", function() {
    let infoWritingTab = "http://127.0.0.1:5500/pages/infoWriting.html";  
    window.open(infoWritingTab, "_blank");
});

document.getElementById("info-speaking").addEventListener("click", function() {
    let infoSpeakingTab = "http://127.0.0.1:5500/pages/infoSpeaking.html";  
    window.open(infoSpeakingTab, "_blank");
});

document.getElementById("info-consultancy").addEventListener("click", function() {
    let infoConsultancyTab = "http://127.0.0.1:5500/pages/infoConsutancy.html";  
    window.open(infoConsultancyTab, "_blank");
});


// GUARDO LA INFO DEL FORM, EL ARRAY DE PRODUCTOS Y EL ARRAY DEL CART

function saveUserData(username, email, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
}

function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function submitForm(e) {
    e.preventDefault();
    let username = document.getElementById("form-username").value;
    let email = document.getElementById("form-email").value;

    saveUserData(username, email);
}

saveProducts(products); 
saveCart(cart); 

// RECUPERO LOS DATOS GUARDADOS EN EL LOCAL STORAGE

let usernameLS = localStorage.getItem('username');
let emailLS = localStorage.getItem('email');

let productsLS = JSON.parse(localStorage.getItem('products'));
let cartLS = JSON.parse(localStorage.getItem('cart'));


