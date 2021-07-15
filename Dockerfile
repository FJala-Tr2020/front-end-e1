# Stage 1
FROM node:12.18-alpine as build-step

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json ${WORKDIR}
COPY yarn.lock ${WORKDIR}

ADD dist ${WORKDIR}

RUN yarn install --production=true

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /usr/src/app /usr/share/nginx/html

