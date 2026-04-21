const form = document.getElementById("order-form");
const msg = document.getElementById("success-msg");
const itemSelect = document.getElementById("item");
const qtyInput = document.getElementById("qty");
const totalDiv = document.getElementById("total-amount");

// Coffee prices
const prices = {
  "Espresso":100,
  "Cappuccino":160,
  "Latte":170,
  "Americano":110,
  "Mocha":210,
  "Macchiato":140,
  "Flat White":230,
  "Iced Coffee":160,
  "Vanilla frappe":220,
  "Cold Brew":150,
  "Iced Americano":250,
  "Iced Latte":210,
  "Frappe":250
};

// Calculate total
function updateTotal() {
    const coffeeType = document.getElementById('item').value;
const quantity = parseInt(document.getElementById('qty').value) || 0;
    const price = prices[coffeeType] || 0;
    const total = price * quantity;
    
    // 3. Update the display
   totalDiv.innerText = `Total: NPR ${total}`;
}

// Event listeners
itemSelect.addEventListener("change", updateTotal);
qtyInput.addEventListener("input", updateTotal);
// Total div click - show alert or copy
totalDiv.addEventListener("click", function(){
  const totalText = totalDiv.textContent; // "Total: NPR 200"
  alert("Your total amount is: " + totalText);
  
  // Optional: copy to clipboard
  // navigator.clipboard.writeText(totalText.split(": ")[1]);
});

// Form submit
form.addEventListener("submit", function(e){
  e.preventDefault();
  console.log("Form submit triggered"); // debug

  fetch(form.action, {
    method: "POST",
    body: new FormData(form)
  })
  .then(response => response.text())
  .then(data => {
    console.log("Response from server:", data);
    msg.style.display = "block";
    form.reset();
    totalDiv.textContent = "Total: NPR 0";
  })
  .catch(error => {
    console.error("Fetch error:", error);
    alert("Something went wrong. Please check console!");
  });
});
