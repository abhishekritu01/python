# Dictionary Basics
# ----------------
# key:value pairs
# key is unique
# value can be any data type

chai_type = {"masala": "spicy", "adrak": "ginger", "elaichi": "cardamom"}

print(chai_type)
print(chai_type["masala"])  # access value using key
print(chai_type.get("masala"))  # access value using get() method

chai_type["adrak"] = "ginger powder"  # update the value
print(chai_type)


# Iteration
# ---------
# Iterating through keys
for key in chai_type:
    print(key, ":", chai_type[key])

# Iterating through key-value pairs
for key, value in chai_type.items():
    print(key, ":", value)


# Check if key exists
# -------------------
if "masala" in chai_type:
    print("Yes, 'masala' is one of the keys in the chai_type dictionary")
else:
    print("No, 'masala' is not one of the keys in the chai_type dictionary")

print(len(chai_type))  # length of dictionary


# Deleting elements
# -----------------
# chai_type.pop("masala")  # remove item with key "masala"
# print(chai_type)

# print(chai_type.popitem())  # remove the last item

del chai_type["masala"]  # remove item with key "masala"
print(chai_type)


# Copying a dictionary
# --------------------
chai_type_copy = chai_type.copy()
print(chai_type_copy)


# Nested Dictionaries
# -------------------
tea_shop = {
    "chai": {"masala": "spicy", "adrak": "ginger", "elaichi": "cardamom"},
    "coffee": {"black": "without milk", "latte": "with milk"}
}

print(tea_shop)
print(tea_shop["chai"])  # access nested dictionary
print(tea_shop["chai"]["masala"])  # access value in nested dictionary


# Dictionary Comprehension
# ------------------------
square_number = {x: x**2 for x in range(6)}
print(square_number)
square_number.clear()  # clear dictionary
print(square_number)


# Creating dictionary from keys
# -----------------------------
Keys = ["masala", "adrak", "elaichi"]
default_value = "Delicious"

new_chai_type = dict.fromkeys(Keys, default_value)
print(new_chai_type)


# Merging Dictionaries
# --------------------
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}
merged_dict = {**dict1, **dict2}  # merge dictionaries
print(merged_dict)


# Using defaultdict from collections
# ----------------------------------
from collections import defaultdict

dd = defaultdict(lambda: "Not Present")
dd["a"] = 1
print(dd["a"])
print(dd["b"])  # returns default value


# Deep Copying Dictionaries
# -------------------------
import copy

original = {'a': 1, 'b': {'c': 2}}
shallow_copy = original.copy()
deep_copy = copy.deepcopy(original)

shallow_copy['b']['c'] = 3
print(original['b']['c'])  # shallow copy affects the original

deep_copy['b']['c'] = 4
print(original['b']['c'])  # deep copy does not affect the original


# Complex Keys
# ------------
complex_key_dict = {(1, 2): "tuple_key", frozenset([3, 4]): "frozenset_key"}
print(complex_key_dict[(1, 2)])
print(complex_key_dict[frozenset([3, 4])])


# Practical Use Cases
# -------------------
# Example: Counting frequency of elements in a list
from collections import Counter

elements = ["apple", "banana", "apple", "orange", "banana", "apple"]
frequency = Counter(elements)
print(frequency)


# Performance Considerations
# --------------------------
# Dictionaries have average O(1) time complexity for lookups, insertions, deletions


# Dictionary Views
# ----------------
print(chai_type.keys())  # view keys
print(chai_type.values())  # view values
print(chai_type.items())  # view key-value pairs


# Advanced Dictionary Methods
# ---------------------------
# setdefault()
value = chai_type.setdefault("tulsi", "holy basil")
print(value)
print(chai_type)

# update()
chai_type.update({"ginger": "spicy ginger", "masala": "rich spices"})
print(chai_type)

# pop()
pop_value = chai_type.pop("masala")
print(pop_value)
print(chai_type)
