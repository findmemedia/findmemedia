docker run -it -p 3000:3000 -p 8080:8080^
    --volume=%1/client/public:/find-me-media/client/public^
    --volume=%1/client/src:/find-me-media/client/src^
    --volume=%1/client/src:/find-me-media/client/.gitignore^
    --volume=%1/client/src:/find-me-media/client/README.md^
    --volume=%1/server/src:/find-me-media/server/src^
    %2 /bin/sh