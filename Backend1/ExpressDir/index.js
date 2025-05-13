const express = require("express");
const app = express();
let port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
    
} );

//  app.use((req, res) => {
//      console.log("new icoming request");
// //     //console.log(req);
// //     //res.send("this is a basic request");
// //     // res.send({
// //     //     "color":"red",
// //     //     "name":"appple"
// //     // })
// //     res.send("<h1>hello<h1>");
//  });

app.get("/", (req,res) => {
    res.send("you are connected to root path");
});

app.get("/apple", (req,res) => {
    res.send("you are connected to apple path");
});

app.get("/orange", (req,res) => {
    res.send("you are connected to orange path");
});

// app.get("*",(req, res)=> {
//     res.send("this path does not exist");
// });

// app.post("/", (req,res) => {
//     res.send("you sent a post request to root");
// });

app.get("/:username/:id", (req, res)=> {
    // console.log(req.params);
    // res.send("hello, i am root");
    let {username, id} = req.params;
    res.send(`welcome to the page of @${username}.`)
});

app.get("/search", (req, res) => {
    //console.log(req.query);
    let {q} = req.query;
    res.send(`search result for query : ${q}`);
});