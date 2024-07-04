file = open('youtube.txt', 'w')

try:
    file.write('chai aur code')
finally:
    file.close()

with open('youtube.txt', 'w') as file:
    file.write('chai aur python')
    
    
    
    
    
    
    
    
    

#     <!-- 01 -->
# >>> x = ("masala","ginger","lemon")
# >>> x
# ('masala', 'ginger', 'lemon')
# >>> y = enumerate(x)
# >>> y
# <enumerate object at 0x10c854090>
# >>> list(y)
# [(0, 'masala'), (1, 'ginger'), (2, 'lemon')]
# >>> 



# <!-- 02 -->

# file = open('test.py')


# file = open('test.py','w')        if file is not present then it will create a file and write the content in it



# <!-- 03 -->

# error handling in python

# file = open('test.py')

# try:
#     file.write('hello')
# finally:
#     file.close()
#     print('this will execute always')





# with open('test.py') as file:
#     file.write('hello')
#     print('this will execute always')
