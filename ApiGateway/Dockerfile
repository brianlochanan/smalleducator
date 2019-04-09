FROM node:latest

WORKDIR /app

COPY package.json package.json
RUN npm install

COPY . .

EXPOSE ${API_GATEWAY_PORT}
