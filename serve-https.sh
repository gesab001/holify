#!/usr/bin/env sh

./create-ssl.sh

http-server -S -K key.pem -C cert.pem -c-1 dist/holify

