# Python String and List Operations

# -------------------- String Operations --------------------

# Basic String Handling
chai = "hello world"
print(chai)                 # Output: hello world
print(chai[2])              # Output: l
print(chai[0:5])            # Output: hello
print(chai[6:])             # Output: world
print(chai[-1])             # Output: d


# String Methods
print(chai.lower())         # Output: hello world
print(chai.upper())         # Output: HELLO WORLD

test = "        hello world        "
print(test.strip())         # Output: hello world
print(test.lstrip())        # Output: hello world        
print(test.rstrip())        # Output:         hello world

print(chai.replace("world", "chai"))  # Output: hello chai
print(chai.split(" "))      # Output: ['hello', 'world']

# String Search
print(chai.find("world"))   # Output: 6
print(chai.find("chai"))    # Output: -1
print(chai.index("world"))  # Output: 6

# String Formatting
name = "chai"
age = 30
print("My name is {} and I am {} years old".format(name, age))  # Output: My name is chai and I am 30 years old

# Type Conversions
# String to List
chai = "hello world"
list1 = list(chai)
print(list1)                # Output: ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

# List to String
list1 = ["hello", "world", "chai", "python", "java"]
chai = " ".join(list1)
chai2 = "-".join(list1)
chai3 = "-".join(list1)
print(chai)                 # Output: hello world chai python java
print(chai2)                # Output: hello-world-chai-python-java

# String Checks
test = "hello world"
print(test.startswith("hello"))   # Output: True
print(test.endswith("world"))     # Output: True

# Length of String
print(len(test))             # Output: 11

# Check if String is Digit    means all characters are digits
print(test.isdigit())        # Output: False
print("123".isdigit())       # Output: True

# Check if String is Alpha
print(test.isalpha())        # Output: False (space is not an alpha character)

# Escape Character
chai = "he said, \"hello world\""  
print(chai)                  # Output: he said, "hello world"

# -------------------- List Operations --------------------

# Basic List Handling
number_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(number_list[0:5])      # Output: [1, 2, 3, 4, 5]      (start from 0 and go till 5)
print(number_list[6:])       # Output: [7, 8, 9]            (start from 6 and go till end)
print(number_list[-1])       # Output: 9        (last element)
print(number_list[-3:])      # Output: [7, 8, 9]   (start from -3 and go till end)
print(number_list[-3::2])    # Output: [7, 9]      (start from -3 and skip 1 element)

# List Methods
list3 = ["hello", "world", "hello", "chai", "python", "java"]
print(list3.count("hello"))  # Output: 2

# Split and Join
list1 = "hello, world, chai, python, java"
print(list1.split(", "))            # Output: ['hello', 'world', 'chai', 'python', 'java']
print(list1.split(", ", 2))         # Output: ['hello', 'world', 'chai, python, java']

# -------------------- Additional Important Topics for Development and Competitive Programming --------------------

# List Comprehensions
squares = [x**2 for x in range(10)]
print(squares)              # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# String Interpolation (f-strings)
name = "chai"
age = 30
print(f"My name is {name} and I am {age} years old")  # Output: My name is chai and I am 30 years old       f-string is used to format the string

# Advanced String Manipulation
import re

# Using regular expressions
pattern = re.compile(r'\bworld\b')
match = pattern.search(chai)
if match:
    print("Found 'world'")  # Output: Found 'world'

# Handling Special Characters in Strings
special_chars = "Special characters: \n \t \\ \" \'"
print(special_chars)
# Output:
# Special characters: 
# 	 \ " '

# Iterating Over Strings and Lists

# Iterate over each character in a string
for char in chai:
    print(char, end=" ")

# Iterate over each item in a list
for item in number_list:
    print(item, end=" ",)
