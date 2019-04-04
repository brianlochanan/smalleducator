FROM node:latest

RUN npm install -g sails grunt npm-check-updates

WORKDIR /app

COPY package.json package.json
RUN npm install
RUN npm install sails-mysql --save --save-exact

COPY . .

EXPOSE ${PLAYLIST_PORT}
