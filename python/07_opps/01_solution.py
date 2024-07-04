# 01. Create a class Car with brand and model as attributes.

# self is a reference to the current instance of the class. It is used to access variables that belong to the class.
class Car:
    def __init__(self,brand,model):
        self.brand = brand
        self.model = model
        
    
    def full_name(self):
        return f"{self.brand} {self.model}"           # f-string is used to format the string.
    
        
mycar = Car("Toyota","Corolla")
print(mycar.brand)
print(mycar.model) 
print(mycar.full_name())       


my_new_car = Car("Honda","Civic")
print(my_new_car.brand)
print(my_new_car.model)



