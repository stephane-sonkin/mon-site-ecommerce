// Données des produits
const products = [
  {
    id: 1,
    name: "Perruque Blonde Bouclée",
    price: 85000,
    category: "perruques",
    image: "img/perruque-blonde-bouclee.jpg",
    description:
      "Magnifique perruque blonde aux boucles naturelles, idéale pour un look glamour. Fabriquée avec des fibres synthétiques de haute qualité.",
  },
  {
    id: 2,
    name: "Perruque Noire Longue",
    price: 98000,
    category: "perruques",
    image: "img/perruque-noire-longue.jpg",
    description:
      "Élégante perruque noire aux cheveux longs et soyeux. Parfaite pour un look naturel et sophistiqué.",
  },
  {
    id: 3,
    name: "Robe de Soirée Rouge",
    price: 131000,
    category: "vetements",
    image: "img/robe-soiree-rouge.jpg",
    description:
      "Sublime robe de soirée rouge, parfaite pour les occasions spéciales. Tissu de haute qualité et coupe flatteuse.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Perruque Brune Ondulée",
    price: 92000,
    category: "perruques",
    image: "img/perruque-wavy-naturelle.jpg",
    description:
      "Perruque brune avec de belles ondulations naturelles. Idéale pour un changement de look élégant.",
  },
  {
    id: 5,
    name: "Ensemble Jupe Top",
    price: 59000,
    category: "vetements",
    image: "img/ensemble-jupe-top.jpg",
    description:
      "Ensemble tendance composé d'une jupe et d'un top assorti. Style moderne et confortable.",
    sizes: ["S", "M", "L"],
  },
  {
    id: 6,
    name: "Robe Casual Bleue",
    price: 52000,
    category: "vetements",
    image: "img/robe-casual-bleue.jpg",
    description: "Robe décontractée bleue, parfaite pour le quotidien.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Perruque Rousse Courte",
    price: 79000,
    category: "perruques",
    image: "img/perruque-rousse-courte.jpg",
    description: "Perruque rousse courte pour un look dynamique et moderne.",
  },
  {
    id: 8,
    name: "Robe Été Fleurie",
    price: 59000,
    category: "vetements",
    image: "img/robe-ete-fleurie.jpg",
    description: "Robe d'été légère aux motifs fleuris.",
    sizes: ["S", "M", "L"],
  },
  {
    id: 9,
    name: "Perruque Blonde Lisse",
    price: 105000,
    category: "perruques",
    image: "img/perruque-blonde-lisse.jpg",
    description: "Perruque blonde lisse et soyeuse pour un look naturel.",
  },
  {
    id: 10,
    name: "Ensemble Pantalon Veste",
    price: 111000,
    category: "vetements",
    image: "img/tailleur-femme-elegant.jpg",
    description:
      "Ensemble élégant composé d'un pantalon et d'une veste assortie.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 11,
    name: "Perruque Noire Courte",
    price: 72000,
    category: "perruques",
    image: "img/perruque-noire-courte.jpg",
    description: "Perruque noire courte pour un style moderne et sophistiqué.",
  },
  {
    id: 12,
    name: "Robe Cocktail Noire",
    price: 118000,
    category: "vetements",
    image: "img/robe-cocktail-noire.jpg",
    description:
      "Élégante robe de cocktail noire, parfaite pour les soirées chic.",
    sizes: ["S", "M", "L"],
  },
  {
    id: 13,
    name: "Perruque Châtain Mi-longue",
    price: 88000,
    category: "perruques",
    image: "img/perruque-chatain-longue.jpg",
    description:
      "Perruque châtain mi-longue avec un mouvement naturel et élégant.",
  },
  {
    id: 14,
    name: "Robe Maxi Bohème",
    price: 85000,
    category: "vetements",
    image: "img/robe-maxi-ete.jpg",
    description:
      "Longue robe bohème aux motifs ethniques, parfaite pour l'été.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 15,
    name: "Perruque Grise Moderne",
    price: 111000,
    category: "perruques",
    image: "img/perruque-grise-moderne.jpg",
    description:
      "Perruque grise tendance pour un look sophistiqué et contemporain.",
  },
  {
    id: 16,
    name: "Combinaison Élégante",
    price: 105000,
    category: "vetements",
    image: "img/combinaison-elegante.jpg",
    description:
      "Combinaison chic et moderne, idéale pour les occasions spéciales.",
    sizes: ["S", "M", "L"],
  },
  {
    id: 17,
    name: "Perruque Rose Pastel",
    price: 95000,
    category: "perruques",
    image: "img/perruque-rose-fantaisie.jpg",
    description: "Perruque rose pastel pour un look unique et tendance.",
  },
  {
    id: 18,
    name: "Blazer Femme Chic",
    price: 85000,
    category: "vetements",
    image: "img/tenue-bureau-femme.jpg",
    description: "Blazer élégant et structuré pour un look professionnel.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 19,
    name: "Perruque Afro Naturelle",
    price: 105000,
    category: "perruques",
    image: "img/perruque-afro-naturelle.jpg",
    description:
      "Perruque afro naturelle pour un style authentique et volumineux.",
  },
  {
    id: 20,
    name: "Jupe Plissée Midi",
    price: 52000,
    category: "vetements",
    image: "img/robe-midi-casual.jpg",
    description:
      "Jupe plissée midi élégante, parfaite pour toutes les occasions.",
    sizes: ["S", "M", "L"],
  },
  {
    id: 21,
    name: "Perruque Multicolore",
    price: 118000,
    category: "perruques",
    image: "img/perruque-multicolore.jpg",
    description: "Perruque aux couleurs vibrantes pour un look audacieux.",
  },
  {
    id: 22,
    name: "Robe Pull Confort",
    price: 59000,
    category: "vetements",
    image: "img/robe-business-grise.jpg",
    description: "Robe pull confortable et stylée pour la saison froide.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 23,
    name: "Perruque Bob Violet",
    price: 92000,
    category: "perruques",
    image: "img/perruque-carre-plongeant.jpg",
    description: "Perruque courte violette style bob pour un look original.",
  },
  {
    id: 24,
    name: "Ensemble Sport Chic",
    price: 79000,
    category: "vetements",
    image: "img/ensemble-sport-femme.jpg",
    description: "Ensemble sportswear élégant pour un style décontracté chic.",
    sizes: ["S", "M", "L"],
  },
  {
    id: 25,
    name: "Perruque Pixie Moderne",
    price: 124000,
    category: "perruques",
    image: "img/perruque-pixie-moderne.jpg",
    description: "Perruque courte moderne pour un look tendance et audacieux.",
  },
  {
    id: 26,
    name: "Robe Longue Soirée",
    price: 65000,
    category: "vetements",
    image: "img/robe-longue-soiree.jpg",
    description: "Robe longue élégante pour les soirées spéciales.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 27,
    name: "Perruque Tresses Africaines",
    price: 131000,
    category: "perruques",
    image: "img/perruque-tresses-africaines.jpg",
    description:
      "Perruque avec tresses africaines pour un style traditionnel élégant.",
  },
];

// Panier d'achat
let cart = [];

// Fonction pour afficher les produits
function displayProducts(productsToShow = products) {
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = "";

  productsToShow.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "col-md-4 col-sm-6 mb-4";
    productCard.innerHTML = `
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${
      product.name
    }" onerror="this.src='img/placeholder.jpg'">
                <div class="card-body">
                    <h5 class="product-title">${product.name}</h5>
                    <p class="product-price">${product.price.toLocaleString()} FCFA</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <a href="products/product-${
                          product.id
                        }.html" class="btn btn-outline-primary">Voir détails</a>
                        <button class="btn btn-primary add-to-cart" data-id="${
                          product.id
                        }">
                            <i class="fas fa-shopping-cart"></i> Ajouter
                        </button>
                    </div>
                </div>
            </div>
        `;
    productGrid.appendChild(productCard);
  });

  // Ajouter les écouteurs d'événements pour les boutons "Ajouter au panier"
  attachCartListeners();
}

// Fonction pour filtrer les produits
function filterProducts(category) {
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);
  displayProducts(filteredProducts);
}

// Fonction pour rechercher des produits
function searchProducts(query) {
  const searchResults = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
  );
  displayProducts(searchResults);
}

// Fonction pour ajouter un produit au panier
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    const existingItem = cart.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }
    updateCartBadge();
    showNotification("Produit ajouté au panier");
  }
}

// Fonction pour mettre à jour le badge du panier
function updateCartBadge() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartBadge = document.querySelector(".cart-badge");
  if (cartBadge) {
    cartBadge.setAttribute("data-count", cartCount);
  }
}

// Fonction pour afficher une notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "alert alert-success notification";
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Attacher les écouteurs d'événements aux boutons du panier
function attachCartListeners() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = parseInt(e.target.getAttribute("data-id"));
      addToCart(productId);
    });
  });
}

// Écouteur d'événement pour la recherche
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const searchQuery = e.target.querySelector("input").value;
  searchProducts(searchQuery);
});

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
});

// Attacher les écouteurs d'événements pour le filtrage
document.addEventListener("DOMContentLoaded", () => {
  // Afficher tous les produits au chargement
  displayProducts();

  // Ajouter les écouteurs pour le filtrage
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const category = e.target.getAttribute("href").replace("#", "");
      filterProducts(
        category === "nouveautes" || category === "promotions"
          ? "all"
          : category
      );
    });
  });
});
