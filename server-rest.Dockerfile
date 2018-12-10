FROM node

WORKDIR /server-rest

RUN npm i -g yarn
COPY ./server-rest .
RUN yarn

CMD yarn start