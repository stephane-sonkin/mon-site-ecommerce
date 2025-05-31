// Récupérer l'ID du produit depuis l'URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

// Simulation de données produit (à remplacer par des données réelles)
const products = [
  {
    id: 1,
    name: "Perruque Blonde Bouclée",
    price: 129.99,
    category: "perruques",
    image: "img/perruque-blonde-bouclee.jpg",
    description:
      "Magnifique perruque blonde aux boucles naturelles, idéale pour un look glamour. Fabriquée avec des fibres synthétiques de haute qualité, cette perruque offre un aspect naturel et une texture douce au toucher. Parfaite pour toutes les occasions, elle est facile à entretenir et conserve sa forme même après plusieurs utilisations.",
    images: [
      "img/perruque-blonde-bouclee.jpg",
      "img/perruque-blonde-bouclee-2.jpg",
      "img/perruque-blonde-bouclee-3.jpg",
    ],
  },
  {
    id: 2,
    name: "Robe de Soirée Rouge",
    price: 199.99,
    category: "vetements",
    image: "img/robe-soiree-rouge.jpg",
    description:
      "Élégante robe de soirée rouge, parfaite pour les occasions spéciales. Confectionnée dans un tissu satiné de première qualité, cette robe met en valeur votre silhouette avec sa coupe ajustée et sa longueur midi. Les détails raffinés et la finition impeccable en font une pièce incontournable de votre garde-robe.",
    images: [
      "img/robe-soiree-rouge.jpg",
      "img/robe-soiree-rouge-2.jpg",
      "img/robe-soiree-rouge-3.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
];

// Fonction pour charger les détails du produit
function loadProductDetails() {
  const product = products.find((p) => p.id === productId);
  if (!product) {
    window.location.href = "index.html";
    return;
  }

  // Mettre à jour les informations du produit
  document.title = `${product.name} - Boutique Élégance`;
  document.getElementById("productName").textContent = product.name;
  document.getElementById(
    "productPrice"
  ).textContent = `${product.price.toFixed(2)} €`;
  document.getElementById("productDescription").textContent =
    product.description;
  document.getElementById("productImage").src = product.image;
  document.getElementById("productImage").alt = product.name;

  // Gérer l'affichage des tailles pour les vêtements
  if (product.category === "vetements" && product.sizes) {
    document.getElementById("sizeSelection").style.display = "block";
  }

  // Charger les miniatures
  loadThumbnails(product.images);

  // Charger les produits similaires
  loadRelatedProducts(product.category, product.id);
}

// Fonction pour charger les miniatures
function loadThumbnails(images) {
  const thumbnailContainer = document.getElementById("thumbnailContainer");
  thumbnailContainer.innerHTML = "";

  images.forEach((image) => {
    const col = document.createElement("div");
    col.className = "col-3";
    col.innerHTML = `
            <img src="${image}" alt="" class="img-fluid thumbnail" 
                 onclick="updateMainImage('${image}')">
        `;
    thumbnailContainer.appendChild(col);
  });
}

// Fonction pour mettre à jour l'image principale
function updateMainImage(imageSrc) {
  document.getElementById("productImage").src = imageSrc;
}

// Fonction pour charger les produits similaires
function loadRelatedProducts(category, currentProductId) {
  const relatedProducts = products
    .filter((p) => p.category === category && p.id !== currentProductId)
    .slice(0, 3);

  const container = document.getElementById("relatedProducts");
  container.innerHTML = "";

  relatedProducts.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${
      product.name
    }">
                <div class="card-body">
                    <h5 class="product-title">${product.name}</h5>
                    <p class="product-price">${product.price.toFixed(2)} €</p>
                    <a href="product.html?id=${
                      product.id
                    }" class="btn btn-primary">
                        Voir le produit
                    </a>
                </div>
            </div>
        `;
    container.appendChild(col);
  });
}

// Gérer la quantité
document.getElementById("decreaseQuantity").addEventListener("click", () => {
  const input = document.getElementById("quantity");
  const value = parseInt(input.value);
  if (value > 1) {
    input.value = value - 1;
  }
});

document.getElementById("increaseQuantity").addEventListener("click", () => {
  const input = document.getElementById("quantity");
  input.value = parseInt(input.value) + 1;
});

// Gérer l'ajout au panier
document.getElementById("addToCartBtn").addEventListener("click", () => {
  const product = products.find((p) => p.id === productId);
  const quantity = parseInt(document.getElementById("quantity").value);

  // Récupérer la taille sélectionnée si c'est un vêtement
  let size = null;
  if (product.category === "vetements") {
    const selectedSizeBtn = document.querySelector(
      ".size-selection .btn.active"
    );
    if (selectedSizeBtn) {
      size = selectedSizeBtn.textContent;
    } else {
      alert("Veuillez sélectionner une taille");
      return;
    }
  }

  // Ajouter au panier (à implémenter avec le stockage local)
  const cartItem = {
    ...product,
    quantity,
    size,
  };

  // Stocker dans le localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(cartItem);
  localStorage.setItem("cart", JSON.stringify(cart));

  // Afficher une notification
  alert("Produit ajouté au panier");
});

// Gérer la sélection des tailles
document.querySelectorAll(".size-selection .btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".size-selection .btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Initialiser la page
document.addEventListener("DOMContentLoaded", loadProductDetails);
