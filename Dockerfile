FROM node:lts-alpine3.15

COPY scripts/*.sh /scripts/
COPY .env /.env

# Install react/frontend dependencies
RUN /scripts/react_install.sh

# Install express/backend dependencies
RUN /scripts/express_install.sh

# Set up python
RUN apk add py3-pip
RUN pip install pymongo
RUN pip install pymongo[srv]

CMD scripts/entrypoint.sh