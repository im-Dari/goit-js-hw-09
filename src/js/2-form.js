const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formData = {
    email: '',
    message: '',
};
const savedData = JSON.parse( localStorage.getItem(STORAGE_KEY));
if (savedData) {
    formData.email = savedData.email || '';
    formData.message = savedData.message || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}
form.addEventListener('input', onFormInput);

function onFormInput(event) {
    const { name, value} = event.target;

    if (!name) return;

    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
event.preventDefault();

if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
}
console.log(formData);

localStorage.removeItem(STORAGE_KEY);
form.reset();

formData.email = '';
formData.message = '';
}