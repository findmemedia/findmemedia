# To run container using this script, type ./run.sh <container-name>
WORK_DIR=$(pwd)

sudo docker run -it --net=host \
	--volume=${WORK_DIR}/client/public:/find-me-media/client/public \
	--volume=${WORK_DIR}/client/src:/find-me-media/client/src \
	--volume=${WORK_DIR}/client/.gitignore:/find-me-media/client/.gitignore \
	--volume=${WORK_DIR}/client/README.md:/find-me-media/client/README.md \
	--volume=${WORK_DIR}/server/src:/find-me-media/server/src \
	--volume=${WORK_DIR}/data-retrieval:/find-me-media/data-retrieval \
	$1 /bin/sh
