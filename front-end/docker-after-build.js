const fs = require("fs");
const path = require("path");

const dockerfilePath = path.join(
  __dirname,
  "dist",
  "front-end",
  "server",
  "Dockerfile"
);
const dockerfileContent = `# Use the latest Node.js image as the base image
FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.mjs"]
`;

fs.writeFileSync(dockerfilePath, dockerfileContent, "utf8");
console.log(`Dockerfile has been written to ${dockerfilePath}`);
