#!/bin/bash

for n in {1..100};
do
    base_string="hack{"
    inside="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    
    base_string+="$inside"
    base_string+="}"
    
    start_time=$(date +%s%N)
    ./vm --trace puzzle1  <<< $full_string
    end_time=$(date +%s%N)
    time=$((end_time - start_time))

    if [ $n -eq 1 ]
    then
        min_time=$time
    elif [ $time -lt $min_time ]
    then
        min_time=$time
    fi
done

echo min_time: $min_time
