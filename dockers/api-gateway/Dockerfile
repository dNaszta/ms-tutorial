FROM node:lts-alpine
WORKDIR /app
COPY src/api-gateway/ ./

RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
