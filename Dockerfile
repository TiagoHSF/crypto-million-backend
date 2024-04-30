FROM node:18
ARG env=".env"
WORKDIR /app

COPY package* ./

RUN npm install

COPY . .

# COPY ${env} .env
# RUN npx prisma generate 

# RUN npx prisma migrate deploy 

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]