const readline = require("readline");
const { exec } = require("child_process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the CDN URL: ", (deployUrl) => {
  exec(
    `ng build --configuration production --deploy-url ${deployUrl}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(`Error: ${stderr}`);
        process.exit(1);
      }
      console.log(stdout);
      rl.close();
    }
  );
});
