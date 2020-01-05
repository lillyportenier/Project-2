$(document).ready(function() {
console.log("loaded")
    // Getting references to our form and input //This is his API  
    var signUpForm = $("#signup-form");
    var firstNameInput = $("#first_name");
    var lastNameInput = $("#last_name");
    var emailInput = $("#email-input");
    var userNameInput = $("#username-input");
    var passwordInput = $("#password-input");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function() {
      // event.preventDefault();
      console.log(firstNameInput.val().trim())
      var userData = {
        firstName: firstNameInput.val().trim(),
        lastName: lastNameInput.val().trim(),
        email: emailInput.val().trim(),
        username: userNameInput.val().trim(),
        password: passwordInput.val().trim()
      };
      
      console.log("event********************", userData);
      // if (!userData.firstName || !userData.lastName || !userData.email || !userData.username || !userData.password) {
      //   return;
      // }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.firstName, userData.lastName, userData.email, userData.username, userData.password);
      firstNameInput.val("");
      lastNameInput.val("");
      userNameInput.val(""),
      emailInput.val("");
      passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(firstName, lastName, email, username, password) {
      $.post("/api/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password
      })
        .then(function(data) {
          console.log("loaded1")
          // window.location.replace("/members");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });

  $(document).ready(function(){
    $('.modal').modal();
  });

