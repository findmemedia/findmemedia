docker run -it -p 3000:3000^
    --volume=%1/client/public:/find-me-media/client/public^
    --volume=%1/client/src:/find-me-media/client/src^
    --volume=%1/client/src:/find-me-media/client/.gitignore^
    --volume=%1/client/src:/find-me-media/client/README.md^
    react-test /bin/sh