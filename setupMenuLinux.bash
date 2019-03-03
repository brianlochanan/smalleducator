#!/usr/bin/env bash

# Install Nodejs.
function installNodejs {
sudo apt-get install nodejs -y
status=$?

if [ $status -eq 0 ]; then
    echo "Nodejs installed";
else
    echo "Nodejs not installed";
fi
}

function startContainers {
# Pull and run Docker containers.
docker-compose up

status_2=$?

if [ $status_2 -eq 0 ]; then
    echo "Docker containers running";
else
    echo "Docker containers failed to run";
fi
}

#Main menu.
#@IS_SUDO_INSTALLED
#@RUNNING_WITHIN_ROOT_REPOSITORY
function menuSmallEducator {
while :
do
    clear
    cat<<EOF
    ==============================
    Menu Smalleducator Installation Linux
    ------------------------------
    
    Please enter your choice:
    Install Node		       (1)
    Start Containers                   (2)
    Quit                               (Q)
    ------------------------------
EOF
    read -n1 -s
    case "$REPLY" in
    "1")  echo "you chose choice 1"
    installNodejs
    ;;   
    "2")  echo "you chose choice 2"
    startContainers
    ;;
    "Q")  exit
    ;;
    "q")  exit
    ;; 
     * )  echo "Invalid option."
    ;;
    esac
    sleep 1
done
}

#Main
menuSmallEducator
