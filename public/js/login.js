$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $("#login");
    var UserName = $("#username");
    var PassWord = $("#password");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        UserName: UserName.val().trim(),
        PassWord: PassWord.val().trim()
      };
  
      // if (!userData.UserName || !userData.PassWord) {
      //   return;
      // }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.UserName, userData.PassWord);
      UserName.val("");
      PassWord.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(username, password) {
      $.post("/api/login", {
        username: username,
        password: password
      })
        .then(function() {
          window.location.replace("/blog");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });
  