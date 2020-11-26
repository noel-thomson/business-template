const message = document.querySelector('#message');
const email = document.querySelector('#email');

message.addEventListener('input', (e) => {
  if (e.target.value.length > 0) {
    message.classList.add('focus');
  } else {
    message.classList.remove('focus');
  }
});

email.addEventListener('input', (e) => {
  if (e.target.value.length > 0) {
    email.classList.add('focus');
  } else {
    console.log('empty');
    email.classList.remove('focus');
  }
});
