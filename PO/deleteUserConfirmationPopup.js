var deleteUserConfirmationPopup = function(){

    //search for used elements in  the "Delete user" confirmation popup window
    this.okButton = $('#ok');
    this.confirmationPopup = $('.modal-content');
    this.cancelButton = $$('#cancel').last();

};
module.exports = new deleteUserConfirmationPopup();