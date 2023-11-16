const password1 = document.getElementById('password');
const password2 = document.getElementById('confirm-password');
const submitbtn = document.querySelector('.submit');
const passwordError = document.getElementById('password-error');

submitbtn.addEventListener('click', (event) => {
    let password1value = password1.value;
    let password2value = password2.value;
    if(password1value != password2value){
        passwordError.textContent = 'Passwords do not match';
        event.preventDefault();
    }
    else{
        passwordError.textContent = '';
    }
})