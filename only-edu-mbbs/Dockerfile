# Step 1: Use an official Node runtime as a parent image
FROM node:22-alpine AS deps

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the working directory
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Use an official Node runtime as a parent image for the production build
FROM node:16-alpine AS runner

# Step 8: Set the working directory
WORKDIR /app

# Step 9: Copy the build output and dependencies from the previous stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/public ./public
COPY --from=deps /app/next.config.js ./

# Step 10: Expose the port the app runs on
EXPOSE 3000

# Step 11: Start the application
CMD ["npm", "start"]
