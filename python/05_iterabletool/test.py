import time

print("Start")
username ="abhishek"
print("Username is: ", username)


# f = open("test.txt", "r")           # Open file in read mode
# f.__next__()                        # Row method is not supported



mylist = [1, 2, 3, 4, 5]

i = iter(mylist)                    # Create an iterator object
print(i.__next__())                  # Print first element


# >>> mylist = [1, 2, 3, 4, 5]
# >>> 
# >>> mylist = [1, 2, 3, 4, 5]
# >>> i = iter(mylist)   
# >>> i
# <list_iterator object at 0x1046036d0>
# >>> i.__next__();
# 1
# >>> i.__next__();
# 2
# >>> i.__next__();
# 3
# >>> i.__next__();
# 4
# >>> i.__next__();
# 5
# >>> i.__next__();
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# StopIteration
# >>> 




# for line in open("test.txt", "r"):               # Open file in read mode
#     print(line, end="")