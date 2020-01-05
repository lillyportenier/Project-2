var db = require("./models");

var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
    // console.log(Object.keys(db.User.associations.Posts))
    // console.log(Object.keys(db.Post.associations.Location))

    // console.log("into test----------")
    db.User.create({
        // userId: 1,
        username: "UFO-GOD",
        password: "iloveufos",
        Posts: [{
            postId: 1,
            title: "Circle Lights",
            body: "Bright shifting lights seen over Buckley Air Force Base",
            date: "12/16/2019",
            Location: [{
                locationId: 1,
                city: "Centennial",
                state: "CO",
            }]
        }]
    }, {
        include: [{
            association: db.User.associations.Posts,
            include: [db.Post.associations.Location]
        }]
        }
    ).then((newUsers) => {
        console.log(newUsers.Posts.Location)
    }).catch((err) => {
        console.log("Error while users creation : ", err)
    });

});

