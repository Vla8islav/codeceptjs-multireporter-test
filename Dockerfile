FROM node:12.11.1-slim
COPY . .
RUN npm install
CMD npx codeceptjs run

