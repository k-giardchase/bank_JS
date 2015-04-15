describe("BankAccount", function() {
  describe("withdraw", function() {
    it("withdraws the specified amount and returns the new balance", function() {
      var testBankAccount = Object.create(BankAccount);
      testBankAccount.withdraw(50);
      expect(testBankAccount.balance).to.equal(-50);
    });
  });

    describe("deposit", function() {
      it("deposits the specified amount and returns the new balance", function() {
        var testBankAccount = Object.create(BankAccount);
        testBankAccount.deposit(50);
        expect(testBankAccount.balance).to.equal(50);
      });
    });
});
