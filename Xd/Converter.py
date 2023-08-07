def convert(num):
    x = num % 3125 - 1
    y = int(num / 3125)

    return (x, y)

def new_convert(num):
    x = num % 1953125 - 1
    y = int(num / 1953125)

    return (x, y)

def n(num):
    print(new_convert(num))

def c(num):
    print(convert(num))

def mass_convert(num_list):
    converted_list = []
    for num in num_list:
       x = num % 3125 - 1
       y = int(num / 3125)
       converted_list.append((x, y))

    return converted_list

if __name__ == "__main__":
    c(1) # (0, 0)
    c(2) # (1, 0)
    c(3) # (2, 0)

    print("-----")

    n(1)
    n(2)
    n(3)
    n(1953128)
    n(3906253)
    n(3906254)
    n(3906255)
    n(3906260)
    n(3906265)
    n(4296890)

    # Current true path /part2/puzzle/1/2/3/1953128/3906253/3906254/3906255/3906260/3906265/4296890

    # c(1953128) # (2, 1)
    # c(3906253)
    # print('--------------')
    # c(3906252) # -> left branch deadend
    # c(3906252)
    # c(3906251)
    # print('-----------------')
    # c(3906254) # True path
    # c(3906255)
    # print('------------------') # Another branch here
    # c(1953130) # /part2/puzzle/1/2/3/1953128/3906253/3906254/3906255/1953130/5 deadend
    # c(3906260) 
    # c(3906265)
 
    # c(1953140) # /part2/puzzle/1/2/3/1953128/3906253/3906254/3906255/3906260/3906265/1953140/15 deadend
    # c(3906264) # /part2/puzzle/1/2/3/1953128/3906253/3906254/3906255/3906260/3906265/3906264/3906263/3906262/3906261 daedend
    # c(4296890) # Current true path /part2/puzzle/1/2/3/1953128/3906253/3906254/3906255/3906260/3906265/4296890
    # c(4687515)
    
    # c(4687510)
    # c(4687514)
    # c(5078140)
    # print("------------------")

    # c(4687505)
    # c(2734380)
    # c(4687504)
    # c(781255) # /part2/puzzle/1/2/3/1953128/3906253/3906254/3906255/3906260/3906265/4296890/4687515/4687510/4687505/2734380/781255 deadend
    
    # c(4687504)
    # c(5076649)