from PIL import Image, ImageColor
import json
import pickle
import os

class IId:
    def __init__(self, readme, dim):
        self.readme = readme
        self.dim = dim
        self.readme_nums = []
        self.xy = (0, 0)
        self.path_list = [(0, 0)]
        self.full_path = ""

        self.get_num_list()
        self.pasre_maze_one("MazePathOne.png")
        self.convert_coordinate()
        self.create_full_path("/part1/puzzle")

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

class Xd:
    def __init__(self, readme):
        self.readme = readme
        self.readme_nums = []
        self.coord_num_dict = {}
        self.move_map = {}
        self.path_list = []
        self.full_path = "/part2/puzzle"

        self.get_num_list()
        self.create_coord_num_dict()
        self.create_move_map()
        self.find_path()

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

    def num_to_Xd(self, num):
        num -= 1
        base_five = [0] * 10;
    
        i = 0;
        while (num > 0):
            base_five[i] = num % 5;
            num = int(num / 5);
            i += 1;

        Xd_base_five = tuple(base_five)
        return Xd_base_five  

    def Xd_to_num(self, Xd):
        Xd_sum = 1

        for i, num in enumerate(Xd):
            Xd_sum += num * (5 ** i)

        return Xd_sum
    
    def create_coord_num_dict(self):
        if os.path.isfile("CoordConvert.pickle"):
            with open("CoordConvert.pickle", 'rb') as f:
                self.coord_num_dict = pickle.load(f)

            print("Loaded CoordConvert from file")
        else:
            for num in range(1, 9765626):
                self.coord_num_dict[self.num_to_Xd(num)] = num

            with open("CoordConvert.pickle", 'wb') as f:
                pickle.dump(self.coord_num_dict, f)

            print("Created CoordConvert")
        
    def create_move_map(self):
        if os.path.isfile("movemap.json"):
            with open("movemap.json", 'r') as f:
                placeholder = json.load(f)
            
            for num in placeholder:
                self.move_map[int(num)] = placeholder[num]
            print("Loaded Movemap from file")
        else:
            for num in self.readme_nums:
                possible_moves = []

                coord = self.num_to_Xd(num)
                for i in range(0, 10):
                    if coord[i] == 0:
                        move_up = self.coord_num_dict[coord[:i] + (coord[i] + 1, ) + coord[i+1:]]

                        if self.binary_search(self.readme_nums, 0, 
                                              len(self.readme_nums)-1, move_up):
                            possible_moves.append(move_up)
                    elif coord[i] == 4:
                        move_down = self.coord_num_dict[coord[:i] + (coord[i] - 1, ) + coord[i+1:]]

                        if self.binary_search(self.readme_nums, 0, 
                                              len(self.readme_nums)-1, move_down):
                            possible_moves.append(move_down)
                    else:
                        move_up = self.coord_num_dict[coord[:i] + (coord[i] + 1, ) + coord[i+1:]]
                        move_down = self.coord_num_dict[coord[:i] + (coord[i] - 1, ) + coord[i+1:]]

                        if self.binary_search(self.readme_nums, 0, 
                                              len(self.readme_nums)-1, move_up):
                            possible_moves.append(move_up)
                        if self.binary_search(self.readme_nums, 0, 
                                              len(self.readme_nums)-1, move_down):
                            possible_moves.append(move_down)

                self.move_map[num] = possible_moves

            

            with open("movemap.json", 'w') as f:
                json.dump(self.move_map, f, indent=4) # Could also use dumps and write 
                print("Wrote Movemap to file")

    def find_path(self, current_path=[1]):
        for possible_move in self.move_map[current_path[-1]]:
            if possible_move not in current_path:
                new_path = current_path + [possible_move]

                if new_path[-1] == 9765625:
                    print("Found path!")
                    self.path_list = new_path
                    self.path_to_dir()

                self.find_path(new_path)

    def path_to_dir(self):
        for path in self.path_list:
            self.full_path += "/" + str(path)
        print(f"--------------------\n{self.full_path}\n--------------------")
        return self.full_path
        
                        
if __name__ == "__main__":
    maze_one = IId("README1.txt", (31, 31))
    print(maze_one.full_path)

    print("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")

    maze_two_Xd = Xd("README2.txt")
    print(maze_two_Xd.full_path)
