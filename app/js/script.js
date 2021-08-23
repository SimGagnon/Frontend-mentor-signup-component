
const email = document.getElementById("emailInput");
const theInputs = document.querySelectorAll("input");

form.addEventListener('submit', (e) => {
    const emailValue = email.value;
    e.preventDefault();

    for (let i = 0; i < theInputs.length; i++) {
        !theInputs[i].value ? theInputs[i].parentElement.classList.add("error") : theInputs[i].parentElement.classList.remove("error");
    }

    if (!validateEmail(emailValue)) {
        email.parentElement.classList.add('error');
    } else {
        email.classList.remove('error');
    }
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}