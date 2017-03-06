#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

docker rm -f pg-search-sequelize-example-db
docker rm -f pg-search-sequelize-example-node
docker network rm pg_search_sequelize_example
