// import img from "./src/watsapp_img.jpeg";
var path = require("path");
var express = require("express");
var app = express();

var publicDir = require("path").join(__dirname, "/src");
app.use(express.static(publicDir));
// console.log(path.join(publicDir, "/watsapp_img.jpeg"));

const Optiic = require("optiic");
const optiic = new Optiic({
  apiKey: "8XZdk8qS4ZwB4TWRvHSi1GNKsEGsMynHwaGac3KrbcQ7",
});

try {
  optiic
    .process({
      image: path.join(publicDir, "/watsapp_img.jpeg"),
      // url: "https://image.freepik.com/free-vector/illustration-application-forms_53876-18193.jpg",
    })
    .then((result) => console.log(result));
} catch (err) {
  console.error(err.message);
}
