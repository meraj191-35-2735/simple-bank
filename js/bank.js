// Deposit and Withdraw
document.getElementById('deposit-button').addEventListener('click', function() {
    // get the deposited amount
    const depositInput = document.getElementById('deposit-amount');
    const inputDepositAmount = parseInt(depositInput.value);

    const totalDeposit = document.getElementById('total-deposit');
    const currentDeposit = parseInt(totalDeposit.innerText);

    const newDeposit = currentDeposit + inputDepositAmount;
    totalDeposit.innerText = newDeposit;

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceAmount = parseInt(totalBalance.innerText);
    const totalAmount = totalBalanceAmount + inputDepositAmount;
    totalBalance.innerText = totalAmount;

    depositInput.value = '';
});

document.getElementById('withdraw-button').addEventListener('click', function() {
    // get the withdraw amount
    const withdrawInput = document.getElementById('withdraw-amount');

    const inputWithdrawAmount = parseInt(withdrawInput.value);


    const totalWithdraw = document.getElementById('total-withdraw');
    const currentWithdraw = parseInt(totalWithdraw.innerText);

    document.getElementById('alert').innerText = " ";

    const balance = document.getElementById('total-balance');
    const totalBalance = parseInt(balance.innerText);
    if (totalBalance > 200 && inputWithdrawAmount < totalBalance) {
        const newWithdraw = currentWithdraw + inputWithdrawAmount;
        totalWithdraw.innerText = newWithdraw;
        const totalAmount = totalBalance - inputWithdrawAmount;
        balance.innerText = totalAmount;
        console.log(totalBalance);
    } else {
        document.getElementById('alert').innerText = "Sorry! Insufficient Balance";
    }


    withdrawInput.value = '';
});