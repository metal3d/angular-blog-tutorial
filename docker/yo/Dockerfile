FROM node:latest
MAINTAINER Patrice FERLET <metal3d@gmail.com>

RUN set -ex;\
    apt-get update && apt-get install -y ruby-compass; \
    npm install -g grunt-cli bower yo generator-karma generator-angular wiredep; \
    mkdir -p /root/.config/configstore/; \
    touch /root/.config/configstore/insight-yo.json; \ 
    chmod -R 777 /root


