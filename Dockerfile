FROM node:latest

WORKDIR /app

COPY . /app

RUN npm i -g pnpm serve

RUN pnpm i

RUN npm run build

CMD ["serve", "-l", "3001", "dist"]