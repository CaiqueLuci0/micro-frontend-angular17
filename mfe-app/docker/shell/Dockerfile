# Stage 1: Build
FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
COPY angular.json ./
COPY tsconfig*.json ./

RUN npm install

COPY projects/ ./projects/

RUN npx ng build shell --configuration production

FROM nginx:alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/shell/browser /usr/share/nginx/html
EXPOSE 80
