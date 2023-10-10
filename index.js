// CREO EL OBJETO PRODUCTO CON CLASE

class Product {
    constructor(name, level, duration, cost) {
        this.name = name;
        this.level = level;
        this.duration = duration;
        this.cost = parseFloat(cost);
        this.quantity = 1;
    }

// AGREGO 5% A CADA PRECIO Y REDONDEO EL PRECIO

    addInflation() {
        this.cost = Math.round(this.cost * 1.05);
    }
}

// CREO ARRAY VACÍO Y CARGO LOS PRODUCTOS

const products = [];

products.push(new Product('ieltsCourse', 'intermediate', '3 month', 80)); 
products.push(new Product('ieltsCousex2', 'intermediate', '3 month', 140));
products.push(new Product('writingCorrection', 'intermediate', '3 month', 50));
products.push(new Product('speakingSession', 'intermediate', '3 month', 50));
products.push(new Product('consultancy', 'intermediate', '3 month', 50));
products.push(new Product('writingGuide', 'intermediate', '3 month', 35));

// MUESTRO LOS PRODUCTOS DEL ARRAY

for (const product of products) {
    console.log(product.name + "-");
}

// CREO CARRITO DE COMPRAS

let cart = [];

// LE PIDO AL USUARIO QUE INGRESE EL PRODUCTO Y LA CANTIDAD 

// const productName = prompt('Enter the product name:');
// const quantity = parseInt(prompt('Enter the quantity:'));

// CREO FUNCIÓN AGREGAR UN PRODUCTO QUE COINCIDA CON LA BÚSQUEDA. SI ESTÁ, QUE LO AGREGUE AL CARRITO Y LO MULTIPLIQUE POR LA CANTIDAD. SI NO ESTÁ, QUE AVISE QUE NO ESTÁ ESE PRODUCTO.

function addToCart(productName, quantity) {
    const product = products.find((p) => p.name === productName);
    if (product) {
        product.quantity = quantity; 
        cart.push(product);
        console.log(`${quantity} ${productName}(s) added to the cart.`);
    } else {
        console.log(`${productName} not found in the products list.`);
    }
}

// AGREGO 3 PRODUCTOS AL CARRITO CON SUS CANTIDADES

addToCart('ieltsCourse', 3);
addToCart('consultancy', 2);
addToCart('speakingSession', 1);

// MUESTRO LO QUE TIENE EL CARRITO

console.log('Your Cart:');
for (const product of cart) {
    console.log(product.name);
}

// CALCULO EL TOTAL DE LOS PRODUCTOS DEL CARRITO

function calculateTotal(cart) {
    let total = 0;
    for (const product of cart) {
        total += product.cost * product.quantity; 
    }
    return total;
}

// CALCULO Y MUESTRO EL TOTAL

const total = calculateTotal(cart);
console.log(`The total is: $${total}`);