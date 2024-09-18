const fs = require("fs");
const path = require("path");

const configFilePath = path.join(__dirname, "app.config.js");
const configContent = fs.readFileSync(configFilePath, "utf-8");

console.log("process.argv[2] " + process.argv[2])
const newValue = process.argv[2] === "true"; // Get the desired value from the command-line argument

const updatedContent = configContent.replace(
  /"storybookEnabled":\s*(true|false)/,
  `"storybookEnabled": ${newValue}`
);

console.log(updatedContent)

if (updatedContent !== configContent) {
  fs.writeFileSync(configFilePath, updatedContent);
  console.log(`app.config.js updated with storybookEnabled set to ${newValue}`);
} else {
  console.log(`app.config.js already has storybookEnabled set to ${newValue}`);
}