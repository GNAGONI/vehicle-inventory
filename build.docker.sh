docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -a -q)

docker build . -t mhancharou/vehicle-inventory -f Dockerfile
docker run -p 5000:5000 -d mhancharou/vehicle-inventory
