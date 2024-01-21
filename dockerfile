FROM node:20


WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3333

RUN node ace build --production
RUN cd build

RUN npm ci --production
CMD node build/server.js
