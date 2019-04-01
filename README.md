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
