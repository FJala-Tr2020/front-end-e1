# Stage 1
FROM node:12.18-alpine as build-step

WORKDIR /usr/src/app

COPY package.json ${WORKDIR}
COPY yarn.lock ${WORKDIR}

ADD dist ${WORKDIR}

RUN yarn install --production=true

# Stage 2
FROM nginx:1.17.1-alpine

ARG PORT=3000

ENV NODE_ENV=production
ENV PORT=${PORT}


EXPOSE ${PORT}

COPY --from=build-step /usr/src/app /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
