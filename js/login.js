const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

let input = qs('#inputPass');
let span = qs('#showPass');

span.addEventListener('click', (e) => {
    if (input.type === 'password') {
        span.classList.remove('fa-eye-slash');
        span.classList.add('fa-eye');
        input.type = 'text';
    } else {
        span.classList.remove('fa-eye');
        span.classList.add('fa-eye-slash');
        input.type = 'password'
    }
})