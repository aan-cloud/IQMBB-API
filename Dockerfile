FROM node:alpine

WORKDIR /usr/src/app

RUN npm install

COPY package*.json ./

COPY . .

CMD ["npm","run","dev"]