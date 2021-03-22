#!/usr/bin/env sh
sh ./build.sh
echo "Make sure to change Database root user password! Or else it will be easily stolen as it is stored in plain text on the container. You have been WARNED!!!"
sh ./start.sh
