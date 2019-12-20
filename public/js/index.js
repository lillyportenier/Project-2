// Get references to page elements
var postTitle = $("#input_text");
var $postBody = $("#textarea2");
var $submitBtn = $("#submit");
var $postBlog = $("#post-list");

// The API object contains methods for each kind of request we'll make
var API = {
  savePost: function(Post) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/post",
      data: JSON.stringify(Post)
    });
  },
  getPost: function() {
    return $.ajax({
      url: "api/post",
      type: "GET"
    });
  },
  deletePost: function(id) {
    return $.ajax({
      url: "api/post/" + id,
      type: "DELETE"
    });
  }
};

// refreshPost gets new Post from the db and repopulates the list
var refreshPost = function() {
  API.getPost().then(function(data) {
    var $Post = data.map(function(Post) {
      var $a = $("<a>")
        .text(Post.title)
        .attr("href", "/post/" + Post.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": Post.id
        })
        .append($a);

      // var $button = $("<button>")
      //   .addClass("btn btn-danger float-right delete")
      //   .text("ｘ");

      // $li.append($button);

      return $li;
    });

    $postBlog.empty();
    $postBlog.append($Post);
  });
};

// handleFormSubmit is called whenever we submit a new Post
// Save the new Post to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var Post = {
    title: postTitle.val().trim(),
    body: $postBody.val().trim()
  };

  if (!(Post.title && Post.body)) {
    alert("You must enter an Post title and Blog!");
    return;
  }

  API.savePost(Post).then(function() {
    refreshPost();
  });

  postTitle.val("");
  $postBody.val("");
};

// handleDeleteBtnClick is called when an Post's delete button is clicked
// Remove the Post from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deletePost(idToDelete).then(function() {
    refreshPost();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$postBlog.on("click", ".delete", handleDeleteBtnClick);


$(document).ready(function(){
  $('.modal').modal();
});
        