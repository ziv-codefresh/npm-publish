FROM node:8.8.0-alpine

WORKDIR .

COPY . .

RUN ["chmod", "+x", "run.sh"]

ENTRYPOINT ["sh","run.sh"]


