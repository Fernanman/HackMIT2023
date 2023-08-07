import subprocess
import os
import itertools
import random
from string import ascii_lowercase, ascii_uppercase
from time import time_ns, sleep
import pickle
import timeit

# import timeit

allowed_chars =  ascii_lowercase + "_0123456789" + ascii_uppercase

def random_str(size):
    return ''.join(random.choices(allowed_chars, k=size))


def run_attack(password):
    run_vm = subprocess.Popen("/home/user/Shared/vm --trace /home/user/Shared/puzzle1",
                              shell=True, stdin=subprocess.PIPE,
                              stdout=subprocess.PIPE,
                              stderr=subprocess.PIPE
                              )

    my_pass = (password + '\n').encode('UTF-8')
    out = run_vm.communicate(input=my_pass)
    #print(out[0])
    # print("finished")
    login_status = out[0].decode('UTF-8')[-21:-1]
    return login_status != 'sorry, login failed!'


def find_length(max_len=100):
    trials = 100
    times = {}

    for i in range(max_len):
        my_string = "hack{" + 'a' * i
        #print(my_string)
        i_time = timeit.repeat(stmt='run_attack(x)',
                               setup=f'x={my_string!r}',
                               globals=globals(),
                               number=trials,
                               repeat=10)
        times[i] = min(i_time)

    most_likely = sorted(times, key=times.get, reverse=True)[0]
    print("Likely length", most_likely)
    return most_likely


def crack_password(verbose=False):
    length = 48 - 6 - 2
    guess = random_str(length)
    counter = itertools.count()
    trials = 100
    while True:
        i = next(counter) % length
        for c in allowed_chars:
            alt = guess[:i] + c + guess[i + 1:]
            complete_alt = "hack{in" + alt + "}"
            complete_guess = "hack{in" + guess + "}"

            alt_time = timeit.repeat(stmt='run_attack(x)',
                                     setup=f'x={complete_alt!r}',
                                     globals=globals(),
                                     number=trials,
                                     repeat=10)
            guess_time = timeit.repeat(stmt='run_attack(x)',
                                       setup=f'x={complete_guess!r}',
                                       globals=globals(),
                                       number=trials,
                                       repeat=10)

            if run_attack(complete_alt) != 'sorry, login failed!':
                print(f"password cracked:'{complete_alt}'")
                return complete_alt

            if min(alt_time) > min(guess_time):
                guess = alt
                complete_guess = complete_alt
                if verbose:
                    print(complete_guess)

def crack_letter(iterations=1000, part_string=""):
    times = {char: 0 for char in allowed_chars}
    padding = (46 - len(part_string)) * "a"
    letter_index = len(part_string)
    guessed_char = '+'

    while True:
        for i in range(iterations):
            for char in allowed_chars:
                guess = part_string + char + padding + '}'
                print(guess)
                start = time_ns()
                login_status = run_attack(guess)
                end = time_ns()
                times[char] += end - start

                if login_status:
                    print(f"Password cracked! Password is: {guess}")
                    return guess[46]

        sorted_dict = sorted(times, key=times.get, reverse=True)

        if guessed_char == sorted_dict[0]:
            return sorted_dict[0]
        else:
            guessed_char = sorted_dict[0]



    #print(f"For {letter_index}, top 3 are: {sorted_dict[:3]}")


def crack_password_full(part_string="hack{"):
    iters = 47 - len(part_string)
    cracked_letters = []
    print("Starting crack")

    for _ in range(iters):
        next_letter = crack_letter(part_string=part_string)
        part_string += next_letter
        cracked_letters.append(next_letter)
        print("Current crack:", part_string)

    print("Final result: ", part_string + "}")

def triple_for_loop():
    part_string = "hack{in5tructi0n_s3ts_w4nt_t0_b3_fr33_1805201"

    for a in allowed_chars:
        for b in allowed_chars:
            #for c in allowed_chars:
            guess = part_string + a + b + "}"
            print(guess)

            if run_attack(guess):
                print("Password cracked!\n Password:", guess)



if __name__ == "__main__":
    #crack_password(verbose=True)
    #find_length()

    #crack_letter(part_string="hack{")
    #hack{in5tructi0n_s3ts_w4nt_t0_b3_fr33_180520
    #hack{in5tructi0n_s3ts_w4nt_t0_b3_fr33"
    #crack_password_full(part_string="hack{in5tructi0n_s3ts_w4nt_t0_b3_fr33_1805201")
    print(run_attack("hack{in5tructi0n_s3ts_w4nt_t0_b3_fr33_18052010}"))
    # start = time_ns()
    # triple_for_loop()
    # print(time_ns() - start )
