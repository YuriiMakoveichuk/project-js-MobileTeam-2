// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';
// document.addEventListener('DOMContentLoaded', function () {
//   const emailInput = document.querySelector('#user-mail');
//   const commentInput = document.querySelector('#user-comment');

//   if (localStorage.getItem('email')) {
//     emailInput.value = localStorage.getItem('email');
//   }
//   if (localStorage.getItem('comment')) {
//     commentInput.value = localStorage.getItem('comment');
//   }
// });

// function checkInputLength() {
//   const input = document.querySelector('#user-mail');
//   const span = input.nextElementSibling;
//   if (input.value.length > input.size) {
//     span.style.display = 'inline';
//   } else {
//     span.style.display = 'none';
//   }
// }

// async function sendForm(event) {
//   event.preventDefault();

//   const emailInput = document.querySelector('#user-mail');
//   const commentInput = document.querySelector('#user-comment');
//   const email = emailInput.value;
//   const comment = commentInput.value;

//   localStorage.setItem('email', email);
//   localStorage.setItem('comment', comment);

//   try {
//     const response = await fetch(
//       'https://portfolio-js.b.goit.study/api/contact-request',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, comment }),
//       }
//     );

//     if (response.ok) {
//       openModal();
//       emailInput.value = '';
//       commentInput.value = '';
//       localStorage.removeItem('email');
//       localStorage.removeItem('comment');
//     } else {
//       const errorData = await response.json();
//       showToast(errorData.message);
//     }
//   } catch (error) {
//     showToast('An unexpected error occurred. Please try again.');
//   }
// }

// function openModal() {
//   const backdrop = document.querySelector('#backdrop');
//   backdrop.classList.add('is-open');
// }

// function closeModal() {
//   const backdrop = document.querySelector('#backdrop');
//   backdrop.classList.remove('is-open');
// }

// function showToast(message) {
//   const toast = document.querySelector('#toast');
//   toast.innerHTML = `<p>${message}</p>`;
//   toast.classList.add('show');
//   setTimeout(() => {
//     toast.classList.remove('show');
//   }, 3000);
// }
