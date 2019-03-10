sudo docker build -t genericservice .
sudo docker run --net smalleducator --ip 172.32.0.3 -it -d -p 8004:8004 genericservice
