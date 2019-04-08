docker build --no-cache -t api-gateway .
docker run --net smalleducator --ip 172.32.0.125 -it -d -p 8080:8080 api-gateway
