FROM node:latest

RUN npm install -g sails grunt npm-check-updates

WORKDIR /app

COPY package.json package.json
RUN npm install

COPY . .

EXPOSE ${LOGIN_PORT}
