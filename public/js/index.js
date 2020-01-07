// Get references to page elements

$(document).ready(function() {
  
  var blogForm = $("#blogger")
  var postTitle = $("#title");
  var postBody = $("#blog");
  var cityInput = $("#city");
  var stateInput = $("#state");
  var postBlog = $("#post-list");
  var searchM = $("#searchM");
  
  
  blogForm.on("submit", function(event) {
event.preventDefault();
    var blogData = {
      title: postTitle.val().trim(),
      body: postBody.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput.val().trim()
    };
    console.log("event*****************", blogData)
    updateBlog(blogData.title, blogData.body, blogData.city, blogData.state);
    postTitle.val("");
    postBody.val("");
    cityInput.val("");
    stateInput.val("");
  });

  function updateBlog(title, body, city, state) {
    $.post("/api/posts", {
      title: title,
      body: body,
      city: city,
      state: state
    })
    .then(function(data) {
      console.log("created new blog");
      location.reload();
    })
    // .catch(handleBlogErr);
  }

  function searchCity(city) {
    var sCity = $("#searchCity");

    searchM.on("submit", function(event) {
      event.preventDefault();
      var searchCityData = {
        city: sCity.val().trim()
      }
    })
    $.get("/api/posts" + "/?city=" + city, function(data) {
      console.log("City Search", data);
      searchCityData = data;
      if (!cityData || !cityData.length) {
        displayEmpty(city);
      } else {
        initializeRows();
      }
    });
  }
  function searchState(state) {
    var sState = $("#searchState");

    searchM.on("submit", function(event) {
      event.preventDefault();
      var searchStateData = {
        state: sState.val().trim()
      }
    })
    $.get("/api/posts" + "/?state=" + state, function(data) {
      console.log("State Search", data);
      stateData = data;
      if (!stateData || !stateData.length) {
        displayEmpty(state);
      } else {
        initializeRows();
      }
    });
  }
  function searchUserName(username) {
    var sBlogger = $("#searchBlogger");

    searchM.on("submit", function(event) {
      event.preventDefault();
      var searchBloggerData = {
        username: sBlogger.val().trim()
      }
    })
    $.get("/api/users" + "/?username=" + username, function(data) {
      console.log("City Search", data);
      searchBloggerData = data;
      if (!searchBloggerData || !searchBloggerData.length) {
        displayEmpty(username);
      } else {
        initializeUserRows();
      }
    });
  }
  function searchTitle(title) {
    var sTitle = $("#searchTitle");

    searchM.on("submit", function(event) {
      event.preventDefault();
      var searchTitleData = {
        title: sTitle.val().trim()
      }
    })
    $.get("/api/posts" + "/?title=" + title, function(data) {
      console.log("City Search", data);
      searchTitleData = data;
      if (!searchTitleData || !searchTitleData.length) {
        displayEmpty(title);
      } else {
        initializeRows();
      }
    });
  }
  function initializeRows() {
    postBlog.empty();
    var blogToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      blogToAdd.push(updateBlog(posts[i]));
    }
    
  }
  function initializeUserRows() {
    postBlog.empty();
    var blogToAdd = [];
    for (var i = 0; i < users.length; i++) {
      blogToAdd.push(updateBlog(users[i]));
    }
    
  }
  // function handleBlogErr(err) {
  //   $("#alert .msg").text(err.responseJSON);
  //   $("#alert").fadeIn(500);
  // }
  // The API object contains methods for each kind of request we'll make
  // var API = {
  //   savePost: function(Post) {
  //     return $.ajax({
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       type: "POST",
  //       url: "api/post",
  //       data: JSON.stringify(Post)
  //     });
  //   },
  //   getPost: function() {
  //     return $.ajax({
  //       url: "api/post",
  //       type: "GET"
  //     });
  //   },
  //   deletePost: function(id) {
  //     return $.ajax({
  //       url: "api/post/" + id,
  //       type: "DELETE"
  //     });
  //   }
  // };
  
  // refreshPost gets new Post from the db and repopulates the list
  // var refreshPost = function() {
  //   API.getPost().then(function(data) {
  //     var $Post = data.map(function(Post) {
  //       var $a = $("<a>")
  //       .text(Post.title)
  //       .attr("href", "/Post/" + Post.id);
        
  //       var $li = $("<li>")
  //       .attr({
  //         class: "list-group",
  //         "data-id": Post.id
  //       })
  //       .append($a);
        
        // var $button = $("<button>")
        //   .addClass("btn btn-danger float-right delete")
        //   .text("ｘ");
        
        // $li.append($button);
        
  //       return $li;
  //     });
      
  //     $postBlog.append($Post);
  //     $postBlog.empty();
  //   });
  // };
  
  // handleFormSubmit is called whenever we submit a new Post
  // Save the new Post to the db and refresh the list
  // var handleFormSubmit = function(event) {
  //   event.preventDefault();
    
  //   var Post = {
  //     title: postTitle.val().trim(),
  //     body: postBody.val().trim()
  //   };
    
  //   if (!(Post.title && Post.body)) {
  //     alert("You must enter a Post title and Blog!");
  //     return;
  //   }
    
  //   API.savePost(Post).then(function() {
  //     refreshPost();
  //   });
    
  //   postTitle.val("");
  //   postBody.val("");
  // };
  
  // handleDeleteBtnClick is called when an Post's delete button is clicked
  // Remove the Post from the db and refresh the list
  // var handleDeleteBtnClick = function() {
    //   var idToDelete = $(this)
    //     .parent()
    //     .attr("data-id");
    
    //   API.deletePost(idToDelete).then(function() {
      //     refreshPost();
      //   });
      // };
      
      // // Add event listeners to the submit and delete buttons
      // $submitBtn.on("click", handleFormSubmit);
      // $postBlog.on("click", ".delete", handleDeleteBtnClick);
      
      
    });
      $(document).ready(function(){
  $('.modal').modal();
});
$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});