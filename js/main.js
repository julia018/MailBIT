let inputsTel = document.querySelector('input[id="phone"]');

Inputmask({
  "mask": "+1(999)999-99-99",
  showMaskOnHover: false
}).mask(inputsTel);