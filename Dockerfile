FROM node:15.3.0-alpine as builder

WORKDIR .

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]