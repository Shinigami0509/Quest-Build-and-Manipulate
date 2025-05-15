// Noakhali donation field work start
document.getElementById('btn-noakhali-donate').addEventListener('click', function (event) {
    event.preventDefault()

    const accountBalance = getTextFieldValueById('account-balance')
    const donationedBalance = getTextFieldValueById('noakhali-donation-balance')
    const inputDonation = getInputFieldValueById('input-noakhali-donation')

    if (!isNaN(inputDonation) && inputDonation <= accountBalance) {
        const newdonationedBalance = donationedBalance + inputDonation
        const newAccountBalance = accountBalance - inputDonation
        document.getElementById('noakhali-donation-balance').innerText = newdonationedBalance
        document.getElementById('account-balance').innerText = newAccountBalance

        const closeBtn = document.getElementById('close-modal');
        openSuccessModal()
        closeBtn.addEventListener('click', closeSuccessModal);

        // history part
        const text = 'famine-2024 at Feni, Bangladesh'
        history(inputDonation, text)

    }
    else if (inputDonation > accountBalance) {
        alert("You don't have sufficiant balance")
    }
    else {
        alert('Donation no available')
    }

})
// Noakhali donation field work end

// Feni donation field work start
document.getElementById('btn-feni-donate').addEventListener('click', function (event) {
    event.preventDefault()

    const accountBalance = getTextFieldValueById('account-balance')
    const donationedBalance = getTextFieldValueById('feni-donation-balance')
    const inputDonation = getInputFieldValueById('input-feni-donation')


    if (!isNaN(inputDonation) && inputDonation <= accountBalance) {
        const newdonationedBalance = donationedBalance + inputDonation
        const newAccountBalance = accountBalance - inputDonation
        document.getElementById('feni-donation-balance').innerText = newdonationedBalance
        document.getElementById('account-balance').innerText = newAccountBalance

        const closeBtn = document.getElementById('close-modal');
        openSuccessModal()
        closeBtn.addEventListener('click', closeSuccessModal);


        // history part
        const text = 'Flood Relief in Feni,Bangladesh'
        history(inputDonation, text)
    }
    else if (inputDonation > accountBalance) {
        alert("You don't have sufficiant balance")
    }
    else {
        alert('Donation no available')
    }

})
// Feni donation field work end
// Quota Movement donation field work start
document.getElementById('btn-quota-movement-donate').addEventListener('click', function (event) {
    event.preventDefault()

    const accountBalance = getTextFieldValueById('account-balance')
    const donationedBalance = getTextFieldValueById('quota-movement-donation-balance')
    const inputDonation = getInputFieldValueById('input-quota-movement-donation')


    if (!isNaN(inputDonation) && inputDonation <= accountBalance) {
        const newdonationedBalance = donationedBalance + inputDonation
        const newAccountBalance = accountBalance - inputDonation
        document.getElementById('quota-movement-donation-balance').innerText = newdonationedBalance
        document.getElementById('account-balance').innerText = newAccountBalance

        const closeBtn = document.getElementById('close-modal');
        openSuccessModal()
        closeBtn.addEventListener('click', closeSuccessModal);

        // history part
        const text = 'Aid for Injured in the Quota Movement, Bangladesh'
        history(inputDonation, text)        
    }
    else if (inputDonation > accountBalance) {
        alert("You don't have sufficiant balance")
    }
    else {
        alert('Donation no available')
    }

})
// Quota Movement donation field work start

