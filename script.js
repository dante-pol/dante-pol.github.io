console.log('Hello world!')
let i = 2
i = 'hello'
console.log(i);
let signInBtn = document.getElementById('sign-in-btn')
// let signInBtn = document.querySelector('#sign-in-btn')
// CSS selectors
let modal = document.querySelector('.modal')
signInBtn.onclick = function (event) {
    event.preventDefault()
    modal.classList.add('show')
    // modal.style.display = 'flex'
}

modal.onclick = function (event) {
    console.log(event.target)
    if (event.target.classList.contains('modal')) {
        modal.classList.remove('show')
    }
}

let closeModalBtn = document.querySelector('.close-modal-btn')
closeModalBtn.onclick = function(event) {
    modal.classList.remove('show')
}

let toggleThemeBtn = document.getElementById('toggle-theme')
toggleThemeBtn.onclick = function() {
    document.body.classList.toggle('dark')
}