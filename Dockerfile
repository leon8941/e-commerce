FROM node:13.12.0-alpine AS base
WORKDIR /ecommerce

FROM base AS builder
COPY package*.json .babelrc ./
COPY ./backend ./backend
COPY ./src ./src
COPY ./lib ./lib
RUN npm install
RUN npm run build
RUN npm prune --production

FROM base AS release
COPY --from=builder /ecommerce/node_modules ./node_modules
COPY --from=builder /ecommerce/dist ./dist
USER node

CMD ["node", "./dist/backend/app.js"]