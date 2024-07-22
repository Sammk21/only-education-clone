# Step 1: Use an official Node runtime as a parent image
FROM node:18-alpine

# Step 2: Set the working directory
WORKDIR /

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the working directory
COPY . .

# Step 6: Expose the port the app runs on
EXPOSE 1337

# Step 7: Start the application
CMD ["npm", "start"]
