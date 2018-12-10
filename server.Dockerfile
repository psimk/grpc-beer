FROM node

WORKDIR /server

RUN npm i -g yarn
COPY ./server .
RUN yarn

CMD yarn start