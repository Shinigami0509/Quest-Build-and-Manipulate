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
        const now = new Date();

        const weekday = now.toLocaleDateString(undefined, { weekday: 'long' });
        const formatted = now.toLocaleString(undefined, {
            dateStyle: 'medium',
            timeStyle: 'medium',
            hour12: false,
        });

        const finalTimeString = `${weekday}, ${formatted}`;
        const timeTarget = document.getElementById('transaction-time');

        if (timeTarget) {
            timeTarget.textContent = `Transaction Time: ${finalTimeString}`;
        }

        const div = document.createElement('div')
        div.classList.add('border', 'border-color-3', 'rounded-xl', 'm-5');
        div.innerHTML = `
             <p class="m-5 font-bold text-3xl">${inputDonation} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
             <p class="mb-5 text-lg ml-5">${finalTimeString} GMT +0600 (Bangladesh Standard Time)</p>
        `
        document.getElementById('history-container').appendChild(div)

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
        const now = new Date();

        const weekday = now.toLocaleDateString(undefined, { weekday: 'long' });
        const formatted = now.toLocaleString(undefined, {
            dateStyle: 'medium',
            timeStyle: 'medium',
            hour12: false,
        });

        const finalTimeString = `${weekday}, ${formatted}`;
        const timeTarget = document.getElementById('transaction-time');

        if (timeTarget) {
            timeTarget.textContent = `Transaction Time: ${finalTimeString}`;
        }

        const div = document.createElement('div')
        div.classList.add('border', 'border-color-3', 'rounded-xl', 'm-5');
        div.innerHTML = `
             <p class="m-5 font-bold text-3xl">${inputDonation} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
             <p class="mb-5 text-lg ml-5">${finalTimeString} GMT +0600 (Bangladesh Standard Time)</p>
        `
        document.getElementById('history-container').appendChild(div)
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
        const now = new Date();

        const weekday = now.toLocaleDateString(undefined, { weekday: 'long' });
        const formatted = now.toLocaleString(undefined, {
            dateStyle: 'medium',
            timeStyle: 'medium',
            hour12: false,
        });

        const finalTimeString = `${weekday}, ${formatted}`;
        const timeTarget = document.getElementById('transaction-time');

        if (timeTarget) {
            timeTarget.textContent = `Transaction Time: ${finalTimeString}`;
        }

        const div = document.createElement('div')
        div.classList.add('border', 'border-color-3', 'rounded-xl', 'm-5');
        div.innerHTML = `
             <p class="m-5 font-bold text-3xl">${inputDonation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
             <p class="mb-5 text-lg ml-5">${finalTimeString} GMT +0600 (Bangladesh Standard Time)</p>
        `
        document.getElementById('history-container').appendChild(div)
    }
    else if (inputDonation > accountBalance) {
        alert("You don't have sufficiant balance")
    }
    else {
        alert('Donation no available')
    }

})
// Quota Movement donation field work start

