const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = {
        mail,
        password,
    };

    if (mail === '') {
        alert('Fill the row with email, please');
    } else if (password === '') {
        alert('Enter your password, please');
    } else {
        console.log(formData);
        form.reset();
}
};




