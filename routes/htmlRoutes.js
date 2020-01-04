var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // console.log("1>",db)
    // console.log("2>",db.Post)
    db.Post.findAll({}).then(function(dbPosts) {
      res.render("index", {
        msg: "Welcome! This is the Alien Blog",
        Post: dbPosts
      });
    });
    
  });
  app.get("/blog", function(req, res) {
    // db.Post.findAll({}).then(function(dbPosts) {
    //   res.render("blog", {
    //     msg: "Welcome! This is the Alien Blog",
    //     Post: dbPosts
    //   });
    // });
    
                    res.render("blog", {
                      msg: "Welcome! This is the Alien Blog",
                      Post: [
                        {
                        title: "dummy",
                        id: 1,
                        body: "fake body"
                      },
                        {
                        title: "dumm2y",
                        id: 2,
                        body: "fake bod22y"
                      },
                    ]
                    });
  });
  
  // Load Post page and pass in a Post by id
  app.get("/post/:id", function(req, res) {
    db.Post.findOne({ where: { id: req.params.id } }).then(function(dbPost) {
      res.render("blog", {
        Post: dbPost
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

// var path = require("path");

// // Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

// module.exports = function(app) {

//   app.get("/", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/signup.html"));
//   });

//   app.get("/login", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });

//   // Here we've add our isAuthenticated middleware to this route.
//   // If a user who is not logged in tries to access this route they will be redirected to the signup page
//   app.get("/members", isAuthenticated, function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/members.html"));
//   });

// };
