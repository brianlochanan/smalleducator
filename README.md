# SmallEducator Project

Unity Client 2018.2.16f1

Gateway
- ApiGateway

Services
- AuthenticationSerivce (+)
- CommunicationSerivce
- GenericDatabase (+)
- GenericService (+)
- PlaylistService (+)
- ProgressService (+)
- QuizSerice (+)

Technology stack
- Node V10.
- Sails V1.1.
- MySQL V5.7.

## Installation docker

### One time setup

install Docker Toolbox

install VM virtualBox

create a VM named 'docker'. Docker toolbox might give this vm the name 'default'.

git clone git@gitlab.fdmci.hva.nl:lieropc001/smalleducator.git

### Run docker

docker-machine docker

docker-machine env Docker

execute the commands that are outputed

docker-compose build

docker-compose up

## Install local

install Node 10.15.3

`npm install sails -g`

do 'npm install' for every services

do npm lift for every service

## Create Network
sudo docker network create --subnet=172.32.0.0/24 smalleducator #http://jodies.de/ipcalc?host=172.32.0.1&mask1=24&mask2=

## Exposed of service
NODE_ENV=development

* API_GATEWAY_PORT=8000
* PRO_PORT=8001
* QUIZ_PORT=8002
* LOGIN_PORT=8003
* GEN_PORT=8004
* PLAYLIST_PORT=8005
* CLASS_PORT=8008
* COM_PORT=8009

* PRO_DB_PORT=9001
* QUIZ_DB_PORT=9002
* LOGIN_DB_PORT=9003
* GEN_DB_PORT=9004
* PLAYLIST_DB_PORT=9005
* CLASS_DB_PORT=9008
* COM_DB_PORT=9009

