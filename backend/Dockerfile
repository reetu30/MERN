# Use the official Node.js image from the Docker Hub
FROM node:16

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of your app files into the container
COPY . .

# Expose the port that your app will run on
EXPOSE 5000

# Command to run your app
CMD ["npm", "start"]
