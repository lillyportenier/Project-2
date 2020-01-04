var db = require("../models");


module.exports = function(app) {
  // Get all Posts
  app.get("/api/posts", function(req, res) {
    // var query = {};
    // if (req.query.userId) {
    
    // }
    db.Post.findAll({}).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });
  app.get(("api/posts/:title", function(req, res) {
    db.Post.findOne({
      where: {
        title: req.parmas.title
      },
      include: [db.Post]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  }));
  app.get(("api/posts/:city", function(req, res) {
    db.Location.findMany({
      where: {
        city: req.parmas.location 
      },
      include: [db.Post]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  }));
  app.get(("api/posts/:state", function(req, res) {
    db.Location.findMany({
      where: {
        state: req.parmas.state 
      },
      include: [db.Post]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  }));
  app.get(("api/posts/:username", function(req, res) {
    db.User.findMany({
      where: {
        username: req.parmas.username 
      },
      include: [db.Post]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  }));
  // Create a new Post
  app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // Delete an Post by id
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({ where: { id: req.params.id } }).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  
};


// var db = require("../models");
// var passport = require("../config/passport");

// module.exports = function(app) {
//   // Using the passport.authenticate middleware with our local strategy.
//   // If the user has valid login credentials, send them to the members page.
//   // Otherwise the user will be sent an error
//   app.post("/api/login", passport.authenticate("local"), function(req, res) {
//     res.json(req.user);
//   });

//   // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
//   // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
//   // otherwise send back an error
//   app.post("/api/signup", function(req, res) {
//     db.User.create({
//       email: req.body.email,
//       password: req.body.password
//     })
//       .then(function() {
//         res.redirect(307, "/api/login");
//       })
//       .catch(function(err) {
//         res.status(401).json(err);
//       });
//   });

//   // Route for logging user out
//   app.get("/logout", function(req, res) {
//     req.logout();
//     res.redirect("/");
//   });

//   // Route for getting some data about our user to be used client side
//   app.get("/api/user_data", function(req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     } else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });
// };
