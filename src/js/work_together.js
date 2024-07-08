document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');
  const emailInput = document.querySelector('#user-mail');
  const commentInput = document.querySelector('#user-comment');
  const emailMessage = document.querySelector('#email-message');
  const modal = document.querySelector('#modal');
  const closeButton = document.querySelector('#close-button');
  const backdrop = document.querySelector('.footer-backdrop');

  emailInput.value = localStorage.getItem('email') || '';
  commentInput.value = localStorage.getItem('comment') || '';

  emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid) {
      emailMessage.textContent = 'Success!';
      emailMessage.style.color = 'green';
    } else {
      emailMessage.textContent = 'Invalid email, try again';
      emailMessage.style.color = 'red';
    }
    localStorage.setItem('email', emailInput.value);
  });

  commentInput.addEventListener('input', () => {
    const maxLength = 50;
    let value = commentInput.value;
    if (value.length > maxLength) {
      value = value.substring(0, maxLength) + '...';
      commentInput.value = value;
    }
    localStorage.setItem('comment', value);
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();

    if (emailInput.validity.valid && commentInput.value.length <= 50) {
      try {
        const response = await fetch(
          'https://portfolio-js.b.goit.study/api/requests',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: emailInput.value,
              comment: commentInput.value,
            }),
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        showModal();
        form.reset();
        emailMessage.textContent = '';
        localStorage.removeItem('email');
        localStorage.removeItem('comment');
      } catch (error) {
        console.log(error);
      }
    } else {
      if (!emailInput.validity.valid) {
        emailMessage.textContent = 'Invalid email, try again';
        emailMessage.style.color = 'red';
      }
    }
  });

  function showModal() {
    backdrop.classList.add('is-open');
    modal.classList.remove('hidden');
  }

  closeButton.addEventListener('click', () => {
    backdrop.classList.remove('is-open');
    modal.classList.add('hidden');
  });

  window.addEventListener('click', event => {
    if (event.target == backdrop) {
      backdrop.classList.remove('is-open');
      modal.classList.add('hidden');
    }
  });
});
