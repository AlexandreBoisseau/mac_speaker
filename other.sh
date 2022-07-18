#!/bin/bash


(
    while true; do
        osascript -e "set Volume 3"
    done
) &

echo "$!" > sound.pid
