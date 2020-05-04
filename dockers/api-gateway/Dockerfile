FROM node:lts-alpine
WORKDIR /app
COPY dockers/api-gateway/wait-for-it.sh ./
COPY src/api-gateway/ ./

RUN npm install
EXPOSE 3000
# CMD ["npm", "run", "start:prod"]
