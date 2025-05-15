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

function history(id, text){
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
             <p class="m-5 font-bold text-3xl">${id} Taka is Donated for ${text}</p>
             <p class="mb-5 text-lg ml-5">${finalTimeString} GMT +0600 (Bangladesh Standard Time)</p>
        `
        document.getElementById('history-container').appendChild(div)
}