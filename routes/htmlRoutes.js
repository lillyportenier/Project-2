var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Post.findAll({}).then(function(dbPosts) {
      res.render("index", {
        msg: "Welcome! This is the Alien Blog",
        Post: dbPosts
      });
    });
  });
  app.get("/blog", function(req, res) {
    db.Post.findAll({}).then(function(dbPosts) {
      res.render("blog", {
        msg: "Welcome! This is the Alien Blog",
        Post: dbPosts
      });
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
