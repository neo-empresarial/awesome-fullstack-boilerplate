FROM node:10-alpine AS alpine

WORKDIR /app/server

COPY . .

RUN yarn install

EXPOSE 3333

CMD ["yarn", "run", "start"]
