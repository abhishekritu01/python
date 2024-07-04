
# list is mutable ,but tuple is immutable
# -----------------------------

from traceback import print_tb


tea_types = ("masala", "adrak", "elaichi")
print(tea_types)

print(tea_types[0])
print(tea_types[-1])

print(len(tea_types))

tea_types = tea_types + ("ginger", "cardamom")

print(tea_types)


if "masala" in tea_types:
    print("Yes, 'masala' is in the tea_types tuple")
else:
    print("No, 'masala' is not in the tea_types tuple")
    
    
    
    

tea_types1 = ("masala", "adrak", "elaichi")
tea_types2 = ("ginger", "cardamom")

tea_types = tea_types1 + tea_types2 # concatenate two tuples
