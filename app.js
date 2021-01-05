
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "1306e81b70b046a853c00097ad4899b8";

form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;

  //check if there's already a city
  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
      const filteredArray = listItemsArray.filter(el => {
        let content = "";
        if (inputVal.includes(",")) {
          if (inputVal.split(",")[1].length > 2) {
            inputVal = inputVal.split(",")[0];
            content = el
              .querySelector(".city-name span")
