"use strict";

/**
 * Fungsi untuk menambahkan event listener pada beberapa elemen.
 *  elemen - Daftar elemen yang akan diberi event listener.
 *  jenisEvent - Jenis event yang akan ditangani.
 *  fungsiCallback - Fungsi yang akan dijalankan saat event terjadi.
 */
const tambahkanEventListenerPadaElemen = function (
  elemen,
  jenisEvent,
  fungsiCallback
) {
  for (let i = 0, panjang = elemen.length; i < panjang; i++) {
    elemen[i].addEventListener(jenisEvent, fungsiCallback);
  }
};

/**
 * PRELOADER
 *
 * Preloader akan tetap terlihat sampai dokumen selesai dimuat.
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * NAVBAR MOBILE
 *
 * Menampilkan navbar mobile saat tombol menu diklik,
 * dan menyembunyikannya setelah tombol menu close atau overlay diklik.
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

tambahkanEventListenerPadaElemen(navTogglers, "click", toggleNav);

/**
 * HEADER & TOMBOL KEMBALI KE ATAS
 *
 * Mengaktifkan header & tombol kembali ke atas saat jendela di-scroll hingga 100px.
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const aktifkanElemenPadaScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

window.addEventListener("scroll", aktifkanElemenPadaScroll);

/**
 * SCROLL REVEAL
 */

const elemenTerungkap = document.querySelectorAll("[data-reveal]");

const terungkapPadaScroll = function () {
  for (let i = 0, panjang = elemenTerungkap.length; i < panjang; i++) {
    if (
      elemenTerungkap[i].getBoundingClientRect().top <
      window.innerHeight / 1.15
    ) {
      elemenTerungkap[i].classList.add("revealed");
    } else {
      elemenTerungkap[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("scroll", terungkapPadaScroll);

window.addEventListener("load", terungkapPadaScroll);

// Tambahkan kode JavaScript kalian di file ini

// mengakses input & me return object
function handleGetFormData() {
  return {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    city: document.getElementById("city").value,
    zipCode: document.getElementById("zip-code").value,
    status: document.getElementById("status").checked,
  };
}

// mengecek isi input zipCode
function isNumber(string) {
  return !isNaN(string) ? true : false;
}

// function mengecek isi status
function checkboxIsChecked() {
  const formData = handleGetFormData();
  return formData.status === true ? true : false;
}

// function mengecek 3 fungsi diatas
function validateFormData(formData) {
  const string = formData.zipCode;

  for (const key in formData) {
    if (formData.hasOwnProperty(key) && formData[key] === "") {
      return false;
    }
  }
  return isNumber(string) && checkboxIsChecked();
}

// function validasi input field
function submit() {
  const formData = handleGetFormData();
  const response = document.getElementById("warning");

  if (!validateFormData(formData)) {
    response.textContent = "Periksa form anda sekali lagi";
  } else {
    response.textContent = "";
  }
}

// event handler button input
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit-form").addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      submit();
    },
    false
  );
});
