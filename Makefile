build:
    docker-compose --project-name=mongoDBMax build

up:
	docker-compose --project-name=mongoDBMax up

down:
	docker-compose --project-name=mongoDBMax down

stop:
	docker-compose --project-name=mongoDBMax stop

start:
	docker-compose --project-name=mongoDBMax start

exec:
	docker exec -it mongodbmax_db_1 bash
