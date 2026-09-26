/*
const buttonPalm = document.getElementById("palm-tree") ;
const buttonMinis = document.getElementById("minus");
const buttonOne = document.getElementById("button-one");
const buttonPlus = document.getElementById("plus");
const submitOrder = document.querySelector(".submit-order")

const totalcost = document.querySelector(".total-price");

const price = 20;
let quantity = 1

function updateTotal(){
const totalPrice = price * quantity;

 buttonOne.textContent = quantity;
totalcost.textContent = `Total:${totalPrice} €`;
}

buttonMinis.addEventListener("click", ()=>{
  if(quantity > 1){
    quantity--;
    updateTotal();
  }
});

buttonPlus.addEventListener("click",()=>{
quantity++;
updateTotal();
  
}); 

buttonPalm.addEventListener('click',()=>{
  quantity++;
  updateTotal();
})

function submit(){
alert(

  "Order Submitted! \n" + 
  "quantity:" + quantity + "\n" + "Total: €"+ (quantity * price )  
);
}
submitOrder.addEventListener('click',submit);
updateTotal();
*/
/*
const buttonPalm = document.getElementById("palm-tree");
const buttonMinis = document.getElementById("minus");
const buttonOne = document.getElementById("button-one");
const buttonPlus = document.getElementById("plus");
const submitOrder = document.querySelector(".submit-order");
const totalcost = document.querySelector(".total-price");

const price = 20;
let quantity = 1;

function updateTotal() {
  const totalPrice = price * quantity;

  buttonOne.textContent = quantity;
  totalcost.textContent = `Total: ${totalPrice} €`;
}

buttonMinis.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    updateTotal();
  }
});

buttonPlus.addEventListener("click", () => {
  quantity++;
  updateTotal();
});

buttonPalm.addEventListener("click", () => {
  quantity++;
  updateTotal();
});

submitOrder.addEventListener("click", async () => {
  const totalPrice = quantity * price;

  const formData = new FormData();

  formData.append("Product", "Palm");
  formData.append("Quantity", quantity);
  formData.append("Total", `${totalPrice} €`);

  try {
    const response = await fetch("https://formspree.io/f/xqpaywdb", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      alert(
        "Order Submitted!\n\n" +
        "Product: Palm\n" +
        "Quantity: " + quantity + "\n" +
        "Total: €" + totalPrice
      );
    } else {
      alert("There was a problem submitting your order.");
    }
  } catch (error) {
    alert("Could not submit the order. Please try again.");
  }
});

updateTotal();
*/

const buttonMinis = document.getElementById("minus");
const buttonOne = document.getElementById("button-one");
const buttonPlus = document.getElementById("plus");
const submitOrder = document.querySelector(".submit-order");

const totalcost = document.querySelector(".total-price");

const customerName = document.getElementById("customer-name");
const customerEmail = document.getElementById("customer-email");
const customerAddress = document.getElementById("customer-address");

const paymentInfo = document.getElementById("payment-info");

const price = 12000.;
let quantity = 1;

function updateTotal() {
  const totalPrice = price * quantity;

  buttonOne.textContent = quantity;
  totalcost.textContent = `Total: ₦${totalPrice.toLocaleString()}`;
  totalcost.textContent = `Total: ₦${totalPrice.toLocaleString()}`;
  /*
  `${totalPrice}€`
  */
}

buttonMinis.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    updateTotal();
  }
});

buttonPlus.addEventListener("click", () => {
  quantity++;
  updateTotal();
});

submitOrder.addEventListener("click", async () => {

  if (
    customerName.value.trim() === "" ||
    customerEmail.value.trim() === "" ||
    customerAddress.value.trim() === ""
  ) {
    alert("Please enter your name, email and address.");
    return;
  }

  const totalPrice = quantity * price;

  const formData = new FormData();

  formData.append("Name", customerName.value);
  formData.append("Customer Email", customerEmail.value);
  formData.append("Address", customerAddress.value);
  formData.append("Product", "Palm");
  formData.append("Quantity", quantity);
  formData.append("Total", `${totalPrice} €`);

  try {
    const response = await fetch(
      "https://formspree.io/f/xqpaywdb",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      }
    );

    if (response.ok) {

      alert(
        "Order submitted successfully!\n\n" +
        "Quantity: " + quantity + "\n" +
        "Total: €" + totalPrice
      );

      paymentInfo.style.display = "block";

    } else {
      alert("There was a problem submitting your order.");
    }

  } catch (error) {
    alert("Could not submit the order. Please try again.");
  }
});

updateTotal();









