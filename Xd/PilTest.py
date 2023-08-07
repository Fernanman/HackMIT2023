from PIL import Image, ImageColor

im = Image.new('1', (1,1)) # create the Image of size 1 pixel 
im.putpixel((0,0), ImageColor.getcolor('black', '1')) # or whatever color you wish

im.save('simplePixel.png') # or any image format