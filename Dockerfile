FROM node:13.12.0-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
RUN npm prune --production

COPY test.env .env

CMD ["node", "./dist/backend/app.js"]