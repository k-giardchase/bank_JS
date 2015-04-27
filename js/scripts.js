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
        $("input#name").val("");
        $("input#first-deposit").val("");

        $("form#deposit-withdraw").submit(function(event) {
            event.preventDefault();

            var inputtedDeposit = parseInt($("input#deposit").val());
            var inputtedWithdraw = parseInt($("input#withdraw").val());

            if(isNaN(inputtedWithdraw)) {
              newBankAccount.balance;
            } else {
              newBankAccount.withdraw(inputtedWithdraw);
            }

            if(isNaN(inputtedDeposit)) {
              newBankAccount.balance;
            } else {
              newBankAccount.deposit(inputtedDeposit);
            }

            $('#balance').show();
            $('.bank-balance').text(newBankAccount.balance);

            $("input#withdraw").val("");
            $("input#deposit").val("");
        });
    });
});
