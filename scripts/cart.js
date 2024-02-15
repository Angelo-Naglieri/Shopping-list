function refreshProducts (){
  const productList = document.querySelector(".display-products");
  const noProductMessage = document.getElementById("no-products-message");

  productList.querySelectorAll(".product").forEach((element)=>{
    productList.removeChild(element)
  })
  if(localStorage.length<3){
    localStorage.productCount = 0;
    noProductMessage.style.display = "block";
  }else if (localStorage.length>2){
    noProductMessage.style.display = "none";
    for(let i=0; i<localStorage.productCount; i++){
      let product = localStorage.getItem(`product-${i}`)
      if(product){
        generateProduct(product.split('.'), i);
      }
    }
  }
}

function removeProduct(productNum){
  localStorage.removeItem(`product-${productNum}`)
  refreshProducts();
}

function generateProduct (dataArray, num){
  const productList = document.querySelector(".display-products");

  const productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.dataset.num = num;

  const infoDiv = document.createElement("div");
  infoDiv.className = "product-info";

  const productImg = document.createElement("i");
  productImg.classList.add("fa-solid", "fa-2xl", dataArray[0], "product-img");

  const productName = document.createElement("p");
  productName.className = "text product-name";
  productName.innerText = dataArray[1];

  const productQuantity = document.createElement("p")
  productQuantity.className = "text product-name";
  productQuantity.innerText = dataArray[2];

  const deleteBtn = document.createElement("i");
  deleteBtn.className = "fa-solid fa-2xl fa-circle-check btn";
  deleteBtn.addEventListener("click", ()=>{
    removeProduct(num);
  });

  infoDiv.append(productImg, productName, productQuantity);
  productDiv.append(infoDiv, deleteBtn);
  productList.appendChild(productDiv);
}

document.addEventListener("DOMContentLoaded", refreshProducts);