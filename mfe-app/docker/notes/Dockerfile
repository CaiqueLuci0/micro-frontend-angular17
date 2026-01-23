# Stage 1: Build
FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
COPY angular.json ./
COPY tsconfig*.json ./

RUN npm install

COPY projects/ ./projects/

RUN npx ng build notes --configuration production

# Stage 2: serve
FROM nginx:alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/notes/browser /usr/share/nginx/html
EXPOSE 80
