const feedbackForm = document.querySelector('.feedback-form');
const labelEmail = feedbackForm.querySelector('label');
labelEmail.classList.add('labelEmail');
const email = feedbackForm.querySelector('input[type="email"]');
const message = feedbackForm.querySelector('textarea[name="message"]');
const formKey = 'feedback-form-state';

feedbackForm.addEventListener('input', onInputTextarea);
feedbackForm.addEventListener('submit', handleSubmit);
backLocalstorage();

function onInputTextarea(event) {
  const infoFromForm = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  localStorage.setItem(formKey, JSON.stringify(infoFromForm));
}

function backLocalstorage() {
  const savedForm = JSON.parse(localStorage.getItem(formKey));
  if (savedForm) {
    email.value = savedForm.email;
    message.value = savedForm.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (!email.value.trim() || !message.value.trim()) {
    alert('All form fields must be filled in');
  } else {
    console.log(
      `Data feedbackForm: `,
      JSON.parse(localStorage.getItem(formKey))
    );
    localStorage.removeItem(formKey);
    feedbackForm.reset();
  }
}
