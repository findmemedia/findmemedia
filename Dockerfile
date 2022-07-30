FROM node:lts-alpine3.15

COPY scripts/*.sh /scripts/
COPY .env /.env

# Set up react-app
RUN /scripts/react_install.sh

# Set up express app
RUN /scripts/express_install.sh

# Set up python
RUN apk add py3-pip
RUN pip install pymongo
RUN pip install pymongo[srv]

CMD scripts/entrypoint.sh