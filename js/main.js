console.log("This is running properly");

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let first_name = document.getElementById("name").value;
  let email_id = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let params = {
    first_name,
    email_id,
    message,
  };
  console.log(params);
  // Emailjs
  emailjs.send("service_9hc77bb", "template_aiy2qkm", params).then((res) => {
    if (res.status == 200) {
      let success = `Hey ${first_name}! Your email is successfully sent.`;
      document.getElementById("success").innerText = success;
      setTimeout(() => {
        document.getElementById("success").innerText = "";
      }, 5000);
    }
  });

  e.target.reset();
});

// carsousel
let carouselContainer = document.querySelector(".carousel-container");
let prevBtn = document.querySelector(".carousel-control.prev");
let nextBtn = document.querySelector(".carousel-control.next");
let carouselItemWidth;
let currentIndex = 0;

window.onresize = () => {
  carouselItemWidth =
    carouselContainer.querySelector(".carousel-item").offsetWidth;
  // console.log("This is carousel item width : ", carouselItemWidth);
};

prevBtn.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    carouselContainer.style.transform =
      "translateX(-" + currentIndex * carouselItemWidth + "px)";
  }
});

nextBtn.addEventListener("click", function () {
  var totalItems = carouselContainer.querySelectorAll(".carousel-item").length;
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    carouselContainer.style.transform =
      "translateX(-" + currentIndex * carouselItemWidth + "px)";
  }
});

//menu

let hemburger = document.getElementById("hemburger");

hemburger.addEventListener("click", () => {
  let input = document.getElementById("check");
  let navigation = document.getElementById("navigation");
  if (input.checked) {
    // navigation.style.opacity = "1";
    // navigation.style.display = "flex";
    navigation.style.bottom = "0px";
  } else {
    navigation.style.bottom = "1000px";
    // navigation.style.opacity = "0";
    // navigation.style.display = "none";
  }
});

let link_item = document.getElementsByClassName("link_item");

Array.from(link_item).forEach((element) => {
  element.addEventListener("click", () => {
    let hemburger = document.getElementById("hemburger");
    hemburger.click();
  });
});
