/*let r = new XMLHttpRequest();
r.onload = () => {
    if (r.readyState === 4) { 
        console.log("all is ok")
        if (r.status == 200) { 
            let response = JSON.parse(r.responseText);
            let products = response.products;
            console.log(products);
        } else {
            console.error("Request failed with status", r.status);
        }
    }
};
r.open("GET", "https://dummyjson.com/products", true);
r.send();

let r2 = new XMLHttpRequest();
r2.onload = () => {
    if (r2.readyState === 4) { 
        console.log("all is okkkk")
        if (r2.status === 200) { 
            let res = JSON.parse(r2.responseText);
            let item=res;
            console.log(item);
        }else{

            console.error("Request failed with status", r2.status);
            }
        }
    };
    r2.open("GET", "https://dummyjson.com/products/1", true);
r2.send();
*/

let productsSection = document.querySelector(".products");


function getByCategory(category) {
    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
        if (xhr.readyState === 4) {
            console.log("all is ok!");

            if (xhr.status == 200) {
                let response = JSON.parse(xhr.responseText);
                let products = response.products; 
                console.log(products);

               
                productsSection.innerHTML = '';

                
                products.forEach(product => {
                    let productCard = `
                        <div class="card">
                            <img src="${product.thumbnail}" alt="${product.title}">
                            <h3>${product.title}</h3>
                            <p>${product.description}</p>
                            <p>Price: <span class="price">${product.price}</span></p>
                        </div>
                    `;
                  
                    productsSection.innerHTML += productCard;
                });
            }
        }
    };

    xhr.open("GET", `https://dummyjson.com/products/category/${category}`, true);
    xhr.send();
}


function loadAllProducts() {
    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
        if (xhr.readyState === 4) {
            console.log("all is ok!");

            if (xhr.status == 200) {
                let response = JSON.parse(xhr.responseText);
                let products = response.products; 
                console.log(products);

                productsSection.innerHTML = '';

               
                products.forEach(product => {
                    let productCard = `
                        <div class="card">
                            <img src="${product.thumbnail}" alt="${product.title}">
                            <h3>${product.title}</h3>
                            <p>${product.description}</p>
                            <p>Price: <span class="price">${product.price}</span></p>
                        </div>
                    `;
                   
                    productsSection.innerHTML += productCard;
                });
            }
        }
    };

    xhr.open("GET", "https://dummyjson.com/products", true);
    xhr.send();
}

loadAllProducts();
function searchProducts() {
    let query = document.getElementById('searchInput').value;

    if (query.trim() === "") {
        loadAllProducts(); 
        return;
    }

    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
        if (xhr.readyState === 4) {
            console.log("Search successful!");

            if (xhr.status == 200) {
                let response = JSON.parse(xhr.responseText);
                let products = response.products; 
                console.log(products);

                productsSection.innerHTML = '';

                products.forEach(product => {
                    let productCard = `
                        <div class="card">
                            <img src="${product.thumbnail}" alt="${product.title}">
                            <h3>${product.title}</h3>
                            <p>${product.description}</p>
                            <p>Price: <span class="price">${product.price}</span></p>
                        </div>
                    `;
                    productsSection.innerHTML += productCard;
                });
            }
        }
    };

    xhr.open("GET", `https://dummyjson.com/products/search?q=${query}`, true);
    xhr.send();
}

