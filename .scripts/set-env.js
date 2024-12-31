const { program } = require("commander");
const fs = require("fs");
const path = require("path");

program.argument("<env>");

program.parse();

const env = program.args[0];

console.log("Copying files", env);

const linkEnvFile = (source) => {
  const target = path.resolve(process.cwd(), ".env");
  if (fs.existsSync(target)) {
    fs.unlinkSync(target);
  }
  fs.symlinkSync(source, target);
};

const secretsEnvPath = path.resolve(process.cwd(), "secrets", `.env.${env}`);
const envPath = path.resolve(process.cwd(), `.env.${env}`);

if (fs.existsSync(secretsEnvPath)) {
  linkEnvFile(secretsEnvPath);
} else if (fs.existsSync(envPath)) {
  linkEnvFile(envPath);
} else {
  throw new Error(`No env file found for ${env}`);
}
