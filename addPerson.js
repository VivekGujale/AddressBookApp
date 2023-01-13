const name = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
name.addEventListener('input', function () {
    let nameRegex = RegExp('[A-Z][a-z]{2,}\\s{1,}[A-Z][a-z]{2,}$');
    if (nameRegex.test(name.value))
        nameError.textContent = "";
    else nameError.textContent = "Name is Incorrect!";
});
const address = document.querySelector('#address');
const addressError = document.querySelector('.address-error');
address.addEventListener('input', function () {
    let addressRegex = RegExp('[A-Za-z0-9./_-,]+');
    if (addressRegex.test(address.value))
        addressError.textContent = "";
    else addressError.textContent = "Address is Incorrect!";
});
const phoneNumber = document.querySelector('#tel');
const numberError = document.querySelector('.number-error');
phoneNumber.addEventListener('input', function () {
    let numberRegex = RegExp("[+]91 [0-9]{10}");
    if (numberRegex.test(phoneNumber.value))
        numberError.textContent = "";
    else numberError.textContent = "Phone number is Incorrect!";
});