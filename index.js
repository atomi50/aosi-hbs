const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const exphbs = require("express-handlebars");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// session setup
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 86400000,
    },
  })
);
app.use((req, res, next) => {
  res.locals.userLoggedIn = req.session.userLoggedIn || false;
  next();
});

// Handlebars setting
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "index",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);

const port = 3002;
app.listen(port);
console.log(`Listening to server: http://localhost:${port}`);

app.post("/toggle-login", (req, res) => {
  req.session.userLoggedIn = !req.session.userLoggedIn;
  console.log("Session data:", req.session);
  res.redirect("/");
});

// Landing page
app.get("/", (req, res) => {
  const userLoggedIn = req.session.userLoggedIn || false;
  res.render("main", { userLoggedIn });
});

app.get("/naslovnice-repozitorija", (req, res) => {
  const userLoggedIn = req.session.userLoggedIn || false;
  res.render("naslovnice-repozitorija", {
    layout: "repozitoriji",
    userLoggedIn,
  });
});

app.get("/napredno-pretrazivanje", (req, res) => {
  res.render("napredno-pretrazivanje", { title: "Napredno pretraživanje" });
});

app.get("/browse", (req, res) => {
  res.render("browse");
});

app.get("/pohrana-objekata", (req, res) => {
  res.render("pohrana-objekata");
});

app.get("/browse-by-type", (req, res) => {
  res.render("browse-by-type");
});

app.get("/results", (req, res) => {
  res.render("results", { title: "Rezultati pretraživanja" });
});
app.get("/osnovna-stranica", (req, res) => {
  res.render("osnovna-stranica", { title: "Osnovna stranica" });
});
app.get("/object", (req, res) => {
  res.render("object", { title: "Detalji objekta" });
});

app.get("/news", (req, res) => {
  res.render("news", { title: "Vijesti" });
});

app.get("/news-vertical", (req, res) => {
  res.render("news-vertical", { title: "Vijesti" });
});

app.get("/news-horizontal", (req, res) => {
  res.render("news-horizontal");
});

app.get("/naslovnice-repozitorija", (req, res) => {
  res.render("naslovnice-repozitorija");
});

app.get("/podrucje-grana", (req, res) => {
  res.render("podrucje-grana");
});

app.get("/login", (req, res) => {
  res.render("login", {
    title: "Aplikacija za održavanje sadržaja imenika AAI@EduHr Lab-a",
  });
});

app.get("*", (req, res) => {
  res.render("404");
});
