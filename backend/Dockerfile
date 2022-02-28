FROM node:lts-alpine3.14

WORKDIR /app/src

COPY package.json yarn.lock ./

RUN yarn

COPY . . 

EXPOSE 8080

ENTRYPOINT [ "yarn", "dev" ]
