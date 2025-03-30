export function searchProducts() {
    const keyword = document.getElementById('keyword').value;
    
    if (!keyword) {
        alert("Por favor, insira um produto!");
        return;
    }

    console.log("Buscando produtos para:", keyword);

    fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error("Nenhum produto encontrado.");
                } else {
                    throw new Error("Erro ao buscar os produtos.");
                }
            }
            return response.json();
        })
        .then(data => {
            const products = data.products;
            const productsContainer = document.getElementById('products');
            productsContainer.innerHTML = ''; 

            if (products.length === 0) {
                productsContainer.innerHTML = "<p>Nenhum produto encontrado.</p>";
                return;
            }

            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <h3>${product.title}</h3>
                    <p>Rating: ${product.rating}</p>
                    <p>Reviews: ${product.reviews}</p>
                    <img src="${product.image}" alt="${product.title}" />
                `;
                productsContainer.appendChild(productElement);

            
                productElement.addEventListener('click', () => showProductDetails(product));
            });
        })
        .catch(error => {
            const productsContainer = document.getElementById('products');
            productsContainer.innerHTML = `<p>${error.message}</p>`;
        });
}

function showProductDetails(product) {
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-rating').textContent = product.rating;
    document.getElementById('product-reviews').textContent = product.reviews;
    document.getElementById('product-description').textContent = product.description || "No description available.";

    const modal = document.getElementById('product-details-modal');
    modal.style.display = 'block'; 
}

document.getElementById('close-modal').addEventListener('click', () => {
    const modal = document.getElementById('product-details-modal');
    modal.style.display = 'none'; 
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('product-details-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', searchProducts);
});
