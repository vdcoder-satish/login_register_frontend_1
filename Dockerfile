# use official run time parent image
FROM node:16 AS build 
# set the working directory
WORKDIR /app
# copy package.json and package-lock.json
COPY package.*.json ./
# install dependencies
RUN npm install
# copy the rest code
COPY . .
# build the react app for production
RUN npm run build
# use an official nginx for serving the build
FROM nginx:alpine
# Copy the build folder from the previous step into Nginx's HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]