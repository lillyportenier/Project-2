var db = require("../models");

module.exports = function(app) {
  // Get all Posts
  app.get("/api/Post", function(req, res) {
    db.Post.findAll({}).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // Create a new Post
  app.post("/api/Post", function(req, res) {
    db.Post.create(req.body).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // Delete an Post by id
  app.delete("/api/Post/:id", function(req, res) {
    db.Post.destroy({ where: { id: req.params.id } }).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });
};

// sign in
// sign up in corner

// all blog posts 


// get request for search keyword city, state, date
// add post route 
// add user route 
// delete post for users only 


// update bnlog post extraaaa