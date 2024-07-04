# import json

# def load_data():
#     try:
#         with open("videos.txt", "r") as file:
#             return json.load(file)
#     except FileNotFoundError:
#         return []

# def save_data_helper(videos):
#     with open("videos.txt", "w") as file:
#         json.dump(videos, file)

# def list_all_videos(videos):
#     print("\n" + "*" * 50)
#     print("List of All Videos:")
#     print("*" * 50)
#     if not videos:
#         print("No videos found.")
#     else:
#         for index, video in enumerate(videos, start=1):
#             print(f"{index}. {video['title']} - {video['duration']} - {video['tags']}")
#     print("*" * 50 + "\n")

# def add_video(videos):
#     print("\n" + "*" * 50)
#     print("Add a New Video:")
#     print("*" * 50)
#     title = input("Enter the title of the video: ")
#     duration = input("Enter the duration of the video: ")
#     tags = input("Enter the tags for the video: ")
    
#     videos.append({
#         "title": title,
#         "duration": duration,
#         "tags": tags
#     })
    
#     save_data_helper(videos)
#     print("Video added successfully.")
#     print("*" * 50 + "\n")

# def update_video(videos):
#     print("\n" + "*" * 50)
#     print("Update a Video:")
#     print("*" * 50)
#     list_all_videos(videos)
#     try:
#         index = int(input("Enter the index of the video to update: "))
#         if 1 <= index <= len(videos):
#             title = input("Enter the new title of the video: ")
#             duration = input("Enter the new duration of the video: ")
#             tags = input("Enter the new tags for the video: ")
            
#             videos[index - 1] = {
#                 "title": title,
#                 "duration": duration,
#                 "tags": tags
#             }
#             save_data_helper(videos)
#             print("Video updated successfully.")
#         else:
#             print("Invalid index.")
#     except ValueError:
#         print("Invalid input. Please enter a valid number.")
#     print("*" * 50 + "\n")

# def delete_video(videos):
#     print("\n" + "*" * 50)
#     print("Delete a Video:")
#     print("*" * 50)
#     list_all_videos(videos)
#     try:
#         index = int(input("Enter the index of the video to delete: "))
#         if 1 <= index <= len(videos):
#             del videos[index - 1]
#             save_data_helper(videos)
#             print("Video deleted successfully.")
#         else:
#             print("Invalid index.")
#     except ValueError:
#         print("Invalid input. Please enter a valid number.")
#     print("*" * 50 + "\n")

# def main():
#     print("Welcome to YouTube File Manager")            
#     videos = load_data()
#     while True:
#         print("*" * 50)
#         print("1. List all videos")                       
#         print("2. Add a video")
#         print("3. Update a video")
#         print("4. Delete a video")
#         print("5. Exit")
#         print("*" * 50)
#         choice = input("Enter your choice (1-5): ")
#         print()
        
#         if choice == "1":
#             list_all_videos(videos)
#         elif choice == "2":
#             add_video(videos)
#         elif choice == "3":
#             update_video(videos)
#         elif choice == "4":
#             delete_video(videos)
#         elif choice == "5":
#             break
#         else:
#             print("Invalid choice. Please enter a number from 1 to 5.")
    
#     print("Thank you for using YouTube File Manager.")

# if __name__ == "__main__":
#     main()











import json
import os

# Define the folder and file path
FOLDER = "data"
FILE_PATH = os.path.join(FOLDER, "videos.txt")

def load_data():
    if not os.path.exists(FOLDER):
        os.makedirs(FOLDER)
    try:
        with open(FILE_PATH, "r") as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def save_data_helper(videos):
    if not os.path.exists(FOLDER):
        os.makedirs(FOLDER)
    with open(FILE_PATH, "w") as file:
        json.dump(videos, file, indent=4)

def list_all_videos(videos):
    print("\n" + "=" * 50)
    print(" List of All Videos ".center(50, "="))
    print("=" * 50)
    if not videos:
        print("No videos found.")
    else:
        for index, video in enumerate(videos, start=1):
            print(f"{index}. {video['title']} - {video['duration']} - {video['tags']}")
    print("=" * 50 + "\n")

def add_video(videos):
    print("\n" + "=" * 50)
    print(" Add a New Video ".center(50, "="))
    print("=" * 50)
    title = input("Enter the title of the video: ")
    duration = input("Enter the duration of the video: ")
    tags = input("Enter the tags for the video: ")
    
    videos.append({
        "title": title,
        "duration": duration,
        "tags": tags
    })
    
    save_data_helper(videos)
    print("Video added successfully.")
    print("=" * 50 + "\n")

def update_video(videos):
    print("\n" + "=" * 50)
    print(" Update a Video ".center(50, "="))
    print("=" * 50)
    list_all_videos(videos)
    try:
        index = int(input("Enter the index of the video to update: "))
        if 1 <= index <= len(videos):
            title = input("Enter the new title of the video: ")
            duration = input("Enter the new duration of the video: ")
            tags = input("Enter the new tags for the video: ")
            
            videos[index - 1] = {
                "title": title,
                "duration": duration,
                "tags": tags
            }
            save_data_helper(videos)
            print("Video updated successfully.")
        else:
            print("Invalid index.")
    except ValueError:
        print("Invalid input. Please enter a valid number.")
    print("=" * 50 + "\n")

def delete_video(videos):
    print("\n" + "=" * 50)
    print(" Delete a Video ".center(50, "="))
    print("=" * 50)
    list_all_videos(videos)
    try:
        index = int(input("Enter the index of the video to delete: "))
        if 1 <= index <= len(videos):
            del videos[index - 1]
            save_data_helper(videos)
            print("Video deleted successfully.")
        else:
            print("Invalid index.")
    except ValueError:
        print("Invalid input. Please enter a valid number.")
    print("=" * 50 + "\n")

def main():
    print("Welcome to YouTube File Manager".center(50, "*"))
    videos = load_data()
    while True:
        print("\n" + "*" * 50)
        print(" Main Menu ".center(50, "*"))
        print("*" * 50)
        print("1. List all videos")                       
        print("2. Add a video")
        print("3. Update a video")
        print("4. Delete a video")
        print("5. Exit")
        print("*" * 50)
        choice = input("Enter your choice (1-5): ")
        print()
        
        if choice == "1":
            list_all_videos(videos)
        elif choice == "2":
            add_video(videos)
        elif choice == "3":
            update_video(videos)
        elif choice == "4":
            delete_video(videos)
        elif choice == "5":
            break
        else:
            print("Invalid choice. Please enter a number from 1 to 5.")
    
    print("Thank you for using YouTube File Manager.".center(50, "*"))

if __name__ == "__main__":
    main()
