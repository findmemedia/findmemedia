FROM node:lts-alpine3.15

# Set up react-app
RUN mkdir -p find-me-media
RUN (cd find-me-media && npx create-react-app client)
RUN rm -rf find-me-media/client/public find-me-media/client/src find-me-media/client/.gitignore find-me-media/client/README.md

# Set up express app
RUN mkdir find-me-media/server
RUN (cd find-me-media/server && npm init -y && npm install express)

COPY scripts/*.sh scripts/

# CMD scripts/entrypoint.sh