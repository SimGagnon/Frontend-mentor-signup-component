const email = document.getElementById("emailInput");
const theInputs = document.querySelectorAll("input");
const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    const emailValue = email.value;
    e.preventDefault();

    theInputs.forEach(input => {
        !input.value ? input.parentElement.classList.add("error") : input.parentElement.classList.remove("error");
    });

    !validateEmail(emailValue) ? email.parentElement.classList.add('error') : email.classList.remove('error');
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

theInputs.forEach(input => {
    input.addEventListener('input', () => {
        input.value ? input.parentElement.classList.remove("error") : null;
    })
})