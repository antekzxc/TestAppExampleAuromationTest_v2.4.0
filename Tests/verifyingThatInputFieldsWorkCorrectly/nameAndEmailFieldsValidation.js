describe('C2 Verify that the "Name" and "Email" fields validation works correctly', function () {

    let userRegistrationForm = require('../../PO/userRegistrationForm');
    let dataFile = require ('../../Fixtures/data.json');
    let invalidUserName = dataFile["invalidUserName"];
    let invalidUserEmail = dataFile["invalidUserEmail"];

    it('Enter an invalid value in the "Name" field (for example, " AK").', function () {
        userRegistrationForm.nameField.sendKeys(invalidUserName);

        //The "Name" field changes colour to yellow.
        expect(userRegistrationForm.nameField.getAttribute('class')).toContain(userRegistrationForm.yellowNameFieldClass);
    });


    it('Enter an invalid value in the "Email" field (for example, " anton@").', function () {
        userRegistrationForm.emailField.sendKeys(invalidUserEmail);

        //The "Email" field changes colour to yellow.
        expect(userRegistrationForm.emailField.getAttribute('class')).toContain(userRegistrationForm.yellowEmailFieldClass);
    });

});