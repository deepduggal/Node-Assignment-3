import inquirer from "inquirer";
import favoriteLanguage from "./questions/favoriteLanguage.js";
import prefferedFramework from "./questions/preferredFramework.js";

inquirer.prompt([favoriteLanguage, prefferedFramework]).then((answers) => {
  console.log("\nThanks for answering!\n");
  console.log("Answers:", answers);
});