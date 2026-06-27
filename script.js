// GANTI LINK DI BAWAH INI DENGAN LINK REGISTER TUJUAN KAMU
const redirectLink = "https://rz0ywe7.kopoplay.space/register/kk5vip";

const ctaBtn = document.getElementById("ctaBtn");
const stockNumber = document.getElementById("stockNumber");
const progressFill = document.getElementById("progressFill");

ctaBtn.href = redirectLink;

let stock = 654;
let progress = 78;

setInterval(() => {
  if (stock > 121) stock -= Math.floor(Math.random() * 3) + 1;
  if (progress > 25) progress -= Math.random() * 0.7;

  stockNumber.textContent = stock;
  progressFill.style.width = progress + "%";
}, 2500);
