document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.querySelector('#user-mail');
  const commentInput = document.querySelector('#user-comment');
  const emailForm = document.querySelector('.form-container');
  const message = document.querySelector('.message');
  const closeBtn = document.querySelector('.footer-close-btn');
  const backdrop = document.querySelector('.backdrop');

  if (localStorage.getItem('email')) {
    emailInput.value = localStorage.getItem('email');
  }
  if (localStorage.getItem('comment')) {
    commentInput.value = localStorage.getItem('comment');
  }

  emailForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = emailInput.value;
    const commentValue = commentInput.value;
    if (validateEmail(emailValue) && validateComment(commentValue)) {
      message.textContent = 'Success!';
      message.classList.remove('error');
      message.classList.add('success');
      openModal();
    } else {
      message.textContent = 'Invalid email, try again';
      message.classList.remove('success');
      message.classList.add('error');
    }
  });

  closeBtn.addEventListener('click', closeModal);
});

function checkInputLength() {
  const input = document.querySelector('#user-mail');
  const span = input.nextElementSibling;
  if (input.value.length > input.size) {
    span.style.display = 'inline';
  } else {
    span.style.display = 'none';
  }
}

async function sendForm(event) {
  event.preventDefault();

  const emailInput = document.querySelector('#user-mail');
  const commentInput = document.querySelector('#user-comment');
  const email = emailInput.value;
  const comment = commentInput.value;

  localStorage.setItem('email', email);
  localStorage.setItem('comment', comment);

  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/request',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, comment }),
      }
    );

    if (response.ok) {
      openModal();
      emailInput.value = '';
      commentInput.value = '';
      localStorage.removeItem('email');
      localStorage.removeItem('comment');
    } else {
      const errorData = await response.json();
      showToast(errorData.message);
    }
  } catch (error) {
    showToast('An unexpected error occurred. Please try again.');
  }
}

function openModal() {
  const backdrop = document.querySelector('.backdrop');
  backdrop.classList.add('is-open');
}

function closeModal() {
  const backdrop = document.querySelector('.backdrop');
  backdrop.classList.remove('is-open');
}

function showToast(message) {
  const toast = document.querySelector('.toast');
  toast.innerHTML = `<p>${message}</p>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateComment(comment) {
  return comment.length > 0;
}
