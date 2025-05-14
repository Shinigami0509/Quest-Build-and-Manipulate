
document.getElementById('show-donation-form').addEventListener('click', function () {
    document.getElementById('donation-form').classList.remove('hidden')
    document.getElementById('history-container').classList.add('hidden')

    document.getElementById('show-donation-form').classList.add('bg-[#B4F461]')
    document.getElementById('show-donation-form').classList.remove('btn-outline')
    document.getElementById('show-transection-history').classList.add('btn-outline')
    document.getElementById('show-transection-history').classList.remove('bg-[#B4F461]')

})
document.getElementById('show-transection-history').addEventListener('click', function () {
    document.getElementById('donation-form').classList.add('hidden')
    document.getElementById('history-container').classList.remove('hidden')

    document.getElementById('show-transection-history').classList.add('bg-[#B4F461]')
    document.getElementById('show-transection-history').classList.remove('btn-outline')
    document.getElementById('show-donation-form').classList.add('btn-outline')
    document.getElementById('show-donation-form').classList.remove('bg-[#B4F461]')

})