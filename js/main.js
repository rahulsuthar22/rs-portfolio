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
    }
  });

  e.target.reset();
});
