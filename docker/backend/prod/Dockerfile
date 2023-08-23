FROM node:18-alpine as build

WORKDIR /app

COPY . ./

RUN npm i && npm run build

FROM node:18-alpine

WORKDIR /app

RUN mkdir -p /app/dist/
RUN chown -R node /app

COPY --from=build /app/dist/ /app/dist/
COPY --from=build /app/node_modules/ /app/node_modules/
ARG NODE_ENV

EXPOSE 3000

WORKDIR /app

CMD ["node", "./dist/main.js"]
