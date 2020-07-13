let inputsTel = document.querySelector('input[id="phone"]');

Inputmask({
  "mask": "+1(999)999-99-99",
  showMaskOnHover: false
}).mask(inputsTel);

let formContainer = document.getElementById('form-container');
let cross = document.getElementById('cross');

let showForm = function() {
    formContainer.style.display = 'flex';
}

let closeForm = function() {
    formContainer.style.display = 'none';
}

cross.onclick = closeForm;