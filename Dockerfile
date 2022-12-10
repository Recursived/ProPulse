FROM node:latest

WORKDIR /usr/server/app

COPY ./package.json ./
RUN npm install
COPY ./ .
RUN npm run build
ENV node_env=production
CMD ["npm", "run", "start"]
