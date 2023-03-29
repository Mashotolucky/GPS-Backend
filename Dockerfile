FROM node:alpine
# from node image in docker

COPY . /app
#copy everything and put it in app folder

WORKDIR /app
# like cd /app folder -- go inside folder

CMD node server.js

