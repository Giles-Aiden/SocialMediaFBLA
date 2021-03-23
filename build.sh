#!/usr/bin/env sh
cd ./app
npm run build
cd dist
cp -r ./ ../../docker/builds/app/dist
cd ../../docker/builds/app
npm install
docker build -t cac-app .
cd ../../../server/
docker build -t cac-server .
