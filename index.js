const { Command } = require("commander");
const program = new Command();
const fs = require("fs");

program
  .name("Count CLI")
  .description("A CLI to count words and lines in text file")
  .version("1.0.0");

program
  .command("wcount")
  .argument("<file>", "provide file to count words")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      const words = data.trim().split(/\s+/);
      const noOfWords = words.length;
      console.log(noOfWords);
    });
  });

program
  .command("lcount")
  .argument("<file>", "provide file to count words")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      const lines = data.split("\n");
      const noOfLines = lines.length;
      console.log(noOfLines);
    });
  });

program.parse();
