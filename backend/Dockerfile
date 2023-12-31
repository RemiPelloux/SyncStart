# Use the official Node.js 16 image.
FROM node:16

# Create and change to the app/backend directory.
WORKDIR /app/backend

# Copy application dependency manifests to the container image.
COPY ./backend/package*.json ./

# Install production dependencies.
RUN npm install

# Copy Prisma schema file
COPY ./backend/prisma/schema.prisma ./prisma/



# Copy local code to the container image.
COPY ./backend/src ./src

# Run the web service on container startup.
CMD [ "node", "src/server.js" ]
