FROM node:latest

WORKDIR /usr/server/app

COPY ./package.json ./
RUN npm install
COPY ./ .
RUN npm run build
# Should be deleted once development of the app is done
ENV node_env=production
CMD ["npm", "run", "begin"] 
