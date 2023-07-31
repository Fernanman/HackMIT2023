import subprocess
import os
from string import ascii_lowercase, ascii_uppercase
from time import time_ns, sleep
import pickle
#import timeit


def run_attack(password):
    run_vm = subprocess.Popen("/home/user/Desktop/HackMIT/vm /home/user/Desktop/HackMIT/puzzle1", 
                            shell=True, stdin=subprocess.PIPE, 
                            stdout=subprocess.PIPE, 
                            stderr=subprocess.PIPE
                            )
    
    my_pass = password.encode('UTF-8')
    out = run_vm.communicate(input=my_pass)
    #print(out[0])
    #print("finished")
    

def test_attack(string):
    run_tester = subprocess.Popen("/home/user/Shared/Tester", 
                            shell=True, 
                            stdin=subprocess.PIPE, 
                            stdout=subprocess.PIPE, 
                            stderr=subprocess.PIPE
                            )

    byte_string = string.encode('UTF-8')
    out = run_tester.communicate(input=byte_string)
    print(out[0].decode('UTF-8'))
    #run_tester.stdin.write(b"hello")
    #run_tester.stdin.flush()


# The buffer of the array is 137 so let's go with that !
def find_length(max_len=137):
    times = {}

    for i in range(1, max_len + 1):
        # Going to try for 1000 iterations and take the minimum
        i_time = []
        for j in range(1000):
            guess = '/' * i
            start = time_ns()
            run_attack(guess)
            end = time_ns()

            i_time.append(end - start)
        
        times[i] = min(i_time)
        print(times[i])

    return times

def check_times(p_file):
    with open(p_file, 'rb') as f:
        times = pickle.load(f)
    
    cur_max = 0
    for length in times:
        if times[length] > cur_max:
            cur_max = times[length]
            correct_length = length
    
    print(f'time[{correct_length}] =', cur_max)

if __name__ == "__main__":
    test_attack("hello")
    #run_attack("test")

    # length_times = find_length()

    # with open("length_times.p", 'wb') as f:
    #     pickle.dump(length_times, f)
    
    # check_times(r"C:\Users\15042\OneDrive\Desktop\HackMIT\Hackvm\length_times_one.p")
    # check_times(r"C:\Users\15042\OneDrive\Desktop\HackMIT\Hackvm\length_times_two.p")
    # check_times(r"C:\Users\15042\OneDrive\Desktop\HackMIT\Hackvm\length_times_three.p")