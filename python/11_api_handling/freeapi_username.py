
import requests

def fectch_random_user_freeapi():
    
    url = "https://api.freeapi.app/api/v1/public/randomusers/user/random"
    response = requests.get(url)
    data = response.json()
    # return data
    
    if data["success"] and "data" in data :
        user_data = data["data"]
        
        userame = user_data["login"]["username"]
        country = user_data["location"]["country"]
        
        return userame, country    
        
    else:
        raise Exception("Failed to fetch data from API")
    
    
    
    
    
def main():
    try:
        username, country = fectch_random_user_freeapi()
        print(f"Username: {username}")
        print(f"Country: {country}")
    except Exception as e:
        print(str(e))


if __name__ == "__main__":
    main()