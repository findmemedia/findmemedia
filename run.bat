@REM To run container using this script, type .\run.bat <container-name>

set wd=%cd%
docker run -it -p 3000:3000 -p 8080:8080^
    --volume=%wd%/client/public:/find-me-media/client/public^
    --volume=%wd%/client/src:/find-me-media/client/src^
    --volume=%wd%/client/.gitignore:/find-me-media/client/.gitignore^
    --volume=%wd%/client/README.md:/find-me-media/client/README.md^
    --volume=%wd%/server/src:/find-me-media/server/src^
    --volume=%wd%/data-retrieval:/find-me-media/data-retrieval^
    %1 /bin/sh