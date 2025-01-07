# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variable for Vite during build
ARG VITE_VPS_HOST
ENV VITE_VPS_HOST=$VITE_VPS_HOST

# Build the React app
RUN npm run build

# Stage 2: Serve the React app and stream CCTV with nginx
FROM nginx:stable-alpine

# Install ffmpeg
RUN apk add --no-cache ffmpeg

# Copy the build output from the previous stage to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration file
COPY default.conf /etc/nginx/conf.d/default.conf

# Add CCTV HLS output directory
RUN mkdir -p /usr/share/nginx/html/live && chmod 777 /usr/share/nginx/html/live

# Copy the script for FFmpeg (stream handling)
COPY cctv-rtsp.sh /usr/local/bin/cctv-rtsp.sh
RUN chmod +x /usr/local/bin/cctv-rtsp.sh

# Expose port 80
EXPOSE 80

# Start FFmpeg and nginx
CMD ["/bin/sh", "-c", "/usr/local/bin/cctv-rtsp.sh & nginx -g 'daemon off;'"]
