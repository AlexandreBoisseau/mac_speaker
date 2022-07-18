#!/bin/bash


curl https://aleboi3.dreamhosters.com/e.mp3 --output e.mp3
afplay e.mp3 &


echo "$!" > mp3.pid