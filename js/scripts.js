var BankAccount = {
    balance: 0,
    withdraw: function(amount) {
        this.balance -= amount;
    },
    deposit: function(amount) {
      this.balance += amount;
    }
};

$(document).ready(function() {
    $("form#make-account").submit(function(event) {
        event.preventDefault();

        var inputtedName = $("input#name").val();
        var inputtedFirstDeposit = parseInt($("input#first-deposit").val());

        var newBankAccount = Object.create(BankAccount);
        newBankAccount.customerName = inputtedName;
        newBankAccount.balance = inputtedFirstDeposit;


        $('#balance').show();
        $('.customer').text(newBankAccount.customerName);
        $('.bank-balance').text(newBankAccount.balance);

        $("form#deposit-withdraw").submit(function(event) {
            event.preventDefault();

            var inputtedDeposit = parseInt($("input#deposit").val());
            var inputtedWithdraw = parseInt($("input#withdraw").val());


            // var newBankAccount = Object.create(BankAccount);
            // var newPerson = Object.create(Person);
            if(isNaN(inputtedWithdraw)) {
              return newBankAccount.balance;
            } else {
              newBankAccount.withdraw(inputtedWithdraw);
              // newPerson.accountBalance = newBankAccount.balance;
            }

            // if(!(isNaN(inputtedDeposit !== NaN) {
            //   newBankAccount.deposit(inputtedDeposit);
            //   newPerson.accountBalance = newBankAccount.balance;
            // }

            $('#balance').show();
            $('.bank-balance').text(newBankAccount.balance);
        });
    });


});
