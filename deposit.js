// /* 
// 1. add event listener to the deposit button
// 2. get deposit amount from the deposit input field
// 2-5. Convert string deposit amount to a number type

// 3. clear the deposit input field after getting the value

// 4. get the previous deposit total 

// 5. calculate new deposit total and set the value to the deposit total

// 6. get current balance total

// 7. calculate the new balance and set it to the balance total element
// */

// // Step-1 : 
// document.getElementById('btn-deposit').addEventListener('click', function(){
//     // console.log("Clicked");

//     // Step-2 :
//     const depositField = document.getElementById('deposit-field');
//     const newDepositAmountString = depositField.value;

//     // console.log(newDepositAmountString);
//     // console.log(typeof newDepositAmountString);

//     const newDepositAmount = parseFloat(newDepositAmountString);

//     // console.log(newDepositAmount);
//     // console.log(typeof newDepositAmount);

//     // Step-3 :
//     depositField.value = '';

//     if(isNaN(newDepositAmount)){
//         alert("PLease Input A Number");
//         return;
//     }

//     // Step-4 : 
//     const depositTotalElement = document.getElementById('deposit-total');
//     const previousDepositTotalString = depositTotalElement.innerText;
//     const previousDepositTotal = parseFloat(previousDepositTotalString);

//     // Step-5 :
//     const newDepositTotal = previousDepositTotal + newDepositAmount;
//     depositTotalElement.innerText = newDepositTotal;

//     // Step-6 :
//     const balanceTotalElement = document.getElementById('balance-total');
//     const previousBalanceTotalString = balanceTotalElement.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//     // Step-7 : 
//     const newBalanceTotal = previousBalanceTotal + newDepositAmount;
//     balanceTotalElement.innerText = newBalanceTotal;

// })