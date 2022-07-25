FROM node:lts-alpine3.15

RUN mkdir -p find-me-media
RUN (cd find-me-media && npx create-react-app client)
RUN rm -rf find-me-media/client/public find-me-media/client/src find-me-media/client/.gitignore find-me-media/client/README.md

COPY scripts/*.sh scripts/

# CMD scripts/entrypoint.sh