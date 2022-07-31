FROM node:lts-alpine3.15

COPY scripts/*.sh /scripts/
COPY .env /.env

# Install react/frontend dependencies
RUN mkdir -p find-me-media
RUN (cd find-me-media && npx create-react-app client)
RUN rm -rf find-me-media/client/public find-me-media/client/src find-me-media/client/.gitignore find-me-media/client/README.md
RUN scripts/react_dependencies.sh

# Install express/backend dependencies
RUN mkdir find-me-media/server
RUN (cd find-me-media/server && npm init -y && npm install express)
RUN scripts/express_dependencies.sh

# Set up python
RUN apk add py3-pip
RUN pip install pymongo
RUN pip install pymongo[srv]

CMD scripts/entrypoint.sh