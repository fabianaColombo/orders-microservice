FROM node:lts-alpine
WORKDIR /usr/src/app
ENV NODE_ENV=development 
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "node", "server.js" ]