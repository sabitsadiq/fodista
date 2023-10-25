# Use the official Node.js 18 image as the base
FROM node:18-alpine AS base

# Install libc6-compat if needed (as you have in your original Dockerfile)
RUN apk add --no-cache libc6-compat

# Set the working directory
WORKDIR /src

# Copy package files and install dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Copy the source code to the builder stage
FROM base AS builder
WORKDIR /src
COPY . .

# Build the application
RUN yarn build

# Create the runner stage
FROM base AS runner

# Set the working directory
WORKDIR /src

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000
ENV HOST 0.0.0.0

# Create a non-root user to run the application
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the public directory
COPY --from=builder /src/public ./public

# Set the correct permissions for the .next directory
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy the output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /src/.next/static ./.next/static

# Change to the non-root user
USER nextjs

# Expose the port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
