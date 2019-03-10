#!/usr/bin/env bash

#Create Docker Subnet
sudo docker network create --subnet=172.32.0.0/24 smalleducator #http://jodies.de/ipcalc?host=172.32.0.1&mask1=24&mask2=

sudo docker inspect smalleducator

sudo docker build --no-cache -t sqldb .
sudo docker run --net smalleducator --ip 172.32.0.2 -it -d -p 3306:3306 sqldb
#sudo docker container ps # ---Search Container ID---
#sudo docker exec -it #---<containerID> and then bash uncommented #--- bash

# ---Bash in the container 'user root' user root, password root, 'another user:' user password user
#mysql -u root -proot

# ---In SQL shell---
#show databases;


#cd smalleducator/GenericService/
#sudo docker build -t genericservice .
#sudo docker run --net smalleducator --ip 172.32.0.3 -it -d -p 8004:8004 genericservice
#sudo docker exec -it #---<containerID> and then bash uncommented #--- bash

# ---in JS shell---
#sails lift --port 8004

# ---LookUp IP replace <> with your containerID---
#sudo docker inspect <containerId> | grep '"IPAddress"' | head -n 1

#sails lift --port 8004

