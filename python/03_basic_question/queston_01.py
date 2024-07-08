
# Age = 60 

# if Age < 13:
#     print("You are a child")
# elif Age < 19:
#     print("You are a teenager")
# elif Age < 59:
#     print("You are an adult")
# else:
#     print("You are a senior")
    
    
 
#  Problem: Movie tickets are priced based on age: $12 for adults (18 and over), $8 for children. Everyone gets a $2 discount on Wednesday.
    

age = 20 
day = "Wednesday"

if age >= 18:
    if day == "Wednesday":
        print("Your ticket price is $10")
    else:
        print("Your ticket price is $12")
        
else:
    if day == "Wednesday":
        print("Your ticket price is $6")
    else:
        print("Your ticket price is $8")
   