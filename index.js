const inflationSept = 1.2;

class Courses {
  constructor(name, id, level, price) {
    this.name = name;
    this.id = id;
    this.level = level;
    this.price = price;
  }

  addInflation() {
    this.price = this.price * inflationSept;
  }
}

const courses = JSON.parse(localStorage.getItem("courses")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const addNewCourse = ({ name, id, level, price }) => {
  const newCourse = new Courses(name, id, level, price);
  courses.push(newCourse);
  localStorage.setItem('courses', JSON.stringify(courses));
};

function addToCart(course) {
  cart.push(course);
  localStorage.setItem('cart', JSON.stringify(cart));
}

const cartInfo = document.getElementById('cartInfo')


const elementary = new Courses('Elementary', 1, 'A1', 20);
const preIntermediate = new Courses('Pre Intermediate', 2, 'A2', 22);
const intermediate = new Courses('Intermediate', 3, 'B1', 24);
const upperIntermediate = new Courses('Upper intermediate', 4, 'B2', 26);
const conversation1 = new Courses('Conversation I', 5, 'B1', 25);
const conversation2 = new Courses('Conversation I', 6, 'B1', 25);
const first = new Courses('First', 7, 'B1', 25);
const toefl = new Courses('TOEFL', 8, 'B1', 25);
const ielts = new Courses('IELTS', 9, 'B1', 25);


const courseArray= [elementary, preIntermediate, intermediate, upperIntermediate, conversation1, conversation2, first, toefl, ielts];
courses.push(...courseArray);

const addToCartElementary = document.getElementById('addToCartElementary');
const addToCartPreIntermediate = document.getElementById('addToCartPreIntermediate');
const addToCartIntermediate = document.getElementById('addToCartIntermediate');
const addToCartUpper = document.getElementById('addToCartUpper');
const addToCartConv1 = document.getElementById('addToCartConv1');
const addToCartConv2 = document.getElementById('addToCartConv2');
const addToCartFirst = document.getElementById('addToCartFirst');
const addToCartToefl = document.getElementById('addToCartToefl');
const addToCartIelts = document.getElementById('addToCartIelts');

addToCartElementary.addEventListener('click', function() {
  const selectedCourse = courses.find(course => course.id === 1);
  if (selectedCourse) {
    addToCart(selectedCourse);
    showCart();
  }
});

addToCartPreIntermediate.addEventListener('click', function() {
    const selectedCourse = courses.find(course => course.id === 2);
    if (selectedCourse) {
      addToCart(selectedCourse);
      showCart();
    }
  });

  addToCartIntermediate.addEventListener('click', function() {
    const selectedCourse = courses.find(course => course.id === 3);
    if (selectedCourse) {
      addToCart(selectedCourse);
      showCart();
    }
  });

  addToCartUpper.addEventListener('click', function() {
    const selectedCourse = courses.find(course => course.id === 4);
    if (selectedCourse) {
      addToCart(selectedCourse);
      showCart();
    }
  });

  addToCartConv1.addEventListener('click', function() {
    const selectedCourse = courses.find(course => course.id === 5);
    if (selectedCourse) {
      addToCart(selectedCourse);
      showCart();
    }
  });

  addToCartConv2.addEventListener('click', function() {
    const selectedCourse = courses.find(course => course.id === 6);
    if (selectedCourse) {
      addToCart(selectedCourse);
      showCart();
    }
  });

  addToCartFirst.addEventListener('click', function() {
    const selectedCourse = courses.find(course => course.id === 7);
    if (selectedCourse) {
      addToCart(selectedCourse);
      showCart();
    }
  });

  addToCartToefl.addEventListener('click', function() {
    const selectedCourse = courses.find(course => course.id === 8);
    if (selectedCourse) {
      addToCart(selectedCourse);
      showCart();
    }
  });

  addToCartIelts.addEventListener('click', function() {
    const selectedCourse = courses.find(course => course.id === 9);
    if (selectedCourse) {
      addToCart(selectedCourse);
      showCart();
    }
  });
 
  function showCart() {
    let cartContent = "Your Cart:<br>";
    for (const course of cart) {
      cartContent += `Course: ${course.name} - $${course.price} 
        <button class="removeFromCart" data-course-id="${course.id}">Remove</button><br>`;
    }


    function calculateTotal() {
        return cart.reduce((total, course) => total + course.price, 0);
      }


    const total = calculateTotal();
    cartContent += `<strong>Total: $${total}</strong>`;
    cartInfo.innerHTML = cartContent;
    }

    const cartForm = document.getElementById('cartForm');
    cartForm.style.display = cart.length > 0 ? 'block' : 'none';
  
  function removeFromCart(courseId) {
    cart = cart.filter(course => course.id !== courseId);
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
  }   
  
                function confirmRemoveFromCart() {
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: false
                })
                
                swalWithBootstrapButtons.fire({
                    title: 'Are you sure you want to remove the course?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, remove it.',
                    cancelButtonText: 'No, do not remove it!',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Removed!',
                        'The course is no longer in your cart',
                        'success'
                    )
                    } else if (
                    result.dismiss === Swal.DismissReason.cancel
                    ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your course is in your cart :)',
                        'error'
                    )
                    }
                })

    const emptyCart = ()=>{
        cart.length = 0  
        let cartString = JSON.stringify(cart)
        localStorage.setItem("cart", cartString)
        emptyCart()  
    }
  

  function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
     
    cart = [];
    localStorage.removeItem('cart');
    showCart();
  }

}
