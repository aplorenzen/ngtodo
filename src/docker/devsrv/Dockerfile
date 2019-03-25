FROM node
WORKDIR /usr/src/app
VOLUME /usr/src/app
RUN npm install -g @angular/cli@latest
ENTRYPOINT bash -c "npm install && \
  ng serve --host 0.0.0.0 --poll 1"