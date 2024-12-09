const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const exphbs = require("express-handlebars");
const links = require("./public/js/links");

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

app.get("/login", (req, res) => {
  res.render("login", {
    title: "Aplikacija za održavanje sadržaja imenika AAI@EduHr Lab-a",
  });
});

app.get("/azuriranje-podataka", (req, res) => {
  const data = {
    title: "Aplikacija za održavanje sadržaja imenika AAI@EduHr Lab-a",
    pageSubtitle: "Ažuriranje podataka",
    options: [
      "nije postavljeno",
      "nepoznat",
      "muški",
      "ženski",
      "nije naveden",
    ],
    links: ["Ažuriranje podataka", "Promjena zaporke"],
  };
  res.render("azuriranje-podataka", data);
});

app.get("/dodavanje-korisnika", (req, res) => {
  const data = {
    title: "Aplikacija za održavanje sadržaja imenika AAI@EduHr Lab-a",
    pageSubtitle: "Dodavanje korisnika",
    options: [
      "Nije odabrano",
      "student",
      "djelatnik",
      "učenik",
      "vanjski suradnik",
      "korisnik usluge",
      "gost",
      "cjeloživotno obrazovanje",
    ],
    links,
  };
  res.render("dodavanje-korisnika", data);
});

app.get("/lista-korisnika", (req, res) => {
  const data = {
    title: "Aplikacija za održavanje sadržaja imenika AAI@EduHr Lab-a",
    pageSubtitle: "Lista korisnika",
    options: [
      "Nije odabrano",
      "student",
      "djelatnik",
      "učenik",
      "vanjski suradnik",
      "korisnik usluge",
      "gost",
      "cjeloživotno obrazovanje",
    ],
    links,
  };
  res.render("lista-korisnika", data);
});

app.get("*", (req, res) => {
  res.render("404");
});
