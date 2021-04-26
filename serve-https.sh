#!/usr/bin/env sh

./create-ssl.sh

ng build --prod
http-server -p 8083 -S -K key.pem -C cert.pem -c-1 dist/holify/browser

