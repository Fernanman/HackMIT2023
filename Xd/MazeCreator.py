from PIL import Image, ImageColor
import numpy as np

class Xd:
    def __init__(self, readme, dim):
        self.readme = readme
        self.dim = dim
        self.readme_nums = []
        self.xy = (0, 0)
        self.path_list = [(0, 0)]
        self.full_path = ""
        self.get_num_list()

    def binary_search(self, arr, low, high, x):
        # Check base case
        if high >= low:
    
            mid = (high + low) // 2
    
            # If element is present at the middle itself
            if arr[mid] == x:
                return True
    
            # If element is smaller than mid, then it can only
            # be present in left subarray
            elif arr[mid] > x:
                return self.binary_search(arr, low, mid - 1, x)
    
            # Else the element can only be present in right subarray
            else:
                return self.binary_search(arr, mid + 1, high, x)
    
        else:
            # Element is not present in the array
            return False

    def get_num_list(self):
        raw_text = ""
        with open(self.readme, "rt") as f:
            raw_text = f.read()

        nums = raw_text.split(" ")

        while "" in nums:
            nums.remove("")
        while " " in nums:
            nums.remove(" ")

        for i in range(len(nums)):
            if "\n" in nums[i]:
                nums[i] = nums[i].replace("\n", "")
            nums[i] = int(nums[i])
        
        self.readme_nums = nums
        return nums

    def binary_create_maze(self, name):
        maze_string = ""
        counter = 0
        current_y = 0

        for i in range(1, (self.dim[0] * self.dim[1] + 1)):
            if counter == self.dim[0]:
                maze_string += "\n"
                counter = 0
                current_y += 1
                print(current_y)
            if self.binary_search(self.readme_nums, 0, len(self.readme_nums)-1, i):
                maze_string += "1"
            else:
                maze_string += "0"

            counter += 1

        with open(name, "wt") as f:
            f.write(maze_string)

    def image_create_maze(self, text, name, reverse=False):
        with open(text, "rt") as f:
            maze_string = f.read()

        im = Image.new('1', (self.dim[0], self.dim[1])) # create the Image 
        cur_x = 0
        cur_y = 0

        if reverse:
            color_1 = 'white'
            color_2 = 'black'
        else:
            color_1 = 'black'
            color_2 = 'white'

        for char in maze_string:
            if char == '0':
                #print("0")
                im.putpixel((cur_x, cur_y), ImageColor.getcolor(color_1, '1')) 
                cur_x += 1
            elif char == '1':
                #print('1')
                im.putpixel((cur_x, cur_y), ImageColor.getcolor(color_2, '1')) 
                cur_x += 1
            elif char == '\n':
                cur_y += 1
                cur_x = 0
                print("Current y:", cur_y)

        im.save(name) # or any image format
        print(name, "saved!")

    def parse_maze_test(self, image_name):
        img = Image.open(image_name)
        rgb_img = img.convert('RGB')
        path_list = []

        #img_array = np.asarray(img)

        # print(img_array.shape)
        # print(img_array[31])

        for x in range(self.dim[0]):
            for y in range(self.dim[1]):
                rgb = rgb_img.getpixel((x, y))

                if rgb != (0, 0, 0) and rgb != (255, 255, 255):
                    path_list.append((x, y))
            
        return path_list

    def pasre_maze_one(self, image_name):
        img = Image.open(image_name)
        rgb_img = img.convert('RGB')

        while self.xy != (self.dim[0] - 1, self.dim[1] - 1):
            self.move(rgb_img)
            print(self.path_list)

    def move(self, rgb_img):
        if self.try_move_right(rgb_img):
            self.path_list.append(self.xy) # Maybe need to make a copy
        elif self.try_move_left(rgb_img):
            self.path_list.append(self.xy)
        elif self.try_move_up(rgb_img):
            self.path_list.append(self.xy)
        elif self.try_move_down(rgb_img):
            self.path_list.append(self.xy)



    def check_bounds(self):
        if self.xy[0] < 0 or self.xy[0] > self.dim[0] - 1 \
        or self.xy[1] < 0 or self.xy[1] > self.dim[1] - 1:
            return False
        else:
            return True
        
    def try_move_right(self, rgb_img):
        self.xy = (self.xy[0] + 1, self.xy[1])
        if not self.check_bounds:
            self.xy = (self.xy[0] - 1, self.xy[1])
        else:
            rgb = rgb_img.getpixel((self.xy[0], self.xy[1]))

            if rgb != (0, 0, 0) and rgb != (255, 255, 255):
                rgb_img.putpixel((self.xy[0] - 1, self.xy[1]), ImageColor.getcolor('black', '1'))
                return True
            else: 
                self.xy = (self.xy[0] - 1, self.xy[1])
        
        return False
        
    def try_move_left(self, rgb_img):
        self.xy = (self.xy[0] - 1, self.xy[1])
        if not self.check_bounds:
            self.xy = (self.xy[0] + 1, self.xy[1])
        else:
            rgb = rgb_img.getpixel((self.xy[0], self.xy[1]))

            if rgb != (0, 0, 0) and rgb != (255, 255, 255):
                rgb_img.putpixel((self.xy[0] + 1, self.xy[1]), ImageColor.getcolor('black', '1'))
                return True
            else: 
                self.xy = (self.xy[0] + 1, self.xy[1])

        return False

    def try_move_up(self, rgb_img):
        self.xy = (self.xy[0], self.xy[1] - 1)
        if not self.check_bounds:
            self.xy = (self.xy[0], self.xy[1] + 1)
        else:
            rgb = rgb_img.getpixel((self.xy[0], self.xy[1]))

            if rgb != (0, 0, 0) and rgb != (255, 255, 255):
                rgb_img.putpixel((self.xy[0], self.xy[1] + 1), ImageColor.getcolor('black', '1'))
                return True
            else: 
                self.xy = (self.xy[0], self.xy[1] + 1)
        
        return False

    def try_move_down(self, rgb_img):
        self.xy = (self.xy[0], self.xy[1] + 1)
        if not self.check_bounds:
            self.xy = (self.xy[0], self.xy[1] - 1)
        else:
            rgb = rgb_img.getpixel((self.xy[0], self.xy[1]))

            if rgb != (0, 0, 0) and rgb != (255, 255, 255):
                rgb_img.putpixel((self.xy[0], self.xy[1] - 1), ImageColor.getcolor('black', '1'))
                return True
            else: 
                self.xy = (self.xy[0], self.xy[1] - 1)

        return False


    def convert_coordinate(self):
        for i in range(len(self.path_list)):
            self.path_list[i] = self.path_list[i][0] + (self.path_list[i][1] * self.dim[1]) + 1
    
    def create_full_path(self, initial_path):
        self.full_path = initial_path

        for path in self.path_list:
            self.full_path += "/" + str(path)



if __name__ == "__main__":
    # maze_one = Xd("README1.txt", (31, 31))
    # maze_one.pasre_maze_one("MazePathOne.png")
    # maze_one.convert_coordinate()
    # maze_one.create_full_path("/part1/puzzle")
    # print(len(maze_one.path_list))
    # print(maze_one.full_path)

    # maze_two_3125 = Xd("README2.txt", (3125, 3125))

    maze_two_625 = Xd("README2.txt", (625, 15625))
    #maze_two_625.binary_create_maze("MazeTwo625.txt")
    maze_two_625.image_create_maze("MazeTwo625.txt", "MazeTwo625.png")
    maze_two_15625 = Xd("README2.txt", (15625, 625))
    #maze_two_15625.binary_create_maze("MazeTwo15625.txt")
    maze_two_15625.image_create_maze("MazeTwo15625.txt", "MazeTwo15625.png")


    maze_two_125 = Xd("README2.txt", (125, 78125))
    #maze_two_125.binary_create_maze("MazeTwo125.txt")
    maze_two_125.image_create_maze("MazeTwo125.txt", "MazeTwo125.png")
    maze_two_78125 = Xd("README2.txt", (78125, 125))
    #maze_two_78125.binary_create_maze("MazeTwo78125.txt")
    maze_two_78125.image_create_maze("MazeTwo78125.txt", "MazeTwo78125.png")

    maze_two_25 = Xd("README2.txt", (25, 390625))
    #maze_two_25.binary_create_maze("MazeTwo25.txt")
    maze_two_25.image_create_maze("MazeTwo25.txt", "MazeTwo25.png")
    maze_two_390625 = Xd("README2.txt", (390625, 25))
    #maze_two_390625.binary_create_maze("MazeTwo390625.txt")
    maze_two_390625.image_create_maze("MazeTwo390625.txt", "MazeTwo390625.png")


    maze_two_5 = Xd("README2.txt", (5, 1953125))
    #maze_two_5.binary_create_maze("MazeTwo5.txt")
    maze_two_5.image_create_maze("MazeTwo5.txt", "MazeTwo5.png")
    maze_two_1953125 = Xd("README2.txt", (1953125, 5))
    #maze_two_1953125.binary_create_maze("MazeTwo1953125.txt")
    maze_two_1953125.image_create_maze("MazeTwo1953125.txt", "MazeTwo1953125.png")

    