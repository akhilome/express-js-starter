FROM node:14-alpine

RUN apk add dumb-init

ENV NODE_ENV production
ENV PORT 80

WORKDIR /app

COPY --chown=node:node package.json yarn.lock ./

RUN yarn --production --frozen-lockfile

COPY --chown=node:node . .

EXPOSE 80

USER node

CMD [ "dumb-init", "node", "server.js" ]
