// debugger;

const hideAll = function() {
  $(".contentPage").addClass("hide");
};

const showAbout = function(e) {
  if (e) {
    e.preventDefault();
  }
  hideAll();
  $("#home").removeClass("hide");
};

const showPortfolio = function(e) {
  e.preventDefault();
  hideAll();
  $("#portfolioPage").removeClass("hide");
};

const showContact = function(e) {
  e.preventDefault();
  hideAll();
  $("#contactPage").removeClass("hide");
};

showAbout();

$("#showHome").on("click", showAbout);
$("#showPortfolio").on("click", showPortfolio);
$("#showContact").on("click", showContact);

const sendEmail = function(e) {
  e.preventDefault();
  const fromName = $("#fromName").val();
  const fromEmail = $("#fromEmail").val();
  const message = $("#message").val();
  const params = {
    fromName: fromName,
    fromEmail: fromEmail,
    message: message
  };
  emailjs.send("gmail", "formsubmit", params).then(
    function(response) {
      $("#fromName").val('');
      $("#fromEmail").val('');
      $("#message").val('');
      console.log("Success", response.status, response.text);
    },
    function(error) {
      console.log("Error:", error);
    }
  );
};

$("#submit").on("click", sendEmail);
