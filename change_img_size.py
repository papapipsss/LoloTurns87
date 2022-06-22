from os import listdir, path
from os.path import isfile, join
from PIL import Image

size = 1280, 720

mypath = "C:/Users/Joshua Felipe/Downloads/New folder/"
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

counter = 52
for i in onlyfiles:
    path = mypath + i
    outfile = str(counter) + "-edited"
    try:
        im = Image.open(path)
        im.thumbnail(size, Image.ANTIALIAS)
        im.save("C:/Users/Joshua Felipe/OneDrive/Desktop/CODING/PROJECTS/Birthday_Lolo/assets/new-blocks/" + outfile + ".jpg")
        counter += 1
    except IOError:
        print("cannot create thumbnail for " + i)

