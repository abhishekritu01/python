# mongodb+srv://abhishekritu810219:<password>@cluster0.dfb1opk.mongodb.net/


from ast import Name
from audioop import add
from math import e
import time
from tkinter import N
from turtle import update
from pymongo import MongoClient
from bson import ObjectId

# Connection URL
CONNECTION_URL = "mongodb+srv://abhishekritu810219:root@cluster0.dfb1opk.mongodb.net/"

# Establish a connection with MongoClient
client = MongoClient(CONNECTION_URL,tlsAllowInvalidCertificates=True)

# Create a database
db = client['python-mongo-ytm']

# Create a collection
video_collection = db['videos']

print(video_collection)

# Create a document

# functions to perform CRUD operations

def add_video(name, time):
   video_collection.insert_one({
       "name": name,
       "time": time,
   })
   
def list_videos():
    videos = video_collection.find()
    for video in videos:
        print(f"ID: {video['_id']}, Name: {video['name']}, Time: {video['time']}")


def update_video(video_id,new_name, new_time):
    video_collection.update_one({
        "_id": ObjectId(video_id)
    },{
        "$set": {
            "name": new_name,
            "time": new_time
        }
    })

def delete_video(vedio_id):
    video_collection.delete_one({
        "_id": ObjectId(vedio_id)
    })
    

def main():
    
    while True:
        print("\n ****************************** YOUTUBE MANAGEMENT SYSTEM******************************")  
        print("1. To get all videos")
        print("2. To Add a video")
        print("3. To Update a video")
        print("4. To Delete a video")
        print("5. To Exit")
        
        print("\n ****************************** YOUTUBE MANAGEMENT SYSTEM******************************")
        
        choice = int(input("Enter your choice: "))
        
        if choice == 1:
           list_videos()   
           
        elif choice == 2:
            name = input("Enter the name of the video: ")
            time = input("Enter the time of the video: ") 
            add_video(name, time)
            
        elif choice == 3:
            video_id = input("Enter the ID of the video to be updated: ")
            name = input("Enter the updated name of the video: ")
            time = input("Enter the updated time of the video: ")
            update_video(video_id,name, time) 
            
        elif choice == 4:
            vedio_id = input("Enter the name of the video id to be deleted: ")
            delete_video(vedio_id)
            
        elif choice == 5:
            break
        else:
            print("Invalid choice")
            continue
        
        
if __name__ == "__main__":
    main()
