FROM mhart/alpine-node:latest AS builder
WORKDIR /app

COPY packages/landing /app


RUN apk --no-cache add pkgconfig autoconf automake libtool nasm build-base zlib-dev
RUN yarn && yarn build

CMD [ "yarn", "start" ]