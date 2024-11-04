const savingsAccount = {
    balance: 1000,
    interestRate:1,
    // To make interestRatePercent calculate based on the current balance, define it as a method (function) rather than a static property.

    interestRatePercent: function(){
        return (this.interestRate/100) * this.balance;

    },
         // Using [this.key] to refer to the property that is found within this Object instead of using [savingsAccount.key]
    addMoney: function insertM(amount) {
      if (amount > 0) {
        this.balance += amount;
      }
    },
    removeMoney: function withdraw(amount) {
      let verifyBalance = this.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
        this.balance -= amount;
      }
    },
    printAccountSummary: function (){
        return 'Welcome ! \nYour account balance is '+ this.balance + ' And interest rate is ' + this.interestRate + '%';
    }
   
   
  };

  // Wwe need to use the objects name to access it's properties and functions !
savingsAccount.addMoney(200);
console.log(savingsAccount.balance);
savingsAccount.removeMoney(100);
console.log(savingsAccount.balance);
console.log(savingsAccount.interestRatePercent());
console.log(savingsAccount.printAccountSummary());
