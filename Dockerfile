FROM node:16 AS builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

# :: Compiles the typescript files to an output directory -> dist/
RUN yarn tsc

# :: ---

FROM node:16-slim

WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
RUN yarn install --prod

ENV APP_HOST="0.0.0.0"
ENV APP_PORT="8080"

COPY --from=builder /app/dist/* .

ENTRYPOINT ["node"]
CMD ["index"]
