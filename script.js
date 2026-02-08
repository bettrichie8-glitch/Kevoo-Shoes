const products = {
  Shoes: ["Sneakers","Official Shoes","Boots","Sandals","Slides","Heels","Kids Shoes"],
  Clothes: ["T-Shirt","Hoodie","Jeans","Tracksuit","Dress","Jacket","Cap","Socks"]
};

// Update product list based on category
function updateProducts() {
  const cat = document.getElementById("category").value;
  const productSelect = document.getElementById("product-type");
  productSelect.innerHTML = "<option value=''>-- Select Product --</option>";
  if(products[cat]){
    products[cat].forEach(p => {
      const opt = document.createElement("option");
      opt.value = p;
      opt.textContent = p;
      productSelect.appendChild(opt);
    });
  }
}

// Send order
function sendOrder() {
  const category = document.getElementById("category").value;
  const product = document.getElementById("product-type").value;
  const day = document.getElementById("visit-day").value;

  if(!category){ alert("Bro, select category!"); return; }
  if(!product){ alert("Bro, select product!"); return; }
  if(!day){ alert("Bro, select visit day!"); return; }

  const msg = `Bro welcome 🙌 I want to order:\nCategory: ${category}\nProduct: ${product}\nVisit Day: ${day}\nLocation: Silibwet Market near Lalet Supermarket`;
  const url = "https://wa.me/254112880923?text=" + encodeURIComponent(msg);
  window.open(url, "_blank");
}

// Direct order from list
function order(product, price) {
  const msg = `Bro welcome 🙌 I want to order:\n${product}\nPrice: KES ${price}\nLocation: Silibwet Market near Lalet Supermarket`;
  const url = "https://wa.me/254112880923?text=" + encodeURIComponent(msg);
  window.open(url, "_blank");
}
