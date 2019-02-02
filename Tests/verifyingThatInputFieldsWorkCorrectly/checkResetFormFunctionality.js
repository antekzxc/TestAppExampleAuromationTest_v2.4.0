describe('C3 Verify that the reset form functionality works correctly', function () {

    let userRegistrationForm = require('../../PO/userRegistrationForm');
    let dataFile = require('../../Fixtures/data.json');
    let validAddressForCreationUser = dataFile["validAddressForCreationUser"];

    it('1. Type any text in the "Address" field (for example "home")', function () {
        userRegistrationForm.addressField.sendKeys(validAddressForCreationUser);

        //The "Address" field is filled with text (the "class" attribute for this field has been changed to filled)
        expect(userRegistrationForm.addressField.getAttribute('class')).toContain(userRegistrationForm.filledAddressFieldClass);
    });

    it('2. Click "Reset form" button', function () {
        userRegistrationForm.resetFormButton.click();

        //Name, address and email fields are empty
        expect(userRegistrationForm.nameField.getAttribute('class')).toContain(userRegistrationForm.emptyFieldClass) &&
        expect(userRegistrationForm.addressField.getAttribute('class')).toContain(userRegistrationForm.emptyFieldClass) &&
        expect(userRegistrationForm.emailField.getAttribute('class')).toContain(userRegistrationForm.emptyFieldClass);
    });
});