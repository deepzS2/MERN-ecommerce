FROM node:lts-alpine3.14

WORKDIR /app/src

ENV NODE_OPTIONS=”–max_old_space_size=2048″

# Installing dependencies
COPY package*.json yarn.lock ./
RUN yarn install

# Copying source files
COPY . .

# Building app
RUN yarn build
EXPOSE 3000

# Running the app
ENTRYPOINT [ "yarn", "dev" ]