(() => {
  // Prevent form from being submitted if its not filled out
  const form = document.querySelector('form');
  const email = document.querySelector('input#email');
  const name = document.querySelector('input#name');
  const message = document.querySelector('textarea#message');

  // Go to contact form
  document.querySelector('.banner-btn').addEventListener('click', () => {
    location.hash = '';
    setTimeout(() => {
      location.hash = 'contact';
    });
  });

  let isInvalid = true, isSubmitted = false;

  const handleChange = () => {
    if (!isInvalid) {
      form.classList.remove('error');
    }

    if (isInvalid && isSubmitted) {
      form.classList.add('error');
    }
  };

  const onInput = () => {
    isInvalid = !email.value && !name.value;
    handleChange();
  };

  email.addEventListener('keyup', onInput);
  name.addEventListener('keyup', onInput);
  message.addEventListener('keyup', onInput);

  form.addEventListener('submit', (event) => {
    isSubmitted = true;
    if (!email.value || !name.value) {
      event.preventDefault();
    }
    handleChange();
  });

})();