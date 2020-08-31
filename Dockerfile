FROM node:12.18.3
COPY . /app
WORKDIR  /app
EXPOSE 4200
RUN npm install
RUN npm install -g @angular/cli@10.0.8
CMD ["ng","serve"]
