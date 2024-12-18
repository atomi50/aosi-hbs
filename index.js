const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const exphbs = require("express-handlebars");
const { linksKorisnici, linksAdministratori } = require("./public/js/links");

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
    linksKorisnici,
  };
  res.render("azuriranje-podataka", data);
});

app.get("/promjena-zaporke", (req, res) => {
  const data = {
    title: "Aplikacija za održavanje sadržaja imenika AAI@EduHr Lab-a",
    pageSubtitle: "Promjena zaporke",
    linksKorisnici,
  };
  res.render("promjena-zaporke", data);
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
    linksAdministratori,
  };
  res.render("lista-korisnika", data);
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
    linksAdministratori,
  };
  res.render("dodavanje-korisnika", data);
});

app.get("/dodavanje-korisnika-tekst", (req, res) => {
  const data = {
    title: "Aplikacija za održavanje sadržaja imenika AAI@EduHr Lab-a",
    pageSubtitle: "Dodavanje korisnika iz tekst. datoteke",
    options: [
      "Central european ( windows 1250 )",
      "Central european ( ISO 8859-2)",
      "UTF-8",
    ],
    linksAdministratori,
  };
  res.render("dodavanje-korisnika-tekst", data);
});

app.get("/azuriranje-podataka-tekst", (req, res) => {
  const data = {
    title: "Aplikacija za održavanje sadržaja imenika AAI@EduHr Lab-a",
    pageSubtitle: "Azuriranje podataka iz tekst. datoteke",
    options: [
      "Central european ( windows 1250 )",
      "Central european ( ISO 8859-2)",
      "UTF-8",
    ],
    linksAdministratori,
  };
  res.render("azuriranje-podataka-tekst", data);
});

app.get("/zakljucani-korisnici", (req, res) => {
  const data = {
    title: "Aplikacija za održavanje sadržaja imenika AAI@EduHr Lab-a",
    pageSubtitle: "Zaključani korisnici",
    linksAdministratori,
  };
  res.render("zakljucani-korisnici", data);
});

app.get("/provjera-zaporke", (req, res) => {
  const data = {
    title: "Aplikacija za održavanje sadržaja imenika AAI@EduHr Lab-a",
    pageSubtitle: "Provjera zaporke",
    linksAdministratori,
  };
  res.render("provjera-zaporke", data);
});

app.get("/datum-isteka", (req, res) => {
  const data = {
    title: "Aplikacija za održavanje sadržaja imenika AAI@EduHr Lab-a",
    pageSubtitle: "Datum isteka",
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
    linksAdministratori,
  };
  res.render("datum-isteka", data);
});

app.get("*", (req, res) => {
  res.render("404");
});
