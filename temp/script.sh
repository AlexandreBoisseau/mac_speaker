#!/bin/bash


# Run the following code in background:
(
    while true; do
        
        sleep 1

        data=$(curl https://aleboi3.dreamhosters.com/data.txt)
        stop="stop sur la vie de ma mere"
        music="%%"

        if [ "$data" == "$stop" ];
        then

            pidsound=$(cat sound.pid)
            kill "$pidsound"

            pidmp3=$(cat mp3.pid)
            kill "$pidmp3"

            pid=$(cat daemon.pid)
            kill "$pid"

            exit 1
        else
            if [ "$data" == "$music" ];
            then
                sh mp3.sh
            else
                echo $data | say --voice="Thomas"
            fi
        fi
    done
) &

# Write pid of the child to the pidfile:

echo "$!" > daemon.pid
sh other.sh &
exit
#echo a & sh script.sh blabla.bl

