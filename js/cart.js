// Charger le panier depuis le localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Fonction pour mettre à jour l'affichage du panier
function updateCartDisplay() {
  const cartContainer = document.getElementById("cartItems");
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-cart fa-3x mb-3 text-muted"></i>
                <h5>Votre panier est vide</h5>
                <p>Découvrez nos produits et commencez votre shopping !</p>
                <a href="index.html" class="btn btn-primary">Voir les produits</a>
            </div>
        `;
    updateOrderSummary();
    return;
  }

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className =
      "cart-item d-flex align-items-center p-3 border-bottom";
    cartItem.innerHTML = `
            <img src="${item.image}" alt="${
      item.name
    }" class="img-thumbnail me-3" style="width: 100px;">
            <div class="flex-grow-1">
                <h5 class="mb-1">${item.name}</h5>
                <p class="mb-1">${item.price.toFixed(2)} €</p>
                ${item.size ? `<p class="mb-1">Taille: ${item.size}</p>` : ""}
                <div class="quantity-controls">
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </div>
            <div class="text-end ms-3">
                <p class="mb-1">${(item.price * item.quantity).toFixed(2)} €</p>
                <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    cartContainer.appendChild(cartItem);
  });

  updateOrderSummary();
}

// Fonction pour mettre à jour la quantité d'un article
function updateQuantity(index, change) {
  const item = cart[index];
  const newQuantity = item.quantity + change;

  if (newQuantity > 0) {
    item.quantity = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }
}

// Fonction pour supprimer un article
function removeItem(index) {
  if (confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }
}

// Fonction pour mettre à jour le résumé de la commande
function updateOrderSummary() {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  document.getElementById("subtotal").textContent = `${subtotal.toFixed(2)} €`;
  document.getElementById("shipping").textContent = `${shipping.toFixed(2)} €`;
  document.getElementById("total").textContent = `${total.toFixed(2)} €`;

  // Désactiver le bouton de paiement si le panier est vide
  const checkoutBtn = document.getElementById("checkoutBtn");
  checkoutBtn.disabled = cart.length === 0;
}

// Gérer le bouton de paiement
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Votre panier est vide");
    return;
  }

  // Ici, vous pouvez rediriger vers une page de paiement ou afficher un formulaire
  alert("Redirection vers la page de paiement...");
});

// Gérer l'application du code promo
document
  .querySelector('[for="promoCode"] + .input-group button')
  .addEventListener("click", () => {
    const promoCode = document.getElementById("promoCode").value.trim();

    // Simuler la vérification d'un code promo
    if (promoCode === "WELCOME10") {
      alert("Code promo appliqué avec succès !");
      // Ici, vous pouvez appliquer la réduction
    } else {
      alert("Code promo invalide");
    }
  });

// Initialiser l'affichage du panier
document.addEventListener("DOMContentLoaded", updateCartDisplay);
