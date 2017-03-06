#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

docker network create pg_search_sequelize_example
docker run --name pg-search-sequelize-example-db --network pg_search_sequelize_example -d mujz/movies-pg

docker build -t mujz/pg-search-sequelize-example .
docker run --name pg-search-sequelize-example-node -p 3000:80 --network pg_search_sequelize_example -d mujz/pg-search-sequelize-example

