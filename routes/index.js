var express = require('express');
var router = express.Router();



// GET home page
router.get('/', function(req, res, next) {
  res.render('index');
});


// 0. Menu
router.get('/menu0', function(req, res, next) {
  res.render('menu0');
});
router.get('/home0', function(req, res, next) {
  res.render('home0');
});
router.get('/about0', function(req, res, next) {
  res.render('about0');
});
router.get('/contact0', function(req, res, next) {
  res.render('contact0');
});



// 1. File Upload
router.get('/fileupload1', function(req, res, next) {
  res.render('fileupload1');
});
router.post('/fileupload1', function(req, res, next) {
  //console.log(req.files.file123);
  var myfile = req.files.file123;
  var text = req.body.textbox;
  var filename = req.files.file123.name;
  var filetype = req.files.file123.mimetype;
  var filesize = req.files.file123.size;
  if(filetype == 'image/jpeg' || filetype == 'image/jpg'){
    if(filesize < 2000000){
      myfile.mv("public/"+filename,function(err){
        res.send(filename+" File upload Succesfully"+ "\n"+ text+" File upload Succesfully");
        // res.send(text + "File upload Succesfully");
    })
    }
    else{
      res.send("File size is too large");
    }
  }else{
  res.send("File type not supported");
}
});



//2. Signup page and login.
router.get('/login2', function(req, res, next) {
  res.render('login2');
});
router.post('/loginprocess', function(req, res, next) {
  var a = req.body.txt1;
  req.session.name = a;
  res.redirect("/dashboard2");
});
router.get('/dashboard2', function(req, res, next) {
  if(req.session.name){
    var a = req.session.name;
    res.render('dashboard2', {name: a});
    }else{ 
      res.redirect('/login2');
    }
  });
router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/login2');
});
router.get('/signup2', function(req, res, next) {
  res.render('signup2');
});
router.post('/signupprocess2', function(req, res, next) {
  var a = req.body.txt1;
  req.session.name = a;
  var b = req.body.txt1;
  req.session.name = b;
  var c = req.body.txt1;
  req.session.name = c;
  var d = req.body.txt1;
  req.session.name = d;
  res.redirect("/signuplogin2");
});
router.get('/signuplogin2', function(req, res, next) {
  res.render('signuplogin2');
});
router.post('/process2', function(req, res, next) {
  var a = req.body.txt1;
  req.session.name = a;
  var b = req.body.txt1;
  req.session.name = b;
  var c = req.body.txt1;
  req.session.name = c;
  var d = req.body.txt1;
  req.session.name = d;
  res.redirect("/dashboard2");
});
router.get('/dashboard2', function(req, res, next) {
  if(req.session.name){
    var a = req.session.name;
    res.render('dashboard2', {name: a});
    }else{ 
      res.redirect('/login2');
    }
  });



// 3. Form from answer
router.get('/form3', function(req, res, next) {
  res.render('form3');
});
router.post('/formprocess', function(req, res, next){
  console.log(req.body);
  var a = req.body.txt1;
  var b = req.body.txt2;
  var c = parseInt(a) + parseInt(b)
  mgs = ""
  if(c==30){
    msg = "Welcome"
  }
  else{
    msg = "Sorry"
  }
  res.render('ans3', {mya:a, myb:b, myc:c, mymsg:msg});
  });



// 4. Mail Sent
router.get("/mail4", function (req, res, next) {
  res.send("Thank you");
});
// const nodemailer = require("nodemailer");
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await nodemailer
    .createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "ishitabhojani2810@gmail.com",
        pass: "tdsr hxgx zoux nqjl",
      },
    })
    .sendMail({
      from: '"Maddison Foo Koch 👻" <ishitabhojani2810@gmail.com>', // sender address
      to: "ishitabhojani2810@gmail.com", // list of receivers
      subject: "Mail Sent", // Subject line
      text: "Hello", // plain text body
      html: "<b>Hello</b>", // html body
    });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
router.get("/contacts", function (req, res, next) {
  res.send("Thank you");
});
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "ishitabhojani2810@gmail.com",
    pass: "tdsr hxgx zoux nqjl",
  },
});
async function main() {
  // send mail with defined transport object
  const info = await nodemailer
    .createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "ishitabhojani2810@gmail.com",
        pass: "tdsr hxgx zoux nqjl",
      },
    })
    .sendMail({
      from: '"Maddison Foo Koch 👻" <zulidobariya24@gmail.com>', // sender address
      to: "ishitabhojani2810@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
main().catch(console.error);


// 5. Mail Contact Form
router.get("/mail5", (req, res) => {
  res.render("mail5");
});
router.post("/mail5", async (req, res) => {
  const { name, mail, mobile, message } = req.body;
  try {
    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465
      auth: {
        user: "nensipansuriya1311@gmail.com",
        pass: "mncz qyxg qage whug",
      },
    });
    // Send email
    const info = await transporter.sendMail({
      from: `"Contact Form" <nensipansuriya1311@gmail.com>`, // Sender address
      to: "nensipansuriya1311@gmail.com", // Receiver email
      subject: "New Contact Form Submission", // Subject line
      text: `You received a new message:\n\nName: ${name}\nEmail: ${mail}\nMobile: ${mobile}\nMessage: ${message}`, // Plain text body
      html: `<p><b>You received a new message:</b></p>
             <p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${mail}</p>
             <p><b>Mobile:</b> ${mobile}</p>
             <p><b>Message:</b> ${message}</p>`, // HTML body
    });
    console.log("Mail sent: %s", info.messageId);
    res.send("Thank you for contacting us!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email.");
  }
});






// 5. Session
router.get('/save', function(req, res, next) {
  req.session.name = "Nensi";
  res.send("Session Created");

});
router.get('/get', function(req, res, next) {
  if(req.session.name){
    var a = req.session.name;
    res.send("value is; " + a);
  }else{
    res.send("Session not created");
  }
});
router.get('/delete', function(req, res, next) {
  req.session.destroy();
  res.send('Deleted');
});

//6. Local Storage
// 6. Local Storage Name and Mobile
router.get('/index6', function(req, res, next) {
  res.render('index6', { title: 'Enter Details' });
});
router.get('/display6', function (req, res, next) {
  res.render('display6', { title: 'User Details' });
});


module.exports = router;