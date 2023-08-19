function cardClicked1()
{
   const cardItemField1 = document.getElementById('cardItem-field-1');
   const cardItem1 = cardItemField1.innerText;
   console.log(cardItem1);

   const li = document.createElement('li');
   li.innerText =  cardItem1;

   const count = calculat

   const newListedItemField = document.getElementById('selected-items-added');
   newListedItemField.appendChild(li);

   

}







// common function after clicking card item price taken
function cardInnerTextPriceTaken(elementId)
{
      const cardPriceField = document.getElementById(elementId);
      const cardPriceValue = parseFloat(cardPriceField.innerText);
      return cardPriceValue;
}