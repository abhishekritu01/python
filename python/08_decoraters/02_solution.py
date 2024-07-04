




def debug(func):
    
    def wrapper(*args, **kwargs):
        args_values = ', '.join(str(arg) for arg in args)
        kwargs_values = ', '.join(f'{key}={value}' for key, value in kwargs.items())    
        
        print(f'{func.__name__}({args_values}, {kwargs_values})')       
        return func(*args,**kwargs)
    return wrapper  
        
@debug           
def greet(name,age,greeting):
    print(f'{greeting} {name}, you are {age} years old')    
    
greet('John', 25, 'Hello')


@debug
def hello():
    print('Hello, World!')  