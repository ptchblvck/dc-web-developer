// existing elements

const textArea = document.getElementById("text");
const textLabel = document.querySelectorAll("label")[1];
const inputButton = document.querySelectorAll("input")[1];
const inputTitle = document.querySelectorAll("input")[0];
const form = document.querySelector("form");

// created elements

const lengthSpan = document.createElement("span");
const inputLinkLabel = document.createElement("label");
const inputLink = document.createElement("input");
const cathegoryLabel = document.createElement("label");
const cathegoryBadge = document.createElement("select");
const cathegorySelect = document.createElement("option");
const cathegoryHTML = document.createElement("option");
const cathegoryCSS = document.createElement("option");
const cathegoryJavaScript = document.createElement("option");

//styling the new created elements and setting attributes

inputLinkLabel.textContent = "Link:";
inputLinkLabel.setAttribute("for", "input-link");
form.insertBefore(inputLinkLabel, form.children[4]);
inputLink.setAttribute("type", "text");
inputLink.setAttribute("id", "input-link");
inputLink.setAttribute("placeholder", "Add a link like https://google.com");
form.insertBefore(inputLink, form.children[5]);

// cathegory options attributes

cathegoryLabel.setAttribute("for", "cathegory");
cathegoryLabel.textContent = "Cathegory:";
cathegoryBadge.setAttribute("id", "cathegory");

cathegorySelect.value = "";
cathegorySelect.textContent = "-- Select --";
cathegoryHTML.value = "html";
cathegoryHTML.textContent = "HTML";
cathegoryCSS.value = "css";
cathegoryCSS.textContent = "CSS";
cathegoryJavaScript.value = "js";
cathegoryJavaScript.textContent = "JavaScript";

// get options into cathegory badge

cathegoryBadge.appendChild(cathegorySelect);
cathegoryBadge.appendChild(cathegoryHTML);
cathegoryBadge.appendChild(cathegoryCSS);
cathegoryBadge.appendChild(cathegoryJavaScript);

form.insertBefore(cathegoryBadge, form.children[6]);

// event Listeners
showMaxTextLength();
textArea.addEventListener("input", showMaxTextLength);

inputButton.addEventListener("click", submitForm);

// functions

function showMaxTextLength() {
  const currentLength = textArea.value.length;
  const maxLength = textArea.maxLength;
  lengthSpan.textContent = " " + currentLength + "/" + maxLength;
  if (!document.querySelector("#text-label > span")) {
    textLabel.appendChild(lengthSpan);
  }
}

function verifyTitle(title) {
  if (title.length < 4) {
    return false;
  } else {
    return true;
  }
}

function verifyText(text) {
  if (text.length < 10) {
    return false;
  } else {
    return true;
  }
}

function createBlogPost(title, text, link = "https://google.com", cathegory) {
  // create elements
  const blogPost = document.createElement("div");
  const postTitle = document.createElement("h2");
  const postText = document.createElement("p");
  const postTime = document.createElement("p");
  const postLink = document.createElement("a");
  const postCathegory = document.createElement("span");

  //editing the created elements

  const container = document.querySelector(".container");
  postCathegory.textContent = cathegory;
  postCathegory.classList.add(cathegory);
  postCathegory.style.maxWidth = "60px";
  postCathegory.style.textAlign = "center";
  postCathegory.style.padding = "5px";
  postCathegory.style.borderRadius = "3px";
  postLink.textContent = "open Post";
  postLink.href = link;
  postLink.target = "_blank";
  postTitle.textContent = title;
  postText.textContent = text;
  postTime.textContent = getTimeStamp();
  postTime.classList.add("time");

  // add the elements to blogpost element, which is nonexistent yet

  blogPost.appendChild(postCathegory);
  blogPost.appendChild(postTitle);
  blogPost.appendChild(postText);
  blogPost.appendChild(postLink);
  blogPost.appendChild(postTime);
  blogPost.classList.add("card");

  // add altered items to parent, if they are nonexistent

  if (document.querySelector(".container > div")) {
    container.insertBefore(
      blogPost,
      document.querySelector(".container > div")
    );
  }
  if (!document.querySelector(".container > div")) {
    container.append(blogPost);
  }
  console.log("new post created.");
}

function submitForm() {
  event.preventDefault();
  if (verifyTitle(inputTitle.value) && verifyText(textArea.value)) {
    createBlogPost(
      inputTitle.value,
      textArea.value,
      inputLink.value,
      cathegoryBadge.selectedOptions[0].value
    );
  }
  form.reset();
  showMaxTextLength();
}

function getTimeStamp() {
  const today = new Date();
  let todayString = today.toLocaleTimeString();

  /*  // the long and complicated way with date as well!
  let seconds = today.getSeconds();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  if (seconds < 10) {
    seconds = "0" + today.getSeconds();
  }
  const time = today.getHours() + ":" + today.getMinutes() + ":" + seconds;

  const dateTime = "posted at " + time + " on " + date;
  console.log(dateTime); */

  const dateTime = "posted at: " + todayString;

  return dateTime;
}
