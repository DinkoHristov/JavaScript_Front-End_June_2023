function solve() {
   const addButtons = Array.from(document.getElementsByClassName("add-product"));
   const names = Array.from(document.getElementsByClassName("product-title"));
   let prices = Array.from(document.getElementsByClassName("product-line-price"));

   let textArea = document.querySelector("textarea");
   let totalPrice = 0;
   let boughtItems = [];

   for (let i = 0; i < addButtons.length; i++) {
      addButtons[i].addEventListener("click", (e) => {
         let name = names[i].textContent;
         let price = Number(prices[i].textContent);

         let result = `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
         totalPrice += price;
         textArea.value += result;

         if (!boughtItems.includes(name)) {
            boughtItems.push(name);
         }
      });
   }

   const checkoutButton = Array.from(document.getElementsByClassName("checkout"));
   checkoutButton[0].addEventListener("click", (e) => {
      let boughtString = `You bought ${boughtItems.join(", ")} for ${totalPrice.toFixed(2)}.\n`;
      textArea.value += boughtString;

      const allButtons = Array.from(document.querySelectorAll("button"));
      allButtons.forEach(button => button.disabled = true);
   });
}