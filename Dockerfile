FROM node:12

# SET WORKING IRECTORY
WORKDIR /usr/src/app

# ENVIRONMENT VARIABLES PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
