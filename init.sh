#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

docker network create pg_search_sequelize_example
pg_container_id=$(docker run --name pg-search-sequelize-example-db --network pg_search_sequelize_example -d mujz/movies-pg)
echo "Postgres server started on: $(docker inspect $pg_container_id --format {{.NetworkSettings.IPAddress}})"

docker build -t mujz/pg-search-sequelize-example .
node_container_id=$(docker run --name pg-search-sequelize-example-node --network pg_search_sequelize_example -d mujz/pg-search-sequelize-example)
echo "Node server started on: $(docker inspect $node_container_id --format {{.NetworkSettings.IPAddress}})"

