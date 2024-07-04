# Original List
tea_varities = ['Darjeeling', 'Assam', 'Nilgiri', 'Sikkim', 'Kangra']
print("Original List:", tea_varities)

# Slicing Examples
print("Sliced (1:3):", tea_varities[1:3])  # Output: ['Assam', 'Nilgiri']
print("Sliced (:3):", tea_varities[:3])   # Output: ['Darjeeling', 'Assam', 'Nilgiri']
print("Sliced (3:):", tea_varities[3:])   # Output: ['Sikkim', 'Kangra']

# Change Elements
tea_varities[1:3] = ['Munnar', 'Wayanad']  # Replace 2nd and 3rd elements
tea_varities[4] = 'Kerala'                 # Replace 5th element
print("Updated List:", tea_varities)

# Remove an Element
tea_varities[1:3] = ['Lemon']  # Replace 2nd and 3rd elements with 'Lemon'
if 'Lemon' in tea_varities:
    print("Lemon is available")

# Append Elements
tea_varities.append('Kerala')  # Append 'Kerala' to the end of the list
print("Appended List:", tea_varities)

# Insert Elements
tea_varities.insert(2, 'Munnar')  # Insert 'Munnar' at the 3rd position
print("List after Insertion:", tea_varities)

# Pop Elements
tea_varities.pop()  # Remove the last element from the list
print("Popped List:", tea_varities)

# Sort the List
print("Sorted List:", sorted(tea_varities))  # Return a new sorted list

# List Comprehensions
square = [x**2 for x in range(10)]
print("Square List:", square)

cube = [x**3 for x in range(10) if x % 2 == 0]
print("Cube List:", cube)

# Additional List Methods

# extend() - Extends the list by appending all the elements from another list
additional_varieties = ['Chamomile', 'Peppermint']
tea_varities.extend(additional_varieties)
print("Extended List:", tea_varities)

# remove() - Removes the first item from the list that matches the specified value
tea_varities.remove('Lemon')
print("List after Removing 'Lemon':", tea_varities)

# index() - Returns the index of the first element with the specified value
print("Index of 'Munnar':", tea_varities.index('Munnar'))

# count() - Returns the number of elements with the specified value
print("Count of 'Kerala':", tea_varities.count('Kerala'))

# reverse() - Reverses the order of the list
tea_varities.reverse()
print("Reversed List:", tea_varities)

# clear() - Removes all elements from the list
tea_varities.clear()
print("Cleared List:", tea_varities)


# List Operations            
list1 =[11,2,13,4,5]
list2 = [6,7,8,9,10]

# Concatenation
list3 = list1 + list2

sorted_list = sorted(list3)
print("Sorted List:", sorted_list)



# usnion 

list1 = [1,2,3,4,5]
list2 = [4,5,6,7,8]
