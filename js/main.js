//********************************************  VARIABLES **********************************************//
const rotate_text_p = document.querySelector(".rotate_text p"),
  bar_icon = document.querySelector("header .bar_icon");
nav_bar = document.querySelector("header nav");
links = document.querySelectorAll("header nav a");
counter = document.querySelectorAll("main .left_content .footer_main div");
boxes_amazing = document.querySelectorAll(".amazing .container .boxes .box");
amazing_section = document.querySelector("section.amazing");
(header_content_amazing = document.querySelector(
  ".amazing .container .header_content "
)),
  (best_section = document.querySelector("section.best")),
  (artists_section = document.querySelector("section.artists")),
  (boxes_artists_section = document.querySelector("section.artists .boxes")),
  (subscribe_section = document.querySelector("section.subscribe")),
  (subscribe_section_imgs = document.querySelector(
    "section.subscribe .container .left_content"
  )),
  (boxes_amazing_section = document.querySelector(
    ".amazing .container .boxes"
  )),
  (form_sub = document.querySelector("section.subscribe form"));
//********************************************  OFFSET OF THE SECTIONS **********************************************//
let amazing_offset = amazing_section.offsetTop;
let best_section_offset = best_section.offsetTop;
let artists_section_offset = artists_section.offsetTop;
let subscribe_section_offset = subscribe_section.offsetTop;
let form_sub_offset = form_sub.offsetTop;
//******************************************** FUNCTION CALLING **********************************************//
rotateText(rotate_text_p);
//******************************************** EVENTS **********************************************//
// THIS EVENT FOR LOAD
window.addEventListener("load", () => {
  // THIS EVENT TO REMOVE THE LODGING WINDOW
  document.body.style.overflow = "visible";
  document.querySelector(".loading").classList.add("hide");
  // THIS EVENT TO ANIMATE THE NUMBER
  for (const iterator of counter) {
    count = 0.1;
    let num = parseFloat(iterator.innerText);
    let iterate = setInterval((_) => {
      if (count <= num) {
        iterator.innerText = Math.round(count);
        count += 0.1;
      } else {
        // if (!checkNumber(num)) {
        iterator.innerHTML += `<span style="color:#d6ef0e">K</span>`;
        // }
        clearInterval(iterate);
      }
    }, 20);
  }
});

// THIS EVENT TO ADD ANIMATION
window.addEventListener("load", () => {
  document.querySelector("header").classList.add("animate__zoomInDown");
  document.querySelector("main img").classList.add("animate__jackInTheBox");
  document
    .querySelector("main .price")
    .classList.add("animate__rotateInUpLeft");
});
// THIS EVENT TO ON CLICK ON BAR ICON
bar_icon.addEventListener("click", () => {
  nav_bar.classList.toggle("change_nav");
});
// TO REMOVE THE MNUE ON CLICKING ON ANY WHERE
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 786) {
    if (e.target != bar_icon.firstElementChild && e.target != nav_bar) {
      nav_bar.classList.add("hide");
    } else {
      nav_bar.classList.remove("hide");
    }
  }
});

// THIS EVENT TO ON CLICK ON LICK IN BAR
for (const iterator of links) {
  iterator.onclick = (_) => {
    clearActive(links, "active");
    iterator.classList.add("active");
  };
}
// THIS EVENT TO SHOW THE BOXES IN AMAZING SECTION
window.addEventListener("scroll", () => {
  if (scrollY > amazing_offset - 200) {
    header_content_amazing.classList.add("animate__fadeInDown");
  }
  for (const iterator of boxes_amazing_section.children) {
    let offset = iterator.offsetTop;
    if (scrollY >= offset - 400) {
      iterator.classList.add("animate__bounceInRight");
      iterator.style.opacity = "1";
    }
  }
});
// THIS EVENT TO SHOW THE CONTENT IN BEST SECTION
window.addEventListener("scroll", () => {
  if (scrollY >= best_section_offset - 400) {
    best_section.firstElementChild.firstElementChild.classList.add(
      "animate__bounceInLeft"
    );
    best_section.firstElementChild.firstElementChild.style.opacity = "1";
    best_section.firstElementChild.lastElementChild.classList.add(
      "animate__bounceInRight"
    );
    best_section.firstElementChild.lastElementChild.style.opacity = "1";
  }
});
// THIS EVENT TO SHOW THE CONTENT IN artists SECTION
window.addEventListener("scroll", () => {
  if (scrollY >= artists_section_offset - 200) {
    artists_section.firstElementChild.firstElementChild.classList.add(
      "animate__bounceInLeft"
    );
    artists_section.firstElementChild.firstElementChild.style.opacity = "1";
    artists_section.firstElementChild.lastElementChild.classList.add(
      "animate__bounceInRight"
    );
    artists_section.firstElementChild.lastElementChild.style.opacity = "1";
  }
  for (const iterator of boxes_artists_section.children) {
    let offset = iterator.offsetTop;
    if (scrollY >= offset - 400) {
      iterator.classList.add("animate__bounceInRight");
      iterator.style.opacity = "1";
    }
  }
});
// THIS EVENT TO SHOW THE CONTENT IN subscribe SECTION
window.addEventListener("scroll", () => {
  if (scrollY >= subscribe_section_offset - 200) {
    subscribe_section_imgs.firstElementChild.classList.add(
      "animate__bounceInRight"
    );
    subscribe_section_imgs.firstElementChild.style.opacity = "1";
    subscribe_section_imgs.lastElementChild.classList.add(
      "animate__bounceInLeft"
    );
    subscribe_section_imgs.lastElementChild.style.opacity = "1";
  }
  if (scrollY >= form_sub_offset - 100) {
    form_sub.classList.add("animate__fadeInRight");
    form_sub.style.opacity = "1";
  }
});
//******************************************** FUNCTION *********************************************//

//****THIS FUNCTION TO ROTATE A TEXT ****//
function rotateText(text) {
  let text_rotate = rotate_text_p.innerText;
  rotate_text_p.innerText = "";
  arr_text = text_rotate.split("");
  for (let index = 1; index < arr_text.length; index++) {
    let div = document.createElement("div");
    div.innerText = arr_text[index];
    div.style.transform = `rotate(${index * 19}deg)`;
    div.style.width = "2rem";
    div.style.height = "2rem";
    div.style.transformOrigin = " 0 60px";
    div.style.fontSize = "2rem";
    div.style.position = "absolute";
    div.style.top = "-10%";
    div.style.right = "0";
    div.style.zIndex = "2";
    div.style.fontSize = "0.8rem";
    rotate_text_p.append(div);
  }
}
function clearActive(arr, className) {
  for (const iterator of arr) {
    iterator.classList.remove(className);
  }
}

function checkNumber(x) {
  // check if the passed value is a number
  if (typeof x == "number" && !isNaN(x)) {
    // check if it is integer
    if (Number.isInteger(x)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
