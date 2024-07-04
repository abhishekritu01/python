#--------------------Class Definition--------------------
class Car:
    total_cars = 0  # Class variable shared among all instances
    
    def __init__(self, brand, model):
        self.__brand = brand  # Private variable
        self.__model = model
        Car.total_cars += 1  # Increment class variable on each instance creation
    
    #--------------------Encapsulation--------------------
    # Getter method to access the private variable __brand
    def get_brand(self):
        return self.__brand
    
    # Method to return the full name of the car
    def full_name(self):
        return f"{self.__brand} {self.__model}"  # f-string to format the string
    
    # Method to return the fuel type
    def fuel_type(self):
        return "Petrol or Diesel"    
    
    #--------------------Static Method--------------------
    @staticmethod
    def general_description():
        return "This is a general car."
    
    #--------------------Property--------------------
    @property
    def model(self):
        return self.__model

#--------------------Inheritance--------------------
class ElectricCar(Car): 
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model)  # Call the __init__() method of the parent class
        self.range = battery_size  # New attribute for ElectricCar
        
    def fuel_type(self):
        return "Electricity Charging"

# Instance creation and method testing
my_tesla_car = ElectricCar("Tesla", "Model S", "100 kWh")
print(my_tesla_car.model)  # Using property to get the model
print(my_tesla_car.full_name())  # Tesla Model S
print(my_tesla_car.get_brand())  # Tesla
print(my_tesla_car.fuel_type())  # Electricity Charging

new_car2 = Car("Honda", "Civic")
print(new_car2.full_name())  # Honda Civic
print(new_car2.fuel_type())  # Petrol or Diesel
print(Car.total_cars)  # Accessing the class variable total_cars

print(new_car2.model)  # Accessing the model through the property
print(Car.general_description())  # Accessing the static method

#--------------------Instance Check--------------------
print(isinstance(new_car2, Car))  # True
print(isinstance(my_tesla_car, ElectricCar))  # True

#--------------------Multiple Inheritance--------------------
class Battery:
    def battery_info(self):
        return "This is battery info."

class Engine:
    def engine_info(self):
        return "This is engine info."

class ElectricCar2(Car, Battery, Engine):  # Multiple inheritance
    pass

my_new_tesla_car = ElectricCar2("Tesla", "Model S")
print(my_new_tesla_car.battery_info())  # This is battery info.
print(my_new_tesla_car.engine_info())  # This is engine info.
