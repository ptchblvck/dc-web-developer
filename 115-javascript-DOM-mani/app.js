// exercise 1
const h1Element = document.children[0].children[1].children[0];
console.log(h1Element);

// exercise 2

console.log(h1Element.parentElement);

// exercise 3

console.log(h1Element.nextElementSibling);

// exercise 4

h1Element.setAttribute("id", "heading1");
const h1ElementNew = document.getElementById("heading1");
console.log(h1ElementNew);

// exercise 5

const highlightedParagraph = document.querySelector(".highlighted-paragraph");
console.log(highlightedParagraph);

// exercise 6

highlightedParagraph.textContent = "This was changed via JavaScript!";

// exercise 7

const linkElement = document.createElement("a");
linkElement.href = "https://google.com";
linkElement.textContent = "This leads to Google!";

const firstParagraphSpan = document.querySelector("p > span");
firstParagraphSpan.innerHTML = " ";
firstParagraphSpan.appendChild(linkElement);

// exercise 8

document.body.removeChild(h1Element);

// oder

// h1Element.remove();

// exercise 9

const firstParagraph = document.querySelector("p");

document.body.insertBefore(highlightedParagraph, firstParagraph);

// prependchild geht auch!!!

// document.body.prependChild(highlightedParagraph);

// const allParagraphs = document.body.children;
// console.log(allParagraphs);

// const arr = [3, 2, 1, 0];
// const body = document.body;
// let elements = document.createDocumentFragment();
// console.log(elements);

// arr.forEach(function (idx) {
//   elements.appendChild(allParagraphs[idx].cloneNode(true));
// });

// body.innerHTML = null;
// body.appendChild(elements);

// exercise 10
/* I don't know. It is what it is I guess */

// exercise 11

const clickable = document.getElementById("click-paragraph");

clickable.addEventListener("click", checkText);

function changeTextToClick() {
  clickable.textContent = "Clicked!";
}

function changeTextToKlickbar() {
  clickable.textContent = "Ich bin klickbar!";
}

//exercise 12

function checkText(e) {
  if (e.target.textContent == "Ich bin klickbar!") {
    changeTextToClick();
  } else {
    changeTextToKlickbar();
  }
}

// exercise 13

const inputElement = document.querySelector("p > input");

inputElement.addEventListener("keyup", () => {
  if (inputElement.value.length === 0) {
    return console.log("invalid input!");
  }
  console.log(inputElement.value);
});
