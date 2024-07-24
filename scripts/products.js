function refreshProductCard(product=document.querySelector(".selected"), isOther=false, cleanName=false){

  const productCard = document.querySelector(".confirm-card");
  const productCardImg = productCard.querySelector(".product-img");
  const productCardName = productCard.querySelector(".product-name");
  const productCardQuantity = productCard.querySelector(".product-quantity")
  const productInputQuantity = document.getElementById("quantity-input").value;
  
  if(product !== null){
    const productInputImg = product.querySelector("i");
    const productInputName = isOther === false ? product.querySelector(".product-text").innerText : "";

    productCardImg.classList.replace(productCardImg.classList[1], productInputImg.classList[1]);
    productCardName.value = productInputName;
  }else if(product === null){
    productCardImg.classList.replace(productCardImg.classList[1], "fa-question");
    productCardName.value = "";
  }else if(cleanName === true){
    productCardImg.classList.replace(productCardImg.classList[1], "fa-question");
    productCardName.value = "";
  }

  productCardQuantity.innerText = productInputQuantity;

}

function selectProduct (selectedProduct){

  const lastSelectedProduct = document.querySelector(".selected");

  if(lastSelectedProduct !== selectedProduct && lastSelectedProduct !== null){
    lastSelectedProduct.classList.remove("selected");
  }
  selectedProduct.classList.toggle("selected");

  refreshProductCard(document.querySelector(".selected"), (selectedProduct.id === "other-card"));

}

function changeQuantity(funcAddRem){

  const quantityInput = document.getElementById("quantity-input");
  switch(funcAddRem){
    case true:
      quantityInput.value++;
      break;
    case false:
      if(quantityInput.value > 1){
        quantityInput.value--;
      }
      break;
  }
  
  refreshProductCard();

}

function addNewProduct(){

  const productImg = document.querySelector(".product-img");
  const productName = document.querySelector(".product-name");
  const productQuantity = document.querySelector(".product-quantity");
  let img;

  if(productImg.classList.contains("fa-question")){
    img = "fa-ellipsis";
  }else{
    img = productImg.classList[1];
  }

  if(productName.value === ""){
    alert("To add your product, you must add a name to it.");
  }else if(Number(productQuantity.innerText) < 1){
    alert("To add your product, you must add its quantity.");
  }else if(confirm("Are you sure you want to add this product?")){
    localStorage.setItem(`product-${localStorage.productCount}`, `${img}.${productName.value}.${productQuantity.innerText}`);
    localStorage.productCount++;
    
    productImg.classList.replace(productImg.classList[1], "fa-question");
    productName.value = "";
    productQuantity.innerText = "";
  }
  
}
