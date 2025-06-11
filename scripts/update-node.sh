#!/bin/bash

# Check current Node.js version
echo "Current Node.js version:"
node --version

# Add NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Install Node.js 18.x
sudo apt-get install -y nodejs

# Verify installation
echo "Node.js version after update:"
node --version
echo "npm version after update:"
npm --version

# Clear npm cache
npm cache clean --force

# Install global packages if needed
npm install -g npm

# Print success message
echo "Node.js has been successfully updated to version 18.x"
