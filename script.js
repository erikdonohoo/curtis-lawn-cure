(() => {
  // Prevent form from being submitted if its not filled out
  const form = document.querySelector('form');
  const email = document.querySelector('input#email');
  const name = document.querySelector('input#name');
  const message = document.querySelector('textarea#message');
  const nav = document.querySelector('nav');
  const navList = document.querySelector('.navlist');

  // Go to contact form
  document.querySelector('.banner-btn').addEventListener('click', () => {
    location.hash = '';
    setTimeout(() => {
      location.hash = 'contact';
    });
  });

  // Manage opening, closing nav
  const toggleNav = () => nav.classList.toggle('open');
  document.querySelector('#nav-toggle').addEventListener('click', toggleNav);
  navList.addEventListener('click', toggleNav);

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