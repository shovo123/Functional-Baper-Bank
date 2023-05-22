/* 
1. add event handler with the withdraw button
2. get the withdraw amount

3. clear the withdraw input field

4. get previous withdraw total

5. calculate total Withdraw amount and set it to the withdraw total element

6. get previous balance

7. calculate new balance and set it to the balance total element
*/

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert("PLease Input A Number");
        return;
    }

    // step-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    // step-6
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(previousBalanceTotal > previousWithdrawTotal){
        alert("Insufficient Balance");
        return;
    }

    // step-5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})