var path = require("path");
var express = require("express");
var app = express();
var publicDir = require("path").join(__dirname, "/src");
app.use(express.static(publicDir));
const Optiic = require("optiic");
const optiic = new Optiic({
  apiKey: "8XZdk8qS4ZwB4TWRvHSi1GNKsEGsMynHwaGac3KrbcQ7",
});


const localPath = path.join(publicDir, "watsapp_img.png");

try {
  optiic
    .process({
      image: localPath,
      mode: "ocr",
      url: "https://image.freepik.com/free-vector/illustration-application-form_53876-18193.jpg",
    })
    .then((result) => console.log(result));
} catch (err) {
  console.error(err.message);
}
