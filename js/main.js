// Données des produits en dur
const products = [
  {
    id: 1,
    name: "Sac a main",
    price: 85000,
    category: "perruques",
    image: "img/sac-a-main.jpg",
    description:
      "Magnifique sac à main en cuir véritable, parfait pour un look élégant.",
  },
  {
    id: 2,
    name: "Robe de Soirée Rouge",
    price: 98000,
    category: "vetements",
    image: "img/robe-soiree-rouge.jpg",
    description:
      "Élégante robe de soirée rouge, parfaite pour les occasions spéciales.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Robe de sortie",
    price: 131000,
    category: "vetements",
    image: "img/robe-sortie.jpg",
    description: "Robe de sortie tendance et confortable.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Perruque chinoise",
    price: 92000,
    category: "perruques",
    image: "img/perruque-chinoise.jpg",
    description: "Perruque style asiatique, cheveux lisses et soyeux.",
  },
];

// Fonction pour afficher les produits
function displayProducts() {
  const productGrid = document.getElementById("product-grid");
  if (!productGrid) return;

  productGrid.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
            <img src="${product.image}" alt="${
        product.name
      }" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)} FCFA</p>
                <a href="products/product-${
                  product.id
                }.html" class="btn btn-primary">
                    Voir le produit
                </a>
            </div>
        </div>
    `
    )
    .join("");
}

// Fonction pour formater le prix
function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Fonction pour ajouter au panier
function addToCart(product, quantity = 1, size = null) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: quantity,
    size: size,
  };

  cart.push(cartItem);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produit ajouté au panier");
}

// Fonction pour mettre à jour l'affichage du panier
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Mettre à jour le compteur dans le header si l'élément existe
  const cartBadge = document.querySelector(".cart-badge");
  if (cartBadge) {
    cartBadge.textContent = cartCount;
  }
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  updateCartCount();
});
