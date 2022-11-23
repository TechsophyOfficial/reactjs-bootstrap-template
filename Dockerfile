FROM node:16

WORKDIR /usr/src/app/my-app

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["yarn", "start"]