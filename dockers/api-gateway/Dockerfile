FROM node:lts-alpine
RUN apk add --no-cache bash coreutils

WORKDIR /app

RUN apk --no-cache add build-base \
    gcc \
    wget \
    git \
    make \
    g++ \
    python

# COPY dockers/api-gateway/wait-for-it.sh ../
# COPY src/api-gateway/ ./

# RUN npm install
EXPOSE 3000
# CMD ["npm", "run", "start:prod"]
