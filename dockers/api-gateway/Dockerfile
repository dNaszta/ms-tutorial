FROM node:14-alpine3.11

WORKDIR /app

COPY src/api-gateway/package*.json .

RUN npm install

COPY src/api-gateway .