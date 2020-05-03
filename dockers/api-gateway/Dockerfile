FROM node:14-alpine3.11
WORKDIR /app
COPY src/api-gateway/ ./

RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
