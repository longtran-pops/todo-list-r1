FROM node:10.15.1-slim

WORKDIR /todo-list-r1
COPY . ./
RUN yarn install
RUN yarn build

EXPOSE 8080
ENTRYPOINT ["yarn"]
CMD [ "run", "start" ]
