describe('C7 Verify that the removal a new user works correctly', function () {

    let deleteUserConfirmationPopup = require('../../PO/deleteUserConfirmationPopup');
    let listOfUsers = require('../../PO/listOfUsers');
    let dataFile = require ('../../Fixtures/data.json');
    let validNameForUpdatingUser = dataFile["validNameForUpdatingUser"];

    it('1. Click on the "Remove" button of the last user of the list of users (with the name "Klimuk")', function () {
        listOfUsers.lastRemoveButton.click();

        //Appears the "Delete user" popup window
        expect(deleteUserConfirmationPopup.confirmationPopup.isPresent()).toBe(true) &&
        //and contain the name of the last user in the list of users
        expect(deleteUserConfirmationPopup.confirmationPopup.getText()).toContain(validNameForUpdatingUser);
    });

    it('2. Click on the "OK" button in the "Delete user" popup window', function () {
        deleteUserConfirmationPopup.okButton.click();

        //Disappears the "Delete user" popup window
        expect(deleteUserConfirmationPopup.confirmationPopup.isPresent()).toBe(false) &&
        //and the new user with the name "Klimuk" deleted in List of Users
        expect(listOfUsers.lastUserName.getText()).not.toBe(validNameForUpdatingUser);
    });
});