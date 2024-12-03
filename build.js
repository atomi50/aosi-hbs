// build.js
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

const renderTemplate = (templatePath, data) => {
  const source = fs.readFileSync(templatePath, "utf8");
  const template = handlebars.compile(source);
  return template(data);
};

const templatesDir = "views";
const outputDir = "dist";

fs.readdirSync(templatesDir).forEach((file) => {
  if (file.endsWith(".hbs")) {
    const templatePath = path.join(templatesDir, file);
    const html = renderTemplate(templatePath, {}); // Add data if necessary
    const outputFilePath = path.join(outputDir, file.replace(".hbs", ".html"));
    fs.writeFileSync(outputFilePath, html, "utf8");
  }
});
