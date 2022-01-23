// const request=require("request");
// const bodyParser=require("body-parser");
// const express=require("express");

// const app =express();
// const https=require("https");
// // const response = require("express");
// // const e = require("express");



// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/signup.html");
// });

// app.post("/",function(req,res){

//     console.log(req.body);
//     const firstName=req.body.fname;
//     const lastname=req.body.lname;
//     const email= req.body.email;
//     console.log(firstName,lastname,email);

//     const data={
//         members:[
//             {
//                 EMAIL:email,
//                 status:"suscribed",
//                 merge_fields:{
//                     FNAME:firstName,
//                     LNAME:lastname
//                 }
//             }
//         ]
//     };

//     const jsonData=JSON.stringify(data);
//     const url="https://us20.api.mailchimp.com/3.0/lists/fc189fbe1f/";

//     const options={
//         method:"POST",
//         auth:"https://us7.api.mailchimp.com/3.0/lists/c0d5005703"
//     };
    
//     const request=https.request(url,options,function(response)
//     {
//         response.on("data",function(data){
//             console.log(JSON.parse(data));
//         });
//     });

//     request.write(jsonData);
//     request.end();
// });

// app.listen(4000,function()
// {
//     console.log("Server is running on port 4000");
// });

const express = require("express")
const bodyParser = require("body-parser")
const https= require("https");
const { log } = require("console");

const app= express();

app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {
res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req,res) {
    console.log(req.body.fName);
    const firstName = req.body.fName;
    const lastName= req.body.lName;
    const email = req.body.email;
    
    const data= {
        members:[
{
    email_address: email,
    status: "subscribed",
    merge_fields: {

        FNAME: firstName,
        LNAME: lastName

    }
}

        ]
    }
const jsonData= JSON.stringify(data);

const url= "https://us7.api.mailchimp.com/3.0/lists/fc189fbe1f" 

const options = {
    method: "POST",
    body: data,
    auth: "himanshu:a0d296394634ffcfa9b98a826950e426-us20"
}

const request=https.request(url,options, function(response) {


    if (response.statusCode===200) {
        res.send("Successfully done")
    } 
    else {
        res.send("Please try again!!")
    }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })

    })

request.write(jsonData);
request.end();


})







app.listen(process.env.PORT || 3000, function () {
    console.log("The server is running at port 3000");
})



// API key
// a0d296394634ffcfa9b98a826950e426-us20

// list id
// fc189fbe1f