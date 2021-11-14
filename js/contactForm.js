/** Elements */
const $contactMeForm = document.querySelector('#contact-me-form');
const $contactMeFormInput = document.querySelectorAll('input[type="text"]');
const $contactMeFormTextarea = $contactMeForm.querySelector('textarea');
const $contactMeFormButton = $contactMeForm.querySelector('button');

/** Contact Me Form Submit */
$contactMeForm.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('Submit');
});
