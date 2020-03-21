let depositButton = document.getElementById('deposit');
let withdrawButton = document.getElementById('withdraw');
let showBalanceButton = document.getElementById('showBalance');
let historyButton = document.getElementById('history');
let displayDepositDiv = document.getElementById("displayOnclickDeposit");
let displayWithdrawDiv = document.getElementById("displayOnclickWithdraw");
let displayShowBalanceDiv = document.getElementById("currentBalance");
let inputDeposit = document.getElementById('inputDeposit');
let depositButtonSubmit = document.getElementById('depositButtonSubmit');
let withdrawButtonSubmit = document.getElementById('withdrawButtonSubmit');
let inputWithdraw = document.getElementById('inputWithdraw');
let currentBalance = document.getElementById('currentBalance');
let historyTable = document.getElementById('historyTable');
let showHistoryDiv = document.getElementById('showHistory');
let errorMessageForDeposit = document.getElementById('errorMessage');
let errorMessageForWithdraw = document.getElementById('errorMessageForWithdraw');
let timer = document.getElementById('timerForDeposit');
let errorMessageForTransaction = document.getElementById('errorMessageForTransaction');
let validAmount = /^[0-9]+$/;
let countOfTranscations = 0;
let stopTimer;

//creating transaction class
class Transaction {
    constructor() {
        this.transactionType;
        this.transactionAmount;
        this.balance;
    }
}


// creating Atm class with methods
class Atm {
    constructor() {
        this.mode = null;
        this.balance = 0;
        this.transactionHistory = null;
    }
    makeWithdrawal(mainBalance, amount, modeOftrasaction) {
        mainBalance = mainBalance - parseInt(amount);
        userDetails.balance = mainBalance;
        userTransaction.transactionType = "Deposit";
        userTransaction.transactionAmount = amount;
        //return (this.balance);
        updateTransaction(modeOftrasaction, amount, userDetails.balance);

    }
    makeDeposit(mainBalance, amount, modeOftrasaction) {
        mainBalance += parseInt(amount);
        userDetails.balance = mainBalance;
        userTransaction.transactionType = "Deposit";
        userTransaction.transactionAmount = amount;
        console.log(userDetails.balance);
        //return (this.balance);
        updateTransaction(modeOftrasaction, amount, userDetails.balance);
    }
}
// creating instances for above classes
let userDetails = new Atm();
let userTransaction = new Transaction();


//onclick function for deposit button


depositButton.onclick = () => {
    clearInterval(stopTimer)
    let countDown = 10;
    timer.innerHTML = "";
    stopTimer = setInterval(() => {
        if (countDown > 0) {
            timer.innerHTML = `Time left:${countDown}s`;
            countDown -= 1;
        }
        else {
            updateUiElement('Deposit');
            timer.style.display = "none"
            displayDepositDiv.style.display = "none"
            depositButton.classList.remove('background-color-for-button');
        }

    }, 1000)
    updateUiElement('Deposit');
    depositButtonSubmit.onclick = () => {
        let amount = (inputDeposit.value);
        console.log(typeof(amount));
        inputDeposit.value = "";
        if (amount.match(validAmount)) {
            errorMessageForDeposit.style.display = "none";
            //console.log(userDetails.balance)
            clearInterval(stopTimer)
            timer.style.display = "none"
            displayDepositDiv.style.display = "none"
            depositButton.classList.add('background');
            userDetails.makeDeposit(userDetails.balance, amount, "Deposit");
        }
        else {
            errorMessageForDeposit.style.display = "flex";
        }
    }
}


//onclick function for withdraw button


withdrawButton.onclick = () => {
    updateUiElement('Withdraw');
    withdrawButtonSubmit.onclick = () => {
        let amount = inputWithdraw.value;
        console.log(amount);
        inputWithdraw.value = "";
        if (amount.match(validAmount)) {
            if (amount > parseInt(userDetails.balance)) {
                errorMessageForWithdraw.style.display = "flex";
                errorMessageForWithdraw.innerHTML = "Insufficient Balance";
            }
            else {
                //console.log(userDetails.balance)
                errorMessageForWithdraw.style.display = "none";
                //console.log("enter into")
                userDetails.makeWithdrawal(userDetails.balance, amount, "Withdraw");


            }
        }
        else {
            console.log("wrong");
            errorMessageForWithdraw.style.display = "flex";
            errorMessageForWithdraw.innerHTML = "Invalid credentials";
        }
    }


}

//onnclick function for show balance button

showBalanceButton.onclick = () => {
    updateUiElement('showBalance');
    console.log(userDetails.balance);
    currentBalance.innerHTML = `Current Balnce: ${userDetails.balance}`;

}

// onclick function for history button 


historyButton.onclick = () => {
    updateUiElement('showHistory');

    if (countOfTranscations > 0) {
        showHistoryDiv.style.display = "flex"
        errorMessageForTransaction.style.display = "none"

    }
    else {
        console.log(errorMessageForTransaction)
        errorMessageForTransaction.style.display = "flex"
        showHistoryDiv.style.display = "none"

    }




}

//function updating the transactions

function updateTransaction(modeOftrasaction, amount, balance) {
    let countOfTableRows = historyTable.rows.length;
    //console.log(countOfTableRows);
    let row = historyTable.insertRow(countOfTableRows);
    console.log(row);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = modeOftrasaction;
    cell2.innerHTML = amount;
    cell3.innerHTML = balance;
    countOfTranscations += 1;
    alert(`${modeOftrasaction} successfully commpleted`)

}

function updateUiElement(mode) {
    switch (mode) {
        case 'Deposit':
            depositButton.classList.add('background-color-for-button');
            withdrawButton.classList.remove('background-color-for-button');
            showBalanceButton.classList.remove('background-color-for-button');
            historyButton.classList.remove('background-color-for-button');
            displayDepositDiv.style.display = "flex"
            displayShowBalanceDiv.style.display = "none";
            displayWithdrawDiv.style.display = "none";
            errorMessageForTransaction.style.display = "none"
            showHistoryDiv.style.display = "none";
            errorMessageForDeposit.style.display = "none";
            break;
        case 'Withdraw':
            depositButton.classList.remove('background-color-for-button');
            withdrawButton.classList.add('background-color-for-button');
            showBalanceButton.classList.remove('background-color-for-button');
            historyButton.classList.remove('background-color-for-button');
            displayWithdrawDiv.style.display = "flex";
            displayDepositDiv.style.display = "none";
            displayShowBalanceDiv.style.display = "none";
            errorMessageForTransaction.style.display = "none"
            showHistoryDiv.style.display = "none";
            break;
        case 'showBalance':
            depositButton.classList.remove('background-color-for-button');
            withdrawButton.classList.remove('background-color-for-button');
            showBalanceButton.classList.add('background-color-for-button');
            historyButton.classList.remove('background-color-for-button');
            showHistoryDiv.style.display = "none";
            displayShowBalanceDiv.style.display = "flex";
            displayWithdrawDiv.style.display = "none";
            errorMessageForTransaction.style.display = "none"
            displayDepositDiv.style.display = "none";
            break;
        case 'showHistory':
            depositButton.classList.remove('background-color-for-button');
            withdrawButton.classList.remove('background-color-for-button');
            showBalanceButton.classList.remove('background-color-for-button');
            historyButton.classList.add('background-color-for-button');
            displayShowBalanceDiv.style.display = "none";
            displayWithdrawDiv.style.display = "none";
            displayDepositDiv.style.display = "none"
            break;

        default:
            depositButton.classList.remove('background-color-for-button');
            withdrawButton.classList.remove('background-color-for-button');
            showBalanceButton.classList.remove('background-color-for-button');
            historyButton.classList.remove('background-color-for-button');
            displayDepositDiv.style.display = "none";
            displayShowBalanceDiv.style.display = "none";
            displayWithdrawDiv.style.display = "none";
            errorMessageForTransaction.style.display = "none"
            showHistoryDiv.style.display = "none";
            errorMessageForDeposit.style.display = "none";

    }
}
