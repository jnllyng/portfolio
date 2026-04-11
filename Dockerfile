# Build stage: Use Node.js 20 Alpine image to build the React app
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /yang_jueun_final_site

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies with legacy-peer-deps to avoid version conflicts
RUN npm ci --legacy-peer-deps

# Copy the rest of the source code into the container
COPY . .

# Run the production build of the React app
RUN npm run build

# Production stage: Use lightweight Nginx Alpine image
FROM nginx:alpine

# Copy the built React app to the Nginx static files directory
COPY --from=build /yang_jueun_final_site/build /usr/share/nginx/html

# Copy custom Nginx config file to set port 5575
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5575 for the container
EXPOSE 5575

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]