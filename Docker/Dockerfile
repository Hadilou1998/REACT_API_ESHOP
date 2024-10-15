FROM node:22.9.0

RUN npm install -g nodemon

WORKDIR /Docker

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ./docker-entrypoint.sh

EXPOSE 8080

CMD ["npm", "run", "watch"]