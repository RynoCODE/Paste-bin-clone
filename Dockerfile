FROM node:20

COPY . .
RUN npm install --production 
RUN npm run build

CMD ["npm","start"]