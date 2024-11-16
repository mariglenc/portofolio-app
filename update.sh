#!/bin/bash

# Script Vars
REPO_URL="https://github.com/mariglenc/portofolio-app.git"
APP_DIR=~/portofolio-app

# Pull the latest changes from the Git repository
if [ -d "$APP_DIR" ]; then
    echo "Directory $APP_DIR already exists. Pulling latest changes..."
    cd $APP_DIR
    git checkout docker-container
    git pull
else
  echo "Cloning repository from $REPO_URL..."
  git clone $REPO_URL
  cd $APP_DIR
fi

# Build and restart the Docker containers from the app directory (~/myapp)
echo "Rebuilding and restarting Docker containers..."
sudo docker-compose down
sudo docker-compose up --build -d

# Check if Docker Compose started correctly
if ! sudo docker-compose ps | grep "Up"; then
  echo "Docker containers failed to start. Check logs with 'docker-compose logs'."
  exit 1
fi

# Output final message
echo "Update complete. Your Next.js app has been deployed with the latest changes."

