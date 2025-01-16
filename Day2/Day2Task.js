// Bank simulation
var BankAccount = function (accountHolder, initialBalance) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance || 0;

    // Method to display account details
    this.getAccountDetails = function () {
        return `Account Holder: ${this.accountHolder}<br>Balance: Rs.${this.balance.toFixed(2)}`;
    };

    // Method to deposit money
    this.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Rs.${amount.toFixed(2)} deposited successfully.<br>`;
        } else {
            return "Deposit amount must be positive.<br>";
        }
    };

    // Method to withdraw money
    this.withdraw = function (amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                return `$Rs.{amount.toFixed(2)} withdrawn successfully.<br>`;
            } else {
                return "Insufficient balance.<br>";
            }
        } else {
            return "Withdrawal amount must be positive.<br>";
        }
    };
};

// Creating an account
var account1 = new BankAccount("Rishab Kumar", 100);

// Function to display output in the browser
function displayOutput(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML += message + "<br>";
}

// Event listeners for buttons
document.getElementById("displayDetails").addEventListener("click", function () {
    displayOutput(account1.getAccountDetails());
});

document.getElementById("depositMoney").addEventListener("click", function () {
    displayOutput(account1.deposit(50));
});

document.getElementById("withdrawMoney").addEventListener("click", function () {
    displayOutput(account1.withdraw(30));
});
