FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install pg

COPY . .

EXPOSE 3000
CMD ["node", "app.js"]