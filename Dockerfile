FROM node:22-alpine

WORKDIR /app

COPY . /app/

RUN npm install

EXPOSE 5173

ENTRYPOINT ["npm", "run", "host"]