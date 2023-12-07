


document.addEventListener('DOMContentLoaded', () => {
  const carrito = [];
  const agregarAlCarritoButtons = document.querySelectorAll('.btn-carrito');
  const itemsCarrito = document.getElementById('itemsCarrito');
  const totalCarrito = document.getElementById('totalCarrito');
  const vaciarCarritoButton = document.getElementById('vaciarCarrito');


  agregarAlCarritoButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productoId = button.getAttribute('data-id');
      const producto = encontrarProductoPorId(productoId);
      if (producto) {
        carrito.push(producto);
        actualizarCarrito();
        mostrarToast(); 
      }
    });
  });

  function encontrarProductoPorId(id) {
    switch (id) {
      case '1':
        return { id: id, nombre: 'Beat Solo3 Morados', precio: 250 };
      case '2':
        return { id: id, nombre: 'Beat Solo3 Rosados', precio: 350 };
      case '3':
        return { id: id, nombre: 'Beat Solo3 Gris', precio: 250 };
      case '4':
        return { id: id, nombre: 'Beat Solo3 Rojos', precio: 250 };
      case '5':
        return { id: id, nombre: 'Beat Solo3 Azul cielo', precio: 250 };
      case '6':
        return { id: id, nombre: 'Beat Solo3 Azul oscuro', precio: 250 };
      default:
        return null;
    }
  }

  const cartIcon = document.getElementById('cart-icon');
  const cart = document.getElementById('carrito');

  cartIcon.addEventListener('click', () => {
    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
  });

  function actualizarCarrito() {
    itemsCarrito.innerHTML = '';
    carrito.forEach(producto => {
      const div = document.createElement('div');
      div.innerHTML = `${producto.nombre} - $${producto.precio}`;
      itemsCarrito.appendChild(div);
    });
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    totalCarrito.innerText = total;
  }

  vaciarCarritoButton.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
  });
});

document.getElementById('addProductForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener valores del formulario
  var productName = document.getElementById('productName').value;
  var productPrice = document.getElementById('productPrice').value;
  var productImage = document.getElementById('productImage').files[0];

  // Llamar a la función para añadir el producto
  addProduct(productName, productPrice, productImage);

  // Opcional: Limpiar el formulario después de añadir el producto
  this.reset();
});


function addProduct(name, price, imageFile) {
  var productDiv = document.createElement('div');
  productDiv.className = 'box';

  var img = document.createElement('img');
  img.alt = name; // Alt text basado en el nombre del producto
  img.src = URL.createObjectURL(imageFile);
  productDiv.appendChild(img);

  var nameElement = document.createElement('h3');
  nameElement.textContent = name;
  productDiv.appendChild(nameElement);

  var priceElement = document.createElement('span');
  priceElement.textContent = `$${price}`;
  productDiv.appendChild(priceElement);

  var cartButton = document.createElement('i');
  // cartButton.textContent = 'Añadir al carrito';
  cartButton.className = 'bx bx-shopping-bag btn-carrito';
  cartButton.setAttribute('data-id', 'new');
  productDiv.appendChild(cartButton);

  var container = document.querySelector('.shop-container');
  container.appendChild(productDiv);
}


document.getElementById('openAddProductForm').addEventListener('click', function () {
  var formContainer = document.getElementById('addProductFormContainer');
  if (formContainer.style.display === 'block') {
    formContainer.style.display = 'none';
  } else {
    formContainer.style.display = 'block';
  }
});



var modal = document.getElementById('addProductFormContainer');


var btn = document.getElementById("openAddProductForm");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
  modal.style.display = "block";
}


span.onclick = function () {
  modal.style.display = "none";
}


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function mostrarToast() {
  const toastEl = document.getElementById('liveToast');
  const toast = new bootstrap.Toast(toastEl); 
  toast.show(); 
}