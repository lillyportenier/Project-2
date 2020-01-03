var db = require("./models");

console.log("into test----------")
db.User.create({
    username: "UFO-GOD",
    password: "iloveufos",
    Posts: [{
        title: "Circle Lights",
        body: "Bright shifting lights seen over Buckley Air Force Base",
        date: "12/16/19",
        Location: [{
            city: "Centennial",
            state: "CO",
        }]
    }]
}
, {
        include: [{
            association: db.User.Post,
            include: [db.Post.Location]
        }]
    }
).then((newUsers) => {
    console.log(newUsers, "----------- newUsers")
}).catch((err) => {
    console.log("Error while users creation : ", err)
});
