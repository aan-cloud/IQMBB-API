FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .env

RUN npx prisma generate --schema=./prisma/schema.prisma

CMD ["npm","run","dev"]