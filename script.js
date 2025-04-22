const convertbutton = document.querySelector(".convert-button");
const currencyselect = document.querySelector(".currency-select");

function convertvalues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".valor-moeda-para-converter"
  );
  const currencyValueConverted = document.querySelector(".valor-moeda");

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 7.72;
  const bitcoinIniciais = 495.887;

  if (currencyselect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencyselect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencyselect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  if (currencyselect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinIniciais);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyname = document.getElementById("currency-name");
  const currencyimage = document.querySelector(".currency-img");

  if (currencyselect.value == "dolar") {
    currencyname.innerHTML = "Dolar americano";
    currencyimage.src = "./assets/usd.png";
  }

  if (currencyselect.value == "euro") {
    currencyname.innerHTML = "Euro";
    currencyimage.src = "./assets/euro.png";
  }

  convertvalues();
}

currencyselect.addEventListener("change", changeCurrency);
convertbutton.addEventListener("click", convertvalues);
