(function () {
  emailjs.init("Na5VZGu_0wOfByEeR");
})();

const form = document.querySelector("#form-send-email");
const btn = form.querySelector("button[type='submit']");

btn.addEventListener("click", sendEmail);

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm("service_5mzvbcu", "template_qr8d4r4", form).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("메일이 성공적으로 전송되었습니다.");
    },
    (error) => {
      console.log("FAILED...", error);
      alert("메일 전송이 실패했습니다.");
    }
  );
  console.log("function call");
}
