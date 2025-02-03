# Build stage
FROM node:20.17.0-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20.17.0-alpine AS runner
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 8010

CMD ["npm", "start"]