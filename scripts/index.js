let totalPrice = 0;
let itemCount = 1;
function cardClicked1() {

    const cardItem1 = cardTitleShown('cardItem-field-1', 'selected-items-added');
    const cardPrice1 = cardInnerTextPriceTaken('card-price-field-1');

    //set price into total price 
    totalPriceCalculate('total-price-field', cardPrice1);

    //purchase btn enable function CALL
    purchaseBtnEnable();

}




function cardClicked2() {
    const cardItem2 = cardTitleShown('cardItem-field-2', 'selected-items-added');
    const cardPrice2 = cardInnerTextPriceTaken('card-price-field-2');
    totalPriceCalculate('total-price-field', cardPrice2);

    //purchase btn enable function CALL
    purchaseBtnEnable();
}

function cardClicked3() {
    const cardItem3 = cardTitleShown('cardItem-field-3', 'selected-items-added');
    const cardPrice3 = cardInnerTextPriceTaken('card-price-field-3');
    totalPriceCalculate('total-price-field', cardPrice3);

    //purchase btn enable function CALL
    purchaseBtnEnable();
}

function cardClicked4() {
    const cardItem4 = cardTitleShown('cardItem-field-4', 'selected-items-added');
    const cardPrice4 = cardInnerTextPriceTaken('card-price-field-4');
    totalPriceCalculate('total-price-field', cardPrice4);

    //purchase btn enable function CALL
    purchaseBtnEnable();
}

function cardClicked5() {
    const cardItem5 = cardTitleShown('cardItem-field-5', 'selected-items-added');
    const cardPrice5 = cardInnerTextPriceTaken('card-price-field-5');
    totalPriceCalculate('total-price-field', cardPrice5);

    //purchase btn enable function CALL
    purchaseBtnEnable();
}

function cardClicked6() {
    const cardItem6 = cardTitleShown('cardItem-field-6', 'selected-items-added');
    const cardPrice6 = cardInnerTextPriceTaken('card-price-field-6');
    totalPriceCalculate('total-price-field', cardPrice6);

    //purchase btn enable function CALL
    purchaseBtnEnable();
}

//purchase btn enable functionality
function purchaseBtnEnable()
{
    if(totalPrice >= 1)
    {
        toogleBtn('purchase-btn-field');
    }
}




// Apply coupon code 
function applybtnClicked()
{
    const couponField = document.getElementById('coupon-input-field');
    const couponCode = couponField.value ;

    if(couponCode == 'SELL200')
    {
    
        // toogleBtn('purchase-btn-field');
        const discount = parseFloat(totalPrice * (20/100));
        const discountField = document.getElementById('total-discount-field');
        discountField.innerText = discount.toFixed(2);
        const totalOverall = parseFloat(totalPrice) - parseFloat(discount);
        const totalOverallField = document.getElementById('total-overall-field');
        totalOverallField.innerText = totalOverall.toFixed(2);
    }
    else 
    {
        alert('Please provide a valid coupon code');
    }
    couponField.value = '';
} 






//common function to show card title
function cardTitleShown(titleElementId, whereToAddElementId) {
    const cardItemField = document.getElementById(titleElementId);
    const cardItem = cardItemField.innerText;

    const p = document.createElement('p');
    // li.innerText = cardItem;
    p.textContent = `${itemCount}. ${cardItem}`;

    const newListedItemField = document.getElementById(whereToAddElementId);
    newListedItemField.appendChild(p);

    itemCount++;



}

// COMMON toogle btn  FUNCTION
function toogleBtn(elementId)
{
    const applyBtnField = document.getElementById(elementId);
    applyBtnField.removeAttribute('disabled');
    applyBtnField.classList.remove('opacity-50', 'cursor-not-allowed');
}


// card price total set to Total-price section
function totalPriceCalculate(elementId, cardPrice) {
    totalPrice = parseFloat(totalPrice) + parseFloat(cardPrice);
    const totalPriceField = document.getElementById(elementId);
    totalPriceField.innerText = totalPrice.toFixed(2);

    if(totalPrice.toFixed(2)  >= 200)
    {
        toogleBtn('apply-btn-field');
    }
}


// common function after clicking card item price taken
function cardInnerTextPriceTaken(elementId) {
    const cardPriceField = document.getElementById(elementId);
    const cardPriceValue = parseFloat(cardPriceField.innerText);
    return cardPriceValue;
}