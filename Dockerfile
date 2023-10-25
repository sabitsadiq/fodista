# Use the official Node.js 18 image as the base
FROM node:18-alpine AS base

# Install libc6-compat if needed
RUN apk add --no-cache libc6-compat

# Set the working directory
WORKDIR /src

# Copy package files and install dependencies
COPY package.json yarn.lock* ./
RUN yarn --frozen-lockfile

# Builder stage
FROM base AS builder
WORKDIR /src

# Copy the source code
COPY . .

# Build the application
RUN yarn build

# Create the runner stage
FROM base AS runner

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000


# Create a non-root user to run the application
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set the working directory
WORKDIR /src

# Copy the public directory and the built Next.js application
COPY --from=builder /src/public ./public
COPY --from=builder /src/.next ./.next

# Set the correct permissions for the .next directory
RUN chown -R nextjs:nodejs .next

# Change to the non-root user
USER nextjs

# Expose the port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
