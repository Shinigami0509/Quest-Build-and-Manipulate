function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value
    const inputValueNumber = parseFloat(inputValue)
    return inputValueNumber
}

function getTextFieldValueById(id) {
    const donationValue = document.getElementById(id).innerText
    const donationValueNumber = parseFloat(donationValue)
    return donationValueNumber
}


function openModal(id) {
    const modal = document.getElementById(id);
    modal.showModal();
}

function openSuccessModal() {
    const modal = document.getElementById('success-message');
    if (modal) {
        modal.showModal();
    }
}

function closeSuccessModal() {
    const modal = document.getElementById('success-message');
    if (modal) {
        modal.close();
    }
}
