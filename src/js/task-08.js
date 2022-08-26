const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const mailValue = email.value;
    const passwordValue = password.value;
    const formData = {
        mailValue,
        passwordValue,
    };

    if (mailValue === '' || passwordValue === '') {
        alert('Please, fill the row(s)');
    } 
        console.log(formData);
        form.reset();
};




