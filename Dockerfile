FROM node:14-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /client
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --production
# Copy app files
COPY . .
# Build
CMD yarn build

FROM node:14-alpine AS production

WORKDIR /
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --production
# Copy app files
COPY . .

# Copy built assets/bundle from the builder
COPY --from=builder /client/build /client/
# Build
EXPOSE 80
# Start the app
CMD ["yarn", "start"]
