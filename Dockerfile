FROM node:12.2.0-alpine

RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY . ./
RUN npm install --silent

CMD ["npm", "run-script", "start"]