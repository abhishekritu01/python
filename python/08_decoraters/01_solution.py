

import time

def timer(func):
    def wrapper( *args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f'{func.__name__} took {end - start} seconds')
        
        return result
    return wrapper

@timer
def add(a, b):
    return a + b
print(add(1, 2))
        

        
        