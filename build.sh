#!/usr/bin/env sh
cd ./app
npm run build
cd dist
cp -r ./ ../../docker/builds/app/
cd ../../docker/builds
docker build -t cac-app .
cd ../../server/
docker build -t cac-server .
