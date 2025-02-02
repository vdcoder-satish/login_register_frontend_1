# Step 1: Use an official Node.js image as the base image
FROM node:16 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application code
COPY . .

# Step 6: Build the app for production
RUN npm run build

# Step 7: Use a lighter web server to serve the build
FROM nginx:alpine

# Step 8: Copy the build output from the first stage to the nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the default port for nginx
EXPOSE 80

# Step 10: Start nginx
CMD ["nginx", "-g", "daemon off;"]
