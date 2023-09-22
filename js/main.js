let range = document.querySelector('.range');
let divider = document.querySelector('body');

range.addEventListener('input', () => {
   let output = Math.abs(range.value)
   divider.style.setProperty('--divider', output);
}
)