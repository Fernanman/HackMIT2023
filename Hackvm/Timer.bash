#!/bin/bash

for n in {1..10000};
do
    start=$(date +%s%N)
    ./Tester <<< i
    end=$(date +%s%N)
    time=$((end - start))

    if [ $n -eq 1 ]
    then 
        min_correct=$time
    elif [ $time -lt $min_correct ]
    then
	min_correct=$time
    fi

    echo that took $time nanoseconds $n
done

echo min_correct => $min_correct
