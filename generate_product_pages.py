import os
import json

# Créer le dossier products s'il n'existe pas
if not os.path.exists('products'):
    os.makedirs('products')

# Liste des produits
products = [
    {
        "id": 1,
        "name": "Perruque Blonde Bouclée",
        "price": 85000,
        "category": "perruques",
        "image": "img/perruque1.jpg",
        "description": "Magnifique perruque blonde aux boucles naturelles, idéale pour un look glamour."
    },
    {
        "id": 2,
        "name": "Perruque Noire Longue",
        "price": 98000,
        "category": "perruques",
        "image": "img/perruque2.jpg",
        "description": "Élégante perruque noire aux cheveux longs et soyeux."
    },
    {
        "id": 3,
        "name": "Robe de Soirée Rouge",
        "price": 131000,
        "category": "vetements",
        "image": "img/robe1.jpg",
        "description": "Sublime robe de soirée rouge, parfaite pour les occasions spéciales.",
        "sizes": ["S", "M", "L", "XL"]
    },
    {
        "id": 4,
        "name": "Perruque Brune Ondulée",
        "price": 92000,
        "category": "perruques",
        "image": "img/perruque3.jpg",
        "description": "Perruque brune avec de belles ondulations naturelles."
    },
    {
        "id": 5,
        "name": "Ensemble Jupe Top",
        "price": 59000,
        "category": "vetements",
        "image": "img/ensemble1.jpg",
        "description": "Ensemble tendance composé d'une jupe et d'un top assorti.",
        "sizes": ["S", "M", "L"]
    },
    {
        "id": 6,
        "name": "Robe Casual Bleue",
        "price": 52000,
        "category": "vetements",
        "image": "img/robe2.jpg",
        "description": "Robe décontractée bleue, parfaite pour le quotidien.",
        "sizes": ["S", "M", "L", "XL"]
    },
    {
        "id": 7,
        "name": "Perruque Rousse Courte",
        "price": 79000,
        "category": "perruques",
        "image": "img/perruque4.jpg",
        "description": "Perruque rousse courte pour un look dynamique et moderne."
    },
    {
        "id": 8,
        "name": "Robe Été Fleurie",
        "price": 59000,
        "category": "vetements",
        "image": "img/robe3.jpg",
        "description": "Robe d'été légère aux motifs fleuris.",
        "sizes": ["S", "M", "L"]
    },
    {
        "id": 9,
        "name": "Perruque Blonde Lisse",
        "price": 105000,
        "category": "perruques",
        "image": "img/perruque5.jpg",
        "description": "Perruque blonde lisse et soyeuse pour un look naturel."
    },
    {
        "id": 10,
        "name": "Ensemble Pantalon Veste",
        "price": 111000,
        "category": "vetements",
        "image": "img/ensemble2.jpg",
        "description": "Ensemble élégant composé d'un pantalon et d'une veste assortie.",
        "sizes": ["S", "M", "L", "XL"]
    },
    {
        "id": 11,
        "name": "Perruque Noire Courte",
        "price": 72000,
        "category": "perruques",
        "image": "img/perruque6.jpg",
        "description": "Perruque noire courte pour un style moderne et sophistiqué."
    },
    {
        "id": 12,
        "name": "Robe Cocktail Noire",
        "price": 118000,
        "category": "vetements",
        "image": "img/robe4.jpg",
        "description": "Élégante robe de cocktail noire, parfaite pour les soirées chic.",
        "sizes": ["S", "M", "L"]
    },
    {
        "id": 13,
        "name": "Perruque Châtain Mi-longue",
        "price": 88000,
        "category": "perruques",
        "image": "img/perruque7.jpg",
        "description": "Perruque châtain mi-longue avec un mouvement naturel et élégant."
    },
    {
        "id": 14,
        "name": "Robe Maxi Bohème",
        "price": 85000,
        "category": "vetements",
        "image": "img/robe5.jpg",
        "description": "Longue robe bohème aux motifs ethniques, parfaite pour l'été.",
        "sizes": ["S", "M", "L", "XL"]
    },
    {
        "id": 15,
        "name": "Perruque Grise Moderne",
        "price": 111000,
        "category": "perruques",
        "image": "img/perruque8.jpg",
        "description": "Perruque grise tendance pour un look sophistiqué et contemporain."
    },
    {
        "id": 16,
        "name": "Combinaison Élégante",
        "price": 105000,
        "category": "vetements",
        "image": "img/combinaison1.jpg",
        "description": "Combinaison chic et moderne, idéale pour les occasions spéciales.",
        "sizes": ["S", "M", "L"]
    },
    {
        "id": 17,
        "name": "Perruque Rose Pastel",
        "price": 95000,
        "category": "perruques",
        "image": "img/perruque9.jpg",
        "description": "Perruque rose pastel pour un look unique et tendance."
    },
    {
        "id": 18,
        "name": "Blazer Femme Chic",
        "price": 85000,
        "category": "vetements",
        "image": "img/blazer1.jpg",
        "description": "Blazer élégant et structuré pour un look professionnel.",
        "sizes": ["S", "M", "L", "XL"]
    },
    {
        "id": 19,
        "name": "Perruque Afro Naturelle",
        "price": 105000,
        "category": "perruques",
        "image": "img/perruque10.jpg",
        "description": "Perruque afro naturelle pour un style authentique et volumineux."
    },
    {
        "id": 20,
        "name": "Jupe Plissée Midi",
        "price": 52000,
        "category": "vetements",
        "image": "img/jupe1.jpg",
        "description": "Jupe plissée midi élégante, parfaite pour toutes les occasions.",
        "sizes": ["S", "M", "L"]
    },
    {
        "id": 21,
        "name": "Perruque Multicolore",
        "price": 118000,
        "category": "perruques",
        "image": "img/perruque11.jpg",
        "description": "Perruque aux couleurs vibrantes pour un look audacieux."
    },
    {
        "id": 22,
        "name": "Robe Pull Confort",
        "price": 59000,
        "category": "vetements",
        "image": "img/robe6.jpg",
        "description": "Robe pull confortable et stylée pour la saison froide.",
        "sizes": ["S", "M", "L", "XL"]
    },
    {
        "id": 23,
        "name": "Perruque Bob Violet",
        "price": 92000,
        "category": "perruques",
        "image": "img/perruque12.jpg",
        "description": "Perruque courte violette style bob pour un look original."
    },
    {
        "id": 24,
        "name": "Ensemble Sport Chic",
        "price": 79000,
        "category": "vetements",
        "image": "img/ensemble3.jpg",
        "description": "Ensemble sportswear élégant pour un style décontracté chic.",
        "sizes": ["S", "M", "L"]
    },
    {
        "id": 25,
        "name": "Perruque Ombré Blue",
        "price": 124000,
        "category": "perruques",
        "image": "img/perruque13.jpg",
        "description": "Perruque longue avec dégradé de bleus pour un look unique."
    },
    {
        "id": 26,
        "name": "Robe Chemise Longue",
        "price": 65000,
        "category": "vetements",
        "image": "img/robe7.jpg",
        "description": "Robe chemise longue et élégante pour un look sophistiqué.",
        "sizes": ["S", "M", "L", "XL"]
    },
    {
        "id": 27,
        "name": "Perruque Tresses Africaines",
        "price": 131000,
        "category": "perruques",
        "image": "img/perruque14.jpg",
        "description": "Perruque avec tresses africaines pour un style traditionnel élégant."
    }
]

# Template HTML pour les pages produits
product_template = """<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{name} - Boutique Élégance</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <!-- Header -->
    <header class="bg-light">
        <nav class="navbar navbar-expand-lg navbar-light container">
            <div class="container-fluid">
                <a class="navbar-brand" href="../index.html">
                    <img src="../img/logo.png" alt="Boutique Élégance" height="50">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <form class="d-flex mx-auto w-50">
                        <input class="form-control me-2" type="search" placeholder="Rechercher des produits...">
                        <button class="btn btn-outline-primary" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fas fa-heart"></i> Favoris</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../cart.html"><i class="fas fa-shopping-cart"></i> Panier</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <!-- Product Details -->
    <main class="container py-5">
        <div class="row">
            <!-- Product Images -->
            <div class="col-md-6">
                <div class="product-images">
                    <img src="../{image}" alt="{name}" class="img-fluid main-image rounded shadow" onerror="this.src='../img/placeholder.jpg'">
                </div>
            </div>

            <!-- Product Info -->
            <div class="col-md-6">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="../index.html">Accueil</a></li>
                        <li class="breadcrumb-item"><a href="../index.html#{category}">{category_fr}</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{name}</li>
                    </ol>
                </nav>

                <h1 class="product-title">{name}</h1>
                <p class="product-price mb-4">{price_formatted} FCFA</p>
                
                {size_selection}

                <!-- Quantity Selection -->
                <div class="quantity-selection mb-4">
                    <h5>Quantité</h5>
                    <div class="input-group" style="width: 150px;">
                        <button class="btn btn-outline-secondary" type="button" onclick="updateQuantity(-1)">-</button>
                        <input type="number" class="form-control text-center" value="1" min="1" id="quantity">
                        <button class="btn btn-outline-secondary" type="button" onclick="updateQuantity(1)">+</button>
                    </div>
                </div>

                <!-- Add to Cart Button -->
                <button class="btn btn-primary btn-lg mb-4 w-100" onclick="addToCart()">
                    <i class="fas fa-shopping-cart"></i> Ajouter au panier
                </button>

                <!-- Product Description -->
                <div class="product-description">
                    <h5>Description</h5>
                    <p>{description}</p>
                </div>

                <!-- Additional Information -->
                <div class="additional-info mt-4">
                    <h5>Informations complémentaires</h5>
                    <ul class="list-unstyled">
                        <li><i class="fas fa-truck"></i> Livraison gratuite à partir de 50.000 FCFA</li>
                        <li><i class="fas fa-undo"></i> Retours gratuits sous 30 jours</li>
                        <li><i class="fas fa-shield-alt"></i> Garantie satisfaction</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-light py-4 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>À propos</h5>
                    <p>Boutique Élégance - Votre destination pour des perruques de qualité et des vêtements tendance.</p>
                </div>
                <div class="col-md-4">
                    <h5>Liens rapides</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-decoration-none">Nouveautés</a></li>
                        <li><a href="#" class="text-decoration-none">Promotions</a></li>
                        <li><a href="#" class="text-decoration-none">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Contact</h5>
                    <ul class="list-unstyled">
                        <li><i class="fas fa-envelope"></i> contact@boutique-elegance.com</li>
                        <li><i class="fas fa-phone"></i> +33 1 23 45 67 89</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Product data
        const product = {product_json};

        function updateQuantity(change) {{
            const input = document.getElementById('quantity');
            const newValue = parseInt(input.value) + change;
            if (newValue >= 1) {{
                input.value = newValue;
            }}
        }}

        function addToCart() {{
            const quantity = parseInt(document.getElementById('quantity').value);
            const size = document.querySelector('.size-selection .btn.active')?.textContent;
            
            if (product.category === 'vetements' && !size) {{
                alert('Veuillez sélectionner une taille');
                return;
            }}

            const cartItem = {{
                ...product,
                quantity,
                size
            }};

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(cartItem);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Produit ajouté au panier');
        }}

        // Size selection handling
        document.querySelectorAll('.size-selection .btn').forEach(btn => {{
            btn.addEventListener('click', () => {{
                document.querySelectorAll('.size-selection .btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }});
        }});
    </script>
</body>
</html>
"""

# Générer les pages pour chaque produit
for product in products:
    # Préparer les données spécifiques au produit
    product_data = {
        **product,
        'price_formatted': '{:,.0f}'.format(product['price']).replace(',', ' '),
        'category_fr': 'Perruques' if product['category'] == 'perruques' else 'Vêtements',
        'size_selection': '''
            <div class="size-selection mb-4">
                <h5>Taille</h5>
                <div class="btn-group" role="group">
                    {}
                </div>
            </div>
        '''.format(''.join(f'<button type="button" class="btn btn-outline-secondary">{size}</button>' 
                          for size in product.get('sizes', []))) if 'sizes' in product else '',
        'product_json': json.dumps(product)
    }
    
    # Générer le contenu de la page
    page_content = product_template.format(**product_data)
    
    # Écrire le fichier
    with open(f'products/product-{product["id"]}.html', 'w', encoding='utf-8') as f:
        f.write(page_content)

print("Pages produits générées avec succès!") 