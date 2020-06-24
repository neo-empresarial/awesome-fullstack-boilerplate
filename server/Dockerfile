FROM node:11-alpine

WORKDIR /app/server

COPY . .

RUN yarn install

EXPOSE 8000

CMD ["yarn", "run", "start"]
