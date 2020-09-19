#!/bin/bash
echo "Start database migration ..."

docker-compose run ecommerce npm run db-migrate
docker-compose run ecommerce npm run db-seed

echo "Done database migration !"