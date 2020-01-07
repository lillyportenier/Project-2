
  var passport = require("passport");
  var db = require("../models");
  var passport = require("../config/passport");
  
  module.exports = function(app) {
    // Get all Posts
    app.get("/api/posts", function(req, res) {//what is this doing?
      var query = {};
      if (req.query.id) {
        query.UserId = req.query.id;
      }
      db.Post.findAll({
        where: query
        ,
        include: [db.User]
      }).then(function(dbPosts) {
        res.json(dbPosts);
      });
    });
    
    app.post("/api/posts", function (req, res) {
      console.log("userId", req.body.UserId)
      db.Post.create({
        title: req.body.title,
        UserId: req.body.UserId,
        body: req.body.body,
        city: req.body.city,
        state: req.body.state
      }).then(function (dbPosts) {
        res.json(dbPosts);
      });
    });
  
  
    // Get all Posts
    app.get("/api/posts", function (req, res) {
      // var query = {};
      // if (req.query.userId) {
  
      // }
      db.Post.findAll({}).then(function (dbPosts) {
        res.json(dbPosts);
      });
    });
    // searc hes by post title
    app.get("/api/title/:title", function (req, res) {
      console.log("into title search")
      db.Post.findOne({
        where: {
          title: req.params.title
        }
        // ,
        // include: [db.User]
      }).then(function (dbPost) {
        res.json(dbPost);
      });
    });
  
    // searches by post city
    app.get("/api/city/:city", function (req, res) {
      db.Location.findMany({
        where: {
          city: req.params.location
        
        }
        // ,
        // include: [db.Post]
      }).then(function (dbPost) {
        res.json(dbPost);
      });
    });
  
    // searches by post state 
    app.get("/api/state/:state", function (req, res) {
      db.Location.findMany({
        where: {
          state: req.params.state
        }
        // ,
        // include: [db.Post]
      }).then(function (dbPost) {
        res.json(dbPost);
      });
    });
  
    // searches by username 
    app.get("/api/username/:username", function (req, res) {
      console.log(db.Post.title, "post title")
      console.log(db.Post, "post")
  
  
      db.User.findOne({
        where: {
          username: req.params.username
        },
        include: [db.Post]
      }).then(function (dbPost) {
        res.json(dbPost);
      });
    });
  
    // Delete an Post by id
    app.delete("/api/posts/:id", function (req, res) {
      db.Post.destroy({ where: { id: req.params.id } }).then(function (dbPosts) {
        res.json(dbPosts);
      });
    });
    
    
  // var db = require("../models");
  
  
  // module.exports = function(app) {
    //   // Using the passport.authenticate middleware with our local strategy.
    //   // If the user has valid login credentials, send them to the members page.
    //   // Otherwise the user will be sent an error
      app.post("/api/login", passport.authenticate("local"), function(req, res) {
          res.json(req.user);
        });
      
      //   // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
      //   // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  //   // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log('***** USER *****', req.body.firstName);
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
  .then(function(user) {                                                                                                                                                  
      console.log("user", user);
      res.json(user);
      // res.redirect(307, "/api/login");
    })
    // .catch(function(err) {
    //   res.status(401).json(err);
    // });
  });
  };
  
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