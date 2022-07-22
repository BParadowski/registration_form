const inputs = document.querySelectorAll("input");
inputs.forEach(input => input.addEventListener("invalid", colorInp));

function colorInp(){
    if (this.value !== ""){
        this.classList.add("error");
    }
}

const password = document.getElementById("password1");
const password_repeated = document.getElementById("password2");

password.addEventListener('input', passwordCheck);
password_repeated.addEventListener('input', passwordCheck);

function passwordCheck(){
    if (password.value !== password_repeated.value){
        document.querySelector("button").setCustomValidity('Passwords do not match');
        password_repeated.classList.add("error");
    }
    else{
        document.querySelector("button").setCustomValidity('');
        password_repeated.classList.remove("error");
    }
}