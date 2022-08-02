FROM node:lts-alpine3.15

COPY scripts/*.sh /scripts/

# Install react/frontend dependencies
RUN /scripts/react_install.sh

# Install express/backend dependencies
RUN /scripts/express_install.sh

# Set up python
RUN apk add py3-pip
RUN pip install pymongo
RUN pip install pymongo[srv]

COPY .env /.env
CMD scripts/entrypoint.sh