FROM node:latest
MAINTAINER Patrice FERLET <metal3d@gmail.com>

RUN npm install -g json-server
ADD serve.sh /serve.sh

ENTRYPOINT ["/bin/sh", "/serve.sh"]

