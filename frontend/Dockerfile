FROM node:lts-alpine3.14

WORKDIR /app/src

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