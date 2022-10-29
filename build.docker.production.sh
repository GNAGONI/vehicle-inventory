docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -a -q)

docker build . -t mhancharou/vehicle-inventory-prod -f Dockerfile.production
docker run -p 5000:5000 -d mhancharou/vehicle-inventory-prod